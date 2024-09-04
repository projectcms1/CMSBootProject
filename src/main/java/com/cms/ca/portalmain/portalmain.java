package com.cms.ca.portalmain;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.cms.ca.test_repo;

@Controller
public class portalmain {
	
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
