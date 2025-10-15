/* Embed Vega-Lite specs */
const embedOpt = { actions: false };

vegaEmbed("#map", "./specs/africa_forest_map.vg.json", embedOpt);
vegaEmbed("#behaviour", "./specs/wildlife_behaviour.vg.json", embedOpt);
