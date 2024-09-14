package com.cms.ca.student;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.annotation.Resource;

@RestController
public class AjaxController {

	// ==== 로그인 구현 이전, 세션의 임시 학번 데이터 ======
	String STD_NUMBER = "20245125";
	// =======================================
	
	@Resource(name = "stdnt_service")
	private StudentService stdSrvc;
	
	// 지도 교수 시간표 SELECT - AJAX
	@GetMapping("/student/api/professor_time")
	public String professor_time() {
		String callback = "";
		try {
			System.out.println("ajax-api 작동");
			
			callback = this.stdSrvc.getPrfsTimeTable(this.STD_NUMBER);
		} catch (Exception e) {
			callback = "error";
		}
		return callback;
	}
}
