module.exports = function (api) {
    api.cache(true);

    const presets = [
        ["@babel/preset-env", {
            "targets": {
                "ie": 11
            },
            "useBuiltIns": "entry"
            // "useBuiltIns": "usage"
        }],
    ];

    return {
        presets,
        "ignore": [
            "node_modules"
        ],
    };
};