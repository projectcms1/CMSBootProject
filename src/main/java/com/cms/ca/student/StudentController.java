package com.cms.ca.student;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.cms.ca.student_dto;

import jakarta.annotation.Resource;

@Controller
public class StudentController {

	// ==== 로그인 구현 이전, 세션의 임시 학번 데이터 ======
	String std_number = "20240001";
	// =======================================
	String viewName = "page_blank";
	
	@Resource(name = "stdnt_service")
	private StudentService stdSrvc;
	
	@GetMapping("/student/std_info")
	public String std_info(Model m) throws Exception {
		try {
			student_dto onedata = this.stdSrvc.getOneStudent(std_number);
			if (onedata == null) { // 사용자 데이터 없음 (없는 학번)
				// 에러 페이지 추가 후 수정
				System.out.println("이게 뭐야");
			}
			else {
				onedata.setGrade();
				onedata.setDashInTelNumber();
				m.addAttribute("std_data", onedata);
				viewName = "student/std_info";
			}
		} catch (Exception e) {
			viewName = "page_blank";
		}
		return viewName;
	}
	
	@GetMapping("/student/std_counsel_list")
	public String std_counsel_loglist() {
		return "student/std_counsel_list";
	}
	
	@GetMapping("/student/std_counsel_reservelist")
	public String std_counsel_reservelist() {
		return "student/std_counsel_reservelist";
	}
	
	@GetMapping("/student/std_counsel_reserve")
	public String std_counsel_reserve() {
		return "student/std_counsel_reserve";
	}
	
	@GetMapping("/student/std_counsel_chatting")
	public String std_counsel_chatting() {
		return "student/std_counsel_chatting";
	}
	
	@GetMapping("/student/std_counsel_selftestlist")
	public String std_counsel_selftestlist() {
		return "student/std_counsel_selftestlist";
	}
}