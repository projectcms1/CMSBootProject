package com.cms.ca.admin;

import java.util.List;

import com.cms.ca.notice_dto;

public interface notice_service {
	
	List<notice_dto> notice_list();
	
	List<notice_dto> notice_search_list(String search_part, String search_word);
	
	int addnotice(notice_dto ntdto);
	
}