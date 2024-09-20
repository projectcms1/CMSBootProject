package com.cms.ca.admin;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.cms.ca.student_dto;

@Mapper
public interface stuser_repo {
	
	List<student_dto> student_list();
	
	List<student_dto> student_search_list(Map<String, String> search_stuser_data);
	
	int student_detail_update(student_dto stdto);
}
