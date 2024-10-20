package com.cms.ca.admin;

import java.io.PrintWriter;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
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
import com.cms.ca.counsel_dto;
import com.cms.ca.employee_dto;
import com.cms.ca.imgfile_dto;
import com.cms.ca.notice_dto;
import com.cms.ca.student_dto;
import com.cms.ca.view_counsel_dto;

import jakarta.annotation.Resource;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;

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
	
	@Autowired
	private notice_service notice_service;

	@Resource(name = "img_service")
	private ImageFileService img_service;

	PrintWriter pw = null;
	
	// Session 데이터
	private Authentication authentication = null;
	
	/*=============================================학생=============================================*/
	

	// 학생 사용자 리스트 출력 및 검색
	@GetMapping("/admin/stlistmod")
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
	@PostMapping("/admin/stuser_detail_update")
	public void stuser_detail_update(@ModelAttribute student_dto stdto, @RequestPart(name = "uphoto_file", required = false) MultipartFile uphoto_file,
			ServletResponse sr, String previousFileName) {
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
				this.pw.print("<script>" + "alert('학생정보가 수정되었습니다.');" + "location.href='/admin/stlistmod';" + "</script>");
			} else {
				this.pw.print("<script>" + "alert('오류로 인해 학생정보가 수정되지 않았습니다.');" + "history.go(-1);" + "</script>");
			}
		} catch (Exception e) {
			this.pw.print("<script>" + "alert('오류로 인해 학생정보가 수정되지 않았습니다. 확인해주세요!');" + "history.go(-1);" + "</script>");
		} finally {
			this.pw.close();
		}
	}
	
	
	//학생 사용자 추가 페이지 로드
	@GetMapping("/admin/stlistmod_adduser")
	public String stlistmod_adduser() {
		return "admin/stlistmod_adduser";
	}

	
	// 학생 사용자 추가
	@PostMapping("/admin/stuser_add")
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
				this.pw.print("<script>" + "alert('학생 계정이 추가되었습니다.');" + "location.href='/admin/stlistmod';" + "</script>");
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

	
	
	
	/*=============================================교직원=============================================*/
	
	
	// 교직원 사용자 리스트 출력 및 검색
	@GetMapping("/admin/emlistmod")
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
	

	//교직원/관리자 사용자 추가
	@PostMapping("/admin/emuser_add")
	public void emuser_add(@ModelAttribute employee_dto emdto, @RequestPart(name = "uphoto_file", required = false) MultipartFile uphoto_file,
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
						emdto.setEmp_photo(imgdto.getImg_file_nm());
					}
					else {
						// insert 실패했을 때 FTP 파일 삭제 처리
						// -> 실패 시 Exception 발동으로 삭제하지 못할 수도 있음
						fileUploader.deleteFile(imgdto.getImg_file_nm());
					}
				}
				detail_result = this.emuser_service.add_emuser_detail(emdto, entrance_year);
				
				if (detail_result > 0) {
					this.pw.print("<script>" + "alert('교직원 계정이 추가되었습니다.');" + "location.href='/admin/emlistmod';" + "</script>");
				} else {
					this.pw.print(
							"<script>" + "alert('오류로 인해 교직원 계정이 추가되지 않았습니다. 확인해주세요!');" + "history.go(-1);" + "</script>");
				}

			} catch (Exception e) {
				e.printStackTrace();
				this.pw.print("<script>" + "alert('오류로 인해 교직원 계정이 추가되지 않았습니다. 확인해주세요!');" + "history.go(-1);" + "</script>");
			} finally {
				this.pw.close();
			}
		}

	
	//교직원 사용자 상세정보 로드
	@ResponseBody
	@PostMapping("/admin/admin_employee_detail/{emp_no}")
	public employee_dto admin_employee_detail(@PathVariable(name = "emp_no") String emp_no) {
		return this.emuser_service.employee_data(emp_no);
	}
	
	// 교직원 사용자 세부 정보 수정
	@PostMapping("/admin/emuser_detail_update")
	public void emuser_detail_update(@ModelAttribute employee_dto emdto, @RequestPart(name = "uphoto_file", required = false) MultipartFile uphoto_file,
			ServletResponse sr, String previousFileName) {
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
					emdto.setEmp_photo(imgdto.getImg_file_nm());
				}
				else {
					// insert 실패했을 때 FTP 파일 삭제 처리
					// -> 실패 시 Exception 발동으로 삭제하지 못할 수도 있음
					fileUploader.deleteFile(imgdto.getImg_file_nm());
				}
			}
			int result = this.emuser_service.employee_modify(emdto);
			if (result > 0) {
				this.pw.print("<script>" + "alert('교직원 정보가 수정되었습니다.');" + "location.href='/admin/emlistmod';" + "</script>");
			} else {
				this.pw.print("<script>" + "alert('오류로 인해 교직원 정보가 수정되지 않았습니다.');" + "history.go(-1);" + "</script>");
			}
		} catch (Exception e) {
			e.printStackTrace();
			this.pw.print("<script>" + "alert('오류로 인해 교직원 정보가 수정되지 않았습니다. 확인해주세요!');" + "history.go(-1);" + "</script>");
		} finally {
			this.pw.close();
		}
	}
	
	//교직원/관리자 추가 페이지 열기
	@GetMapping("/admin/emlistmod_adduser")
	public String emlistmod_adduser() {
		return "admin/emlistmod_adduser";
	}
	
	
	
	/*=============================================관리자=============================================*/
	
	
	// 관리자 사용자 리스트 출력 및 검색
	@GetMapping("/admin/adminlistmod")
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
	@PostMapping("/admin/admin_detail/{emp_no}")
	public employee_dto admin_detail(@PathVariable(name = "emp_no") String emp_no) {
		return this.aduser_service.amdin_data(emp_no);
	}
	
	
	
	//관리자 사용자 세부정보 수정
	@PostMapping("/admin/adminuser_detail_update")
	public void adminuser_detail_update(@ModelAttribute employee_dto emdto,
			@RequestPart(name = "uphoto_file", required = false) MultipartFile uphoto_file, ServletResponse sr,
			String previousFileName) {
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
					emdto.setEmp_photo(imgdto.getImg_file_nm());
				} else {
					// insert 실패했을 때 FTP 파일 삭제 처리
					// -> 실패 시 Exception 발동으로 삭제하지 못할 수도 있음
					fileUploader.deleteFile(imgdto.getImg_file_nm());
				}
			}
			int result = this.aduser_service.admin_detail_update(emdto);
			if (result > 0) {
				this.pw.print(
						"<script>" + "alert('관리자 정보가 수정되었습니다.');" + "location.href='/admin/adminlistmod';" + "</script>");
			} else {
				this.pw.print("<script>" + "alert('오류로 인해 관리자 정보가 수정되지 않았습니다.');" + "history.go(-1);" + "</script>");
			}

		} catch (Exception e) {
			e.printStackTrace();
			this.pw.print(
					"<script>" + "alert('오류로 인해 관리자 정보가 수정되지 않았습니다. 확인해주세요!');" + "history.go(-1);" + "</script>");
		} finally {
			this.pw.close();
		}
	}
	
	
	//관리자 사용자 추가 페이지 로드
	@GetMapping("/admin/adminlistmod_adduser")
	public String adminlistmod_adduser() {
		return "admin/admin"
				+ "listmod_adduser";
	}
	
	
	
	/*=============================================상담=============================================*/
	

	// 상담 내역 리스트 출력 및 검색
	@GetMapping("/admin/allcounselmod")
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

	//상담 추가
	@PostMapping("/admin/counsel_add")
	public void allcounsellist_counsel_add(ServletResponse res, counsel_dto csl_dto) {
		try {
			res.setContentType("text/html;charset=utf-8");
			this.pw=res.getWriter();
			int result=this.counsel_service.addcounsel(csl_dto);
			if(result>0) {
				this.pw.print("<script>"
						+ "alert('상담이 정상적으로 신청되었습니다.');"
						+ "if(confirm('상담 리스트로 이동하시겠습니까?'))"
						+ "{ location.href='/admin/allcounselmod'; }"
						+ "else{ location.href='/admin/addcounsel'; }"
						+ "</script>");
			}
			else {
				this.pw.print("<script>"
						+ "alert('데이터베이스 연결 오류가 발생했습니다.\\n다시 시도해주세요.');"
						+ "history.go(-1);"
						+ "</script>");
			}			
		} catch (Exception e) {
			this.pw.print("<script>"
					+ "alert('교번과 학번을 다시 확인해주세요.');"
					+ "history.go(-1);"
					+ "</script>");
		} finally {
			this.pw.close();
		}
	}
	
	// 상담내역 모달 데이터 불러오기
	@ResponseBody
	@PostMapping("/admin/admin_counsel_detail/{aply_sn}")
	public List<view_counsel_dto> counseldetail(@PathVariable(name = "aply_sn") String aply_sn) {
		List<view_counsel_dto> result = this.counsel_service.counsel_detail(aply_sn);
		return result;
	}

	// 상담내역 모달 데이터 수정
	@PostMapping("/admin/admin_counsel_update")
	public void admin_counsel_update(@ModelAttribute counsel_dto cdto, @RequestParam String mng_authrt, ServletResponse res) {
		try {
			res.setContentType("text/html;charset=utf-8");
			this.pw=res.getWriter();
			int result=this.counsel_service.update_counsel(cdto, mng_authrt);
			if(result>0) {
				this.pw.print("<script>"
						+ "alert('상담이 정상적으로 수정되었습니다.');"
						+ "location.href = '/admin/allcounselmod';"
						+ "</script>");
			}
			else {
				this.pw.print("<script>"
						+ "alert('데이터베이스 연결 오류가 발생했습니다.\\n다시 시도해주세요.');"
						+ "history.go(-1);"
						+ "</script>");
			}			
		} catch (Exception e) {
			this.pw.print("<script>"
					+ "alert('오류가 발생하여 상담내역 수정에 실패하였습니다.\\n다시 시도해주세요.');"
					+ "history.go(-1);"
					+ "</script>");
		} finally {
			this.pw.close();
		}
		
	}

	
	//상담 추가 페이지 로드
	@GetMapping("/admin/addcounsel")
	public String addcounsel() {
		return "admin/addcounsel";
	}

	
	
	
	
	/*=============================================공지사항=============================================*/
	

	//공지사항 리스트 출력 및 검색
	@GetMapping("/admin/noticemod")
	public String portalnotice_mod(Model m, @RequestParam(value = "", required = false) String search_part,
			@RequestParam(value = "", required = false) String search_word) {
		
		if (search_part == null || search_word == null || search_part.equals("") || search_word.equals("")) {
			m.addAttribute("notice_list", this.notice_service.notice_list());
		} else {
			m.addAttribute("search_part", search_part);
			m.addAttribute("search_word", search_word);
			m.addAttribute("notice_list", this.notice_service.notice_search_list(search_part, search_word));
		}
		
		return "admin/noticemod";
	}
	
	// 공지사항 보기 모달 데이터 출력
	@PostMapping("/admin/admin_notice_detail/{notice_number}")
	@ResponseBody
	public notice_dto admin_notice_detail(@PathVariable(name = "notice_number") Integer ntc_mttr_sn) {
		return this.notice_service.notice_modal(ntc_mttr_sn);
	}
	
	// 공지사항 수정하기
	@PostMapping("/admin/notice_detail_update")
	public void notice_detail_update(@ModelAttribute notice_dto ntdto, @RequestPart(name = "attchment_file") MultipartFile mfile,
			ServletResponse res, String is_file_delete) {
		try {
			res.setContentType("text/html;charset=utf-8");
			this.pw=res.getWriter();
			int result=this.notice_service.notice_modify(mfile, ntdto, is_file_delete);
			if(result>0) {
				this.pw.print("<script>"
						+ "alert('공지가 정상적으로 수정되었습니다.');"
						+ "location.href = '/admin/noticemod';"
						+ "</script>");
			}
			else {
				this.pw.print("<script>"
						+ "alert('데이터베이스 연결 오류가 발생했습니다.\\n다시 시도해주세요.');"
						+ "history.go(-1);"
						+ "</script>");
			}	
		} catch (Exception e) {
			this.pw.print("<script>"
					+ "alert('오류가 발생하여 공지사항 수정에 실패하였습니다.\\n다시 시도해주세요.');"
					+ "history.go(-1);"
					+ "</script>");
			System.out.println(e);
		} finally {
			this.pw.close();
		}
	}
	
	//공지사항 추가 페이지 로드
	@GetMapping("/admin/notice_add")
	public String notice_add(Model m) {
		this.authentication = SecurityContextHolder.getContext().getAuthentication();
		m.addAttribute("adminName", this.aduser_service.amdin_data(this.authentication.getName()).getEmp_flnm());
		return "admin/notice_add";
	}
	
	//공지사항 추가 (insert)
	@PostMapping("/admin/notice_insert")
	public void addnotice(notice_dto ntdto, @RequestPart(name = "attchment_file") MultipartFile mfile,
			ServletResponse res) {
		res.setContentType("text/html;charset=utf-8");
		try {
			this.pw=res.getWriter();
			this.authentication = SecurityContextHolder.getContext().getAuthentication();
			ntdto.setEmp_no(this.authentication.getName());
			int result = 0;
			result=this.notice_service.addnotice(mfile, ntdto);
			if(result > 0) {
				this.pw.print("<script>"
						+ "alert('공지사항이 정상적으로 등록되었습니다.');"
						+ "if(confirm('공지사항 리스트로 이동하시겠습니까?'))"
						+ "{ location.href='/admin/noticemod'; }"
						+ "else{ location.href='/admin/notice_add'; }"
						+ "</script>");
			}
			else {
				this.pw.print("<script>"
						+ "alert('데이터베이스 연결 오류가 발생했습니다.\\n다시 시도해주세요.');"
						+ "history.go(-1);"
						+ "</script>");
			}			
		} catch (Exception e) {
			this.pw.print("<script>"
					+ "alert('작성 내용을 다시 확인해주세요.');"
					+ "history.go(-1);"
					+ "</script>");
			e.printStackTrace();
		} finally {
			this.pw.close();
		}
	}
	
	
	/*=============================================기타=============================================*/
	
	//에러페이지
	@GetMapping("/admin/error")
	public String error() {
		return "error";
	}

}



