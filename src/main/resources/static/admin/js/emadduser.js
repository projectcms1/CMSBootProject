//교직원 사용자 상세보기 정보 중 대학교 내 대학분류, 학과, 전공 데이터
const USER_UNIV = ['대학선택', '공과대학', '사회과학대학', '인문대학', '자연과학대학', '심리상담센터', '대학본부'];
const USER_SCSBJT = ['-', '기계공학과', '정치학과', '철학과', '생물학과', '심리상담센터', '전산운영팀'];
const USER_MJR = ['-', '기계공학', '정치학', '철학', '생물학', '', '-'];

function makeSelector(selectedUniv) {
	const scsbjtField = document.getElementById("ogdp_dept_nm");
	const mjrField = document.getElementById("mjr");

	scsbjtField.value = "";
	mjrField.readOnly = true;
	mjrField.value = "";

	USER_UNIV.forEach(function(data, index) {
		if (selectedUniv === data) {
			scsbjtField.value = USER_SCSBJT[index];

			if (selectedUniv === "심리상담센터") {
				mjrField.readOnly = false;
			} else {
				mjrField.readOnly = true;
				mjrField.value = USER_MJR[index];
			}
		}
	});
}


//사용자 추가시 이미지 미리보기 로드
function setemuser_img(event) {
    const output = document.querySelector('[name="USER_PHOTO"]');
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            output.innerHTML = `<img src="${e.target.result}" alt="사용자 이미지" style="max-width: 100%; max-height: 100%;">`;
        }
        reader.readAsDataURL(file);
    } else {
        output.innerHTML = '이미지 미리보기';
    }
}

//다음 주소 찾기
var element_layer = document.getElementById('layer_add');
function closeDaumPostcode() {
	// iframe을 넣은 element를 안보이게 한다.
	element_layer.style.display = 'none';
}
function execDaumPostcode() {
	new daum.Postcode({
		oncomplete: function(data) {
			// 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

			// 각 주소의 노출 규칙에 따라 주소를 조합한다.
			// 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
			var addr = ''; // 주소 변수
			var extraAddr = ''; // 참고항목 변수

			//사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
			if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
				addr = data.roadAddress;
			} else { // 사용자가 지번 주소를 선택했을 경우(J)
				addr = data.jibunAddress;
			}

			// 우편번호와 주소 정보를 해당 필드에 넣는다.
			document.getElementById("emp_zip").value = data.zonecode;
			document.getElementById("emp_addr").value = addr;
			// 커서를 상세주소 필드로 이동한다.
			document.getElementById("emp_daddr").focus();

			// iframe을 넣은 element를 안보이게 한다.
			// (autoClose:false 기능을 이용한다면, 아래 코드를 제거해야 화면에서 사라지지 않는다.)
			element_layer.style.display = 'none';
		},
		width: '100%',
		height: '100%',
		maxSuggestItems: 5
	}).embed(element_layer);

	// iframe을 넣은 element를 보이게 한다.
	element_layer.style.display = 'block';

	// iframe을 넣은 element의 위치를 화면의 가운데로 이동시킨다.
	initLayerPosition();
}

// 브라우저의 크기 변경에 따라 레이어를 가운데로 이동시키고자 하실때에는
// resize이벤트나, orientationchange이벤트를 이용하여 값이 변경될때마다 아래 함수를 실행 시켜 주시거나,
// 직접 element_layer의 top,left값을 수정해 주시면 됩니다.
function initLayerPosition() {
	var width = 300; //우편번호서비스가 들어갈 element의 width
	var height = 400; //우편번호서비스가 들어갈 element의 height
	var borderWidth = 5; //샘플에서 사용하는 border의 두께

	// 위에서 선언한 값들을 실제 element에 넣는다.
	element_layer.style.width = width + 'px';
	element_layer.style.height = height + 'px';
	element_layer.style.border = borderWidth + 'px solid';
	// 실행되는 순간의 화면 너비와 높이 값을 가져와서 중앙에 뜰 수 있도록 위치를 계산한다.
	element_layer.style.left = (((window.innerWidth || document.documentElement.clientWidth) - width) / 2 - borderWidth) + 'px';
	element_layer.style.top = (((window.innerHeight || document.documentElement.clientHeight) - height) / 2 - borderWidth) + 'px';
}
//===============다음 주소 끝=============

//교직원 사용자 추가 기능
function add_emuser(){
	if(document.querySelector("input[name='emp_flnm']").value==""){
		document.querySelector("input[name='emp_flnm']").focus();
		alert("이름을 입력해주세요.");
	}
	else if(document.querySelector("input[name='brdt']").value==""){
		document.querySelector("input[name='brdt']").focus();
		alert("생년월일을 입력해주세요.");
	}
	else if(document.querySelector("input[name='emp_telno']").value==""){
		document.querySelector("input[name='emp_telno']").focus();
		alert("전화번호를 입력해주세요.");
	}
	else if(document.querySelector("input[name='emp_eml_addr']").value==""){
		document.querySelector("input[name='emp_eml_addr']").focus();
		alert("이메일을 입력해주세요.");
	}
	else if(document.querySelector("input[name='entrance_year']").value==""){
		document.querySelector("input[name='entrance_year']").focus();
		alert("입사년도를 입력해주세요.");
	}
	else if(document.querySelector("input[name='edu_crtfct_no']").value==""){
		document.querySelector("input[name='edu_crtfct_no']").focus();
		alert("교원 자격증 번호를 입력해주세요.");
	}
	else if(document.querySelector("input[name='edu_crtfct_issu_ymd']").value==""){
		document.querySelector("input[name='edu_crtfct_issu_ymd']").focus();
		alert("교원 자격증 발급일자를 입력해주세요.");
	}
	else if(document.querySelector("select[name='ogdp_inst_nm']").value=="대학선택"){
		document.querySelector("select[name='ogdp_inst_nm']").focus();
		alert("소속기관(단과대학)을 선택해주세요.");
	}
	else if(document.querySelector("input[name='jbgd_nm']").value==""){
		document.querySelector("input[name='jbgd_nm']").focus();
		alert("직급을 입력해주세요.");
	}
	else if(document.querySelector("input[name='mjr']").value==""){
		document.querySelector("input[name='mjr']").focus();
		alert("교직(전공)을 선택해주세요.");
	}
	else if(document.querySelector("input[name='emp_zip']").value==""){
		alert("주소를 검색해주세요.");
	}
	else if(document.querySelector("input[name='emp_daddr']").value==""){
		document.querySelector("input[name='emp_daddr']").focus();
		alert("상세주소를 입력해주세요.");
	}
	else if(document.querySelector("input[name='dlng_bank_nm']").value==""){
		document.querySelector("input[name='dlng_bank_nm']").focus();
		alert("은행명을 입력해주세요.");
	}
	else if(document.querySelector("input[name='dlng_actno']").value==""){
		document.querySelector("input[name='dlng_actno']").focus();
		alert("계좌번호를 입력해주세요.");
	}
	else if(document.querySelector("input[name='dpstr_nm']").value==""){
		document.querySelector("input[name='dpstr_nm']").focus();
		alert("예금주를 입력해주세요.");
	}
	else{
		if(confirm("입력하신 정보로 상담을 추가하시겠습니까?")){
			emuser_add_frm.submit();
		}
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
