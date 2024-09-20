package com.cms.ca.admin;

import java.io.PrintWriter;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
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
	
	PrintWriter = null;

	@GetMapping("/adminlogin")
	public String admin_login() {
		return "admin/login";
	}
	
	
	@GetMapping("/stlistmod")
	public String stlist_mod(Model m, @RequestParam(value = "", required = false) String search_part, @RequestParam(value = "", required = false) String search_word) {
		
		if (search_part == null || search_word == null || search_part.equals("") || search_word.equals("")) {
			m.addAttribute("student_list", this.stuser_service.student_list());
		}
		else {
			m.addAttribute("search_part", search_part);
			m.addAttribute("search_word", search_word);
			m.addAttribute("student_list", this.stuser_service.student_search_list(search_part, search_word));
		}
		

		return "admin/stlistmod";
	}
	
	
	@PostMapping("/stuser_detail_update")
	public void stuser_detail_update(@ModelAttribute student_dto stdto) {
		int result = this.stuser_service.student_detail_update(stdto);
		try {
			if(result > 0 ) {
				
			}
			
		}catch (Exception e) {
			
		}
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

