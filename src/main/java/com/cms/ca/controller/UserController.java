package com.cms.ca.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.cms.ca.employee_dto;
import com.cms.ca.student_dto;
import com.cms.ca.admin.notice_service;
import com.cms.ca.employee.EmployeeService;
import com.cms.ca.student.StudentService;

import jakarta.annotation.Resource;

@Controller
public class UserController {
	
	@Resource(name = "empy_service")
	private EmployeeService empyService;
	
	@Resource(name = "stdnt_service")
	private StudentService stdSrvc;
	
	@Autowired
	private notice_service notiSrvc;
	
    @GetMapping("/login")
    public String loginPage() {
        return "login"; // login.html 템플릿을 반환
    }

    @PostMapping("/login")
    public String index() {
    	 Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
         if (authentication == null) {
             // 로그를 남기거나 적절한 조치를 취합니다.
             System.out.println("Authentication is null");
         } else {
             System.out.println("Authentication is set: " + authentication.getName());
         }
    	
    	return "index";
    }
    
    @GetMapping("/index")
    public String indexPage(Model model) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null) {
            // 로그를 남기거나 적절한 조치를 취합니다.
            System.out.println("Authentication is null");
        } else {
        	String counselor="COUNSELOR";
        	String professor="PROFESSOR";
        	String student="USER";
        	
        	String auth=authentication.getAuthorities().toArray()[0].toString();
        	employee_dto empy_info=null;
        	student_dto std_info=null;
        	
        	model.addAttribute("noticeList", this.notiSrvc.notice_list());
        	
            System.out.println("Authentication is set: " + authentication.getName());
            if(auth.contains(professor) || auth.contains(counselor)) {
            	empy_info=this.empyService.getEmployeeInfo(authentication.getName());
            	model.addAttribute("empy_info", empy_info);
            }
            else if(auth.contains(student)) {
            	std_info=this.stdSrvc.getOneStudent(authentication.getName());
            	model.addAttribute("std_data", std_info);
            }
        }
        
        	
        model.addAttribute("authentication", authentication);


        return "index"; // index.html 템플릿을 반환
    }


    @GetMapping("/professor/home")
    public String professorHome() {
        return "professor/home"; // professor/home.html 템플릿을 반환
    }

    @GetMapping("/counselor/home")
    public String counselorHome() {
        return "counselor/home"; // counselor/home.html 템플릿을 반환
    }

    @GetMapping("/staff/home")
    public String staffHome() {
        return "staff/home"; // staff/home.html 템플릿을 반환
    }
}
