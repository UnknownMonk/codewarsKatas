function makeClass(...properties) {
  return class _ {
    constructor(...args) {
      properties.forEach((value, index) => (this[value] = args[index]));
    }
  };
}
