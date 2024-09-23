package com.cms.ca.admin;

import java.io.PrintWriter;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.cms.ca.counsel_dto;
import com.cms.ca.employee_dto;
import com.cms.ca.student_dto;

import jakarta.servlet.ServletResponse;

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
	
	PrintWriter pw = null;
	
	
	//학생 사용자 리스트 출력 및 검색
	@GetMapping("/stlistmod")
	public String stlist_mod(Model m, @RequestParam(value = "", required = false) String search_part, @RequestParam(value = "", required = false) String search_word) {
		
		//검색파트 및 리스트출력
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
	
	//학생 사용자 세부정보 수정
	@PostMapping("/stuser_detail_update")
	public void stuser_detail_update(@ModelAttribute student_dto stdto, ServletResponse sr) {
		sr.setContentType("text/html; charset=utf-8");
		try {
			this.pw = sr.getWriter();
			int result = this.stuser_service.student_detail_update(stdto);
			int login_result = this.stuser_service.student_detail_login_update(stdto);
			if(result > 0 && login_result > 0 ) {
				this.pw.print("<script>"
						+ "alert('학생정보가 수정되었습니다.');"
						+ "location.href='./stlistmod';"
						+ "</script>");
			}
			else {
				this.pw.print("<script>"
						+ "alert('오류로 인해 학생정보가 수정되지 않았습니다.');"
						+ "history.go(-1);"
						+ "</script>");
			}
			
		}catch (Exception e) {
			e.printStackTrace();
			this.pw.print("<script>"
					+ "alert('오류로 인해 학생정보가 수정되지 않았습니다. 확인해주세요!');"
					+ "history.go(-1);"
					+ "</script>");
		}
		finally {
			this.pw.close();
		}
	}
	
	
	@GetMapping("/stlistmod_adduser")
	public String stlistmod_adduser() {
		return "admin/stlistmod_adduser";
	}
	
	
	//학생 사용자 추가
	@PostMapping("/stuser_add")
	public void stuser_add(@ModelAttribute student_dto stdto, @RequestParam(value = "", required = false) String entrance_year , ServletResponse sr) {
		sr.setContentType("text/html; charset=utf-8");
		try {
			this.pw = sr.getWriter();
			int detail_result = this.stuser_service.add_stuser_detail(stdto, entrance_year);
			
			if(detail_result > 0) {
				this.pw.print("<script>"
						+ "alert('학생 계정이 추가되었습니다.');"
						+ "location.href='./stlistmod';"
						+ "</script>");
			}
			else{
				this.pw.print("<script>"
						+ "alert('오류로 인해 학생 계정이 추가되지 않았습니다. 확인해주세요!');"
						+ "history.go(-1);"
						+ "</script>");
			}
			
		}catch (Exception e) {
			e.printStackTrace();
			this.pw.print("<script>"
					+ "alert('오류로 인해 학생 계정이 추가되지 않았습니다. 확인해주세요!');"
					+ "history.go(-1);"
					+ "</script>");
		}
		finally {
			this.pw.close();
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

