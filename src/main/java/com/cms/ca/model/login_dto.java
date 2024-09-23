
package com.cms.ca.model;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class login_dto {
	private Integer user_no;
	private String lgn_id, pswd, last_lgn_dt, acnt_lck_yn, reg_dt;
}


