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
  'GB',
];

export default function convertBytesToHuman(bytes) {
  if (
    !Number.isFinite(bytes) ||
    bytes < 0
  ) {
    return false;
  }

  let byteUnitIndex = 0;

  while (bytes >= BYTES_NUM) {
    byteUnitIndex++
    bytes /= BYTES_NUM;
  }

  const formatNumber = bytes % 1 === 0 ? bytes : bytes.toFixed(2);
  return `${formatNumber} ${BYTE_UNITS[byteUnitIndex]}`;
}
