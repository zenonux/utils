// https://github.com/hustcc/timeago.js/blob/master/src/utils/date.ts
export const toDate = (input?: Date | string | number): Date => {
  if (input instanceof Date) return input;
  // @ts-ignore
  if (!isNaN(input) || /^\d+$/.test(input)) return new Date(parseInt(input));
  input = (input || "")
    // @ts-ignore
    .trim()
    .replace(/\.\d+/, "") // remove milliseconds
    .replace(/-/, "/")
    .replace(/-/, "/")
    .replace(/(\d)T(\d)/, "$1 $2")
    .replace(/Z/, " UTC") // 2017-2-5T3:57:52Z -> 2017-2-5 3:57:52UTC
    .replace(/([+-]\d\d):?(\d\d)/, " $1$2"); // -04:00 -> -0400
    // @ts-ignore
  return new Date(input);
};
