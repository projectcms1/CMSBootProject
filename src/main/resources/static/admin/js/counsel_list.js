// 상담 내역 상세보기 모달 내부 ID
//const accordionContainer = document.getElementById('counsel_accordion');

// 상담 내역 상세보기 AJAX
function openDetailModal(aply_sn) {
	fetch('./admin_counsel_detail/' + aply_sn, {
		method : "GET",
		headers : { "content-type" : "application/x-www-form-urlencoded" }
	}).then(function(result_data) {
		return result_data.text();
	}).then(function(result_res) {
		console.log(result_res);
	}).catch(function(error) {
		alert("통신 오류 발생!");
	});
}

//관리자 사용자 (adminlistmod.html) 검색기능 분류 스크립트
function toggleFields() {
	var categorySelect = document.getElementById("categorySelect").value;
	var searchInput = document.getElementById("searchInput");
	var statusRadio = document.getElementById("statusRadio");

	// '상태'가 선택되면 input 텍스트 필드를 숨기고 상태 라디오 버튼을 표시
	if (categorySelect === "status") {
		searchInput.style.display = "none"; // input 필드 숨기기
		statusRadio.style.display = "block"; // 상태 라디오 버튼 표시
	}
	// 다른 값이 선택되면 input 필드를 보이게 하고 나머지를 숨김
	else {
		searchInput.style.display = "inline-block"; // input 필드 보이기
		statusRadio.style.display = "none"; // 상태 라디오 버튼 숨기기
	}
}
