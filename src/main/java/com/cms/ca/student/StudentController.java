package com.cms.ca.student;

import java.io.PrintWriter;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.cms.ca.counsel_dto;
import com.cms.ca.student_dto;

import jakarta.annotation.Resource;
import jakarta.servlet.ServletResponse;

@Controller
@RequestMapping("/student")
public class StudentController {

	String viewName = "error";
	
	student_dto onedata=null;
	PrintWriter pw = null;
	
	@Resource(name = "stdnt_service")
	private StudentService stdSrvc;
	
	@Resource(name = "insp_service")
	private SlfPsycInspService inspSrvc;
	
	@GetMapping("/std_info")
	public String std_info(Model m) throws Exception {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		try {
			student_dto onedata = this.stdSrvc.getOneStudent(authentication.getName());
			if (onedata == null) { // 사용자 데이터 없음 (없는 학번)
				this.viewName = "error";
			}
			else {
				onedata.setGrade();
				onedata.setDashInTelNumber();
				m.addAttribute("std_data", onedata);
				this.viewName = "student/std_info";
			}
		} catch (Exception e) {
			this.viewName = "error";
		}
		return this.viewName;
	}
	
	@PostMapping("/update_std_info")
	public void update_std_info(@ModelAttribute student_dto sdto, ServletResponse res) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		res.setContentType("text/html; charset=UTF-8");
		try {
			this.pw = res.getWriter();
			sdto.setStdnt_no(authentication.getName());
			int result = this.stdSrvc.updateStudentInfo(sdto);
			if (result > 0) {
				this.pw.print("<script> alert('성공적으로 정보가 변경되었습니다.');"
						+ "location.href = './std_info';</script>");
			}
			else {
				this.pw.print("<script> alert('오류가 발생하여 예약이 실패하였습니다.'); history.go(-1);</script>");
			}
		} catch (Exception e) {
			this.pw.print("<script> alert('오류가 발생하여 예약이 실패하였습니다.'); history.go(-1);</script>");
		} finally {
			this.pw.close();
		}
	}
	
	@GetMapping("/std_counsel_list")
	public String std_counsel_loglist(Model m,
			@RequestParam(value = "", required = false) String search_part,
			@RequestParam(value = "", required = false) String search_word) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		try {
			student_dto onedata = this.stdSrvc.getOneStudent(authentication.getName());
			if (search_part == null || search_word == null || search_part.equals("") || search_word.equals("")) {
				m.addAttribute("counselList", this.stdSrvc.getAllListCounsel(authentication.getName()));
			}
			else {
				m.addAttribute("search_part", search_part);
				m.addAttribute("search_word", search_word);
				m.addAttribute("counselList", this.stdSrvc.getAllListCounselSearch(authentication.getName(), search_part, search_word));
			}
			m.addAttribute("std_data", onedata);
			this.viewName = "student/std_counsel_list";
		} catch (Exception e) {
			e.printStackTrace();
			this.viewName = "error";
		}
		return this.viewName;
	}
	
	@GetMapping("/std_counsel_reservelist")
	public String std_counsel_reservelist(Model m) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		try {
			student_dto onedata = this.stdSrvc.getOneStudent(authentication.getName());
			m.addAttribute("std_data", onedata);
			m.addAttribute("napproveList", this.stdSrvc.getAllListNonApproveCounsel(authentication.getName()));
			m.addAttribute("approveList", this.stdSrvc.getAllListApproveCounsel(authentication.getName()));
			m.addAttribute("counselingList", this.stdSrvc.getAllListCounseling(authentication.getName()));
			this.viewName = "student/std_counsel_reservelist";
		} catch (Exception e) {
			e.printStackTrace();
			this.viewName = "error";
		}
		return this.viewName;
	}
	
	@PostMapping("/cancel_counsel_reservation")
	public void cancel_counsel_reservation(@RequestParam(value = "", required = false) String cancel_aply_sn, ServletResponse res) {
		res.setContentType("text/html; charset=UTF-8");
		try {
			this.pw = res.getWriter();
			
			int result = this.stdSrvc.updateCounselCancel(cancel_aply_sn);
			if (result > 0) {
				this.pw.print("<script> alert('성공적으로 예약이 취소되었습니다.');"
						+ "location.href = './std_counsel_reservelist';</script>");
			}
			else {
				this.pw.print("<script> alert('오류가 발생하여 취소가 실패하였습니다.'); history.go(-1);</script>");
			}
		} catch (Exception e) {
			this.pw.print("<script>location.href = '/blank';</script>");
		} finally {
			this.pw.close();
		}
	}
	
	@GetMapping("/std_counsel_reserve")
	public String std_counsel_reserve(Model m) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		try {
			student_dto onedata = this.stdSrvc.getOneStudent(authentication.getName());
			m.addAttribute("std_data", onedata);
			m.addAttribute("counseler_list", this.stdSrvc.getAllCounseler());
			m.addAttribute("professor_number", this.stdSrvc.getProfessorNumber(authentication.getName()));
			this.viewName = "student/std_counsel_reserve";
		} catch (Exception e) {
			this.viewName = "error";
		}
		return this.viewName;
	}
	
	// 상담 신청
	@PostMapping("/insert_counsel_reservation")
	public void insert_counsel_reservation(@ModelAttribute counsel_dto cdto, ServletResponse res,
			@RequestParam(value = "", required = false) String professor_number,
			@RequestParam(value = "", required = false) String counseler_number) {
		res.setContentType("text/html; charset=UTF-8");
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		try {
			cdto.setStdnt_no(authentication.getName());
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
			e.printStackTrace();
			this.pw.print("<script> alert('해당 시간에 예약 가능한 상담사가 없습니다.'); history.go(-1);</script>");
		} finally {
			this.pw.close();
		}
	}
	
	@GetMapping("/std_counsel_chatting")
	public String std_counsel_chatting() {
		return "student/std_counsel_chatting";
	}
	
	@GetMapping("/std_counsel_selftestlist")
	public String std_counsel_selftestlist(Model m) {
		try {
			Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
			student_dto onedata = this.stdSrvc.getOneStudent(authentication.getName());
			m.addAttribute("std_data", onedata);
			m.addAttribute("inspList", this.inspSrvc.getAllListInsp());
			this.viewName = "student/std_counsel_selftestlist";
		} catch (Exception e) {
			e.printStackTrace();
			this.viewName = "error";
		}
		return this.viewName;
	}
}