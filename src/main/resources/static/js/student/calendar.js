const monthAndYear = document.getElementById("monthAndYear");
const calendarBody = document.getElementById("calendarBody");
const prevMonthBtn = document.getElementById("prevMonth");
const nextMonthBtn = document.getElementById("nextMonth");

let currentYear, currentMonth;
const today = new Date();
const todayDate = today.getDate();
const todayMonth = today.getMonth();
const todayYear = today.getFullYear();

// 한국어 월 이름과 요일 이름 배열
const monthNames = [
    "1월", "2월", "3월", "4월", "5월", "6월",
    "7월", "8월", "9월", "10월", "11월", "12월"
];

const dayNames = ["일", "월", "화", "수", "목", "금", "토"];

// 공휴일 목록 (월, 일 형식)
const publicHolidays = [
    { month: 0, day: 1 },   // 1월 1일
    { month: 2, day: 1 },   // 3월 1일
    { month: 4, day: 1 },   // 5월 1일
    { month: 5, day: 6 },   // 6월 6일
    { month: 7, day: 15 },  // 8월 15일
    { month: 9, day: 3 },   // 10월 3일
    { month: 11, day: 25 }  // 12월 25일
];

function isPublicHoliday(date) {
    const month = date.getMonth();
    const day = date.getDate();
    
    return publicHolidays.some(holiday => holiday.month === month && holiday.day === day);
}

function showCalendar(year, month) {
    const firstDay = new Date(year, month).getDay();
    const daysInMonth = 32 - new Date(year, month, 32).getDate();

    calendarBody.innerHTML = "";

    // "년 월" 형식으로 변경
    monthAndYear.innerText = `${year}년 ${monthNames[month]}`;

    // 요일 헤더 생성
    let dayRow = document.createElement("tr");
    dayNames.forEach(day => {
        let dayCell = document.createElement("th");
        dayCell.innerText = day;
        dayRow.appendChild(dayCell);
    });
    calendarBody.appendChild(dayRow);

    let date = 1;
    for (let i = 0; i < 6; i++) {
        let row = document.createElement("tr");

        for (let j = 0; j < 7; j++) {
            let cell = document.createElement("td");
            const currentDate = new Date(year, month, date);

            if (i === 0 && j < firstDay) {
                cell.innerHTML = "";
            } else if (date > daysInMonth) {
                break;
            } else {
                cell.innerHTML = date;

                // 오늘 이전의 날짜를 비활성화(disable) 처리
                if (
                    (year < todayYear) ||
                    (year === todayYear && month < todayMonth) ||
                    (year === todayYear && month === todayMonth && date < todayDate)
                ) {
                    cell.classList.add("disabled");
                }

                // 주말과 공휴일 비활성화 처리
                if (j === 0 || j === 6 || isPublicHoliday(currentDate)) {
                    cell.classList.add("disabled");
                }

                date++;
            }
            row.appendChild(cell);
        }
        calendarBody.appendChild(row);
    }
}

function initCalendar() {
    currentYear = todayYear;
    currentMonth = todayMonth;
    showCalendar(currentYear, currentMonth);
}

prevMonthBtn.addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    showCalendar(currentYear, currentMonth);
});

nextMonthBtn.addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    showCalendar(currentYear, currentMonth);
});

initCalendar();