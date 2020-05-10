export const formatDate = (date) => {
  if (date === "active") return date;
  console.log(date);
  const formatDate = new Date("" + date);

  return `${formatDate.getFullYear()}-${
    formatDate.getMonth() + 1
  }-${formatDate.getDate()} ${formatDate.getHours()}: ${formatDate.getMinutes()}`;
};
