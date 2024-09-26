function madalDataSet(aply_sn){
	var url;
	if(window.location.href.includes("?")){
		url=window.location.href.substring(0, window.location.href.indexOf("?"));
	}
	else{
		url=window.location.href;
	}

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
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="${index === 0}" aria-controls="collapse${index}">
                    ${index + 1}회차
                </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}" data-bs-parent="#counsel_accordion">
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
                        <label class="col-sm-2 col-form-label">상담상태</label>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" value="${item.stts_cd}" disabled>
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
    <form id="lastcounsel" method="post" action="/employee/empy_counsel_confirm_add">
        <div class="accordion-item">
            <h2 class="accordion-header" id="heading${index}">
                <button class="accordion-button ${index === 0 ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="${index === 0}" aria-controls="collapse${index}">
                    ${index + 1}회차
                </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse show aria-labelledby="heading${index}" data-bs-parent="#counsel_accordion">
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
                        <label class="col-sm-2 col-form-label">상담상태</label>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" value="${item.stts_cd}" disabled>
                        </div>
                    </div>
                    <div class="row mb-3" align="center">
                        <label for="inputPassword" class="col-sm-2 col-form-label">상담결과</label>
                        <div class="col-sm-10" align="left">
                            <textarea id="dscsn_cn" name="dscsn_cn" class="form-control" style="height: 200px; width:80%;" placeholder="상담 결과를 입력해주세요"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-footer" style="justify-content: left !important;" align="center">
                <div class="col-sm-2 col-form-label">
		        	<input type="checkbox" id="counsel_extend" name="counsel_extend" style="zoom:2.0; vertical-align: middle;" onclick="counsel_extend_check(this.checked)"> 상담연장여부
                </div>
                <label for="inputDate" class="col-sm-1 col-form-label">상담일자</label>
			    <div class="col-sm-3">
			        <input type="date" class="form-control" id="rsvt_dt" name="rsvt_dt" disabled>
			    </div>
			    <label for="inputTime" class="col-sm-1 col-form-label">상담시간</label>
			    <div class="col-sm-3">
			    	<select class="form-select" id="hr_se" name="hr_se" disabled>
						<option value="" selected="selected">상담시간을 선택해주세요</option>
						<option value="1">1교시(09:00~10:15)</option>
						<option value="2">2교시(10:30~11:45)</option>
						<option value="3">3교시(13:00~14:15)</option>
						<option value="4">4교시(14:30~15:45)</option>
						<option value="5">5교시(16:00~17:15)</option>
					</select>
				</div>
				<input type="hidden" name="counsel_extend_ck" value="N">
				<input type="hidden" name="aply_sn" value="${item.aply_sn}">
				<input type="hidden" name="emp_no" value="${item.emp_no}">
				<input type="hidden" name="stdnt_flnm" value="${item.stdnt_flnm}">
				<input type="hidden" name="stdnt_no" value="${item.stdnt_no}">
				<input type="hidden" name="dscsn_knd" value="${item.dscsn_knd}">
				<input type="hidden" name="dscsn_mthd" value="${item.dscsn_mthd}">
				<input type="hidden" name="plc" value="${item.plc}">
				<button type="button" class="btn btn-primary" onclick="counsel_finish()" style="margin-left:30px;">결과저장</button>
            </div>
        </div>
    </form>`
    ;
}

function makeModal(detailData, dataLength) {
	counsel_accordion.innerHTML = '';
	
	document.querySelector("input[name='stdnt_flnm']").value=detailData.counsel_detail[0]['stdnt_flnm'];
	document.querySelector("input[name='stdnt_no']").value=detailData.counsel_detail[0]['stdnt_no'];
	
	detailData.counsel_detail.forEach(function(data, node) {
		if(node+1!=dataLength){
			counsel_accordion.innerHTML += createAccordionItem(node, data);		
		}
		else{
			counsel_accordion.innerHTML += createLastAccordionItem(node, data);	
		}
	});
	
	//달력 선택 날짜 당일부터 2달 후까지로 설정
	let today=new Date();
	let endday=new Date();
	endday.setMonth(endday.getMonth()+2);
	endday.setDate(endday.getDate()-1);
	document.getElementById("rsvt_dt").setAttribute("min", today.toISOString().substring(0,10));
	document.getElementById("rsvt_dt").setAttribute("max", endday.toISOString().substring(0,10));
	
}