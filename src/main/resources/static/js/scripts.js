// 모든 카테고리 버튼에 대해 클릭 이벤트를 설정합니다.
document.querySelectorAll('.category').forEach(button => {
    button.addEventListener('click', function () {
        // 모든 카테고리 버튼에서 'active' 클래스를 제거합니다.
        document.querySelectorAll('.category').forEach(btn => btn.classList.remove('active'));

        // 클릭한 카테고리 버튼에 'active' 클래스를 추가합니다.
        this.classList.add('active');

        // 모든 공지사항 리스트를 숨기고 전환 효과 추가
        document.querySelectorAll('.notice-list').forEach(list => {
            list.classList.add('hidden');
            list.classList.remove('fade-in'); // 이전에 적용된 전환 효과 제거
        });

        // 클릭한 카테고리에 해당하는 리스트를 표시하고 전환 효과 추가
        const category = this.getAttribute('data-category');
        const activeList = document.getElementById(category);
        activeList.classList.remove('hidden');
        activeList.classList.add('fade-in'); // 전환 효과 추가
    });
});
