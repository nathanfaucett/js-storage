var storage = module.exports,

    hasOwnProp = Object.prototype.hasOwnProperty,

    supportsStorage = (function() {
        try {
            return "localStorage" in global && global.localStorage !== null;
        } catch (e) {
            return false;
        }
    }()),

    localStorage, get, set, remove, clear;


if (supportsStorage) {
    localStorage = global.localStorage;

    get = function get(key) {
        return localStorage.getItem(key);
    };

    set = function set(key, value) {
        localStorage.setItem(key, value);
    };

    remove = function remove(key) {
        return localStorage.removeItem(key);
    };

    clear = function clear() {
        return localStorage.clear();
    };
} else {
    localStorage = {};

    get = function get(key) {
        return localStorage[key];
    };

    set = function set(key, value) {
        localStorage[key] = value;
    };

    remove = function remove(key) {
        return delete localStorage[key];
    };

    clear = function clear() {
        var key;

        for (key in localStorage) {
            if (hasOwnProp.call(localStorage, key)) {
                delete localStorage[key];
            }
        }
    };
}


storage.get = function(key) {
    return get(key);
};

storage.set = function(key, value) {
    set(key, value);
};

storage.remove = function(key) {
    return remove(key);
};

storage.clear = function() {
    return clear();
};
