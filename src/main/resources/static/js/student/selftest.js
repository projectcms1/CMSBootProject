document.addEventListener("DOMContentLoaded", () => {
    const modalOpenButtons = document.querySelectorAll('.modal-button');
    const resultOpenButtons = document.querySelectorAll('.result-button');

    let currentQuestionIndex = 0;
    let questions = []; // 질문 배열
    let selectedTestNo = ""; // 선택 검사 번호
    let results = [];
    const responses = {};
    
    const inspNameClass = document.getElementsByClassName("test-name");
    let currentInspName = "";

    const questionNumberElement = document.getElementById('question-number');
    const questionTotalNumberElement = document.getElementById('total-questions');
    const questionTextElement = document.getElementById('question-text');
    const surveyForm = document.getElementById('survey-form');
    const surveyOptions = document.getElementById('survey-options');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

	const resultQuestionTag = document.getElementById("result-question-list");

	function openTestingModal(testNumber) {
		// Modal Open 시 데이터 초기화
		currentQuestionIndex = 0;
		questions = [];
		results = [];
		for (const key in responses) {
			delete responses[key];
		}
		selectedTestNo = testNumber;
		
		fetch('./selftest_detail_info/' + selectedTestNo, {
			method : "POST",
			headers : { "content-type" : "application/x-www-form-urlencoded" }
		}).then(function(response) {
			return response.json();
		}).then(function(data) {
			if (data.QitemData == "error") {
				alert("오류가 발생하였습니다.");
			}
			else {
				questions = data.QitemData;
				updateQuestion();
			}
		}).catch(function() {
			alert("오류 발생!");
		location.href = '/blank';
		});
	}
	
	function openResultModal(testNumber) {
		results = [];
		fetch('./selftest_result/' + testNumber, {
			method : "GET",
			headers : { "content-type" : "application/x-www-form-urlencoded" }
		}).then(function(response) {
			return response.json();
		}).then(function(data) {
			if (data.insp_dt == "error") {
				alert("해당 심리검사를 진행한 기록이 없습니다.");
				location.reload();
			}
			else {
				document.getElementById("test-title").textContent = currentInspName;
				document.getElementById("test-date").textContent = data['insp_dt'];
				document.getElementById("test-expln").innerHTML = data['expln_cn'];
				document.getElementById("user-testScore").textContent = data['myScore'];
				results = data['ResponData'];
				printResultModal();
			}
		}).catch(function() {
			alert("오류 발생!");
			location.href = '/blank';
		});
	}

    function updateQuestion() {
        const question = questions[currentQuestionIndex];
        questionNumberElement.textContent = `0${currentQuestionIndex + 1}`;
		questionTotalNumberElement.textContent = `| 총 ${questions.length} 문항`;
        questionTextElement.textContent = question['qitem_flnm'];

		surveyOptions.innerHTML = "";
		var radioLabelTag = "";
		question['qitem_answer'].forEach(function(data) {
			radioLabelTag += `
					<label class="option">
						<input type="radio" name="response" value="${data.ans_no}" data-score="${data.scr}">
						<span>${data.ans_flnm}<br><small>${data.scr}점</small></span>
					</label>`;
		});
		surveyOptions.innerHTML = radioLabelTag;

        // 기존의 선택을 해제하고 이전에 선택한 값을 표시
        surveyForm.reset();
        const savedResponse = responses[question['qitem_no']];
        if (savedResponse) {
            const selectedOption = surveyForm.querySelector(`input[value="${savedResponse}"]`);
            if (selectedOption) {
                selectedOption.checked = true;
            }
        }

        // 첫 번째 문항에서는 "이전" 버튼을 숨기고 "다음" 버튼을 오른쪽에 배치
        if (currentQuestionIndex === 0) {
            prevBtn.style.display = 'none';
            nextBtn.style.width = '100%';  // 다음 버튼을 전체 너비로
        } else {
            prevBtn.style.display = 'inline-block';
            nextBtn.style.width = '48%';  // 다음 버튼 너비 조정
        }

        // 마지막 문항에서는 "다음" 버튼을 "저장"로 변경
        nextBtn.textContent = currentQuestionIndex === questions.length - 1 ? '저장' : '다음';
    }

    function saveResponse() {
        const selectedOption = surveyForm.querySelector('input[name="response"]:checked');
        if (selectedOption) {
            const question = questions[currentQuestionIndex];
            responses[question['qitem_no']] = { value: selectedOption.value, score: selectedOption.dataset.score }
        }
    }

    prevBtn.addEventListener('click', () => {
        saveResponse();
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            updateQuestion();
        }
    });

    nextBtn.addEventListener('click', () => {
        saveResponse();
        // 선택된 답변이 없으면 경고 메시지 표시
        const selectedOption = surveyForm.querySelector('input[name="response"]:checked');
        if (!selectedOption) {
            alert("응답을 선택해 주세요.");
            return; // 아무 것도 선택되지 않았다면 함수 종료
        }

        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            updateQuestion();
        } else {
            // 데이터를 서버로 전송
            if (confirm("선택한 내용으로 저장하시겠습니까?")) {
	            // 여기에서 실제로 데이터를 서버에 전송하는 코드를 추가합니다.
	            insertTestResult(responses);
            }
        }
    });

	function printResultModal() {
		resultQuestionTag.innerHTML = "";
		var htmlcode = "";
		results.forEach((data, node) => {
			htmlcode += `
					<li class="list-group-item">
						<div class="question">질문 ${node+1}. ${data.qitem_flnm}</div>
						<div class="answer-score">
							<div class="answer">${data.ans_flnm}</div>
							<div class="score">${data.scr}점</div>
						</div>
					</li>`
		});
		resultQuestionTag.innerHTML = htmlcode;
	}

	function insertTestResult(userData) {
		fetch('./selftest_result/' + selectedTestNo, {
			method : "POST",
			headers : { "content-type" : "application/json" },
			body : JSON.stringify(userData)
		}).then(function(response) {
			return response.text();
		}).then(function(data) {
			if (data == "ok") {
				alert("결과보기를 눌러서 확인해주세요!");
				location.reload();
			}
			else {
				alert("오류가 발생하여 저장되지 않았습니다.");
			}
		}).catch(function() {
			alert("오류 발생!");
			location.href = '/blank';
		});
	}

    modalOpenButtons.forEach((button, node) => {
		button.addEventListener('click', () => {
			currentInspName = inspNameClass[node].innerText;
			openTestingModal(button.value);
		})
	})
    resultOpenButtons.forEach((button, node) => {
		button.addEventListener('click', () => {
			currentInspName = inspNameClass[node].innerText;
			openResultModal(button.value);
		})
	})
});