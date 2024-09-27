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


//공지 검색
function noticelist_search() {

    var frmSearch = document.getElementById('frmSearch');
    var inputState = frmSearch.elements['search_part'];
    var searchInput = frmSearch.elements['search_word'];
    
    frmSearch.method = "GET";
    frmSearch.action = "./noticemod?search_part=" + inputState.value + "&search_word=" + searchInput.value;
    frmSearch.submit();
    return false;
}




//공지 리스트 페이징 처리
document.addEventListener('DOMContentLoaded', function() {
    const rowsPerPage = 10; // 한 페이지당 표시할 행의 수
    const tableBody = document.getElementById('noticeTableBody');
    const pagination = document.getElementById('emlist_paging');
    const totalPagesDisplay = document.getElementById('totalPagesDisplay');

    if (!tableBody) {
        console.error('noticeTableBody 요소를 찾을 수 없습니다.');
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
	fetch('./admin_notice_detail/' + empidx, {
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

	prev_file.value = detailData.emp_photo;
	full_name.value = detailData.emp_flnm;
	notice_number.value = detailData.emp_no;
	birth_day.value = detailData.brdt;
	email_address.value = detailData.emp_eml_addr;
	telephone_number.value = detailData.emp_telno;
	account_status.value = detailData.acnt_stts;
	account_lock.value = detailData.acnt_lck_yn;
	
	notice_company.value = detailData.ogdp_inst_nm;
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

//공지사항 상세정보 수정 기능
function update_noticedata(){
	if (confirm("정말로 정보를 수정하시겠습니까?")) {
		notcie_detail_frm.submit();
	}
}

