package com.cms.ca;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class main {
	
	@Autowired
	test_repo repo;
	
	@GetMapping("/")
	public String portalMain() {
		return "default-header";
	}
	
	@GetMapping("/login")
	public String loginPage() {
		return "login";
	}
}
