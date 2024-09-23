package com.cms.ca.admin;

import java.io.PrintWriter;
import java.util.List;

import org.apache.commons.net.ftp.FTP;
import org.apache.commons.net.ftp.FTPClient;
import org.apache.commons.net.ftp.FTPClientConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.cms.ca.counsel_dto;
import com.cms.ca.employee_dto;
import com.cms.ca.student_dto;

import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletResponse;

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
	private stuser_repo stuser_repo;

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
	public void stuser_detail_update(@ModelAttribute student_dto stdto, ServletResponse sr) {
		sr.setContentType("text/html; charset=utf-8");
		try {
			this.pw = sr.getWriter();
			int result = this.stuser_service.student_detail_update(stdto);
			int login_result = this.stuser_service.student_detail_login_update(stdto);
			if (result > 0 && login_result > 0) {
				this.pw.print("<script>" + "alert('학생정보가 수정되었습니다.');" + "location.href='./stlistmod';" + "</script>");
			} else {
				this.pw.print("<script>" + "alert('오류로 인해 학생정보가 수정되지 않았습니다.');" + "history.go(-1);" + "</script>");
			}

		} catch (Exception e) {
			e.printStackTrace();
			this.pw.print("<script>" + "alert('오류로 인해 학생정보가 수정되지 않았습니다. 확인해주세요!');" + "history.go(-1);" + "</script>");
		} finally {
			this.pw.close();
		}
	}
	
	// 학생 cdn 이미지 추가
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@PostMapping("/cdn_uploadok.do")
	public @ResponseBody String cdn_server(@RequestParam(defaultValue = "", required = false) String url,
			@RequestParam("mfile") MultipartFile mfile) { // multipartfile 이름은 jsp에서 날라온 name과 같아야됨
	
		String signs = "";
		
		FTPClient ftp = new FTPClient();
		ftp.setControlEncoding("utf-8");
		FTPClientConfig cf = new FTPClientConfig(); // FTP 접속 환경설정
		try {
			// 업로드 파일명
			String filename = mfile.getOriginalFilename();
			if (filename == null || filename.isEmpty()) {
				return "fail: 파일명이 유효하지 않습니다.";
			}

			// FTP 호스트(도메인,경로)
			String host = url;
			// FTP 아이디/패스워드
			String user = "sej"; // FTP 접속 아이디
			String pass = "a1234"; // FTP 접속 패스워드
			int port = 9005; // FTP 포트
			ftp.configure(cf); // 접속환경을 새롭게 셋팅
			ftp.connect(host, port); // FTP 서버에 접속
			if (ftp.login(user, pass)) { // FTP사용자에 맞게 접속 환경을 설정
				ftp.setFileType(FTP.BINARY_FILE_TYPE);
				int result = ftp.getReplyCode(); // CDN서버에서 파일 업로드 지연형태 발생
				System.out.println("지연코드 : " + result);
				boolean ok = ftp.storeFile("/cacms/" + filename, mfile.getInputStream());
				if (ok) { // 파일 업로드 후 DB에 경로를 저장
					String file_url = "http://172.30.1.7:9009/cacms/" + filename; // CDN서버 경로에 파일명 추가
					student_dto dto = new student_dto();
					dto.setUser_photo(file_url);
					// 필요한 다른 필드들도 설정
					try {
						//stuser_repo.add_stuser_detail(dto); // MyBatis Mapper 메소드 호출
						
						signs = file_url; // 업로드된 이미지의 URL 반환
						
					} catch (Exception e) {
						System.out.println(e);
						System.out.println("Database 연결 실패 오류 !!");
						signs = "fail: Database 오류 발생";
					}

				} else {
					System.out.println("CDN 서버 디렉토리 경로가 올바르지 않습니다.");
					signs = "fail: CDN 서버 디렉토리 경로 오류";
				}
			} else {
				System.out.println("FTP 아이디 및 패스워드 오류 발생 !!");
				signs = "fail: FTP 로그인 실패";
			}
		} catch (Exception e) {
			System.out.println("CDN 서버 접속 오류 발생 !!");
			System.out.println(e);
			signs = "fail: CDN 서버 접속 오류";
		} finally {
			try {
				if (ftp.isConnected()) {
					ftp.disconnect();
				}
			} catch (Exception e) {
				System.out.println("FTP 접속 해제가 실행되지 않습니다.");
			}
		}
		
		return signs;
	}

	@GetMapping("/stlistmod_adduser")
	public String stlistmod_adduser() {
		return "admin/stlistmod_adduser";
	}

	// 학생 사용자 추가
	@PostMapping("/stuser_add")
	public void stuser_add(@ModelAttribute student_dto stdto,
			@RequestParam(value = "", required = false) String entrance_year, ServletResponse sr) {
		sr.setContentType("text/html; charset=utf-8");
		try {
			this.pw = sr.getWriter();
			int detail_result = this.stuser_service.add_stuser_detail(stdto, entrance_year);

			if (detail_result > 0) {
				this.pw.print("<script>" + "alert('학생 계정이 추가되었습니다.');" + "location.href='./stlistmod';" + "</script>");
			} else {
				this.pw.print(
						"<script>" + "alert('오류로 인해 학생 계정이 추가되지 않았습니다. 확인해주세요!');" + "history.go(-1);" + "</script>");
			}

		} catch (Exception e) {
			e.printStackTrace();
			this.pw.print("<script>" + "alert('오류로 인해 학생 계정이 추가되지 않았습니다. 확인해주세요!');" + "history.go(-1);" + "</script>");
		} finally {
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
