import Map from 'ol/Map';
import View from 'ol/View';

import 'ol/ol.css';
import './olControls.css';
import { Collection } from 'ol';
import { DragPan, MouseWheelZoom } from 'ol/interaction';
import { platformModifierKeyOnly } from 'ol/events/condition';
import LoadingIndicatorControl from './loadingIndicatorControl';

class VueMap {
  constructor(id, options) {
    this.map = new Map({
      controls: new Collection([]),
      view: new View({
        zoom: 0,
        center: [0, 0],
        padding: [20, 20, 20, 20],
        maxZoom: 15,
        extent: options.constrainExtent,
        constrainOnlyCenter: true,
        enableRotation: false,
      }),
    });
    this.map.addControl(new LoadingIndicatorControl({ map: this.map }));
    this.map.set('id', id);
  }
}
const mapRegistry = {};

/**
 * Returns the ol map with the given id.
 * Will instantiate a new map if not already existing.
 * @param {string} id id of map
 * @param {Object} options options
 * @param {Array} options.constrainExtent optional constraining extent
 * @returns {Map} ol map
 */
export default function getMapInstance(id, options = {}) {
  const map = mapRegistry[id];
  if (!map) {
    mapRegistry[id] = new VueMap(id, options);
  }

  // Check if in one of the calls the zoom is explicitly disabled in the options and store
  // the value in the mapRegistry
  if (options.disableZoom) {
    mapRegistry[id].disableZoom = true;
  }

  // Remove the previous zoom interaction
  let oldZoom;
  mapRegistry[id].map.getInteractions().forEach((interaction) => {
    if (interaction instanceof MouseWheelZoom) {
      oldZoom = interaction;
    }
  });
  if (oldZoom) {
    mapRegistry[id].map.removeInteraction(oldZoom);
  }

  // Modify zoom behaviour based on stored value
  if (mapRegistry[id].disableZoom) {
    // If zoom is disabled, only allow conditional zooming (ctrl/cmd key)
    const zoom = new MouseWheelZoom({
      condition: platformModifierKeyOnly,
    });
    const dragPan = new DragPan({
      condition: (event) => this.getPointerCount() === 2 || platformModifierKeyOnly(event),
    });
    mapRegistry[id].map.addInteraction(zoom);
    mapRegistry[id].map.addInteraction(dragPan);
  } else {
    // Else, allow normal zooming behaviour
    const zoom = new MouseWheelZoom();
    const dragPan = new DragPan();
    mapRegistry[id].map.addInteraction(zoom);
    mapRegistry[id].map.addInteraction(dragPan);
  }
  return mapRegistry[id];
}
