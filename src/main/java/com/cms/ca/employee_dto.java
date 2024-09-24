package com.cms.ca;

import lombok.Data;

@Data
public class employee_dto {

	private Integer user_no;
	private String emp_no, emp_flnm, emp_eml_addr, emp_telno, emp_zip, emp_addr, emp_daddr, emp_photo;
	
	private String edu_crtfct_no, edu_crtfct_issu_ymd, brdt, dlng_bank_nm, dlng_actno, dpstr_nm;
	private String ogdp_inst_nm, ogdp_dept_nm, jbgd_nm, mjr, acnt_stts, mng_authrt;
	
	public void setDashInTelNumber() {
		this.emp_telno = this.emp_telno.substring(0, 3) + "-" + this.emp_telno.substring(3, 7) + "-" + this.emp_telno.substring(7);
	}
	
	public void setDateWithDot() {
		this.edu_crtfct_issu_ymd = this.edu_crtfct_issu_ymd.substring(0, 4) + "." + this.edu_crtfct_issu_ymd.substring(4, 6) + "." + this.edu_crtfct_issu_ymd.substring(6,8);
	}
}
