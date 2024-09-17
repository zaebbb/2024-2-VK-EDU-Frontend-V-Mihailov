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

const KB = 1024
const MB = KB * 1024
const GB = MB * 1024

const formatNumber = (num) => num % 1 === 0 ? num : num.toFixed(2)

export default function convertBytesToHuman(bytes) {
  if (
    typeof bytes !== 'number' || 
    bytes < 0 ||
    Number.isNaN(bytes) || 
    bytes === Infinity ||
    bytes === -Infinity
  ) {
    return false;
  }

  if (bytes < KB) {
    return `${bytes} B`;
  }

  if (bytes >= KB && bytes < MB) {
    const bytesToKB = bytes / KB;
    return `${formatNumber(bytesToKB)} KB`
  }

  if (bytes >= MB && bytes < GB) {
    const bytesToMB = bytes / MB;
    return `${formatNumber(bytesToMB)} MB`;
  }

  const bytesToGB = bytes / GB;
  return `${formatNumber(bytesToGB)} GB`
}

export {
  KB,
  MB,
  GB,
}
