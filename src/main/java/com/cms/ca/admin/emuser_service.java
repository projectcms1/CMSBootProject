package com.cms.ca.admin;

import java.util.List;

import com.cms.ca.employee_dto;
import com.cms.ca.student_dto;

public interface emuser_service {
	List<employee_dto> employee_list();
	
	List<employee_dto> employee_search_list(String search_part, String search_word);
	
	employee_dto employee_data(String emp_no);
	
	int employee_modify(employee_dto dto);
	
	int add_emuser_detail(employee_dto emdto, String entrance_year);
}


