export default {
    keys: [
        "goal",
        "time-spent",
    ],
    margin: {
        "top": 50,
        "right": 130,
        "bottom": 50,
        "left": 80
    },
    axisBottom: {
        "tickSize": 0,
        "tickPadding": 5,
        "tickRotation": 0,
        "legend": "brand",
        "legendPosition": "middle",
        "legendOffset": 32
    },
    axisLeft: {
        "tickSize": 0,
        "tickValues": 5,
        "tickPadding": 5,
        "tickRotation": 0,
        "legend": "time spent",
        "legendPosition": "middle",
        "legendOffset": -40
    },
    legends: [
        {
            "dataFrom": "keys",
            "anchor": "bottom-right",
            "direction": "column",
            "justify": false,
            "translateX": 120,
            "translateY": 0,
            "itemsSpacing": 2,
            "itemWidth": 100,
            "itemHeight": 20,
            "itemDirection": "left-to-right",
            "itemOpacity": 0.85,
            "symbolSize": 20,
            "effects": [
                {
                    "on": "hover",
                    "style": {
                        "itemOpacity": 1
                    }
                }
            ]
        }
    ]
}