//학생 및 교수 사용자 (stcounselmod.html /procounselmod.html) 검색기능 중 소속 드롭박스 스크립트 
function onFilterChange() {
    const filterSelect = document.getElementById('filterSelect');
    const defaultInput = document.getElementById('defaultInput');
    const departmentSelects = document.getElementById('departmentSelects');

    // 선택한 필터에 따라 보여질 항목을 결정
    if (filterSelect.value === 'department') {
        // '소속'을 선택하면 텍스트박스를 숨기고, 소속 드롭다운을 표시
        defaultInput.classList.add('d-none');
        departmentSelects.classList.remove('d-none');
    } else {
        // 그 외에는 텍스트박스를 보여주고, 소속 드롭다운을 숨김
        defaultInput.classList.remove('d-none');
        departmentSelects.classList.add('d-none');
    }
}
