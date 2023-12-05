export function formatDateRange(dateRange: string): string {
  const [startDate, endDate] = dateRange.split("—").map(dateString => new Date(dateString));

  const startMonth = startDate.toLocaleDateString("en-US", { month: "long" });
  const endMonth = endDate.toLocaleDateString("en-US", { month: "long" });

  const startDay = startDate.getDate();
  const endDay = endDate.getDate();

  const startYear = startDate.getFullYear();
  const endYear = endDate.getFullYear();

  const formatTime = (date: Date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    return minutes === 0 ? `${hours} ${ampm}` : date.toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric", hour12: true });
  };

  if (startDay === endDay && startMonth === endMonth && startYear === endYear) {
    return `${formatTime(startDate)} \u2013 ${formatTime(endDate)}, ${startMonth} ${startDay}, ${startYear}`;
  } else if (startYear === endYear) {
    return `${startMonth} ${startDay} \u2013 ${endMonth} ${endDay}, ${startYear}`;
  } else {
    return `${startMonth} ${startDay}, ${startYear} \u2013 ${endMonth} ${endDay}, ${endYear}`;
  }
}

export function formatDate(dateString: string): string {
  let date = new Date(dateString);
  
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  let monthNames: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let monthName = monthNames[month];

  let formattedDate = `${monthName} ${day}, ${year}`;

  return formattedDate;
}