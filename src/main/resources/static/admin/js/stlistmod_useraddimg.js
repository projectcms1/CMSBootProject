// stlistmod에서 사용자 추가시 사용자 이미지 로드하면 미리보기되는 기능 - stlistmod_addusermodal.html과 연계
// 함수 선언이 HTML 로드 이전에 이루어져야 합니다.
function setstuser_img(event) {
	console.log("파일이 선택되었습니다."); // 로그 확인

	var reader = new FileReader();

	reader.onload = function(event) {
		console.log("이미지 로드 완료."); // 로그 확인

		var container = document.querySelector("div#USER_PHOTO");
		container.innerHTML = ""; // div 내부 비움

		var img = document.createElement("img");
		img.setAttribute("src", event.target.result);
		img.setAttribute("width", "80%"); // 원하는 크기로 조절
		img.setAttribute("height", "225px");
		img.classList.add("rounded-4"); // CSS 클래스 추가

		container.appendChild(img);
	};

	reader.readAsDataURL(event.target.files[0]);
}
