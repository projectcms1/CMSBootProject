package com.cms.ca.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.cms.ca.student_dto;

@Controller
public class StudentController {

	// ==== 로그인 구현 이전, 세션의 임시 학번 데이터 ======
	String std_number = "20240001";
	// =======================================
	String viewName = "page_blank";
	
	@Autowired
	private StudentService stdSrvc;
	
	@GetMapping("/student/std_info")
	public String academy_info() throws Exception {
		try {
			student_dto onedata = this.stdSrvc.getOneStudent(std_number);
			//onedata == null
		} catch (Exception e) {
			viewName = "page_blank";
		}
		return viewName;
	}
	
	@GetMapping("/student/std_counsel_list")
	public String counsel_loglist() {
		return "student/std_counsel_list";
	}
	
	@GetMapping("/student/std_counsel_reservelist")
	public String cnsl_reserlist() {
		return "student/std_counsel_reservelist";
	}
	
	@GetMapping("/student/std_counsel_reserve")
	public String counsel_reservation() {
		return "student/std_counsel_reserve";
	}
	
	@GetMapping("/student/std_counsel_chatting")
	public String chat_counsel() {
		return "student/std_counsel_chatting";
	}
	
	@GetMapping("/student/std_counsel_selftestlist")
	public String slfpsy_testlist() {
		return "student/std_counsel_selftestlist";
	}
}