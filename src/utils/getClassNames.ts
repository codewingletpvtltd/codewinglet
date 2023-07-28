/**
 * Combines default component class and additional external classes to generate the final classNames.
 *
 * @param defaultClassName The default class of the component.
 * @param className Additional external classes to be applied to the component.
 * @returns The combined classNames as a string.
 */
const getClassNames = (defaultClassName: string, ...rest: string[]) =>
  [defaultClassName, ...rest].filter((name) => name.trim() !== "").join(" ");

export default getClassNames;
