const withinRange = value => (value < 0 ? 0 : value > 255 ? 255 : value);

const toHex = value => pad(value.toString(16).toUpperCase());
const pad = value => (value.length === 1 ? '0' + value : value);

const convert = value => toHex(withinRange(value));
function rgb(r, g, b) {
  // complete this function
  return `${convert(r)}${convert(g)}${convert(b)}`;
}
