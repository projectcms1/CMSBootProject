package com.cms.ca.student;

import java.util.List;
import java.util.Map;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.cms.ca.view_counsel_dto;

import jakarta.annotation.Resource;

@RestController
@RequestMapping("/student")
public class AjaxController {

	// ==== 로그인 구현 이전, 세션의 임시 학번 데이터 ======
	String STD_NUMBER = "20245125";
	// =======================================
	
	@Resource(name = "stdnt_service")
	private StudentService stdSrvc;
	
	@Resource(name = "insp_service")
	private SlfPsycInspService inspSrvc;
	
	JSONObject errorObj = null;
	JSONArray errorArr = null;
	
	// 상담사+지도교수 시간표 SELECT - AJAX
	@GetMapping("/api/professor_time")
	public String professor_time() {
		String callback = "";
		try {
			callback = this.stdSrvc.getAllEmpTimeTable(this.STD_NUMBER);
		} catch (Exception e) {
			this.errorObj = new JSONObject();
			this.errorObj.put("cnslr", "error");
			callback = this.errorObj.toString();
		}
		return callback;
	}
	
	// 상담 내용의 상세 정보 버튼
	@PostMapping("/counsel_detail_info/{aply_sn}")
	public String counsel_detail_info(@PathVariable(name = "aply_sn") String aply_sn) {
		String callback = "";
		try {
			List<view_counsel_dto> result = this.stdSrvc.getListModalData(aply_sn);
			callback = new JSONDataMaker().makeCounselDetail(result);
		} catch (Exception e) {
			this.errorArr = new JSONArray();
			this.errorArr.put("error");
			callback = this.errorArr.toString();
		}
		return callback;
	}
	
	// 자가진단 심리검사 검사 데이터 조회
	@PostMapping("/selftest_detail_info/{insp_no}")
	public String selftest_detail_info(@PathVariable(name = "insp_no") String insp_no) {
		String callback = "";
		try {
			callback = this.inspSrvc.getAllDataOfOneInsp(insp_no);
		} catch (Exception e) {
			this.errorObj = new JSONObject();
			this.errorObj.put("QitemData", "error");
			callback = this.errorObj.toString();
		}
		return callback;
	}
	
	// 자가진단 심리검사 결과 데이터 저장
	@PostMapping("/selftest_result/{insp_no}")
	public @ResponseBody String selftest_result_insert(@PathVariable(name = "insp_no") String insp_no,
			@RequestBody Map<String, Map<String, String>> bodyData) {
		String callback = "";
		try {
			callback = this.inspSrvc.saveUserTestResult(this.STD_NUMBER, insp_no, bodyData);
		} catch (Exception e) {
			callback = "error";
		}
		return callback;
	}
	
	// 자가진단 심리검사 결과 데이터 조회
	@GetMapping("/selftest_result/{insp_no}")
	public String selftest_result_select(@PathVariable(name = "insp_no") String insp_no) {
		String callback = "";
		try {
			callback = this.inspSrvc.getUserSelfTestData(this.STD_NUMBER, insp_no);
		} catch (Exception e) {
			e.printStackTrace();
			this.errorObj = new JSONObject();
			this.errorObj.put("insp_dt", "error");
			callback = this.errorObj.toString();
		}
		return callback;
	}
}
