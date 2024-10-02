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
