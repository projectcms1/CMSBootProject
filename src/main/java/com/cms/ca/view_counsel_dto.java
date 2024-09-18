package com.cms.ca;

import lombok.Data;

@Data
public class view_counsel_dto {

	private Integer aply_sn, bfr_aply_sn, hr_se;
	private String stdnt_no, emp_no, stts_cd, plc, rsvt_dt, aply_dt, dscsn_mthd, dscsn_knd;
	
	private String stdnt_flnm, stdnt_stts_se;
	private String emp_flnm, acnt_stts, mng_authrt;
	
	private Integer univ_prd, std_grade;
	
	private String dscsn_cn;
	
	public void setGrade() {
		this.std_grade = (int) Math.ceil(this.univ_prd / 2f);
	}
}
