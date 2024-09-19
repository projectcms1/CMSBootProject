package com.cms.ca.admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

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
	private aduser_service aduser_service;

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
	public String stlist_mod(Model m, String stdnt_no) {
		System.out.println(stdnt_no);
		List<student_dto> student_list_Data = this.stuser_service.student_list();
		m.addAttribute("student_list",student_list_Data);

		if(stdnt_no != null) {
			List<student_dto> student_one_list_Data = this.stuser_service.student_one_list(stdnt_no);
			m.addAttribute("student_one_list", student_one_list_Data);
			System.out.println(student_one_list_Data);
		}

		return "admin/stlistmod";
	}
	
	
	@GetMapping("/emlistmod")
	public String emlist_mod(Model m) {
		
		List<employee_dto> employee_list_data = this.emuser_service.employee_list();
		m.addAttribute("employee_list", employee_list_data);
		
		return "admin/emlistmod";
	}


	@GetMapping("/adminlistmod")
	public String adminlist_mod(Model m) {
		
		List<employee_dto> admin_list_data = this.aduser_service.admin_list();
		m.addAttribute("admin_list", admin_list_data);
		
		return "admin/adminlistmod";
	}
	
	@GetMapping("/allcounselmod")
	public String allcounselmod(Model m) {
		
		List<counsel_dto> counsel_list_data = this.counsel_service.counsel_list();
		m.addAttribute("counsel_list", counsel_list_data);
		
		return "admin/allcounselmod";
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

