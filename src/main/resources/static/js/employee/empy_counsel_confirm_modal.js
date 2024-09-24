function madalDataSet(aply_sn){
	var url=window.location.href;
	fetch(url+"ok.do?aply_sn="+aply_sn)
	    .then(res => res.json()) //응답 결과를 json으로 파싱
	    .then(data => {
			makeModal(data, data.counsel_detail.length);
		})
	    .catch(err => { // 오류 발생시 오류를 담아서 보여줌
	        console.log('Fetch Error', err);
	        location.href='/blank';
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
                            <textarea class="form-control" style="height: 200px;" placeholder="상담 결과는 작성자만 볼 수 있습니다." disabled>${item.dscsn_cn}</textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}


function createLastAccordionItem(index, item) {
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
                            <textarea id="counsel_result" class="form-control" style="height: 200px;" placeholder="상담 결과를 입력해주세요"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-footer" style="justify-content: left !important;>
        	<div class="row mb-3" align="center">
        	<input type="checkbox" value="상담 연장" name="counsel_extend">
                <label for="inputDate" class="col-sm-2 col-form-label">상담일자</label>
                <div class="col-sm-3">
                    <input type="text" class="form-control" value="${item.rsvt_dt}" disabled>
                </div>
                <label for="inputTime" class="col-sm-2 col-form-label">상담시간</label>
                <div class="col-sm-3">
                    <input type="text" class="form-control" value="${item.hr_se}" disabled>
                </div>
            </div>
        </div>
		<button type="button" class="btn btn-primary" th:onclick="counsel_finish()" style="margin-right:0;">결과저장</button>
    `;
}

function makeModal(detailData, dataLength) {
	counsel_accordion.innerHTML = '';
	
	document.querySelector("input[name='stdnt_flnm']").value=detailData.counsel_detail[0]['stdnt_flnm'];
	document.querySelector("input[name='stdnt_no']").value=detailData.counsel_detail[0]['stdnt_no'];
	
	detailData.counsel_detail.forEach(function(data, node) {
		if(node+1!=dataLength){
			console.log(node+1);
			console.log(data.size);
			counsel_accordion.innerHTML += createAccordionItem(node, data);		
		}
		else{
			counsel_accordion.innerHTML += createLastAccordionItem(node, data);	
		}
	});
}