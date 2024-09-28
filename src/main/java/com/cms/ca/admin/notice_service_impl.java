package com.cms.ca.admin;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cms.ca.notice_dto;

@Service
public class notice_service_impl implements notice_service {

	@Autowired
	private notice_repo notice_repo;

	@Override
	public List<notice_dto> notice_list() {
		List<notice_dto> noticelist_data = this.notice_repo.notice_list();
		return noticelist_data;
	}

	@Override
	public List<notice_dto> notice_search_list(String search_part, String search_word) {
		
			Map<String, String> mp = new HashMap<>();
			mp.put("search_part", search_part);
			mp.put("search_word", search_word);
			List<notice_dto> noticelist_one_data = this.notice_repo.notice_search_list(mp);
			
			return noticelist_one_data;
	}

	@Override
	public int addnotice(notice_dto ntdto) {
		
		//ntdto.setWrt_dt(ntdto.getWrt_dt().replaceAll("-", ""));
		return this.notice_repo.notice_add(ntdto);
	}
	
}
