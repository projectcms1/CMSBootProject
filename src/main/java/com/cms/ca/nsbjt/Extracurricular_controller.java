package com.cms.ca.nsbjt;

import java.io.PrintWriter;
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

import jakarta.servlet.ServletResponse;

@Controller
public class Extracurricular_controller {
	
	
	@Autowired
	ExtraService ExtraService;
	
	PrintWriter pw = null;
	
	//인덱스 & 홈
	@GetMapping("/Extracurricular_programs/extra")
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
	@GetMapping("/Extracurricular_programs/extracurricular")
	public String extracurricular(Model m) {
		List<extra_dto> programs = ExtraService.getAllPrograms();
		m.addAttribute("programs", programs);
		System.out.println(programs);
		System.out.println("test");
		return "/Extracurricular_programs/extracurricular";
	}
	
	//프로그램 상세보기
	@GetMapping("/Extracurricular_programs/extracurricular_info/{pgmNo}")
	public String extracurricular_info(@PathVariable("pgmNo") Long pgmNo, Model m) {
		extra_dto program = ExtraService.getOneProgram(pgmNo);
		m.addAttribute("program", program);
		System.out.println(program);
		return "/Extracurricular_programs/extracurricular_info";
	}
	
	//프로그램 신청하기
	@PostMapping("/Extracurricular_programs/apply_program")
    public String applyProgram(@RequestParam("pgmNo") Integer pgmNo) {
		try {
        // 현재 로그인된 사용자 정보 가져오기
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String stdntNo = authentication.getName();  // getName()으로 학번을 가져옴
        
        extra_dto application = new extra_dto();
        application.setPgmNo(pgmNo);
        application.setStdntNo(Integer.valueOf(stdntNo));  // 학번이 String으로 반환될 경우 Integer로 변환
        application.setPrgrsStts("01");  // 신청 진행 상태
        this.ExtraService.saveProgramApplication(application);
		} catch (Exception e) {
			e.printStackTrace();
		}
        
        // 신청 완료 후 마이페이지로 리다이렉트
        return "redirect:/Extracurricular_programs/mypage";
    }
	
	
	//마이페이지
	@GetMapping("/Extracurricular_programs/mypage")
	public String mypageok(Model m) {
		// 로그인된 사용자 정보에서 학번 가져오기
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String stdntNo = authentication.getName();  // getName()으로 학번을 가져옴
        System.out.println(stdntNo+"test");
        // 학생이 신청한 프로그램 목록 조회
        System.out.println(stdntNo);
        List<extra_dto> myPrograms = ExtraService.getMyPrograms(Integer.valueOf(stdntNo));
        System.out.println(myPrograms);
        // 모델에 프로그램 정보 추가
        m.addAttribute("myPrograms", myPrograms);
		
		return "/Extracurricular_programs/mypage";
	}
	
	//공지사항
	@GetMapping("/Extracurricular_programs/extra_notice")
	public String noticeok() {
		return "/Extracurricular_programs/notice";
	}
	
	@PostMapping("/Extracurricular_programs/cancel_program")
	public String cancelProgram(@RequestParam("pgmAplySn") Integer pgmAplySn) {
	    // 로그인된 사용자 정보에서 학번 가져오기
	    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
	    String stdntNo = authentication.getName();  // 학번 가져오기
	    System.out.println(pgmAplySn);
	    // 신청 취소 처리
	    ExtraService.deleteProgramApplication(pgmAplySn, Integer.valueOf(stdntNo));
	    
	    // 취소 완료 후 마이페이지로 리다이렉트
	    return "redirect:/Extracurricular_programs/mypage";
	}
}
