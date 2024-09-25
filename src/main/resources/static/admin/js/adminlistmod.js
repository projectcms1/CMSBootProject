//관리자 검색
function adminlist_search() {

    var frmSearch = document.getElementById('frmSearch');
    var inputState = frmSearch.elements['search_part'];
    var searchInput = frmSearch.elements['search_word'];
    
    frmSearch.method = "GET";
    frmSearch.action = "./adminlistmod?search_part=" + inputState.value + "&search_word=" + searchInput.value;
    frmSearch.submit();
    return false;
}


//다음 주소 찾기
 var element_layer = document.getElementById('adminlistmod_detail_layer_add');
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
                document.getElementById('admin_zipcode').value = data.zonecode;
                document.getElementById("admin_address").value = addr;
                // 커서를 상세주소 필드로 이동한다.
                document.getElementById("admin_detail_address").focus();

                // iframe을 넣은 element를 안보이게 한다.
                // (autoClose:false 기능을 이용한다면, 아래 코드를 제거해야 화면에서 사라지지 않는다.)
                element_layer.style.display = 'none';
            },
            width : '100%',
            height : '100%',
            maxSuggestItems : 5
        }).embed(element_layer);

        // iframe을 넣은 element를 보이게 한다.
        element_layer.style.display = 'block';

        // iframe을 넣은 element의 위치를 화면의 가운데로 이동시킨다.
        initLayerPosition();
    }

    // 브라우저의 크기 변경에 따라 레이어를 가운데로 이동시키고자 하실때에는
    // resize이벤트나, orientationchange이벤트를 이용하여 값이 변경될때마다 아래 함수를 실행 시켜 주시거나,
    // 직접 element_layer의 top,left값을 수정해 주시면 됩니다.
 function initLayerPosition(){
        var width = 300; //우편번호서비스가 들어갈 element의 width
        var height = 400; //우편번호서비스가 들어갈 element의 height
        var borderWidth = 5; //샘플에서 사용하는 border의 두께

        // 위에서 선언한 값들을 실제 element에 넣는다.
        element_layer.style.width = width + 'px';
        element_layer.style.height = height + 'px';
        element_layer.style.border = borderWidth + 'px solid';
        // 실행되는 순간의 화면 너비와 높이 값을 가져와서 중앙에 뜰 수 있도록 위치를 계산한다.
        element_layer.style.left = (((window.innerWidth || document.documentElement.clientWidth) - width)/2 - borderWidth) + 'px';
        element_layer.style.top = (((window.innerHeight || document.documentElement.clientHeight) - height)/2 - borderWidth) + 'px';
 }
//===============다음 주소 끝=============



// 모달 상세보기 INPUT
const USER_PHOTO = document.getElementById("USER_PHOTO");
const prev_file = document.getElementById("prev_file");
const full_name = document.getElementById("full_name");
const admin_number = document.getElementById("admin_number");
const birth_day = document.getElementById("birth_day");
const email_address = document.getElementById("email_address");
const telephone_number = document.getElementById("telephone_number");
const account_lock = document.getElementById("account_lock");
const admin_company = document.getElementById("admin_company");
const admin_department = document.getElementById("admin_department");
const admin_jbgd_nm = document.getElementById("admin_jbgd_nm");
const account_status = document.getElementById("account_status");
const admin_zipcode = document.getElementById("admin_zipcode");
const admin_address = document.getElementById("admin_address");
const admin_detail_address = document.getElementById("admin_detail_address");
const dlng_bank_nm = document.getElementById("dlng_bank_nm");
const dlng_actno = document.getElementById("dlng_actno");
const dpstr_nm = document.getElementById("dpstr_nm");


//관리자 사용자 상세보기 모달에 값 넣기
function openEmpInfo(empidx) {
	fetch('./admin_detail/' + empidx, {
		method : "POST",
		headers : { "content-type" : "application/x-www-form-urlencoded" }
	}).then(function(result_data) {
		return result_data.json();
	}).then(function(result_res) {
		if (result_res == null) {
			alert("오류 발생!");
			location.reload();
		}
		else {
			makeOpeningModal(result_res);
		}
	}).catch(function(error) {
		console.log(error);
		alert("통신 오류 발생!");
	});
}

function makeOpeningModal(detailData) {
	if (detailData.emp_photo != '') {
		USER_PHOTO.innerHTML = `<img src="/img_file/${detailData.emp_photo}" />`;
		prev_file.value = detailData.emp_photo;
	}
	full_name.value = detailData.emp_flnm;
	admin_number.value = detailData.emp_no;
	birth_day.value = detailData.brdt;
	email_address.value = detailData.emp_eml_addr;
	telephone_number.value = detailData.emp_telno;
	account_lock.value = detailData.acnt_lck_yn;
	admin_company.value = detailData.ogdp_inst_nm;
	admin_department.value = detailData.ogdp_dept_nm;
	admin_jbgd_nm.value = detailData.jbgd_nm;
	account_status.value = detailData.acnt_stts;
	admin_zipcode.value = detailData.emp_zip;
	admin_address.value = detailData.emp_addr;
	admin_detail_address.value = detailData.emp_daddr;
	dlng_bank_nm.value = detailData.dlng_bank_nm;
	dlng_actno.value = detailData.dlng_actno;
	dpstr_nm.value = detailData.dpstr_nm;
}


