package com.cms.ca.student;

import java.io.PrintWriter;
import java.util.List;

import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.cms.ca.counsel_dto;
import com.cms.ca.student_dto;

import jakarta.annotation.Resource;
import jakarta.servlet.ServletResponse;

@Controller
public class StudentController {

	// ==== 로그인 구현 이전, 세션의 임시 학번 데이터 ======
	String STD_NUMBER = "20245125";
	// =======================================
	String viewName = "page_blank";
	
	PrintWriter pw = null;
	
	@Resource(name = "stdnt_service")
	private StudentService stdSrvc;
	
	@GetMapping("/student/std_info")
	public String std_info(Model m) throws Exception {
		try {
			student_dto onedata = this.stdSrvc.getOneStudent(this.STD_NUMBER);
			if (onedata == null) { // 사용자 데이터 없음 (없는 학번)
				// 에러 페이지 추가 후 수정
				System.out.println("이게 뭐야");
			}
			else {
				onedata.setGrade();
				onedata.setDashInTelNumber();
				m.addAttribute("std_data", onedata);
				this.viewName = "student/std_info";
			}
		} catch (Exception e) {
			System.out.println(e);
			this.viewName = "page_blank";
		}
		return this.viewName;
	}
	
	@PostMapping("/student/update_std_info")
	public void update_std_info(@ModelAttribute student_dto sdto, ServletResponse res) {
		res.setContentType("text/html; charset=UTF-8");
		try {
			this.pw = res.getWriter();
			sdto.setStdnt_no(this.STD_NUMBER);
			int result = this.stdSrvc.updateStudentInfo(sdto);
			if (result > 0) {
				this.pw.print("<script> alert('성공적으로 정보가 변경되었습니다.');"
						+ "location.href = './std_info';</script>");
			}
			else {
				this.pw.print("<script> alert('오류가 발생하여 예약이 실패하였습니다.'); history.go(-1);</script>");
			}
		} catch (Exception e) {
			System.out.println(e);
			this.pw.print("<script>location.href = '/blank';</script>");
		} finally {
			this.pw.close();
		}
	}
	
	@GetMapping("/student/std_counsel_list")
	public String std_counsel_loglist() {
		try {
			this.viewName = "student/std_counsel_list";
		} catch (Exception e) {
			this.viewName = "page_blank";
		}
		return this.viewName;
	}
	
	@GetMapping("/student/std_counsel_reservelist")
	public String std_counsel_reservelist() {
		return "student/std_counsel_reservelist";
	}
	
	@GetMapping("/student/std_counsel_reserve")
	public String std_counsel_reserve(Model m) {
		try {
			m.addAttribute("counseler_list", this.stdSrvc.getAllCounseler());
			m.addAttribute("professor_number", this.stdSrvc.getProfessorNumber(this.STD_NUMBER));
			this.viewName = "student/std_counsel_reserve";
		} catch (Exception e) {
			this.viewName = "page_blank";
		}
		return this.viewName;
	}
	
	// 지도 교수 시간표 SELECT - AJAX
	@GetMapping("/student/api/professor_time")
	public String professor_time() {
		String callback = "";
		try {
			//System.out.println("ajax-api 작동");
			this.stdSrvc.getPrfsTimeTable(this.STD_NUMBER);
			callback = "ok";
		} catch (Exception e) {
			callback = "error";
		}
		return callback;
	}
	
	// 상담 신청
	@PostMapping("/student/insert_counsel_reservation")
	public void insert_counsel_reservation(@ModelAttribute counsel_dto cdto, ServletResponse res,
			@RequestParam(value = "", required = false) String professor_number,
			@RequestParam(value = "", required = false) String counseler_number) {
		res.setContentType("text/html; charset=UTF-8");
		System.out.println(cdto);
		System.out.println(professor_number);
		try {
			boolean ck = false;
			cdto.setStdnt_no(this.STD_NUMBER);
			this.pw = res.getWriter();
			
			int result = this.stdSrvc.addCounselReservation(cdto, professor_number, counseler_number);
			if (result > 0) {
				this.pw.print("<script> alert('성공적으로 예약이 완료되었습니다.');"
						+ "location.href = './std_counsel_reservelist';</script>");
			}
			else {
				this.pw.print("<script> alert('오류가 발생하여 예약이 실패하였습니다.'); history.go(-1);</script>");
			}
		} catch (Exception e) {
			System.out.println(e);
			this.pw.print("<script>location.href = '/blank';</script>");
		} finally {
			this.pw.close();
		}
	}
	
	@GetMapping("/student/std_counsel_chatting")
	public String std_counsel_chatting() {
		return "student/std_counsel_chatting";
	}
	
	@GetMapping("/student/std_counsel_selftestlist")
	public String std_counsel_selftestlist() {
		return "student/std_counsel_selftestlist";
	}
}