<template>
  <div
    v-if="demoItems.length > 0"
    class="fill-height d-flex flex-column pa-3"
    style="height: calc(var(--vh, 1vh) * 100); z-index: 11; pointer-events: all"
  >
    <!-- <v-btn>Reset</v-btn> -->
    <v-btn
      v-show="demoItems.length > 5"
      color="primary"
      :disabled="!canScrollUpwards"
      @click="scroll('up')"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
    <div
      ref="scrollContainer"
      class="scrollContainer py-4 d-flex flex-column flex-grow-1"
      style="overflow: auto"
      @scroll="onScroll"
    >
      <v-card
        v-for="demoItem in demoItems"
        :key="getLocationCode(demoItem.properties.indicatorObject)"
        :color="getLocationCode(demoItem.properties.indicatorObject) === selectedItem
          ? 'primary'
          : 'white'"
        width="200"
        class="item overflow-hidden d-flex flex-column pa-1"
        style="pointer-events: all"
        @click="selectItem(demoItem)"
      >
        <v-img
          height="100"
          class="flex-shrink-1"
          :src="`./data/${appConfig.id}/globalDataLayerImages/${getLocationCode(
            demoItem.properties.indicatorObject
          )}.png`"
        >
        </v-img>
        <v-card-title
          class="flex-grow-1"
          :class="getLocationCode(demoItem.properties.indicatorObject) === selectedItem
            ? 'white--text'
            : 'primary--text'"
          style="font-size: 12px; line-height: 14px; padding: 5px; word-break: break-word;"
        >
          {{ demoItem.title || demoItem.properties.indicatorObject.indicatorName }}
        </v-card-title>
      </v-card>
    </div>
    <v-btn
      v-show="demoItems.length > 5"
      color="primary"
      :disabled="!canScrollDownwards"
      @click="scroll('down')"
    >
      <v-icon>mdi-chevron-down</v-icon>
    </v-btn>
  </div>
</template>

<script>
import {
  mapState,
  mapMutations,
} from 'vuex';
import { calculatePadding } from '@/utils';
import getLocationCode from '../mixins/getLocationCode';
import { getMapInstance } from './map/map';

export default {
  data: () => ({
    selectedItem: null,
    scrollTop: 0,
    canScrollUpwards: false,
    canScrollDownwards: true,
  }),
  computed: {
    ...mapState('config', ['appConfig']),
    ...mapState('features', ['allFeatures']),
    demoItems() {
      return this.allFeatures.length && this.appConfig.demoMode[this.$route.query.event]
        .map((item) => ({
          ...item,
          ...this.allFeatures
            .find((f) => getLocationCode(f.properties.indicatorObject) === item.poi),
        }));
    },
  },
  methods: {
    ...mapMutations('indicators', {
      setSelectedIndicator: 'SET_SELECTED_INDICATOR',
    }),
    selectItem(item) {
      this.setSelectedIndicator(item.properties.indicatorObject);
      this.selectedItem = this.getLocationCode(item.properties.indicatorObject);
      if (item.extent) {
        const { map } = getMapInstance('centerMap');
        const padding = calculatePadding();
        setTimeout(() => {
          map.getView().fit(item.extent, {
            duration: 500,
            padding: [
              padding[0],
              padding[1],
              padding[2],
              300,
            ],
          });
        }, 50);
      }
      if (item.dataLayerTime) {
        setTimeout(() => {
          this.$parent.$parent.$refs.centerPanel.$refs.map.dataLayerTime = {
            value: item.dataLayerTime,
          };
        }, 0);
      }
      if (item.compareLayerTime) {
        setTimeout(() => {
          this.$parent.$parent.$refs.centerPanel.$refs.map.compareLayerTime = {
            value: item.compareLayerTime,
          };
          this.$parent.$parent.$refs.centerPanel.$refs.map.enableCompare = true;
        }, 0);
      }
    },
    scroll(direction) {
      const scrollElement = this.$refs.scrollContainer;
      switch (direction) {
        case 'up':
          scrollElement.scrollTo({ top: scrollElement.scrollTop - 200, behavior: 'smooth' });
          break;
        case 'down':
          scrollElement.scrollTo({ top: scrollElement.scrollTop + 200, behavior: 'smooth' });
          break;
        default:
          //
      }
    },
    onScroll() {
      const el = this.$refs.scrollContainer;
      this.scrollTop = el.scrollTop;
      this.canScrollUpwards = el.scrollTop !== 0;
      this.canScrollDownwards = !(el.scrollTop === el.scrollHeight - el.clientHeight);
    },
  },
  watch: {
    demoItems(items) {
      if (items.length > 0 && !this.selectedItem) {
        this.selectItem(items[0]);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.scrollContainer {
  scrollbar-width: none;  /* Firefox */
  scroll-snap-type: y proximity;

  .item {
    height: calc(20% - 16px);
    flex: 0 0 auto;
    background-color: #ccc;
    margin-bottom: 20px;
    scroll-snap-align: center;

    &:last-child {
      margin-bottom: 0 !important;
    }
  }
}

.scrollContainer::-webkit-scrollbar {
  display: none;  /* Safari and Chrome */
}
</style>
