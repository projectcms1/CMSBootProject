package com.cms.ca.student;

import java.util.List;

import com.cms.ca.selfTestInfo_dto;

public interface SlfPsycInspService {

	List<selfTestInfo_dto> getAllListInsp();
	
	String getAllDataOfOneInsp(String insp_no);
}
