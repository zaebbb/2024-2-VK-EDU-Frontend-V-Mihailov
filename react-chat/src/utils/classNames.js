/**
 * Взял со своего npm-пакета
 * {@link https://github.com/zaebbb/dev-proger-styles/blob/master/src/lib/classNames.ts Оригинал}.
 */
export const classNames = (
  cls,
  mods,
  additional
) => (
  [
    cls,
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
    ...additional,
  ].join(' ')
)