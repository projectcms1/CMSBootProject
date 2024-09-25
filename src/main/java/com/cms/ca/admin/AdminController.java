package com.cms.ca.admin;

import java.io.PrintWriter;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.cms.ca.CDNFileUploader;
import com.cms.ca.ImageFileService;
import com.cms.ca.employee_dto;
import com.cms.ca.imgfile_dto;
import com.cms.ca.student_dto;
import com.cms.ca.view_counsel_dto;

import jakarta.annotation.Resource;
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

	@Resource(name = "img_service")
	private ImageFileService img_service;

	PrintWriter pw = null;

	// 학생 사용자 리스트 출력 및 검색
	@GetMapping("/stlistmod")
	public String stlist_mod(Model m, @RequestParam(value = "", required = false) String search_part,
			@RequestParam(value = "", required = false) String search_word) {

		// 검색파트 및 리스트출력
		if (search_part == null || search_word == null || search_part.equals("") || search_word.equals("")) {
			m.addAttribute("student_list", this.stuser_service.student_list());
		} else {
			m.addAttribute("search_part", search_part);
			m.addAttribute("search_word", search_word);
			m.addAttribute("student_list", this.stuser_service.student_search_list(search_part, search_word));
		}

		return "admin/stlistmod";
	}

	// 학생 사용자 세부정보 수정
	@PostMapping("/stuser_detail_update")
	public void stuser_detail_update(@ModelAttribute student_dto stdto, @RequestPart(name = "uphoto_file", required = false) MultipartFile uphoto_file, ServletResponse sr, String previousFileName) {
		sr.setContentType("text/html; charset=utf-8");
		
		try {
			this.pw = sr.getWriter();
			
			if (uphoto_file != null && !uphoto_file.getOriginalFilename().isEmpty()) {
				CDNFileUploader fileUploader = new CDNFileUploader(uphoto_file);
				
				boolean delck = fileUploader.deleteFile(previousFileName);
				if (delck) {
					this.img_service.deleteImageFile(previousFileName);
				}
				imgfile_dto imgdto = fileUploader.uploadFile();
				int dbck = this.img_service.addImageFile(imgdto);
				if (dbck > 0) {
					stdto.setUser_photo(imgdto.getImg_file_nm());
				}
				else {
					// insert 실패했을 때 FTP 파일 삭제 처리
					// -> 실패 시 Exception 발동으로 삭제하지 못할 수도 있음
					fileUploader.deleteFile(imgdto.getImg_file_nm());
				}
			}
			int result = this.stuser_service.student_detail_update(stdto);
			int login_result = this.stuser_service.student_detail_login_update(stdto);
			if (result > 0 && login_result > 0) {
				this.pw.print("<script>" + "alert('학생정보가 수정되었습니다.');" + "location.href='./stlistmod';" + "</script>");
			} else {
				this.pw.print("<script>" + "alert('오류로 인해 학생정보가 수정되지 않았습니다.');" + "history.go(-1);" + "</script>");
			}

		} catch (Exception e) {
			this.pw.print("<script>" + "alert('오류로 인해 학생정보가 수정되지 않았습니다. 확인해주세요!');" + "history.go(-1);" + "</script>");
		} finally {
			this.pw.close();
		}
	}
	
	@GetMapping("/stlistmod_adduser")
	public String stlistmod_adduser() {
		return "admin/stlistmod_adduser";
	}

	// 학생 사용자 추가
	@PostMapping("/stuser_add")
	public void stuser_add(@ModelAttribute student_dto stdto, @RequestPart(name = "uphoto_file", required = false) MultipartFile uphoto_file,
			@RequestParam(value = "", required = false) String entrance_year, ServletResponse sr) {
		sr.setContentType("text/html; charset=utf-8");
		try {
			this.pw = sr.getWriter();
			int detail_result = 0;
			
			if (uphoto_file != null && !uphoto_file.getOriginalFilename().isEmpty()) {
				CDNFileUploader fileUploader = new CDNFileUploader(uphoto_file);
				imgfile_dto imgdto = fileUploader.uploadFile();
				int dbck = this.img_service.addImageFile(imgdto);
				if (dbck > 0) {
					stdto.setUser_photo(imgdto.getImg_file_nm());
				}
				else {
					// insert 실패했을 때 FTP 파일 삭제 처리
					// -> 실패 시 Exception 발동으로 삭제하지 못할 수도 있음
					fileUploader.deleteFile(imgdto.getImg_file_nm());
				}
			}
			detail_result = this.stuser_service.add_stuser_detail(stdto, entrance_year);
			
			if (detail_result > 0) {
				this.pw.print("<script>" + "alert('학생 계정이 추가되었습니다.');" + "location.href='./stlistmod';" + "</script>");
			} else {
				this.pw.print(
						"<script>" + "alert('오류로 인해 학생 계정이 추가되지 않았습니다. 확인해주세요!');" + "history.go(-1);" + "</script>");
			}

		} catch (Exception e) {
			this.pw.print("<script>" + "alert('오류로 인해 학생 계정이 추가되지 않았습니다. 확인해주세요!');" + "history.go(-1);" + "</script>");
		} finally {
			this.pw.close();
		}
	}

	
	
	
	
	// 교직원 사용자 리스트 출력 및 검색
	@GetMapping("/emlistmod")
	public String emlist_mod(Model m, @RequestParam(value = "", required = false) String search_part,
			@RequestParam(value = "", required = false) String search_word) {

		// 검색파트 및 리스트출력
		if (search_part == null || search_word == null || search_part.equals("") || search_word.equals("")) {
			m.addAttribute("employee_list", this.emuser_service.employee_list());
		} else {
			m.addAttribute("search_part", search_part);
			m.addAttribute("search_word", search_word);
			m.addAttribute("employee_list", this.emuser_service.employee_search_list(search_part, search_word));
		}

		return "admin/emlistmod";
	}
	
	
	//교직원 사용자 상세보기 데이터 로드
	@ResponseBody
	@PostMapping("/admin_employee_detail/{emp_no}")
	public employee_dto admin_employee_detail(@PathVariable(name = "emp_no") String emp_no) {
		return this.emuser_service.employee_data(emp_no);
	}
	
	//교직원 및 관리자 사용자 추가
	@GetMapping("/emlistmod_adduser")
	public String emlistmod_adduser() {
		return "admin/emlistmod_adduser";
	}
	
	
	// 관리자 사용자 리스트 출력 및 검색
	@GetMapping("/adminlistmod")
	public String adminlist_mod(Model m, @RequestParam(value = "", required = false) String search_part,
			@RequestParam(value = "", required = false) String search_word) {

		// 검색파트 및 리스트출력
		if (search_part == null || search_word == null || search_part.equals("") || search_word.equals("")) {
			m.addAttribute("admin_list", this.aduser_service.admin_list());
		} else {
			m.addAttribute("search_part", search_part);
			m.addAttribute("search_word", search_word);
			m.addAttribute("admin_list", this.aduser_service.admin_search_list(search_part, search_word));
		}

		return "admin/adminlistmod";
	}
	
	
	//관리자 사용자 상세보기 데이터 로드
	@ResponseBody
	@PostMapping("/admin_detail/{emp_no}")
	public employee_dto admin_detail(@PathVariable(name = "emp_no") String emp_no) {
		return this.aduser_service.amdin_data(emp_no);
	}
	
	
	@GetMapping("/adminlistmod_adduser")
	public String adminlistmod_adduser() {
		return "admin/admin"
				+ "listmod_adduser";
	}
	

	// 상담 내역 리스트 출력 및 검색
	@GetMapping("/allcounselmod")
	public String allcounselmod(Model m, @RequestParam(value = "", required = false) String search_part,
			@RequestParam(value = "", required = false) String search_word) {

		// 검색파트 및 리스트출력
		if (search_part == null || search_word == null || search_part.equals("") || search_word.equals("")) {
			m.addAttribute("counsel_list", this.counsel_service.counsel_list());
		} else {
			m.addAttribute("search_part", search_part);
			m.addAttribute("search_word", search_word);
			m.addAttribute("counsel_list", this.counsel_service.counsel_search_list(search_part, search_word));
		}

		return "admin/allcounselmod";
	}

	
	
	@ResponseBody
	@PostMapping("/admin_counsel_detail/{aply_sn}")
	public List<view_counsel_dto> counseldetail(@PathVariable(name = "aply_sn") String aply_sn) {
		List<view_counsel_dto> result = this.counsel_service.counsel_detail(aply_sn);
		return result;
	}

	@GetMapping("/addcounsel")
	public String addcounsel() {
		return "admin/addcounsel";
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
