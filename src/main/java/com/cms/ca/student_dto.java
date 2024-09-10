package com.cms.ca;

import lombok.Data;

@Data
public class student_dto {

	private Integer user_no;
	private String stdnt_no, stdnt_flnm, user_eml_addr, user_telno, user_zip, user_addr, user_daddr, user_photo;
	private String brdt, dlng_bank_nm, dlng_actno, dpstr_nm, univ_prd, ogdp_univ, ogdp_scsbjt, stdnt_stts_se;
}
