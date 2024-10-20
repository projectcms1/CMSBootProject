// 모달 상세보기 INPUT
const USER_PHOTO = document.getElementById("USER_PHOTO");
const prev_file = document.getElementById("prev_file");

const full_name = document.getElementById("full_name");
const employee_number = document.getElementById("employee_number");
const birth_day = document.getElementById("birth_day");
const email_address = document.getElementById("email_address");
const telephone_number = document.getElementById("telephone_number");
const account_status = document.getElementById("account_status");
const account_lock = document.getElementById("account_lock");

const employee_company = document.getElementById("employee_company");
const emp_department = document.getElementById("emp_department");
const employee_major = document.getElementById("employee_major");
const jbgd_name = document.getElementById("jbgd_name");
const edu_crtfct_no = document.getElementById("edu_crtfct_no");
const edu_crtfct_issu_ymd = document.getElementById("edu_crtfct_issu_ymd");
const regist_date = document.getElementById("regist_date");

const employee_zipcode = document.getElementById("employee_zipcode");
const employee_address = document.getElementById("employee_address");
const detail_address = document.getElementById("detail_address");
const dlng_bank_nm = document.getElementById("dlng_bank_nm");
const dlng_actno = document.getElementById("dlng_actno");
const dpstr_nm = document.getElementById("dpstr_nm");


//교직원 사용자 상세보기 정보 중 대학교 내 대학분류, 학과, 전공 데이터
const USER_UNIV = ['대학선택', '공과대학', '사회과학대학', '인문대학', '자연과학대학', '심리상담센터'];
const USER_SCSBJT = ['-', '기계공학과', '정치학과', '철학과', '생물학과', '심리상담센터'];
const USER_MJR = ['-', '기계공학', '정치학', '철학', '생물학', ''];

function makeSelector(selectedUniv) {

	emp_department.value = "";
	employee_major.readOnly = true;
	employee_major.value = "";

	USER_UNIV.forEach(function(data, index) {
		if (selectedUniv === data) {
			emp_department.value = USER_SCSBJT[index];

			if (selectedUniv === "심리상담센터") {
				employee_major.readOnly = false;
			} else {
				employee_major.readOnly = true;
				employee_major.value = USER_MJR[index];
			}
		}
	});
}


//교직원 사용자 검색
function emlist_search() {

    var frmSearch = document.getElementById('frmSearch');
    var inputState = frmSearch.elements['search_part'];
    var searchInput = frmSearch.elements['search_word'];
    
    frmSearch.method = "GET";
    frmSearch.action = "./emlistmod?search_part=" + inputState.value + "&search_word=" + searchInput.value;
    frmSearch.submit();
    return false;
}



//다음 주소 찾기
 var element_layer = document.getElementById('emlistmod_detail_layer_add');
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

                //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    addr = data.roadAddress;
                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    addr = data.jibunAddress;
                }

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document.getElementById('employee_zipcode').value = data.zonecode;
                document.getElementById("employee_address").value = addr;
                // 커서를 상세주소 필드로 이동한다.
                document.getElementById("detail_address").focus();

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




//교직원 리스트 페이징 처리
document.addEventListener('DOMContentLoaded', function() {
    const rowsPerPage = 10; // 한 페이지당 표시할 행의 수
    const tableBody = document.getElementById('employeeTableBody');
    const pagination = document.getElementById('emlist_paging');
    const totalPagesDisplay = document.getElementById('totalPagesDisplay');

    if (!tableBody) {
        console.error('employeeTableBody 요소를 찾을 수 없습니다.');
        return;
    }

    // 모든 tr 요소를 선택합니다.
    const rows = Array.from(tableBody.getElementsByTagName('tr'));
    const totalRows = rows.length;
    const totalPages = Math.ceil(totalRows / rowsPerPage);
    let currentPage = 1;

    // 페이지 표시 함수
    function showPage(page) {
        currentPage = page;
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        rows.forEach((row, index) => {
            if (index >= start && index < end) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });

        updatePagination();
    }

    // 페이지 네비게이션 업데이트 함수
    function updatePagination() {
        // 기존 총 페이지 수 표시 제거
        if (totalPagesDisplay.firstChild) {
            totalPagesDisplay.removeChild(totalPagesDisplay.firstChild);
        }

        // 총 페이지 수 표시 추가
        const span = document.createElement('span');
        span.textContent = `총 페이지: ${totalPages}`;
        totalPagesDisplay.appendChild(span);

        // << 버튼 활성화/비활성화
        const firstBtn = document.getElementById('first-page');
        if (currentPage === 1) {
            firstBtn.parentElement.classList.add('disabled');
        } else {
            firstBtn.parentElement.classList.remove('disabled');
        }

        // < 버튼 활성화/비활성화
        const prevBtn = document.getElementById('prev-page');
        if (currentPage === 1) {
            prevBtn.parentElement.classList.add('disabled');
        } else {
            prevBtn.parentElement.classList.remove('disabled');
        }

        // > 버튼 활성화/비활성화
        const nextBtn = document.getElementById('next-page');
        if (currentPage === totalPages) {
            nextBtn.parentElement.classList.add('disabled');
        } else {
            nextBtn.parentElement.classList.remove('disabled');
        }

        // >> 버튼 활성화/비활성화
        const lastBtn = document.getElementById('last-page');
        if (currentPage === totalPages) {
            lastBtn.parentElement.classList.add('disabled');
        } else {
            lastBtn.parentElement.classList.remove('disabled');
        }
    }

    // 버튼 클릭 이벤트 설정
    const firstBtn = document.getElementById('first-page');
    const prevBtn = document.getElementById('prev-page');
    const nextBtn = document.getElementById('next-page');
    const lastBtn = document.getElementById('last-page');

    if (firstBtn && prevBtn && nextBtn && lastBtn) {
        firstBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (currentPage !== 1) {
                showPage(1);
            }
        });

        prevBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (currentPage > 1) {
                showPage(currentPage - 1);
            }
        });

        nextBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (currentPage < totalPages) {
                showPage(currentPage + 1);
            }
        });

        lastBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (currentPage !== totalPages) {
                showPage(totalPages);
            }
        });
    }

    // 초기 페이지 표시
    showPage(1);
});

function openEmpInfo(empidx) {
	fetch('./admin_employee_detail/' + empidx, {
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
	}
	else {
		USER_PHOTO.innerHTML = '';
	}
	prev_file.value = detailData.emp_photo;
	full_name.value = detailData.emp_flnm;
	employee_number.value = detailData.emp_no;
	birth_day.value = detailData.brdt;
	email_address.value = detailData.emp_eml_addr;
	telephone_number.value = detailData.emp_telno;
	account_status.value = detailData.acnt_stts;
	account_lock.value = detailData.acnt_lck_yn;
	
	employee_company.value = detailData.ogdp_inst_nm;
	emp_department.value = detailData.ogdp_dept_nm;
	employee_major.value = detailData.mjr;
	jbgd_name.value = detailData.jbgd_nm;
	edu_crtfct_no.value = detailData.edu_crtfct_no;
	edu_crtfct_issu_ymd.value = detailData.edu_crtfct_issu_ymd;
	regist_date.value = detailData.reg_dt;
	
	employee_zipcode.value = detailData.emp_zip;
	employee_address.value = detailData.emp_addr;
	detail_address.value = detailData.emp_daddr;
	
	dlng_bank_nm.value = detailData.dlng_bank_nm;
	dlng_actno.value = detailData.dlng_actno;
	dpstr_nm.value = detailData.dpstr_nm;
}

//교직원 사용자 상세정보 수정 기능
function update_emuserdata(){
	if (confirm("정말로 정보를 수정하시겠습니까?")) {
		emuser_detail_frm.submit();
	}
}

