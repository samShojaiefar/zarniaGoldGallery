export function toPersianDigits(input: string | number | null | undefined): string {
  if (input === null || input === undefined) return "";
  const faDigits = "۰۱۲۳۴۵۶۷۸۹";
  return input.toString().replace(/\d/g, (digit) => faDigits[+digit]);
}
