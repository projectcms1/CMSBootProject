(function ajax_empTimeTable() {
	fetch('./api/professor_time', {
		method : "GET",
		headers : { "content-type" : "application/json" }
	}).then(function(result_data) {
		return result_data.text();
	}).then(function(result_res) {
		console.log(result_res);
	}).catch(function(error) {
		console.log(error);
	});
}());

function reservate_counsel(empType) {
	if (empType == "cslr") {
		alert("상담사 데이터를 만들어주세요.");
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
			if (confirm("아래 내용으로 지도 교수 상담을 신청하시겠습니까?")) {
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

function updateCnslrName() {
	var emp_name = document.querySelector('select[name="counseler_number"] > option:checked').innerText;
	document.getElementById("selectedCnslrName").innerText = emp_name;
}