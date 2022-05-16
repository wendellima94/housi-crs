export function convertDate(inputFormat) {
  function convert(value) { return (value < 10) ? '0' + value : value; }
  var newDate = new Date(inputFormat)
  return [convert(newDate.getDate()), convert(newDate.getMonth() + 1), newDate.getFullYear()].join('-')
};