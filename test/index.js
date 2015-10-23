var tape = require("tape"),
    storage = require("..");


tape("storage#get(key) should return value of key", function(assert) {
    storage.set("key", "value");
    assert.equal(storage.get("key"), "value");
    storage.remove("key");
    assert.end();
});

tape("storage#set(key, value) should set the value of key", function(assert) {
    storage.set("key", "value");
    assert.equal(storage.get("key"), "value");
    storage.remove("key");
    assert.end();
});

tape("storage#remove(key) should remove the value of key", function(assert) {
    storage.set("key", "value");
    storage.remove("key");
    assert.equal(storage.get("key"), undefined);
    assert.end();
});

tape("storage#clear() should clear all values", function(assert) {
    storage.set("key", "value");
    storage.clear();
    assert.equal(storage.get("key"), undefined);
    assert.end();
});
