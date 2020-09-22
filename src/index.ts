import WebMap from '@arcgis/core/WebMap';
import MapView from '@arcgis/core/views/MapView';

const webmap = new WebMap({
    portalItem: { id: "e691172598f04ea8881cd2a4adaa45ba" }
});

const view = new MapView({
    map: webmap,
    container: 'viewDiv'
});