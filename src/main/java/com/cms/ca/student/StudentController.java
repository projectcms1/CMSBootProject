package com.cms.ca.student;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class StudentController {

	@GetMapping("/")
	public String portalMain() {
		return "index";
	}
}
