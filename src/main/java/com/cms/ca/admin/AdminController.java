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
	
	@GetMapping("/emlistmod")
	public String emlist_mod() {
		return "admin/emlistmod";
	}
	
	@GetMapping("/adminlistmod")
	public String adminlist_mod() {
		return "admin/adminlistmod";
	}
	
	@GetMapping("/pro_info")
	public String pro_info() {
		return "admin/pro_info";
	}
	
	@GetMapping("/pro_info2")
	public String pro_info2() {
		return "admin/pro_info2";
	}
	
	@GetMapping("/noticemod")
	public String portalnotice_mod() {
		return "admin/noticemod";
	}
	
	@GetMapping("/extraculist")
	public String extra_notice() {
		return "admin/extraculist";
	}


	@GetMapping("/allcounselmod")
	public String allcounselmod() {
		return "admin/allcounselmod";
	}

	@GetMapping("/error")
	public String error() {
		return "error";
	}
	

}
