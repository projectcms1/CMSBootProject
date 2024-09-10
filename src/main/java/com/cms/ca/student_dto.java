package com.cms.ca;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
 class student_dto {

	private Integer user_no, univ_prd;
	private String stdnt_no, stdnt_flnm, user_eml_addr, user_telno, user_zip, user_addr, user_daddr, user_photo;
	private String brdt, dlng_bank_nm, dlng_actno, dpstr_nm, ogdp_univ, ogdp_scsbjt, mjr, stdnt_stts_se;
	
	private Integer std_grade;
	
	public void setGrade() {
		this.std_grade = (int) Math.ceil(this.univ_prd / 2f);
	}
	
	public void setDashInTelNumber() {
		this.user_telno = this.user_telno.substring(0, 3) + "-" + this.user_telno.substring(3, 7) + "-" + this.user_telno.substring(7);
	}
}
