// 모든 카테고리 버튼에 대해 클릭 이벤트를 설정합니다.
document.querySelectorAll('.category').forEach(button => {
	button.addEventListener('click', function () {
		// 모든 카테고리 버튼에서 'active' 클래스를 제거합니다.
		document.querySelectorAll('.category').forEach(btn => btn.classList.remove('active'));

		// 클릭한 카테고리 버튼에 'active' 클래스를 추가합니다.
		this.classList.add('active');

		// 클릭한 카테고리 확인
		const category = this.getAttribute('data-category');

		// 전체 카테고리가 선택된 경우 모든 공지사항 리스트를 보여줍니다.
		if (category === 'total') {
			document.querySelectorAll('.notice-list').forEach(list => {
				list.classList.remove('hidden');
				list.classList.add('fade-in'); // 전환 효과 추가
			});
		} else {
			// 다른 카테고리가 선택된 경우 해당 카테고리의 리스트만 표시하고 나머지는 숨깁니다.
			document.querySelectorAll('.notice-list').forEach(list => {
				list.classList.add('hidden');
				list.classList.remove('fade-in'); // 이전에 적용된 전환 효과 제거
			});

			// 선택한 카테고리 리스트를 표시하고 전환 효과 추가
			const activeList = document.getElementById(category);
			activeList.classList.remove('hidden');
			activeList.classList.add('fade-in'); // 전환 효과 추가
		}
	});
});

// 수정 버튼 클릭 시 수정 폼 열기
document.querySelectorAll('.edit-btn').forEach(button => {
	button.addEventListener('click', function () {
		const title = this.getAttribute('data-title');
		const date = this.getAttribute('data-date');

		// 폼에 클릭한 공지사항 데이터 입력
		document.getElementById('title').value = title;
		document.getElementById('date').value = date;

		// 수정 폼과 모달 배경 보이기
		document.getElementById('editForm').classList.add('active');
		document.getElementById('modalOverlay').classList.add('active');
	});
});

// 모달 창을 닫기 위해 배경 클릭 시 수정 폼 닫기
document.getElementById('modalOverlay').addEventListener('click', function () {
	document.getElementById('editForm').classList.remove('active');
	document.getElementById('modalOverlay').classList.remove('active');
});