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

	@GetMapping("/extranoticemod")
	public String extranotice_mod() {
		return "admin/extranoticemod";
	}

	@GetMapping("/allcounselmod")
	public String allcounsel_mod() {
		return "admin/allcounselmod";
	}
	
	@GetMapping("/stcounselmod")
	public String stcounsel_mod() {
		return "admin/stcounselmod";
	}
	
	@GetMapping("/procounselmod")
	public String procounsel_mod() {
		return "admin/procounselmod";
	}
	
	@GetMapping("/concounselmod")
	public String concounsel_mod() {
		return "admin/concounselmod";
	}
}
