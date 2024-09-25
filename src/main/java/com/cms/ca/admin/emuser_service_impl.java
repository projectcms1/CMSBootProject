package com.cms.ca.admin;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cms.ca.employee_dto;
import com.cms.ca.student_dto;



@Service
public class emuser_service_impl implements emuser_service{

	@Autowired
	private emuser_repo emuser_repo;
	
	@Override
	public List<employee_dto> employee_list() {
		List<employee_dto> employeelist_data = this.emuser_repo.employee_list();
		return employeelist_data;
	}

	@Override
	public employee_dto employee_data(String emp_no) {
		employee_dto employee_data = this.emuser_repo.employee_data(emp_no);
		return employee_data;
	}

	@Override
	public List<student_dto> employee_search_list(String search_part, String search_word) {
		
		Map<String, String> mp = new HashMap<>();
		mp.put("search_part", search_part);
		mp.put("search_word", search_word);
		List<student_dto> employeelist_one_data = this.emuser_repo.employee_search_list(mp);
		
		return employeelist_one_data;
	}
	
}
