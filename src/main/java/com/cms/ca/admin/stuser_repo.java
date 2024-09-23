package com.cms.ca.admin;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.cms.ca.login_dto;
import com.cms.ca.std_emp_dto;
import com.cms.ca.student_dto;

@Mapper
public interface stuser_repo {
	
	List<student_dto> student_list();
	
	List<student_dto> student_search_list(Map<String, String> search_stuser_data);
	
	int student_detail_update(student_dto stdto);
	
	int student_detail_login_update(student_dto stdto);
	
	int add_stuser_login(login_dto lgdto);
	
	int add_stuser_detail(student_dto stdto);
	
	Integer match_st_userno(login_dto lgdto);
	
	int match_leadpro(std_emp_dto sedto);
	
	int getall_stuser_count();
	
}
