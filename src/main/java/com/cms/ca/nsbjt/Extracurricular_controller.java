package com.cms.ca.nsbjt;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.cms.ca.extra_dto;
import com.cms.ca.security.CustomUserDetailsService;

@Controller
public class Extracurricular_controller {
	
	
	@Autowired
	ExtraService ExtraService; 
	
	//인덱스 & 홈
	@GetMapping("extra")
	public String extra_indexok(Model m) {
		List<extra_dto> edu_programs = ExtraService.Bycategory("교육");
		List<extra_dto> work_programs = ExtraService.Bycategory("학습/진로");
		List<extra_dto> counsel_programs = ExtraService.Bycategory("집단상담");
		
		m.addAttribute("edu_programs", edu_programs);
		m.addAttribute("counsel_programs", counsel_programs);
		m.addAttribute("work_programs", work_programs);
		
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
	
	//프로그램 신청하기
	@PostMapping("/apply_program")
    public String applyProgram(@RequestParam("pgmNo") Integer pgmNo) {
        // 현재 로그인된 사용자 정보 가져오기
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String stdntNo = authentication.getName();  // getName()으로 학번을 가져옴
        
        System.out.println(stdntNo);
        
        extra_dto application = new extra_dto();
        application.setPgmNo(pgmNo);
        application.setStdntNo(Integer.valueOf(stdntNo));  // 학번이 String으로 반환될 경우 Integer로 변환
        application.setAplyDt(LocalDateTime.now().toString());  // 신청일시
        application.setPrgrsStts("01");  // 신청 진행 상태
        
        
        // 신청 완료 후 마이페이지로 리다이렉트
        return "redirect:/mypage";
    }
	
	
	//마이페이지
	@GetMapping("mypage")
	public String mypageok(Model m) {
		// 로그인된 사용자 정보에서 학번 가져오기
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String stdntNo = authentication.getName();  // getName()으로 학번을 가져옴

        // 학생이 신청한 프로그램 목록 조회
        List<extra_dto> myPrograms = ExtraService.getMyPrograms(Integer.valueOf(stdntNo));

        // 모델에 프로그램 정보 추가
        m.addAttribute("myPrograms", myPrograms);
		
		return "/Extracurricular_programs/mypage";
	}
	
	//공지사항
	@GetMapping("extra_notice")
	public String noticeok() {
		return "/Extracurricular_programs/notice";
	}
}
