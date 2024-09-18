/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

const BYTES_NUM = 1024;
const BYTE_UNITS = [
  'B',
  'KB',
  'MB',
  'GB'
];

const formatNumber = (num) => num % 1 === 0 ? num : num.toFixed(2);
const formatByteToHuman = (bytes, byteUnit) => `${formatNumber(bytes)} ${byteUnit}`;

export default function convertBytesToHuman(bytes, currentByteUnit = BYTE_UNITS[0]) {
  if (
    typeof bytes !== 'number' || 
    bytes < 0 ||
    Number.isNaN(bytes) || 
    bytes === Infinity ||
    bytes === -Infinity
  ) {
    return false;
  }

  if (bytes < BYTES_NUM) {
    return formatByteToHuman(bytes, currentByteUnit);
  }

  const divideByte = bytes / BYTES_NUM;
  const indexCurrentByteUnit = BYTE_UNITS.indexOf(currentByteUnit);
  const nextByteUnit = BYTE_UNITS[indexCurrentByteUnit + 1];

  if (nextByteUnit) {
    return convertBytesToHuman(divideByte, nextByteUnit);
  }

  return formatByteToHuman(bytes, currentByteUnit);
}
