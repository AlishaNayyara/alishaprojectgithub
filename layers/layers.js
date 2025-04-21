var wms_layers = [];


        var lyr_EsriImagery_0 = new ol.layer.Tile({
            'title': 'Esri Imagery',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_BatasKelurahan_1 = new ol.format.GeoJSON();
var features_BatasKelurahan_1 = format_BatasKelurahan_1.readFeatures(json_BatasKelurahan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKelurahan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKelurahan_1.addFeatures(features_BatasKelurahan_1);
var lyr_BatasKelurahan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKelurahan_1, 
                style: style_BatasKelurahan_1,
                popuplayertitle: 'Batas Kelurahan',
                interactive: true,
    title: 'Batas Kelurahan<br />\
    <img src="styles/legend/BatasKelurahan_1_0.png" /> Alamjaya<br />\
    <img src="styles/legend/BatasKelurahan_1_1.png" /> Batuceper<br />\
    <img src="styles/legend/BatasKelurahan_1_2.png" /> Batujaya<br />\
    <img src="styles/legend/BatasKelurahan_1_3.png" /> Batusari<br />\
    <img src="styles/legend/BatasKelurahan_1_4.png" /> Bencongan<br />\
    <img src="styles/legend/BatasKelurahan_1_5.png" /> Benda<br />\
    <img src="styles/legend/BatasKelurahan_1_6.png" /> Blendung<br />\
    <img src="styles/legend/BatasKelurahan_1_7.png" /> Bojongjaya<br />\
    <img src="styles/legend/BatasKelurahan_1_8.png" /> Bugel<br />\
    <img src="styles/legend/BatasKelurahan_1_9.png" /> Cibodas<br />\
    <img src="styles/legend/BatasKelurahan_1_10.png" /> Cibodasbaru<br />\
    <img src="styles/legend/BatasKelurahan_1_11.png" /> Cibodassari<br />\
    <img src="styles/legend/BatasKelurahan_1_12.png" /> Cikokol<br />\
    <img src="styles/legend/BatasKelurahan_1_13.png" /> Cimone<br />\
    <img src="styles/legend/BatasKelurahan_1_14.png" /> Cimonejaya<br />\
    <img src="styles/legend/BatasKelurahan_1_15.png" /> Cipadu<br />\
    <img src="styles/legend/BatasKelurahan_1_16.png" /> Cipadujaya<br />\
    <img src="styles/legend/BatasKelurahan_1_17.png" /> Cipete<br />\
    <img src="styles/legend/BatasKelurahan_1_18.png" /> Cipondoh<br />\
    <img src="styles/legend/BatasKelurahan_1_19.png" /> Gaga<br />\
    <img src="styles/legend/BatasKelurahan_1_20.png" /> Gandasari<br />\
    <img src="styles/legend/BatasKelurahan_1_21.png" /> Gebangraya<br />\
    <img src="styles/legend/BatasKelurahan_1_22.png" /> Gembor<br />\
    <img src="styles/legend/BatasKelurahan_1_23.png" /> Gerendeng<br />\
    <img src="styles/legend/BatasKelurahan_1_24.png" /> Gondrong<br />\
    <img src="styles/legend/BatasKelurahan_1_25.png" /> Jatake<br />\
    <img src="styles/legend/BatasKelurahan_1_26.png" /> Jatiuwung<br />\
    <img src="styles/legend/BatasKelurahan_1_27.png" /> Jurumudi<br />\
    <img src="styles/legend/BatasKelurahan_1_28.png" /> Jurumudibaru<br />\
    <img src="styles/legend/BatasKelurahan_1_29.png" /> Kaongjaya<br />\
    <img src="styles/legend/BatasKelurahan_1_30.png" /> Karang Tengah<br />\
    <img src="styles/legend/BatasKelurahan_1_31.png" /> Karang Timur<br />\
    <img src="styles/legend/BatasKelurahan_1_32.png" /> Karanganyar<br />\
    <img src="styles/legend/BatasKelurahan_1_33.png" /> Karangmulya<br />\
    <img src="styles/legend/BatasKelurahan_1_34.png" /> Karangsari<br />\
    <img src="styles/legend/BatasKelurahan_1_35.png" /> Karawaci<br />\
    <img src="styles/legend/BatasKelurahan_1_36.png" /> Karawacibaru<br />\
    <img src="styles/legend/BatasKelurahan_1_37.png" /> Kebon Besar<br />\
    <img src="styles/legend/BatasKelurahan_1_38.png" /> Kedaung Wetan<br />\
    <img src="styles/legend/BatasKelurahan_1_39.png" /> Kedaungbaru<br />\
    <img src="styles/legend/BatasKelurahan_1_40.png" /> Keroncong<br />\
    <img src="styles/legend/BatasKelurahan_1_41.png" /> Kreo<br />\
    <img src="styles/legend/BatasKelurahan_1_42.png" /> Kreo Selatan<br />\
    <img src="styles/legend/BatasKelurahan_1_43.png" /> Kunciran<br />\
    <img src="styles/legend/BatasKelurahan_1_44.png" /> Larangan Selatan<br />\
    <img src="styles/legend/BatasKelurahan_1_45.png" /> Larangan Utara<br />\
    <img src="styles/legend/BatasKelurahan_1_46.png" /> Laranganindah<br />\
    <img src="styles/legend/BatasKelurahan_1_47.png" /> Manisjaya<br />\
    <img src="styles/legend/BatasKelurahan_1_48.png" /> Margasari<br />\
    <img src="styles/legend/BatasKelurahan_1_49.png" /> Mekarsari<br />\
    <img src="styles/legend/BatasKelurahan_1_50.png" /> Nambojaya<br />\
    <img src="styles/legend/BatasKelurahan_1_51.png" /> Neglasari<br />\
    <img src="styles/legend/BatasKelurahan_1_52.png" /> Nusajaya<br />\
    <img src="styles/legend/BatasKelurahan_1_53.png" /> Pabuaran<br />\
    <img src="styles/legend/BatasKelurahan_1_54.png" /> Pabuarantumpeng<br />\
    <img src="styles/legend/BatasKelurahan_1_55.png" /> Padurenan<br />\
    <img src="styles/legend/BatasKelurahan_1_56.png" /> Pajang<br />\
    <img src="styles/legend/BatasKelurahan_1_57.png" /> Paninggilan<br />\
    <img src="styles/legend/BatasKelurahan_1_58.png" /> Paninggilan Utara<br />\
    <img src="styles/legend/BatasKelurahan_1_59.png" /> Panunggangan<br />\
    <img src="styles/legend/BatasKelurahan_1_60.png" /> Panunggangan Barat<br />\
    <img src="styles/legend/BatasKelurahan_1_61.png" /> Parungjaya<br />\
    <img src="styles/legend/BatasKelurahan_1_62.png" /> Parungserab<br />\
    <img src="styles/legend/BatasKelurahan_1_63.png" /> Pasarbaru<br />\
    <img src="styles/legend/BatasKelurahan_1_64.png" /> Pasirjaya<br />\
    <img src="styles/legend/BatasKelurahan_1_65.png" /> Periuk<br />\
    <img src="styles/legend/BatasKelurahan_1_66.png" /> Periukjaya<br />\
    <img src="styles/legend/BatasKelurahan_1_67.png" /> Petir<br />\
    <img src="styles/legend/BatasKelurahan_1_68.png" /> Pinang<br />\
    <img src="styles/legend/BatasKelurahan_1_69.png" /> Pondokbahar<br />\
    <img src="styles/legend/BatasKelurahan_1_70.png" /> Porisgaga<br />\
    <img src="styles/legend/BatasKelurahan_1_71.png" /> Porisgagabaru<br />\
    <img src="styles/legend/BatasKelurahan_1_72.png" /> Porisjaya<br />\
    <img src="styles/legend/BatasKelurahan_1_73.png" /> Porisplawad<br />\
    <img src="styles/legend/BatasKelurahan_1_74.png" /> Sangiangjaya<br />\
    <img src="styles/legend/BatasKelurahan_1_75.png" /> Selapajangjaya<br />\
    <img src="styles/legend/BatasKelurahan_1_76.png" /> Sudimara Barat<br />\
    <img src="styles/legend/BatasKelurahan_1_77.png" /> Sudimara Selatan<br />\
    <img src="styles/legend/BatasKelurahan_1_78.png" /> Sudimara Timur<br />\
    <img src="styles/legend/BatasKelurahan_1_79.png" /> Sudimarajaya<br />\
    <img src="styles/legend/BatasKelurahan_1_80.png" /> Sukajadi<br />\
    <img src="styles/legend/BatasKelurahan_1_81.png" /> Sukarasa<br />\
    <img src="styles/legend/BatasKelurahan_1_82.png" /> Sukasari<br />\
    <img src="styles/legend/BatasKelurahan_1_83.png" /> Sumurpancing<br />\
    <img src="styles/legend/BatasKelurahan_1_84.png" /> Tajur<br />\
    <img src="styles/legend/BatasKelurahan_1_85.png" /> Tanahtinggi<br />\
    <img src="styles/legend/BatasKelurahan_1_86.png" /> Uwungjaya<br />\
    <img src="styles/legend/BatasKelurahan_1_87.png" /> <br />' });
var format_BatasKecamatan_2 = new ol.format.GeoJSON();
var features_BatasKecamatan_2 = format_BatasKecamatan_2.readFeatures(json_BatasKecamatan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKecamatan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatan_2.addFeatures(features_BatasKecamatan_2);
var lyr_BatasKecamatan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKecamatan_2, 
                style: style_BatasKecamatan_2,
                popuplayertitle: 'Batas Kecamatan',
                interactive: false,
                title: '<img src="styles/legend/BatasKecamatan_2.png" /> Batas Kecamatan'
            });
var format_Jalan_3 = new ol.format.GeoJSON();
var features_Jalan_3 = format_Jalan_3.readFeatures(json_Jalan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_3.addFeatures(features_Jalan_3);
var lyr_Jalan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_3, 
                style: style_Jalan_3,
                popuplayertitle: 'Jalan',
                interactive: true,
    title: 'Jalan<br />\
    <img src="styles/legend/Jalan_3_0.png" /> Jalan Arteri<br />\
    <img src="styles/legend/Jalan_3_1.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/Jalan_3_2.png" /> Jalan Tol Dua Jalur Dengan Pemisah Fisik<br />\
    <img src="styles/legend/Jalan_3_3.png" /> <br />' });
var format_Rumah_Sakit_4 = new ol.format.GeoJSON();
var features_Rumah_Sakit_4 = format_Rumah_Sakit_4.readFeatures(json_Rumah_Sakit_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumah_Sakit_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumah_Sakit_4.addFeatures(features_Rumah_Sakit_4);
var lyr_Rumah_Sakit_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumah_Sakit_4, 
                style: style_Rumah_Sakit_4,
                popuplayertitle: 'Rumah_Sakit',
                interactive: true,
                title: '<img src="styles/legend/Rumah_Sakit_4.png" /> Rumah_Sakit'
            });
var format_Puskesmas_5 = new ol.format.GeoJSON();
var features_Puskesmas_5 = format_Puskesmas_5.readFeatures(json_Puskesmas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puskesmas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puskesmas_5.addFeatures(features_Puskesmas_5);
var lyr_Puskesmas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puskesmas_5, 
                style: style_Puskesmas_5,
                popuplayertitle: 'Puskesmas',
                interactive: true,
                title: '<img src="styles/legend/Puskesmas_5.png" /> Puskesmas'
            });

lyr_EsriImagery_0.setVisible(true);lyr_BatasKelurahan_1.setVisible(true);lyr_BatasKecamatan_2.setVisible(true);lyr_Jalan_3.setVisible(true);lyr_Rumah_Sakit_4.setVisible(true);lyr_Puskesmas_5.setVisible(true);
var layersList = [lyr_EsriImagery_0,lyr_BatasKelurahan_1,lyr_BatasKecamatan_2,lyr_Jalan_3,lyr_Rumah_Sakit_4,lyr_Puskesmas_5];
lyr_BatasKelurahan_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_BatasKecamatan_2.set('fieldAliases', {'WADMKC': 'WADMKC', });
lyr_Jalan_3.set('fieldAliases', {'REMARK': 'REMARK', });
lyr_Rumah_Sakit_4.set('fieldAliases', {'namobj': 'namobj', 'rsalamat': 'rsalamat', 'jplyrs': 'jplyrs', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'TIPRST': 'TIPRST', });
lyr_Puskesmas_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'METADATA': 'METADATA', 'JPLPKM': 'JPLPKM', 'KMPPKM': 'KMPPKM', 'PKMKAT': 'PKMKAT', 'PKMKODE': 'PKMKODE', 'PKMLMT': 'PKMLMT', 'KWKPKM': 'KWKPKM', });
lyr_BatasKelurahan_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_BatasKecamatan_2.set('fieldImages', {'WADMKC': 'TextEdit', });
lyr_Jalan_3.set('fieldImages', {'REMARK': 'TextEdit', });
lyr_Rumah_Sakit_4.set('fieldImages', {'namobj': 'TextEdit', 'rsalamat': 'TextEdit', 'jplyrs': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'TIPRST': 'TextEdit', });
lyr_Puskesmas_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'METADATA': 'TextEdit', 'JPLPKM': 'TextEdit', 'KMPPKM': 'TextEdit', 'PKMKAT': 'TextEdit', 'PKMKODE': 'TextEdit', 'PKMLMT': 'TextEdit', 'KWKPKM': 'TextEdit', });
lyr_BatasKelurahan_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_BatasKecamatan_2.set('fieldLabels', {'WADMKC': 'no label', });
lyr_Jalan_3.set('fieldLabels', {'REMARK': 'no label', });
lyr_Rumah_Sakit_4.set('fieldLabels', {'namobj': 'inline label - visible with data', 'rsalamat': 'no label', 'jplyrs': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'TIPRST': 'no label', });
lyr_Puskesmas_5.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'METADATA': 'no label', 'JPLPKM': 'no label', 'KMPPKM': 'no label', 'PKMKAT': 'no label', 'PKMKODE': 'no label', 'PKMLMT': 'no label', 'KWKPKM': 'no label', });
lyr_Puskesmas_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});