package com.cms.ca.admin;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
	public List<student_dto> student_search_list(String search_part, String search_word) {
		Map<String, String> mp = new HashMap<>();
		mp.put("search_part", search_part);
		mp.put("search_word", search_word);
		List<student_dto> studentlist_one_data = this.stuser_repo.student_search_list(mp);
		return studentlist_one_data;
	}
	
}

