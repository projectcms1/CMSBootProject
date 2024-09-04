package com.cms.ca.student;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class StudentController {

	@GetMapping("/student/academy_info")
	public String academy_info() {
		return "student/academy_info";
	}
	
	@GetMapping("/student/counsel_loglist")
	public String counsel_loglist() {
		return "student/counsel_loglist";
	}
	
	@GetMapping("/student/cnsl_reserlist")
	public String cnsl_reserlist() {
		return "student/cnsl_reserlist";
	}
	
	@GetMapping("/student/counsel_reservation")
	public String counsel_reservation() {
		return "student/counsel_reservation";
	}
	
	@GetMapping("/student/chat_counsel")
	public String chat_counsel() {
		return "student/chat_counsel";
	}
	
	@GetMapping("/student/slfpsy_testlist")
	public String slfpsy_testlist() {
		return "student/slfpsy_testlist";
	}
}