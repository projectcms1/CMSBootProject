package com.cms.ca.admin;

import java.util.Random;

public class add_empyuserdata_maker {

	// 입사년도로 7자리 교번 만들기
	public String addempyuser_empno_maker(String entrance_year) {
		// 입력 검증
		if (entrance_year == null || !entrance_year.matches("\\d{4}")) {
			throw new IllegalArgumentException("입사년도는 4자리 숫자여야 합니다.");
		}

		// 랜덤 숫자 생성
		Random rd = new Random();
		int randomNumber = rd.nextInt(1000); // 0부터 999까지의 숫자 생성

		// 3자리 숫자로 포맷 (앞에 0을 채움)
		String randomStr = String.format("%03d", randomNumber);

		// 교번 생성
		String emp_no = entrance_year + randomStr;

		return emp_no;
	}
	
	//초기 비밀번호 만들기 - 핸드폰번호 끝 4자리 + 생년월일 4자리 (암호화는 시큐리티이후,,,? => 확인하기)
	public String addempyuser_pass_maker(String telno, String brdt) {
		
		String tel = telno.substring(7,11);
		String bt = brdt.substring(4,8);
		String pswd = tel+bt;
		return pswd;
	}
	
}
