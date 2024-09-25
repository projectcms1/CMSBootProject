//상담 내역 검색
function counsellist_search() {

    var frmSearch = document.getElementById('frmSearch');
    var inputState = frmSearch.elements['search_part'];
    var searchInput = frmSearch.elements['search_word'];
    
    frmSearch.method = "GET";
    frmSearch.action = "./allcounselmod?search_part=" + inputState.value + "&search_word=" + searchInput.value;
    frmSearch.submit();
    return false;
}




// 상담 내역 상세보기 모달 내부 ID
const accordionContainer = document.getElementById('counsel_accordion');
const studentNumber = document.getElementById('std_no');
const studentName = document.getElementById('std_nm');
const employeeNumber = document.getElementById('emp_no');
const employeeName = document.getElementById('emp_nm');

// 상세 내역 데이터 저장
let detailData = [];

// 상담 내역 상세보기 AJAX
function openDetailModal(aply_sn) {
	fetch('./admin_counsel_detail/' + aply_sn, {
		method : "POST",
		headers : { "content-type" : "application/x-www-form-urlencoded" }
	}).then(function(result_data) {
		return result_data.json();
	}).then(function(result_res) {
		if (result_res.length == 0) {
			alert("잘못된 접근입니다.");
		}
		else {
			detailData = result_res;
		}
		makeOpeningModal();
	}).catch(function(error) {
		alert("통신 오류 발생!");
	});
}

// 상담 리스트 페이징 처리
document.addEventListener('DOMContentLoaded', function() {
	
	const rowsPerPage = 10; // 한 페이지당 표시할 행의 수
    const tableBody = document.getElementById('counselTableBody');
    const pagination = document.getElementById('counsel_list_paging');
    const totalPagesDisplay = document.getElementById('totalPagesDisplay');

    if (!tableBody) {
        console.error('counselTableBody 요소를 찾을 수 없습니다.');
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
            firstBtn.classList.add('disabled');
        } else {
            firstBtn.classList.remove('disabled');
        }

        // < 버튼 활성화/비활성화
        const prevBtn = document.getElementById('prev-page');
        if (currentPage === 1) {
            prevBtn.classList.add('disabled');
        } else {
            prevBtn.classList.remove('disabled');
        }

        // > 버튼 활성화/비활성화
        const nextBtn = document.getElementById('next-page');
        if (currentPage === totalPages) {
            nextBtn.classList.add('disabled');
        } else {
            nextBtn.classList.remove('disabled');
        }

        // >> 버튼 활성화/비활성화
        const lastBtn = document.getElementById('last-page');
        if (currentPage === totalPages) {
            lastBtn.classList.add('disabled');
        } else {
            lastBtn.classList.remove('disabled');
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

function makeOpeningModal() {
	accordionContainer.innerHTML = ''; // 기존 내용 초기화
	
	studentNumber.value = detailData[0].stdnt_no;
	studentName.value = detailData[0].stdnt_flnm;
	employeeNumber.value = detailData[0].emp_no;
	employeeName.value = detailData[0].emp_flnm;
	
	detailData.forEach((counsel, index) => {
	  const sessionNumber = index + 1;
	  const accordionItem = `
	    <div class="accordion-item">
	      <h2 class="accordion-header" id="heading_${sessionNumber}">
	        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_${sessionNumber}" aria-expanded="true" aria-controls="collapse_${sessionNumber}">
	          ${sessionNumber}회차
	        </button>
	      </h2>
	      <div id="collapse_${sessionNumber}" class="accordion-collapse collapse" aria-labelledby="heading_${sessionNumber}" data-bs-parent="#counsel_accordion">
	        <div class="accordion-body">
	          <div class="row mb-3 align-items-center">
	            <label class="col-sm-2 col-form-label">상담일자</label>
	            <div class="col-sm-3">
	              <input type="text" class="form-control" value="${counsel.rsvt_dt}" disabled>
	            </div>
	            <label class="col-sm-2 col-form-label">상담시간</label>
	            <div class="col-sm-3">
	              <input type="text" class="form-control" value="${counsel.hr_se}교시" disabled>
	            </div>
	          </div>
	
	          <div class="row mb-3 align-items-center">
	            <label class="col-sm-2 col-form-label">상담종류</label>
	            <div class="col-sm-3">
	              <select class="form-select" disabled>
	                <option value="학업" ${counsel.dscsn_knd === '학업' ? 'selected' : ''}>학업</option>
	                <option value="진로" ${counsel.dscsn_knd === '진로' ? 'selected' : ''}>진로</option>
	                <option value="심리" ${counsel.dscsn_knd === '심리' ? 'selected' : ''}>심리</option>
	              </select>
	            </div>
	            <label class="col-sm-2 col-form-label">상담방식</label>
	            <div class="col-sm-3">
	              <select class="form-select" disabled>
	                <option value="대면" ${counsel.dscsn_mthd === '대면' ? 'selected' : ''}>대면</option>
	                <option value="채팅" ${counsel.dscsn_mthd === '채팅' ? 'selected' : ''}>채팅</option>
	                <option value="화상" ${counsel.dscsn_mthd === '화상' ? 'selected' : ''}>화상</option>
	                <option value="전화" ${counsel.dscsn_mthd === '전화' ? 'selected' : ''}>전화</option>
	              </select>
	            </div>
	          </div>
	
	          <div class="row mb-3 align-items-center">
	            <label class="col-sm-2 col-form-label">상담장소</label>
	            <div class="col-sm-3">
	              <input type="text" class="form-control" value="${counsel.plc}" disabled>
	            </div>
	            <label class="col-sm-2 col-form-label">상담상태</label>
	            <div class="col-sm-3">
	              <select class="form-select" disabled>
	                <option value="완료" ${counsel.stts_cd === '완료' ? 'selected' : ''}>완료</option>
	                <option value="취소" ${counsel.stts_cd === '취소' ? 'selected' : ''}>취소</option>
	                <option value="승인" ${counsel.stts_cd === '승인' ? 'selected' : ''}>승인</option>
	                <option value="미승인" ${counsel.stts_cd === '미승인' ? 'selected' : ''}>미승인</option>
	              </select>
	            </div>
	          </div>
	        </div>
	      </div>
	    </div>
	  `;
	
	  accordionContainer.innerHTML += accordionItem;
	});
}