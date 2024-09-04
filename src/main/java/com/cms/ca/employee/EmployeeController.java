package com.cms.ca.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.cms.ca.test_repo;

@Controller
public class EmployeeController {
	@Autowired
	test_repo repo;
	
	@GetMapping("/empy_info")
	public String employeeInfoPage() {
		return "employee/empy_info";
	}
	
	@GetMapping("/empy_counsel_index")
	public String employeeCounselingIndexPage() {
		return "employee/empy_counsel_index";
	}
}
