package com.cms.ca.admin;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class add_stuserdata_maker {

	// 입학년도로 8자리 학번 만들기
	public String addstuser_stdntno_maker(String entrance_year) {
		// 입력 검증
		if (entrance_year == null || !entrance_year.matches("\\d{4}")) {
			throw new IllegalArgumentException("입학년도는 4자리 숫자여야 합니다.");
		}

		// 랜덤 숫자 생성
		Random rd = new Random();
		int randomNumber = rd.nextInt(10000); // 0부터 9999까지의 숫자 생성

		// 4자리 숫자로 포맷 (앞에 0을 채움)
		String randomStr = String.format("%04d", randomNumber);

		// 학번 생성
		String stdnt_no = entrance_year + randomStr;

		return stdnt_no;
	}
	
	//초기 비밀번호 만들기 - 핸드폰번호 끝 4자리 + 생월일 4자리 (암호화는 시큐리티이후,,,? => 확인하기)
	public String addstuser_pass_maker(String telno, String brdt) {
		
		String tel = telno.substring(7,11);
		String bt = brdt.substring(4,8);
		String pswd = tel+bt;
		
		return new BCryptPasswordEncoder().encode(pswd);
	}
	
	
	//지도교수 등록일시 만들기
	public String addstuser_promatchtime_maker() {
		Date dt = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");

		return sdf.format(dt);
	}

}
