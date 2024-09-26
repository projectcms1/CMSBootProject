package com.cms.ca.admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cms.ca.employee_dto;



@Service
public class emuser_service_impl implements emuser_service{

	@Autowired
	private emuser_repo emuser_repo;
	
	@Override
	public List<employee_dto> employee_list() {
		List<employee_dto> employeelist_data = this.emuser_repo.employee_list();
		return employeelist_data;
	}
	
}
