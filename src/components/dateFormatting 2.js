// dateFormatting.js
export function formatDateRange(dateRange) {
    const [startDate, endDate] = dateRange.split("—").map(dateString => new Date(dateString));
  
    const startMonth = startDate.toLocaleDateString("en-US", { month: "long" });
    const endMonth = endDate.toLocaleDateString("en-US", { month: "long" });
  
    const startDay = startDate.getDate();
    const endDay = endDate.getDate();
  
    const startYear = startDate.getFullYear();
    const endYear = endDate.getFullYear();
  
    return `${startMonth} ${startDay}–${endMonth} ${endDay}, ${startYear}`;
  }
  