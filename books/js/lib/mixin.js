Object.prototype.mixin = function(module) {
    for (var method in module.prototype) {
        if (module.prototype.hasOwnProperty(method)) {
            this.prototype[method] = module.prototype[method];
        }
    }
};