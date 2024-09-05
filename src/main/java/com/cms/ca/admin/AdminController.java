package com.cms.ca.admin;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

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


}
