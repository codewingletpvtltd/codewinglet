/**
 * Combines default component class and additional external classes to generate the final classNames.
 *
 * @param defaultClassName The default class of the component.
 * @returns The combined classNames as a string.
 */
const getClassNames = (defaultClassName: string, ...rest: string[]) =>
  [defaultClassName, ...rest].filter((name) => name.trim() !== '').join(' ');

export default getClassNames;
