package com.cms.ca.admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.cms.ca.counsel_dto;
import com.cms.ca.employee_dto;
import com.cms.ca.student_dto;

@Controller
public class AdminController {
	
	@Autowired
	private stuser_service stuser_service;
	
	@Autowired
	private emuser_service emuser_service;
	
	@Autowired
	private counsel_service counsel_service;
	
	
	@GetMapping("/adminlogin")
	public String admin_login() {
		return "admin/login";
	}
	
	@GetMapping("/adminfindid")
	public String find_id() {
		return "admin/adminfindid";
	}
	
	@GetMapping("/stlistmod")
	public String stlist_mod(Model m) {
		
		List<student_dto> student_list_Data = this.stuser_service.student_list();
		m.addAttribute("student_list",student_list_Data);
		
		return "admin/stlistmod";
	}
	
	@GetMapping("/emlistmod")
	public String emlist_mod(Model m) {
		
		List<employee_dto> employee_list_data = this.emuser_service.employee_list();
		m.addAttribute("employee_list", employee_list_data);
		
		return "admin/emlistmod";
	}

	@GetMapping("/allcounselmod")
	public String allcounselmod(Model m) {
		
		List<counsel_dto> counsel_list_data = this.counsel_service.counsel_list();
		m.addAttribute("counsel_list", counsel_list_data);
		
		return "admin/allcounselmod";
	}

	@GetMapping("/adminlistmod")
	public String adminlist_mod() {
		return "admin/adminlistmod";
	}
	
	@GetMapping("/pro_info")
	public String pro_info() {
		return "admin/pro_info";
	}
	
	
	@GetMapping("/noticemod")
	public String portalnotice_mod() {
		return "admin/noticemod";
	}
	
	@GetMapping("/extraculist")
	public String extra_notice() {
		return "admin/extraculist";
	}



	@GetMapping("/error")
	public String error() {
		return "error";
	}
	

}
