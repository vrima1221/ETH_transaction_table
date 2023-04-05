export function dateFormat(d: Date) {
  const date = new Date(d);
  const monthName = date.toLocaleString('en-US', { month: 'long' });
  const day = date.getDate();
  const year = date.getFullYear();
  const formattedDate = `${monthName.slice(0, 3)}-${day}-${year}`;

  return formattedDate;
}
