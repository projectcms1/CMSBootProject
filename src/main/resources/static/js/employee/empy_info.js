function personal_input(){
	emp_eml_addr.disabled=false;
	emp_telno.disabled=false;
	
	emp_zip.disabled=true;
	emp_addr.disabled=true;
	emp_daddr.disabled=true;
	emp_addr_search_btn.disabled=true;
	
	dlng_bank_nm.disabled=true;
	dlng_actno.disabled=true;
	dpstr_nm.disabled=true;
}

function personal_save(){

	personal_info.submit();
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
