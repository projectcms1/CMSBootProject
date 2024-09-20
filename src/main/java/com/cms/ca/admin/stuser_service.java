package com.cms.ca.admin;

import java.util.List;

import com.cms.ca.student_dto;
import com.cms.ca.view_counsel_dto;

public interface stuser_service {
	List<student_dto> student_list();
	
	List<student_dto> student_search_list(String search_part, String search_word);
}


