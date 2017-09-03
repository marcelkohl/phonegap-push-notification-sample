cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "phonegap-plugin-push.PushNotification",
        "file": "plugins/phonegap-plugin-push/www/push.js",
        "pluginId": "phonegap-plugin-push",
        "clobbers": [
            "PushNotification"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "phonegap-plugin-push": "2.0.0",
    "cordova-plugin-whitelist": "1.3.2"
};
// BOTTOM OF METADATA
});