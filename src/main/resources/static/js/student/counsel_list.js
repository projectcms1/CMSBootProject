const accordionContainer = document.getElementById('counsel_accordion');

function list_search() {
	console.log("test");
	frmSearch.method = "GET";
	frmSearch.action = "./std_counsel_list?search_part="
			+ frmSearch.inputState.value
			+ "&search_word="
			+ search_frm.search_word.value;
	return true;
}

function move_page(e) {
	console.log("test" + e);
}

function openDetailModal(cidx) {
	fetch('./counsel_detail_info/' + cidx, {
		method : "POST",
		headers : { "content-type" : "application/json" }
	}).then(function(response) {
		return response.json();
	}).then(function(data) {
		if (data[0] == "error") {
			alert("오류가 발생하였습니다.");
		}
		else {
			makeModal(data);
		}
	}).catch(function() {
		alert("오류 발생!");
		location.href = '/blank';
	});
}

function createAccordionItem(index, item) {
    return `
        <div class="accordion-item">
            <h2 class="accordion-header" id="heading${index}">
                <button class="accordion-button ${index === 0 ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="${index === 0}" aria-controls="collapse${index}">
                    ${index + 1}회차
                </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" aria-labelledby="heading${index}" data-bs-parent="#counsel_accordion">
                <div class="accordion-body">
                    <div class="row mb-3" align="center">
                        <label for="inputDate" class="col-sm-2 col-form-label">상담일자</label>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" value="${item.rsvt_dt}" disabled>
                        </div>
                        <label for="inputTime" class="col-sm-2 col-form-label">상담시간</label>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" value="${item.hr_se}" disabled>
                        </div>
                    </div>
                    <div class="row mb-3" align="center">
                        <label class="col-sm-2 col-form-label">상담종류</label>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" value="${item.dscsn_knd}" disabled>
                        </div>
                        <label class="col-sm-2 col-form-label">상담방식</label>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" value="${item.dscsn_mthd}" disabled>
                        </div>
                    </div>
                    <div class="row mb-3" align="center">
                        <label class="col-sm-2 col-form-label">상담장소</label>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" value="${item.plc}" disabled>
                        </div>
                    </div>
                    <div class="row mb-3" align="center">
                        <label for="inputPassword" class="col-sm-2 col-form-label">상담결과</label>
                        <div class="col-sm-10">
                            <textarea class="form-control" style="height: 200px;" placeholder="상담 결과는 작성자만 볼 수 있습니다." disabled></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function makeModal(detailData) {
	accordionContainer.innerHTML = '';
	
	document.querySelector("#counseler_name").value = detailData[0]['emp_flnm'];
	document.querySelector("#counseler_se").value = detailData[0]['mng_authrt'];
	
	console.log(detailData);
	
	detailData.forEach(function(data, node) {
		accordionContainer.innerHTML += createAccordionItem(node, data);
	});
}