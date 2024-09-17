/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman, {
  GB,
  KB,
  MB,
} from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(-1)).toBe(false)
  expect(convertBytesToHuman('Text here...')).toBe(false)
  expect(convertBytesToHuman([1, 2, 3, 4])).toBe(false)
  expect(convertBytesToHuman({ test: 'test' })).toBe(false)
  expect(convertBytesToHuman(new Date())).toBe(false)
  expect(convertBytesToHuman(undefined)).toBe(false)
  expect(convertBytesToHuman(NaN)).toBe(false)
  expect(convertBytesToHuman(Infinity)).toBe(false)
  expect(convertBytesToHuman(-Infinity)).toBe(false)
  expect(convertBytesToHuman(null)).toBe(false)
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(10)).toBe('10 B')
  expect(convertBytesToHuman(KB)).toBe('1 KB')
  expect(convertBytesToHuman(MB)).toBe('1 MB')
  expect(convertBytesToHuman(GB)).toBe('1 GB')
});

test('Возвращает корректное значение для чисел B', () => {
  expect(convertBytesToHuman(10)).toBe('10 B')
  expect(convertBytesToHuman(999)).toBe('999 B')
  expect(convertBytesToHuman(0)).toBe('0 B')
  expect(convertBytesToHuman(1023)).toBe('1023 B')
  expect(convertBytesToHuman(475)).toBe('475 B')
  expect(convertBytesToHuman(947)).toBe('947 B')
  expect(convertBytesToHuman(123)).toBe('123 B')
});

test('Возвращает корректное значение для чисел KB', () => {
  expect(convertBytesToHuman(KB)).toBe('1 KB')
  expect(convertBytesToHuman(KB + 234)).toBe('1.23 KB')
  expect(convertBytesToHuman(KB * 50)).toBe('50 KB')
  expect(convertBytesToHuman(KB * 1023)).toBe('1023 KB')
  expect(convertBytesToHuman(KB * 124)).toBe('124 KB')
  expect(convertBytesToHuman(KB * 684)).toBe('684 KB')
  expect(convertBytesToHuman(KB * 223)).toBe('223 KB')
  expect(convertBytesToHuman(KB + 23234)).toBe('23.69 KB')
  expect(convertBytesToHuman(KB + 44224)).toBe('44.19 KB')
  expect(convertBytesToHuman(KB + 999999)).toBe('977.56 KB')
});

test('Возвращает корректное значение для чисел MB', () => {
  expect(convertBytesToHuman(MB)).toBe('1 MB')
  expect(convertBytesToHuman(MB + 234)).toBe('1.00 MB')
  expect(convertBytesToHuman(MB * 50)).toBe('50 MB')
  expect(convertBytesToHuman(MB * 1023)).toBe('1023 MB')
  expect(convertBytesToHuman(MB * 124)).toBe('124 MB')
  expect(convertBytesToHuman(MB * 684)).toBe('684 MB')
  expect(convertBytesToHuman(MB * 223)).toBe('223 MB')
  expect(convertBytesToHuman(MB + 23234)).toBe('1.02 MB')
  expect(convertBytesToHuman(MB + 4422234)).toBe('5.22 MB')
  expect(convertBytesToHuman(MB + 99999999)).toBe('96.37 MB')
  expect(convertBytesToHuman(MB + 999999999)).toBe('954.67 MB')
  expect(convertBytesToHuman(123123123)).toBe('117.42 MB')
});

test('Возвращает корректное значение для чисел GB', () => {
  expect(convertBytesToHuman(GB)).toBe('1 GB')
  expect(convertBytesToHuman(GB + 234)).toBe('1.00 GB')
  expect(convertBytesToHuman(GB * 50)).toBe('50 GB')
  expect(convertBytesToHuman(GB * 1023)).toBe('1023 GB')
  expect(convertBytesToHuman(GB * 124)).toBe('124 GB')
  expect(convertBytesToHuman(GB * 684)).toBe('684 GB')
  expect(convertBytesToHuman(GB * 223)).toBe('223 GB')
  expect(convertBytesToHuman(GB + 23234)).toBe('1.00 GB')
  expect(convertBytesToHuman(GB + 2323455345)).toBe('3.16 GB')
  expect(convertBytesToHuman(GB + 4422234345)).toBe('5.12 GB')
  expect(convertBytesToHuman(GB + 9999993399)).toBe('10.31 GB')
  expect(convertBytesToHuman(GB + 99999999339)).toBe('94.13 GB')
  expect(convertBytesToHuman(GB + 999999993399)).toBe('932.32 GB')
});
