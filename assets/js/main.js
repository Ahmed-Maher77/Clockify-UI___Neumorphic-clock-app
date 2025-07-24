/*==================== CLOCK ====================*/
const hour = document.getElementById("clock-hour"),
	minutes = document.getElementById("clock-minutes"),
	seconds = document.getElementById("clock-seconds");

const clock = () => {
	let date = new Date();

	let hh = date.getHours() * 30,
		mm = date.getMinutes() * 6,
		ss = date.getSeconds() * 6;

	// Rotate the clock hands
	hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
	minutes.style.transform = `rotateZ(${mm}deg)`;
	seconds.style.transform = `rotateZ(${ss}deg)`;
};
setInterval(clock, 1000); // Update every second

/*==================== CLOCK & DATE TEXT ====================*/
const textHour = document.getElementById("text-hour"),
	textMinutes = document.getElementById("text-minutes"),
	textAmPm = document.getElementById("text-ampm"),
	//   dateWeek = document.getElementById('date-day-week'),
	dateDay = document.getElementById("date-day"),
	dateMonth = document.getElementById("date-month"),
	dateYear = document.getElementById("date-year");

const clockText = () => {
	let date = new Date();

	let hh = date.getHours(),
		ampm,
		mm = date.getMinutes(),
		day = date.getDate(),
		// dayweek = date.getDay(),
		month = date.getMonth(),
		year = date.getFullYear();

	// Convert 24-hour time to 12-hour and set AM/PM
	if (hh >= 12) {
		hh = hh - 12;
		ampm = "PM";
	} else {
		ampm = "AM";
	}

	// Change 0 AM to 12 AM
	if (hh == 0) {
		hh = 12;
	}

	// Pad hours with a leading zero if needed
	if (hh < 10) {
		hh = `0${hh}`;
	}

	// Display hours
	textHour.innerHTML = `${hh}:`;

	// Pad minutes with a leading zero if needed
	if (mm < 10) {
		mm = `0${mm}`;
	}

	// Display minutes
	textMinutes.innerHTML = mm;

	// Display AM or PM
	textAmPm.innerHTML = ampm;

	// To show the weekday name, uncomment below
	// let week = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']

	// List of month names
	let months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	// Display day, month, and year
	dateDay.innerHTML = day;
	// dateWeek.innerHTML = `${week[dayweek]}`
	dateMonth.innerHTML = `${months[month]},`;
	dateYear.innerHTML = year;
};
setInterval(clockText, 1000); // Update every second

/*==================== DARK/LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bxs-sun";

// Get previously selected theme (if any)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// Get the current theme and icon from the DOM
const getCurrentTheme = () =>
	document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
	themeButton.classList.contains(iconTheme) ? "bxs-moon" : "bxs-sun";

// If a theme was previously chosen, apply it
if (selectedTheme) {
	// Set theme and icon based on previous selection
	document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
		darkTheme
	);
	themeButton.classList[selectedIcon === "bxs-moon" ? "add" : "remove"](
		iconTheme
	);
}

// Toggle theme when the button is clicked
themeButton.addEventListener("click", () => {
	// Switch dark theme and icon
	document.body.classList.toggle(darkTheme);
	themeButton.classList.toggle(iconTheme);
	// Save the user's theme and icon choice
	localStorage.setItem("selected-theme", getCurrentTheme());
	localStorage.setItem("selected-icon", getCurrentIcon());
});
