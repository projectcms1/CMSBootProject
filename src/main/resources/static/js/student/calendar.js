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