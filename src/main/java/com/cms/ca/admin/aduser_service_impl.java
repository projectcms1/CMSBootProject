package com.cms.ca.admin;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cms.ca.employee_dto;


@Service
public class aduser_service_impl implements aduser_service {

	@Autowired
	private aduser_repo aduser_repo;
	
	@Override
	public List<employee_dto> admin_list() {
		List<employee_dto> admin_data = this.aduser_repo.admin_list();
		return admin_data;
	}

	@Override
	public List<employee_dto> admin_search_list(String search_part, String search_word) {

		Map<String, String> mp = new HashMap<>();
		mp.put("search_part", search_part);
		mp.put("search_word", search_word);
		List<employee_dto> adminlist_one_data = this.aduser_repo.admin_search_list(mp);
		
		return adminlist_one_data;
	}

	@Override
	public employee_dto amdin_data(String emp_no) {
		employee_dto admin_data = this.aduser_repo.admin_data(emp_no);
		return admin_data;
	}
	
}
