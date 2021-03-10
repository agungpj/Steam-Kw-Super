const base_url = `https://api.rawg.io/api/key=${process.env.REACT_APP_RAWG_API}`;

// Get Date

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const CurrentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentDay}-${currentMonth}-${currentYear}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
export const popularGamesURL = () => `${base_url}${popular_games}`;
