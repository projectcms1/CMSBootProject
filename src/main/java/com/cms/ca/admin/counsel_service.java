package com.cms.ca.admin;

import java.util.List;
import java.util.Map;

import com.cms.ca.counsel_dto;
import com.cms.ca.student_dto;
import com.cms.ca.view_counsel_dto;

public interface counsel_service {
	List<view_counsel_dto> counsel_list();
	
	List<view_counsel_dto> counsel_detail(String aply_sn);
	
	List<view_counsel_dto> counsel_search_list(String search_part, String search_word);
	
	int addcounsel(counsel_dto csdto);
}


