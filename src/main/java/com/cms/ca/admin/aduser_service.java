package com.cms.ca.admin;

import java.util.List;

import com.cms.ca.employee_dto;
import com.cms.ca.student_dto;

public interface aduser_service {	
	
	List<employee_dto> admin_list();
	
	List<employee_dto> admin_search_list(String search_part, String search_word);
	
	employee_dto amdin_data(String emp_no);
}


