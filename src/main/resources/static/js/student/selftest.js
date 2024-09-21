let questions = []; // 질문 배열

function openTestingModal(testNumber) {
	fetch('./selftest_detail_info/' + testNumber, {
		method : "POST",
		headers : { "content-type" : "application/json" }
	}).then(function(response) {
		return response.json();
	}).then(function(data) {
		console.log(data.QitemData);
		questions = data.QitemData;
	}).catch(function(error) {
		console.log(error)
	});
}

// 검사 모달 내부 JS
document.addEventListener("DOMContentLoaded", () => {
	let currentQuestionIndex = 0;
	const responses = {};

	// 모달 내용 업데이트
	function updateModalContent() {
	    const question = questions[currentQuestionIndex];
	    document.getElementById('question-number').textContent = `0${currentQuestionIndex + 1}`;
	    document.getElementById('total-questions').textContent = `| 총 ${questions.length} 문항`;
	    document.getElementById('question-text').textContent = question.qitem_flnm;

	    const surveyForm = document.getElementById('survey-form');
	    surveyForm.innerHTML = ''; // 기존 옵션 초기화
	    question.qitem_answer.forEach(answer => {
	        const label = document.createElement('label');
	        label.className = 'option';
	        label.innerHTML = `
	            <input type="radio" name="response" value="${answer.ans_no}">
	            <span>${answer.ans_flnm}</span>
	        `;
	        surveyForm.appendChild(label);
	    });
	    updateNavigationButtons();
	}

	// 이전 및 다음 버튼 처리
	document.getElementById('prev-btn').addEventListener('click', () => {
	    if (currentQuestionIndex > 0) {
	        currentQuestionIndex--;
	        updateModalContent();
	    }
	});

	document.getElementById('next-btn').addEventListener('click', () => {
	    const selectedOption = document.querySelector('input[name="response"]:checked');
	    if (selectedOption) {
	        responses[questions[currentQuestionIndex].qitem_no] = selectedOption.value;
	    }
	    if (currentQuestionIndex < questions.length - 1) {
	        currentQuestionIndex++;
	        updateModalContent();
	    } else {
	        // 최종 제출 처리 및 결과 보여주기
	        showResults();
	    }
	});

	// 결과 보여주기
	function showResults() {
	    const totalScore = Object.values(responses).reduce((total, ansNo) => {
	        const question = questions.find(q => q.qitem_answer.some(a => a.ans_no === ansNo));
	        const answer = question.qitem_answer.find(a => a.ans_no === ansNo);
	        return total + answer.scr; // 점수 합산
	    }, 0);

	    // 결과 해석 처리
	    const result = determineResult(totalScore); // 결과를 결정하는 함수 호출
	    alert(`결과 점수: ${totalScore}\n${result.expln_cn}`); // 결과 메시지
	}

	// 결과 결정 함수 (예시)
	function determineResult(score) {
	    if (score <= 42) {
	        return { expln_cn: '일반 사용자군' }; // 실제 해석 내용 추가
	    } else if (score <= 53) {
	        return { expln_cn: '잠재적 위험사용자 1군' }; // 실제 해석 내용 추가
	    }
	    // 추가 조건 및 해석 내용 작성
	}
});