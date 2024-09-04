package com.cms.ca.portalmain;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class portalmain {
	
	@GetMapping("/blank")
	public String path_blank() {
		return "page_blank";
	}
	
	@GetMapping("/")
	public String portalMain() {
		return "default-header";
	}
	
	@GetMapping("/login")
	public String loginPage() {
		return "login";
	}
}
