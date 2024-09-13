package com.cms.ca.employee;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.cms.ca.employee_dto;

import jakarta.annotation.Resource;

@Controller
public class EmployeeController {
	
	String emp_no="2013800";
	String viewName = "/employee/empy_blankpage";
	employee_dto oneData=null;
	
	@Resource(name = "empy_service")
	private EmployeeService empyService;
	
	private void employeeInfo(String emp_no) {
		try {
			this.oneData = this.empyService.getEmployeeInfo(emp_no);
			
			if (this.oneData.getEmp_no()==null) { // 교번과 매칭되는 사람이 없을시
				// 에러 페이지 추가 후 수정
				System.out.println("empy_info Error");
			}
			else {
				if((this.oneData.getEdu_crtfct_issu_ymd().equals("")) || (this.oneData.getEdu_crtfct_no().equals(""))) {	//교원자격증번호 및 발급일자가 null(교수가 아닐 때)
					this.oneData.setEdu_crtfct_issu_ymd("-");
					this.oneData.setEdu_crtfct_no("-");
				}
				else {
					this.oneData.setDateWithDot();		//교원자격증 발급일자 출력 형태 변경					
				}
				this.oneData.setDashInTelNumber();	//전화번호 출력 형태 변경
				viewName = "employee/empy_info";
			}
		} 
		catch (Exception e) {
			e.printStackTrace();
			viewName = "/employee/empy_blankpage";
		}
		
	}
	
	@GetMapping("/employee/empy_info")	//교직원 정보창에 들어갈 때: GetMapping 처리
	public String employeeInfoPage(Model m) {
		employeeInfo(this.emp_no);
		m.addAttribute("empy_info", this.oneData);
		return viewName;
	}
	
	@PostMapping("/employee/empy_info")	//교직원 정보창에서 데이터 수정할 때
	public String employeeInfoSave(Model m, employee_dto changedData) {
		int updateck=0;
		
		//각각 개인정보, 거주지 정보, 은행 정보 update
		if(changedData.getEmp_eml_addr()!=null && changedData.getEmp_telno()!=null) {	
			updateck=this.empyService.updatePersonalEmployeeInfo(changedData);
		}
		else if(changedData.getEmp_zip()!=null && changedData.getEmp_addr()!=null && changedData.getEmp_daddr()!=null) {
			updateck=this.empyService.updateAddrEmployeeInfo(changedData);
		}
		else if(changedData.getDlng_bank_nm()!=null&& changedData.getDlng_actno()!=null) {
			updateck=this.empyService.updateBankEmployeeInfo(changedData);
		}
		
		if(updateck>0) {
			employeeInfo(changedData.getEmp_no());
			m.addAttribute("empy_info", this.oneData);
		}
		else {
			System.out.println("empy_info update error");
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
