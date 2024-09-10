package com.cms.ca;

import lombok.Data;

@Data
public class popup_dto {

	private Integer popup_sn, popup_seq;
	private String popup_img, acs_url_addr, popup_use_yn, emp_no;
	private String popup_bgng_ymd, popup_end_ymd, popup_nm, crt_site;
}
