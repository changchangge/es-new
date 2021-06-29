// WeakRefs and FinalizationRegistry Objects

let target = {};
let wr = new WeakRef(target);

//wr and target aren't the same


// Creating a new registry
const registry = new FinalizationRegistry(heldValue => {
  // ....
});

registry.register(myObject, "some value", myObject);
// ...some time later, if you don't care about `myObject` anymore...
registry.unregister(myObject);