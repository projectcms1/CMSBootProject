package com.cms.ca;

import lombok.Data;

@Data
public class login_dto {

	private Integer USER_NO;
	private String LGN_ID, PSWD, LAST_LGN_DT, ACNT_LCK_YN, REG_DT;
}
