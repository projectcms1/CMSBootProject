package com.cms.ca.nsbjt;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.cms.ca.extra_dto;

@Controller
public class Extracurricular_controller {
	
	
	@Autowired
	ExtraService ExtraService; 
	
	//인덱스 & 홈
	@GetMapping("extra")
	public String extra_indexok() {
		return "/Extracurricular_programs/extra_index";
	}
	
	//비교과 프로그램
	@GetMapping("extracurricular")
	public String extracurricular(Model m) {
		List<extra_dto> programs = ExtraService.getAllPrograms();
		m.addAttribute("programs", programs);
		System.out.println(programs);
		System.out.println("test");
		return "/Extracurricular_programs/extracurricular";
	}
	
	//프로그램 상세보기
	@GetMapping("extracurricular_info/{pgmNo}")
	public String extracurricular_info(@PathVariable("pgmNo") Long pgmNo, Model m) {
		extra_dto program = ExtraService.getOneProgram(pgmNo);
		m.addAttribute("program", program);
		System.out.println(program);
		return "/Extracurricular_programs/extracurricular_info";
	}
	
	//마이페이지
	@GetMapping("mypage")
	public String mypageok() {
		return "/Extracurricular_programs/mypage";
	}
	
	//공지사항
	@GetMapping("extra_notice")
	public String noticeok() {
		return "/Extracurricular_programs/notice";
	}
}
