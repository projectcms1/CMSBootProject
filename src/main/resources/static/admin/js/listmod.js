
//교직원 사용자 (prolistmod.html) 검색기능 분류 스크립트 
function toggleFields() {
	var categorySelect = document.getElementById("categorySelect").value;
	var staffTypeSelect = document.getElementById("staffTypeSelect");
	var searchInput = document.getElementById("searchInput");
	var statusRadio = document.getElementById("statusRadio");

	// '교직원 분류'가 선택되면 교수/상담사 select 박스를 표시하고 input 텍스트 필드를 숨김
	if (categorySelect === "staff") {
		staffTypeSelect.style.display = "inline-block"; // 교수/상담사 select 보이기
		searchInput.style.display = "none"; // input 필드 숨기기
		statusRadio.style.display = "none"; // 상태 라디오 버튼 숨기기
	}
	// '상태'가 선택되면 input 텍스트 필드를 숨기고 상태 라디오 버튼을 표시
	else if (categorySelect === "status") {
		staffTypeSelect.style.display = "none"; // 교수/상담사 select 숨기기
		searchInput.style.display = "none"; // input 필드 숨기기
		statusRadio.style.display = "block"; // 상태 라디오 버튼 표시
	}
	// 다른 값이 선택되면 input 필드를 보이게 하고 나머지를 숨김
	else {
		staffTypeSelect.style.display = "none"; // 교수/상담사 select 숨기기
		searchInput.style.display = "inline-block"; // input 필드 보이기
		statusRadio.style.display = "none"; // 상태 라디오 버튼 숨기기
	}
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