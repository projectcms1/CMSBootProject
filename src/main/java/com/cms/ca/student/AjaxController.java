package com.cms.ca.student;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cms.ca.view_counsel_dto;

import jakarta.annotation.Resource;

@RestController
public class AjaxController {

	// ==== 로그인 구현 이전, 세션의 임시 학번 데이터 ======
	String STD_NUMBER = "20245125";
	// =======================================
	
	@Resource(name = "stdnt_service")
	private StudentService stdSrvc;
	
	// 상담사+지도교수 시간표 SELECT - AJAX
	@GetMapping("/student/api/professor_time")
	public String professor_time() {
		String callback = "";
		try {
			callback = this.stdSrvc.getAllEmpTimeTable(this.STD_NUMBER);
		} catch (Exception e) {
			callback = "error";
		}
		return callback;
	}
	
	// 상담 내용의 상세 정보 버튼
	@PostMapping("/student/counsel_detail_info/{aply_sn}")
	public String counsel_detail_info(@PathVariable(name = "aply_sn") String aply_sn) {
		String callback = "";
		try {
			List<view_counsel_dto> result = this.stdSrvc.getListModalData(aply_sn);
			callback = new JSONDataMaker().makeCounselDetail(result);
		} catch (Exception e) {
			callback = "error";
		}
		return callback;
	}
	
}
