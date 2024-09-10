package com.cms.ca.student;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class StudentController {

	@GetMapping("/student/std_info")
	public String academy_info() {
		return "student/std_info";
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