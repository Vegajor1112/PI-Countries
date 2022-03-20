const capitalize = (string) => {
  string = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  return string;
};

module.exports = { capitalize };
