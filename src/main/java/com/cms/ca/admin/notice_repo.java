package com.cms.ca.admin;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.cms.ca.counsel_dto;
import com.cms.ca.notice_dto;

@Mapper
public interface notice_repo {
	
	List<notice_dto> notice_list();
	
	List<notice_dto> notice_search_list(Map<String, String> search_notice_data);
	
	int notice_add(notice_dto ntdto);

}
