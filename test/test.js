var storage = require("../src/index"),
    assert = require("assert");


describe("storage", function() {
    describe("#get(key)", function() {
        it("should return value of key", function() {
            storage.set("key", "value");
            assert.equal(storage.get("key"), "value");
            storage.remove("key");
        });
    });

    describe("#set(key, value)", function() {
        it("should set the value of key", function() {
            storage.set("key", "value");
            assert.equal(storage.get("key"), "value");
            storage.remove("key");
        });
    });

    describe("#remove(key)", function() {
        it("should remove the value of key", function() {
            storage.remove("key");
            assert.equal(storage.get("key"), undefined);
        });
    });
});
