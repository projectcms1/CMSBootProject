// 상담 리스트 페이징 처리
document.addEventListener('DOMContentLoaded', function() {
	
	// 상담 내역 상세보기 모달 내부 ID
	//const accordionContainer = document.getElementById('counsel_accordion');
	
	// 상세 내역 데이터 저장
	let detailData = [];
	
	// 상담 내역 상세보기 AJAX apthemaksemfrl
	function openDetailModal(aply_sn) {
		fetch('./admin_counsel_detail/' + aply_sn, {
			method : "POST",
			headers : { "content-type" : "application/x-www-form-urlencoded" }
		}).then(function(result_data) {
			return result_data.text();
		}).then(function(result_res) {
			detailData = result_res;
			makeOpeningModal();
		}).catch(function(error) {
			alert("통신 오류 발생!");
		});
	}
	
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
