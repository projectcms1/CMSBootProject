package com.cms.ca.admin;

import java.util.List;

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
	
}
