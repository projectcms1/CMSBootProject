package com.cms.ca;

import lombok.Data;

@Data
public class selfTestUserStats_dto {

	private String stdnt_no, insp_no, ans_no;
	private Integer insp_rslt_no, qitem_no;
	
	private Integer scr;
	private String qitem_flnm, ans_flnm;
}
