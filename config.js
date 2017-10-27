var allScenarios = [].concat(
    require('./tests/sample1').scenarios,
    require('./tests/sample2').scenarios
);

var viewPorts = [
  {"name": "laptop", "width": 1366, "height": 768},
  {"name": "Mobile_L", "width": 640, "height": 360},
  {"name": "Mobile_P", "width": 360, "height": 640},
  {"name": "iPad_P", "width": 768, "height": 1024},
  {"name": "iPad_L", "width": 1024, "height": 768}
];

//Devices width and height from: https://mydevice.io/devices/#sortOthers
// Stats from: https://www.w3counter.com/globalstats.php
module.exports = {
    "id": "vt",
    "viewports": viewPorts,
    "paths": {
        "bitmaps_reference": "./reference_images",
        "bitmaps_test": "./bitmaps_test",
        "compare_data": "./bitmaps_test/compare.json",
        "engine_scripts": "./tests",
        "ci_report": "./backstop_data/ci_report"
    },
    "fileNameTemplate": "{configId}_{scenarioLabel}_{viewportLabel}",
    "onBeforeScript": "onBefore.js",
    "onReadyScript": "onReady.js",
    "scenarios": allScenarios,
    "ci": {
        "format": "junit",
        "testSuiteName": "automated-visual-testing"
    },
    "engine": "chrome",
    "chromePath": "<<Replace this with chrome browser executable or headless_shell>>",
    "gotoTimeout": 360000,
    "waitTimeout": 90000,
    "report": ["CLI", "browser", "CI"],
    "openReport": false,
    "debug": false,
    "verbose": true,
    "port": 3001,
    "asyncCaptureLimit": 5,
    "asyncCompareLimit": 20
};
