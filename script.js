// Days of the week
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Display current day
const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
currentDayElement.textContent = days[new Date().getUTCDay()];

// Display current UTC time (human-readable)
const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
currentUTCTimeElement.textContent = new Date().toUTCString();
