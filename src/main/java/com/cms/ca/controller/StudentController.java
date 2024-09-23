package com.cms.ca.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.cms.ca.model.student_dto;
import com.cms.ca.service.StudentService;

import jakarta.annotation.Resource;


@Controller
@RequestMapping("/student")
public class StudentController {
	@Resource(name = "stdnt_service")
	private StudentService stdSrvc;
	
	String STD_NUMBER = "20245125";
	String viewName = "page_blank";
	
	@GetMapping("/std_info")
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
	
}
