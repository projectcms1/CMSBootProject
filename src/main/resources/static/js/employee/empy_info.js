function personal_input(){
	emp_eml_addr.disabled=false;
	emp_telno.disabled=false;
	emp_telno.value=emp_telno.value.substring(0,3)+ emp_telno.value.substring(4, 8) + emp_telno.value.substring(9);
	//010-0000-0000 형식으로 된 전화번호를 숫자만 남기도록 바꿔주는 라인
	
	emp_zip.disabled=true;
	emp_addr.disabled=true;
	emp_daddr.disabled=true;
	emp_addr_search_btn.disabled=true;
	
	dlng_bank_nm.disabled=true;
	dlng_actno.disabled=true;
	dpstr_nm.disabled=true;
}

function personal_save(){ 
	var regex_email=/^[0-9a-zA-Z]*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]*$/i;	
	//아이디 부분: 숫자 및 영문자만 가능, 도메인: 숫자, 영문자로 시작하며 중간에 숫자, 영문자 및 -_\.이  들어갈 수 있고, . 이후 영문자가 들어가는 형식 
	
	var email=emp_eml_addr.value;
	var tel=emp_telno.value;
	
	if(!regex_email.test(email)){
		alert("이메일을 형식에 맞게 입력해주세요.");
	}
	if(tel.length!=11){
		alert("전화번호 11자리 숫자를 모두 입력해주세요.");
	}
	else{
		alert("개인정보가 정상적으로 변경되셨습니다.")
		personal_info.submit();
	}
}

function addr_input(){
	emp_eml_addr.disabled=true;
	emp_telno.disabled=true;

	emp_zip.disabled=false;
	emp_zip.readOnly=true;
	emp_addr.disabled=false;
	emp_addr.readOnly=true;
	emp_daddr.disabled=false;
	emp_addr_search_btn.disabled=false;
	
	
	dlng_bank_nm.disabled=true;
	dlng_actno.disabled=true;
	dpstr_nm.disabled=true;
}

function addr_save(){
	addr_info.submit();
}

function bank_input(){
	emp_zip.disabled=true;
	emp_addr.disabled=true;
	emp_daddr.disabled=true;
	emp_addr_search_btn.disabled=true;
	
	emp_eml_addr.disabled=true;
	emp_telno.disabled=true;
	
	dlng_bank_nm.disabled=false;
	dlng_actno.disabled=false;
	dpstr_nm.disabled=false;
	
}

function bank_save(){
	bank_info.submit();
}
