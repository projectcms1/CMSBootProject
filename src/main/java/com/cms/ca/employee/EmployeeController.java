package com.cms.ca.employee;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class EmployeeController {

	@GetMapping("/employee/empy_info")
	public String employeeInfoPage() {
		return "employee/empy_info";
	}
	
	@GetMapping("/employee/empy_counsel_index")
	public String employeeCounselIndexPage() {
		return "employee/empy_counsel_index";
	}
	
	@GetMapping("/employee/empy_counsel_reserve")
	public String employeeCounselReservePage() {
		return "employee/empy_counsel_reserve";
	}
	
	@GetMapping("/employee/empy_counsel_add")
	public String employeeCounselAddPage() {
		return "employee/empy_counsel_add";
	}
	
	@GetMapping("/employee/empy_counsel_chatting")
	public String employeeCounselChattingPage() {
		return "employee/empy_counsel_chatting";
	}
	
}
