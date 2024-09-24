package com.cms.ca.student;

import java.util.List;
import java.util.Map;

import com.cms.ca.selfTestInfo_dto;

public interface SlfPsycInspService {

	List<selfTestInfo_dto> getAllListInsp();
	
	String getAllDataOfOneInsp(String insp_no);
	
	String saveUserTestResult(String stdnt_no, String insp_no, Map<String, Map<String, String>> userData);
	
	String getUserSelfTestData(String stdnt_no, String insp_no);
}
