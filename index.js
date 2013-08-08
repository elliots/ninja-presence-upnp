var Presence = require('ninja-presence-base');
var UpnpControlPoint = require("upnp-controlpoint").UpnpControlPoint;

module.exports = Presence;

Presence.prototype.G = 'presenceupnp';
Presence.prototype.name = 'Presence - UPNP';
Presence.prototype.V = 0;
Presence.prototype.D = 266;

Presence.prototype.init = function() {
    this._cp = new UpnpControlPoint();
    this._cp.on("device", function(device) {
        this.see({
            name: device.friendlyName,
            id: device.uuid
        });
    }.bind(this));
};

Presence.prototype.scan = function() {
    this._cp.search();
    this.scanComplete();
};
