document.addEventListener("DOMContentLoaded", () => {
    const questions = [
        {
            text: "평소에는 아무렇지도 않던 일들이 괴롭고 귀찮게 느껴졌다.",
            name: "q1"
        },
        {
            text: "스트레스를 받을 때 쉽게 흥분하거나 화를 내는 편이다.",
            name: "q2"
        },
        {
            text: "일을 계획적으로 처리하는 것을 좋아한다.",
            name: "q3"
        }
    ];

    let currentQuestionIndex = 0;
    const responses = {};

    const questionNumberElement = document.getElementById('question-number');
    const questionTextElement = document.getElementById('question-text');
    const surveyForm = document.getElementById('survey-form');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    function updateQuestion() {
        const question = questions[currentQuestionIndex];
        questionNumberElement.textContent = `0${currentQuestionIndex + 1}`;
        questionTextElement.textContent = question.text;

        // 기존의 선택을 해제하고 이전에 선택한 값을 표시
        surveyForm.reset();
        const savedResponse = responses[question.name];
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

        // 마지막 문항에서는 "다음" 버튼을 "제출"로 변경
        nextBtn.textContent = currentQuestionIndex === questions.length - 1 ? '제출' : '다음';
    }

    function saveResponse() {
        const selectedOption = surveyForm.querySelector('input[name="response"]:checked');
        if (selectedOption) {
            const question = questions[currentQuestionIndex];
            responses[question.name] = selectedOption.value;
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
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            updateQuestion();
        } else {
            // 데이터를 서버로 전송
            console.log("수집된 응답 데이터:", responses);
            alert("응답이 제출되었습니다!");
            // 여기에서 실제로 데이터를 서버에 전송하는 코드를 추가합니다.
        }
    });

    updateQuestion();  // 초기 문항을 설정
});
