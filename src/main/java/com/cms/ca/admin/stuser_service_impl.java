package com.cms.ca.admin;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cms.ca.login_dto;
import com.cms.ca.student_dto;



@Service
public class stuser_service_impl implements stuser_service{

	@Autowired
	private stuser_repo stuser_repo;
	
	@Override
	public List<student_dto> student_list() {
		List<student_dto> studentlist_data = this.stuser_repo.student_list();
		for (student_dto stdto : studentlist_data) {
			stdto.setGrade();
		}
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

	@Override
	public int student_detail_update(student_dto stdto) {
		int stuser_update_result = this.stuser_repo.student_detail_update(stdto);
		return stuser_update_result;
	}
	
	@Override
	public int student_detail_login_update(student_dto stdto) {
		int stuser_update_login_result = this.stuser_repo.student_detail_login_update(stdto);
		return stuser_update_login_result;
	}

	@Override
	public int add_stuser_detail(student_dto stdto, String entrance_year) {
		
		add_stuserdata_maker stuser_logindata_maker = new add_stuserdata_maker();
		login_dto lgdto = new login_dto();

		//학생 사용자 초기 비밀번호 만들기
		lgdto.setPswd(stuser_logindata_maker.addstuser_pass_maker(stdto.getUser_telno(), stdto.getBrdt()));
		
		//학생 학번 만들기
		String new_stdnt_no = stuser_logindata_maker.addstuser_stdntno_maker(entrance_year);
		lgdto.setLgn_id(new_stdnt_no);
		
		
		int stuser_insert_login= this.stuser_repo.add_stuser_login(lgdto);
		return stuser_insert_login;
	}

	
	
	
}

