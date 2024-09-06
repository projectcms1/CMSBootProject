package com.cms.ca.admin;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class AdminController {
	
	@GetMapping("/login")
	public String admin_login() {
		return "admin/login";
	}
	
	@GetMapping("/adminfindid")
	public String find_id() {
		return "admin/adminfindid";
	}
	
	@GetMapping("/")
	public String stlist_mod() {
		return "admin/stlistmod";
	}
	
	@GetMapping("/prolistmod")
	public String prolist_mod() {
		return "admin/prolistmod";
	}
	
	@GetMapping("/adminlistmod")
	public String adminlist_mod() {
		return "admin/adminlistmod";
	}
	
	@GetMapping("/proinfo")
	public String pro_info() {
		return "admin/proinfo";
	}
	
	@GetMapping("/ptnoticemod")
	public String portalnotice_mod() {
		return "admin/ptnoticemod";
	}

	@GetMapping("/counsel/{n}")
	public String counsel(@PathVariable int n) {
		String result = null;
		
		switch(n) {
			case 0 -> result="admin/counsel_all";
			case 1 -> result="admin/counsel_student";
			case 2 -> result="admin/counsel_professor";
			case 3 -> result="admin/counsel_counselor";
			default -> result="/error";
		} 
		
		return result;
	}

	@GetMapping("/error")
	public String error() {
		return "error";
	}

}
