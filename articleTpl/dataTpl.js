module.exports = function(data) {
  return `function Data() {
  return ${data};
}`;
}