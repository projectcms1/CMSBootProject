package com.cms.ca.admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cms.ca.student_dto;



@Service
public class stuser_service_impl implements stuser_service{

	@Autowired
	private stuser_repo stuser_repo;
	
	@Override
	public List<student_dto> student_list() {
		List<student_dto> studentlist_data = this.stuser_repo.student_list();
		return studentlist_data;
	}
	
	@Override
	public List<student_dto> student_one_list(String stdnt_no) {
		List<student_dto> studentlist_one_data = this.stuser_repo.student_one_list(stdnt_no);
		return studentlist_one_data;
	}
	
}

