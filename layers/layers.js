var wms_layers = [];


        var lyr_WazeWorld_0 = new ol.layer.Tile({
            'title': 'Waze (World)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://worldtiles3.waze.com/tiles/{z}/{x}/{y}.png'
            })
        });
var format_ligne_1 = new ol.format.GeoJSON();
var features_ligne_1 = format_ligne_1.readFeatures(json_ligne_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ligne_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ligne_1.addFeatures(features_ligne_1);
var lyr_ligne_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ligne_1, 
                style: style_ligne_1,
                popuplayertitle: 'ligne',
                interactive: true,
                title: '<img src="styles/legend/ligne_1.png" /> ligne'
            });
var format_arrets_2 = new ol.format.GeoJSON();
var features_arrets_2 = format_arrets_2.readFeatures(json_arrets_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_arrets_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_arrets_2.addFeatures(features_arrets_2);
var lyr_arrets_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_arrets_2, 
                style: style_arrets_2,
                popuplayertitle: 'arrets',
                interactive: true,
                title: '<img src="styles/legend/arrets_2.png" /> arrets'
            });
var format_ligne_3 = new ol.format.GeoJSON();
var features_ligne_3 = format_ligne_3.readFeatures(json_ligne_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ligne_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ligne_3.addFeatures(features_ligne_3);
var lyr_ligne_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ligne_3, 
                style: style_ligne_3,
                popuplayertitle: 'ligne',
                interactive: true,
                title: '<img src="styles/legend/ligne_3.png" /> ligne'
            });
var format_arrets_4 = new ol.format.GeoJSON();
var features_arrets_4 = format_arrets_4.readFeatures(json_arrets_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_arrets_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_arrets_4.addFeatures(features_arrets_4);
var lyr_arrets_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_arrets_4, 
                style: style_arrets_4,
                popuplayertitle: 'arrets',
                interactive: true,
                title: '<img src="styles/legend/arrets_4.png" /> arrets'
            });
var format_ligne_5 = new ol.format.GeoJSON();
var features_ligne_5 = format_ligne_5.readFeatures(json_ligne_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ligne_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ligne_5.addFeatures(features_ligne_5);
var lyr_ligne_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ligne_5, 
                style: style_ligne_5,
                popuplayertitle: 'ligne',
                interactive: true,
                title: '<img src="styles/legend/ligne_5.png" /> ligne'
            });
var format_arrets_6 = new ol.format.GeoJSON();
var features_arrets_6 = format_arrets_6.readFeatures(json_arrets_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_arrets_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_arrets_6.addFeatures(features_arrets_6);
var lyr_arrets_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_arrets_6, 
                style: style_arrets_6,
                popuplayertitle: 'arrets',
                interactive: true,
                title: '<img src="styles/legend/arrets_6.png" /> arrets'
            });
var format_ligne_7 = new ol.format.GeoJSON();
var features_ligne_7 = format_ligne_7.readFeatures(json_ligne_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ligne_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ligne_7.addFeatures(features_ligne_7);
var lyr_ligne_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ligne_7, 
                style: style_ligne_7,
                popuplayertitle: 'ligne',
                interactive: true,
                title: '<img src="styles/legend/ligne_7.png" /> ligne'
            });
var format_arrets_8 = new ol.format.GeoJSON();
var features_arrets_8 = format_arrets_8.readFeatures(json_arrets_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_arrets_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_arrets_8.addFeatures(features_arrets_8);
var lyr_arrets_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_arrets_8, 
                style: style_arrets_8,
                popuplayertitle: 'arrets',
                interactive: true,
                title: '<img src="styles/legend/arrets_8.png" /> arrets'
            });
var group_CorbiacCollgeChedid = new ol.layer.Group({
                                layers: [lyr_ligne_7,lyr_arrets_8,],
                                fold: 'open',
                                title: 'Corbiac - Collège Chedid'});
var group_Courtadecolecentre = new ol.layer.Group({
                                layers: [lyr_ligne_5,lyr_arrets_6,],
                                fold: 'open',
                                title: 'Courtade - école centre'});
var group_Bcutcolecentre = new ol.layer.Group({
                                layers: [lyr_ligne_3,lyr_arrets_4,],
                                fold: 'open',
                                title: 'Bécut - école centre'});
var group_Tauzincolecentre = new ol.layer.Group({
                                layers: [lyr_ligne_1,lyr_arrets_2,],
                                fold: 'open',
                                title: 'Tauzin - école  centre'});

lyr_WazeWorld_0.setVisible(true);lyr_ligne_1.setVisible(true);lyr_arrets_2.setVisible(true);lyr_ligne_3.setVisible(true);lyr_arrets_4.setVisible(true);lyr_ligne_5.setVisible(true);lyr_arrets_6.setVisible(true);lyr_ligne_7.setVisible(true);lyr_arrets_8.setVisible(true);
var layersList = [lyr_WazeWorld_0,group_Tauzincolecentre,group_Bcutcolecentre,group_Courtadecolecentre,group_CorbiacCollgeChedid];
lyr_ligne_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_arrets_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'arrets': 'arrets', 'Horaire': 'Horaire', });
lyr_ligne_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_arrets_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'arrets': 'arrets', 'Horaire': 'Horaire', });
lyr_ligne_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_arrets_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'arrets': 'arrets', });
lyr_ligne_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_arrets_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'arrets': 'arrets', 'Horaire': 'Horaire', });
lyr_ligne_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_arrets_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'arrets': 'TextEdit', 'Horaire': 'DateTime', });
lyr_ligne_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_arrets_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'arrets': 'TextEdit', 'Horaire': 'TextEdit', });
lyr_ligne_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_arrets_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'arrets': 'TextEdit', });
lyr_ligne_7.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_arrets_8.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'arrets': 'TextEdit', 'Horaire': 'DateTime', });
lyr_ligne_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_arrets_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'arrets': 'no label', 'Horaire': 'no label', });
lyr_ligne_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_arrets_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'arrets': 'no label', 'Horaire': 'no label', });
lyr_ligne_5.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_arrets_6.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'arrets': 'no label', });
lyr_ligne_7.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_arrets_8.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'arrets': 'inline label - visible with data', 'Horaire': 'inline label - visible with data', });
lyr_arrets_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});