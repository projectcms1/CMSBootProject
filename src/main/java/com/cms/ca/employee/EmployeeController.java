package com.cms.ca.employee;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.cms.ca.employee_dto;

import jakarta.annotation.Resource;

@Controller
public class EmployeeController {
	
	String emp_no="2023006";
	String viewName = "/employee/empy_blankpage";
	
	@Resource(name = "empy_service")
	private EmployeeService empyService;
	
	@GetMapping("/employee/empy_info")
	public String employeeInfoPage(Model m) {
		try {
			employee_dto onedata = this.empyService.getEmployeeInfo(this.emp_no);
			if (onedata == null) { // 교번과 매칭되는 사람이 없을시
				// 에러 페이지 추가 후 수정
				System.out.println("empy_info Error");
			}
			else {
				if((onedata.getEdu_crtfct_issu_ymd()==null) || (onedata.getEdu_crtfct_no()==null)) {
					onedata.setEdu_crtfct_issu_ymd("-");
					onedata.setEdu_crtfct_no("-");
				}
				m.addAttribute("empy_info", onedata);
				viewName = "employee/empy_info";
			}
		} catch (Exception e) {
			e.printStackTrace();
			viewName = "page_blank";
		}
		return viewName;
	}
	
	@GetMapping("/employee/empy_counsel_index")
	public String employeeCounselIndexPage() {
		return "employee/empy_counsel_index";
	}
	
	@GetMapping("/employee/empy_counsel_reserve")
	public String employeeCounselReservePage() {
		return "employee/empy_counsel_reserve";
	}
	
	@GetMapping("/employee/empy_counsel_add")
	public String employeeCounselAddPage() {
		return "employee/empy_counsel_add";
	}
	
	@GetMapping("/employee/empy_counsel_chatting")
	public String employeeCounselChattingPage() {
		return "employee/empy_counsel_chatting";
	}
	
	@GetMapping("/employee/empy_academy_index")
	public String employeeAcademyIndexPage() {
		return "employee/empy_academy_index";
	}
	
	@GetMapping("/employee/empy_blankpage")
	public String employeeBlankPage() {
		return "employee/empy_blankpage";
	}
}
