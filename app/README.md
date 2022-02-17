# eodash vue app

## Resources
### Vuetify Component Framework
https://vuetifyjs.com/en/getting-started/quick-start/

Component and UI framework based on vue.js and Material Design.

### Material Design Icons
https://materialdesignicons.com/

Collection of icons in material design. Since we're using the icons provided by the `@mdi/js` package, we first need to import the SVG data into our JavaScript, like this:

```javascript
import mdiClose from '@mdi/js';
```

Unfortunately, it's not possible to directly reference the imported icons, so it is recommended to put them into an `icons` object in the component data, like this:

```javascript
{
    ...

    icons: {
        close: mdiClose,
        arrowRight: mdiArrowRight,
    },

    ...
}
```

Finally, the icons (SVG paths) in the object can be used in the `v-icon` component:

```html
<v-icon>{{ icons.close }}</v-icon>
```
### Openlayers Map Wrapper
https://vuelayers.github.io/

Used to build interactive map. Needs some hacking here and there, but nonetheless pretty useful.

## Project setup
```
npm install
# optional - not needed for trilateral dashboard, necessary for race due to some data being not public
git submodule update --init
```

In order for most "EO Data" links to work you need to use a proper SH instance
ID (`SH_INSTANCE_ID`) in `public/shConfig.js`. Obtain a valid one from
https://eurodatacube.com

To ignore the changes to this file run:
```
git update-index --assume-unchanged public/shConfig.js
```

To revert the ignoring run:

```
git update-index --no-assume-unchanged public/shConfig.js
```

### Compiles and hot-reloads for development
```
npm start
```

The dashboard using the included data should now be accessible at
http://localhost:8080/. Other configurations as defined in `src/appConfig.js`
need additional data which is not included in this repository.

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Bump app version
```
npm version patch // last digit
npm version minor // middle digit
npm version major // first digit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
