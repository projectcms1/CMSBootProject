package com.cms.ca.admin;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.cms.ca.counsel_dto;
import com.cms.ca.view_counsel_dto;

@Mapper
public interface counsel_repo {
	
	List<view_counsel_dto> counsel_list(Map<String, String> keymap);
	
	int getCountRound(int aply_sn);
	
	List<view_counsel_dto> counsel_detail(String aply_sn);
	
	List<view_counsel_dto> counsel_search_list(Map<String, String> search_counsel_data);
	
	int counsel_add(counsel_dto csdto);
}
