//공지사항 사용자 추가 기능
function add_notice(){
	if(document.querySelector("input[name='emp_flnm']").value==""){
		document.querySelector("input[name='emp_flnm']").focus();
		alert("이름을 입력해주세요.");
	}
	else if(document.querySelector("input[name='brdt']").value==""){
		document.querySelector("input[name='brdt']").focus();
		alert("생년월일을 입력해주세요.");
	}
	else if(document.querySelector("input[name='emp_telno']").value==""){
		document.querySelector("input[name='emp_telno']").focus();
		alert("전화번호를 입력해주세요.");
	}
	else if(document.querySelector("input[name='emp_eml_addr']").value==""){
		document.querySelector("input[name='emp_eml_addr']").focus();
		alert("이메일을 입력해주세요.");
	}
	else if(document.querySelector("input[name='entrance_year']").value==""){
		document.querySelector("input[name='entrance_year']").focus();
		alert("입사년도를 입력해주세요.");
	}
	else if(document.querySelector("input[name='edu_crtfct_no']").value==""){
		document.querySelector("input[name='edu_crtfct_no']").focus();
		alert("교원 자격증 번호를 입력해주세요.");
	}
	else if(document.querySelector("input[name='edu_crtfct_issu_ymd']").value==""){
		document.querySelector("input[name='edu_crtfct_issu_ymd']").focus();
		alert("교원 자격증 발급일자를 입력해주세요.");
	}
	else if(document.querySelector("select[name='ogdp_inst_nm']").value=="대학선택"){
		document.querySelector("select[name='ogdp_inst_nm']").focus();
		alert("소속기관(단과대학)을 선택해주세요.");
	}
	else if(document.querySelector("input[name='jbgd_nm']").value==""){
		document.querySelector("input[name='jbgd_nm']").focus();
		alert("직급을 입력해주세요.");
	}
	else if(document.querySelector("input[name='mjr']").value==""){
		document.querySelector("input[name='mjr']").focus();
		alert("교직(전공)을 선택해주세요.");
	}
	else if(document.querySelector("input[name='emp_zip']").value==""){
		alert("주소를 검색해주세요.");
	}
	else if(document.querySelector("input[name='emp_daddr']").value==""){
		document.querySelector("input[name='emp_daddr']").focus();
		alert("상세주소를 입력해주세요.");
	}
	else if(document.querySelector("input[name='dlng_bank_nm']").value==""){
		document.querySelector("input[name='dlng_bank_nm']").focus();
		alert("은행명을 입력해주세요.");
	}
	else if(document.querySelector("input[name='dlng_actno']").value==""){
		document.querySelector("input[name='dlng_actno']").focus();
		alert("계좌번호를 입력해주세요.");
	}
	else if(document.querySelector("input[name='dpstr_nm']").value==""){
		document.querySelector("input[name='dpstr_nm']").focus();
		alert("예금주를 입력해주세요.");
	}
	else{
		if(confirm("입력하신 정보로 상담을 추가하시겠습니까?")){
			emuser_add_frm.submit();
		}
	}
}
