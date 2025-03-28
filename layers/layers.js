var wms_layers = [];

var lyr_gulf_coast_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'gulf_coast<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/gulf_coast_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-17964251.314587, 7603949.817600, -14962518.543113, 9198299.715400]
        })
    });

lyr_gulf_coast_0.setVisible(true);
var layersList = [lyr_gulf_coast_0];
