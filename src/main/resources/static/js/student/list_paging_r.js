document.addEventListener('DOMContentLoaded', function() {
    const rowsPerPage = 5; // 한 페이지당 표시할 행의 수
    const tableBody = document.querySelector('#demo-table_rest tbody');
    const pagination = document.getElementById('std_rescounsel_list_paging');
    const rows = Array.from(tableBody.getElementsByTagName('tr'));
    const totalRows = rows.length;
    const totalPages = Math.ceil(totalRows / rowsPerPage);
    let currentPage = 1;
    const maxPageNumbers = 5;

    // 페이지 표시 함수
    function showPage(page) {
        currentPage = page;
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        rows.forEach((row, index) => {
            row.style.display = (index >= start && index < end) ? '' : 'none';
        });

        updatePagination();
    }

    // 페이지 네비게이션 업데이트 함수
    function updatePagination() {
        const existingPageNumbers = pagination.querySelectorAll('.page-number');
        existingPageNumbers.forEach(btn => btn.remove());

        let startPage = 1;
        let endPage = totalPages;

        if (totalPages > maxPageNumbers) {
            const half = Math.floor(maxPageNumbers / 2);
            if (currentPage <= half + 1) {
                endPage = maxPageNumbers;
            } else if (currentPage + half >= totalPages) {
                startPage = totalPages - maxPageNumbers + 1;
            } else {
                startPage = currentPage - half;
                endPage = currentPage + half;
                if (maxPageNumbers % 2 === 0) {
                    endPage -= 1;
                }
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            const li = document.createElement('li');
            li.classList.add('page-number');

            const a = document.createElement('a');
            a.href = '#';
            a.textContent = i;
            a.dataset.page = i;

            if (i === currentPage) {
                li.classList.add('act');
            }

            a.addEventListener('click', function(e) {
                e.preventDefault();
                const selectedPage = parseInt(this.dataset.page);
                if (selectedPage !== currentPage) {
                    showPage(selectedPage);
                }
            });

            pagination.insertBefore(li, pagination.children[2]); // 첫 번째와 이전 버튼 뒤에 추가
        }

        updateNavigationButtons();
    }

    // 네비게이션 버튼 활성화/비활성화 업데이트
    function updateNavigationButtons() {
        const firstBtn = document.getElementById('first-rpage');
        const prevBtn = document.getElementById('prev-rpage');
        const nextBtn = document.getElementById('next-rpage');
        const lastBtn = document.getElementById('last-rpage');

        firstBtn.classList.toggle('disabled', currentPage === 1);
        prevBtn.classList.toggle('disabled', currentPage === 1);
        nextBtn.classList.toggle('disabled', currentPage === totalPages);
        lastBtn.classList.toggle('disabled', currentPage === totalPages);
    }

    // 버튼 클릭 이벤트 설정
    document.getElementById('first-rpage').addEventListener('click', function(e) {
        e.preventDefault();
        if (currentPage !== 1) {
            showPage(1);
        }
    });

    document.getElementById('prev-rpage').addEventListener('click', function(e) {
        e.preventDefault();
        if (currentPage > 1) {
            showPage(currentPage - 1);
        }
    });

    document.getElementById('next-rpage').addEventListener('click', function(e) {
        e.preventDefault();
        if (currentPage < totalPages) {
            showPage(currentPage + 1);
        }
    });

    document.getElementById('last-rpage').addEventListener('click', function(e) {
        e.preventDefault();
        if (currentPage !== totalPages) {
            showPage(totalPages);
        }
    });

    // 초기 페이지 표시
    showPage(1);
});
