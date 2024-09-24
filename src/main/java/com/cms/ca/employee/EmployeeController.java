package com.cms.ca.employee;

import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cms.ca.counsel_dto;
import com.cms.ca.employee_dto;
import com.cms.ca.search_dto;
import com.cms.ca.view_counsel_dto;

import jakarta.annotation.Resource;
import jakarta.servlet.ServletResponse;

@Controller
public class EmployeeController {
	
	String emp_no="2024632";
	String viewName = "/employee/empy_blankpage";
	employee_dto oneData=null;
	PrintWriter pw=null;
	
	@Resource(name = "empy_service")
	private EmployeeService empyService;
	
	@GetMapping("/employee/empy_info")	//교직원 정보창에 들어갈 때: GetMapping 처리
	public String employeeInfoPage(Model m) {
		try {
			this.oneData = this.empyService.getEmployeeInfo(emp_no);	//교번으로 교직원 데이터 read
			if (this.oneData.getEmp_no()==null) { // 교번과 매칭되는 사람이 없을시
				viewName = "/employee/empy_blankpage";
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
				viewName = "/employee/empy_info";
			}
		} 
		catch (Exception e) {
			e.printStackTrace();
			viewName = "/employee/empy_blankpage";
		}
		m.addAttribute("empy_info", this.oneData);
		return viewName;
	}
	
	
	@PostMapping("/employee/empy_info")	//교직원 정보창에서 데이터 수정할 때
	public void employeeInfoSave(Model m, employee_dto updatedData, ServletResponse res) {
		try {
			int updateck=0;
			res.setContentType("text/html;charset=utf-8");
			this.pw=res.getWriter();
			updateck=this.empyService.updateEmployeeInfo(updatedData);	//데이터 수정 체크
			if(updateck>0) {	//데이터 업데이트 success
				m.addAttribute("empy_info", this.oneData);
				this.pw.print("<script>"
						+ "alert('입력하신 정보가 정상적으로 수정되었습니다.');"
						+ "location.href='/employee/empy_info';"
						+ "</script>");
			}
			else {	// 데이터 업데이트 fail
				this.pw.print("<script>"
						+ "alert('데이터베이스 연결 오류가 발생했습니다.\\n다시 시도해주세요.');"
						+ "history.go(-1);"
						+ "</script>");
			}
		
		} catch (Exception e) {
			this.pw.print("<script>location.href='/employee/empy_blankpage';</script>");	//에러 페이지 이동
			e.printStackTrace();
		}
		finally {
			this.pw.close();
		}
	}
	
	@GetMapping("/employee/empy_counsel_index")
	public String employeeCounselIndexPage(Model m, @ModelAttribute("params") search_dto params, ServletResponse res) {	//교번에 해당하는 완료 상담 정보와 개수 로드
		try {
			List<view_counsel_dto> counsel_list = this.empyService.getAllCounsel(emp_no, "완료", params);
			int counsel_list_count = this.empyService.getAllCounselCount(emp_no, "완료", params);	
			int maxpage=(int)Math.ceil((double)counsel_list_count/params.getSize());
			
			if(maxpage<params.getPage() && maxpage!=0) {
				res.setContentType("text/html;charset=utf-8");
				this.pw=res.getWriter();
				this.pw.print("<script>"
					+ "alert('잘못된 페이지 접근입니다.');"
					+ "history.go(-1);"
					+ "</script>");
				this.pw.close();
			}
			
			m.addAttribute("counsel_list", counsel_list);
			m.addAttribute("counsel_list_count", counsel_list_count);
			m.addAttribute("maxpage", maxpage);
		} 
		catch (Exception e) {
			e.printStackTrace();
		}
		return "employee/empy_counsel_index";
	}
	
	@ResponseBody
	@GetMapping("/employee/empy_counsel_indexok.do")
    public Map<String, Object> counselDetailModal(final int aply_sn) {
        Map<String, Object> map= new HashMap<String, Object>();
		try {
			List<view_counsel_dto> counsel_detail=this.empyService.getOneCounsel(aply_sn);
			map.put("counsel_detail", counsel_detail);
		} 
		catch (Exception e) {
			e.printStackTrace();
		}
		return map;
    }
	
	@GetMapping("/employee/empy_counsel_waiting")
	public String employeeCounselWaitingPage(Model m, @ModelAttribute("params") search_dto params, ServletResponse res) {	//교번에 해당하는 완료 상담 정보와 개수 로드
		try {
			List<view_counsel_dto> counsel_list = this.empyService.getAllCounsel(emp_no, "미승인", params);
			int counsel_list_count = this.empyService.getAllCounselCount(emp_no, "미승인", params);	
			int maxpage=(int)Math.ceil((double)counsel_list_count/params.getSize());
			
			if(maxpage<params.getPage() && maxpage!=0) {
				res.setContentType("text/html;charset=utf-8");
				this.pw=res.getWriter();
				this.pw.print("<script>"
					+ "alert('잘못된 페이지 접근입니다.');"
					+ "history.go(-1);"
					+ "</script>");
				this.pw.close();
			}
			
			m.addAttribute("counsel_list", counsel_list);
			m.addAttribute("counsel_list_count", counsel_list_count);
			m.addAttribute("maxpage", maxpage);
		} 
		catch (Exception e) {
			e.printStackTrace();
		}
		return "employee/empy_counsel_waiting";
	}
	
	@ResponseBody
	@GetMapping("/employee/empy_counsel_waiting_updateok.do")
    public Map<String, Object> counselWaitingUpdate(final int aply_sn) {
        Map<String, Object> map= new HashMap<String, Object>();
		try {
			counsel_dto counsel=new counsel_dto();
			counsel.setAply_sn(aply_sn);
			counsel.setStts_cd("승인");
			int counsel_update_ok=this.empyService.updateCounselStatus(counsel);
			map.put("counsel_update_ok", counsel_update_ok);
		} 
		catch (Exception e) {
			e.printStackTrace();
		}
		return map;
    }
	
	@GetMapping("/employee/empy_counsel_confirm")
	public String employeeCounselConfirmPage(Model m, @ModelAttribute("params") search_dto params, ServletResponse res) {	//교번에 해당하는 완료 상담 정보와 개수 로드
		try {
			List<view_counsel_dto> counsel_list = this.empyService.getAllCounsel(emp_no, "승인", params);
			int counsel_list_count = this.empyService.getAllCounselCount(emp_no, "승인", params);	
			int maxpage=(int)Math.ceil((double)counsel_list_count/params.getSize());
			
			if(maxpage<params.getPage() && maxpage!=0) {
				res.setContentType("text/html;charset=utf-8");
				this.pw=res.getWriter();
				this.pw.print("<script>"
					+ "alert('잘못된 페이지 접근입니다.');"
					+ "history.go(-1);"
					+ "</script>");
				this.pw.close();
			}
			
			m.addAttribute("counsel_list", counsel_list);
			m.addAttribute("counsel_list_count", counsel_list_count);
			m.addAttribute("maxpage", maxpage);
		} 
		catch (Exception e) {
			e.printStackTrace();
		}
		return "employee/empy_counsel_confirm";
	}
	
	@GetMapping("/employee/empy_counsel_past")
	public String employeeCounselPastPage(Model m, @ModelAttribute("params") search_dto params, ServletResponse res) {	//교번에 해당하는 완료 상담 정보와 개수 로드
		try {
			List<view_counsel_dto> counsel_list_cancle = this.empyService.getPastCounsel(emp_no, params);
			int counsel_list_count = this.empyService.getAllCounselCount(emp_no, "완료", params)+this.empyService.getAllCounselCount(emp_no, "취소", params);	
			int maxpage=(int)Math.ceil((double)counsel_list_count/params.getSize());
			
			if(maxpage<params.getPage() && maxpage!=0) {
				res.setContentType("text/html;charset=utf-8");
				this.pw=res.getWriter();
				this.pw.print("<script>"
					+ "alert('잘못된 페이지 접근입니다.');"
					+ "history.go(-1);"
					+ "</script>");
				this.pw.close();
			}
			
			m.addAttribute("counsel_list", counsel_list_cancle);
			m.addAttribute("counsel_list_count", counsel_list_count);
			m.addAttribute("maxpage", maxpage);
		} 
		catch (Exception e) {
			e.printStackTrace();
		}
		return "employee/empy_counsel_past";
	}

	@GetMapping("/employee/empy_counsel_reserve")
	public String employeeCounselReservePage() {
		return "employee/empy_counsel_reserve";
	}
	
	@GetMapping("/employee/empy_counsel_add")	//상담신청 페이지 불러오기
	public String employeeCounselAddPage(Model m, counsel_dto csl_dto) {
		m.addAttribute("csl_dto", csl_dto);
		
		return "employee/empy_counsel_add";
	}
	
	@ResponseBody
	@PostMapping("/employee/empy_counsel_add_stdnt_no_ok.do")
	public Map<String, Object> employeeCounselAddStdntNoOk(String stdnt_no) {	//학번으로 학생 이름 불러오기
		Map<String, Object> map= new HashMap<String, Object>();
		try {
			String stdnt_name = this.empyService.getStdntNameFromStdNo(stdnt_no);	
			map.put("stdnt_name", stdnt_name);
		} 
		catch (Exception e) {
			e.printStackTrace();
		}
		return map;
	}
	
	@PostMapping("/employee/empy_counsel_addok")	
	public String employeeCounselAddSave(Model m, ServletResponse res, counsel_dto csl_dto) {
		try {
			res.setContentType("text/html;charset=utf-8");
			this.pw=res.getWriter();
			int result=this.empyService.addCounsel(csl_dto, emp_no);
			if(result>0) {
				this.pw.print("<script>"
						+ "alert('상담이 정상적으로 신청되었습니다.');"
						+ "if(confirm('상담 리스트로 이동하시겠습니까?'))"
						+ "{ location.href='/employee/empy_counsel_confirm'; }"
						+ "else{ location.href='/employee/empy_counsel_add'; }"
						+ "</script>");
			}
			else {
				this.pw.print("<script>"
						+ "alert('데이터베이스 연결 오류가 발생했습니다.\\n다시 시도해주세요.');"
						+ "history.go(-1);"
						+ "</script>");
			}			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
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
