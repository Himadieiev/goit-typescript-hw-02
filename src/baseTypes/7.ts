/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum ChosenDay {Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday }

function isWeekend(day: ChosenDay): boolean {
  if (day === ChosenDay.Saturday || day === ChosenDay.Sunday) return true
  return false;
}