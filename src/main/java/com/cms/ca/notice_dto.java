package com.cms.ca;

import lombok.Data;

@Data
public class notice_dto {

	private Integer ntc_mttr_sn;
	private String ntc_mttr_ttl, ntc_cn, ntc_fix_yn, atch_file_nm, orgnl_atch_file_nm, ntc_clsf_nm;
	private String inq_cnt, emp_no, wrtr_nm, wrt_dt;
}
