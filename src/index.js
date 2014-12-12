var storage = module.exports,

    supportsStorage = (function() {
        try {
            return "localStorage" in global && global.localStorage !== null;
        } catch (e) {
            return false;
        }
    }()),

    localStorage, get, set, remove;


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
