package com.cms.ca.admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cms.ca.counsel_dto;
import com.cms.ca.employee_dto;
import com.cms.ca.student_dto;



@Service
public class counsel_service_impl implements counsel_service{

	@Autowired
	private counsel_repo counsel_repo;
	
	@Override
	public List<counsel_dto> counsel_list() {
		List<counsel_dto> counsellist_data = this.counsel_repo.counsel_list();
		return counsellist_data;
	}
	
}
