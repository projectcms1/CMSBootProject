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
	
	// 상담사+지도교수 시간표 SELECT - AJAX
	@GetMapping("/student/api/professor_time")
	public String professor_time() {
		String callback = "";
		try {
			callback = this.stdSrvc.getAllEmpTimeTable(this.STD_NUMBER);
		} catch (Exception e) {
			callback = "error";
		}
		return callback;
	}
}
