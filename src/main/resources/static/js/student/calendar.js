let exreservData = new Object();

const monthAndYear = document.getElementById("monthAndYear");
const calendarBody = document.getElementById("calendarBody");
const prevMonthBtn = document.getElementById("prevMonth");
const nextMonthBtn = document.getElementById("nextMonth");

let currentYear, currentMonth;
const today = new Date();
const todayDate = today.getDate();
const todayMonth = today.getMonth();
const todayYear = today.getFullYear();

const prfsSelectDate = document.getElementById("prfsSelectDate");
const prfsSelectTime = document.getElementById("prfsSelectTime");
prfsSelectDate.setAttribute("min", today.toISOString().split("T")[0]);

const cnslrSelectTime = document.getElementById("cnslrSelectTime");

var cnslrDateTimeList = [];

const TimeTableList = ["<option value=''>시간 선택</option>", "<option value='1'>1교시(09:00~10:15)</option>",
		"<option value='2'>2교시(10:30~11:45)</option>", "<option value='3'>3교시(13:00~14:15)</option>",
		"<option value='4'>4교시(14:30~15:45)</option>", "<option value='5'>5교시(16:00~17:15)</option>"
];

(function ajax_empTimeTable() {
	fetch('./api/professor_time', {
		method : "GET",
		headers : { "content-type" : "application/json" }
	}).then(function(result_data) {
		return result_data.json();
	}).then(function(result_res) {
		if (result_res['cnslr'] == "error") {
			alert("오류가 발생하였습니다.");
		}
		else {
			exreservData = result_res;
		}
	}).catch(function() {
		alert("오류 발생!");
		location.href = '/blank';
	});
}());

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

	var cnslrTimeData = new Array();
	// 예약 가능한 교시가 없을 때 날짜 비활성화 처리를 위한 배열 생성
	cnslrDateTimeList.forEach(function(data) {
		var date_dump = data['rsvt_dt'];
		cnslrTimeData.push(date_dump);
	});

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
                
                var current_date = setDateInTDTag(year, month, date);
                
                cell.setAttribute("datedata", current_date);
                
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
                
                // 예약 가능한 교시가 없을 때 날짜 비활성화 처리
                if (cnslrTimeData.filter(element => current_date === element).length == 5) {
					cell.classList.add("disabled");
				}
                
                date++;
            }
            row.appendChild(cell);
        }
        calendarBody.appendChild(row);
    }
    search_tdtag();
}

function setDateInTDTag(y, m, d) {
	var result = "";
	var fm = m + 1;
	var fmonth = (fm > 9) ? fm : "0" + fm;
	var fdate = (d > 9) ? d : "0" + d;
	result = y + "" + fmonth + "" + fdate;
	return result;
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

function updateCnslrName(empNo) {
	var emp_name = document.querySelector('#counseler_number > option:checked').innerText;
	document.getElementById("selectedCnslrName").innerText = emp_name;
	frmCounseler.counseler_number.value = empNo;
	
	frmCounseler.rsvt_dt.value = "";
	document.getElementById("selectedCnslDate").innerText = "";
	
	cnslrDateTimeList = [];
	exreservData['cnslr'].forEach(function(data) {
		if (empNo == data['emp_no']) {
			//var dt_dump = data['rsvt_dt'].replaceAll("-", "");
			var dt_data = {'rsvt_dt' : data['rsvt_dt'], 'hr_se' : data['hr_se']};
			cnslrDateTimeList.push(dt_data);
		}
	});
	initCalendar();
}

function reservate_counsel(empType) {
	if (empType == "cslr") {
		if (frmCounseler.rsvt_dt.value == "") {
			alert("상담 신청 날짜를 선택해주세요.");
		}
		else if (frmCounseler.hr_se.value == "") {
			alert("상담 신청 시간을 선택해주세요.");
		}
		else if (frmCounseler.dscsn_knd.value == "") {
			alert("신청할 상담의 종류를 선택해주세요.");
		}
		else if (frmCounseler.dscsn_mthd.value == "") {
			alert("신청할 상담의 방식을 선택해주세요.");
		}
		else {
			if (confirm("아래 내용으로 상담을 신청하시겠습니까?")) {
				frmCounseler.method = "POST";
				frmCounseler.action = "./insert_counsel_reservation";
				frmCounseler.submit();
			}
		}
	}
	else if (empType == "prfs") {
		if (frmProfessor.rsvt_dt.value == "") {
			alert("상담 신청 날짜를 선택해주세요.");
		}
		else if (frmProfessor.hr_se.value == "") {
			alert("상담 신청 시간을 선택해주세요.");
		}
		else if (frmProfessor.dscsn_knd.value == "") {
			alert("신청할 상담의 종류를 선택해주세요.");
		}
		else if (frmProfessor.dscsn_mthd.value == "") {
			alert("신청할 상담의 방식을 선택해주세요.");
		}
		else {
			if (confirm("아래 내용으로 상담을 신청하시겠습니까?")) {
				frmProfessor.method = "POST";
				frmProfessor.action = "./insert_counsel_reservation";
				frmProfessor.submit();
			}
		}
	}
	else {
		alert("잘못된 접근입니다.");
	}
}

initCalendar();

function search_tdtag() {
	var td_data = document.querySelectorAll("td:not(.disabled)");
	td_data.forEach((data) => {
		data.addEventListener('click', function(e) {
			var datedata = e.currentTarget.getAttribute("datedata");
			frmCounseler.rsvt_dt.value = datedata;
			
			var dateview = datedata.substring(0, 4) + "년 " + datedata.substring(4, 6) + "월 " + datedata.substring(6, 8) + "일";
			
			document.getElementById("selectedCnslDate").innerText = dateview;
			
			cnslrSelectTime.innerHTML = "";
			var timeList = [];
			var html = "";
			cnslrDateTimeList.forEach(function(data) {
				if (datedata == data.rsvt_dt) {
					timeList.push(data.hr_se);
				}
			});
			TimeTableList.forEach(function(data, node) {
				if (!timeList.includes(node)) {
					html += data;
				}
			});
			cnslrSelectTime.innerHTML = html;
		});
	});
}

function setTimeSelecter2(selectedDate) {
	prfsSelectTime.innerHTML = "";
	var timeList = [];
	var html = "";
	var sdate = selectedDate.replaceAll("-", "");
	var time_data = exreservData['prfs'];
	time_data.forEach(function(data) {
		if (sdate == data.rsvt_dt) {
			timeList.push(data.hr_se);
		}
	});
	TimeTableList.forEach(function(data, node) {
		if (!timeList.includes(node)) {
			html += data;
		}
	});
	prfsSelectTime.innerHTML = html;
}