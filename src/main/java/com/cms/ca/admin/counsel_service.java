package com.cms.ca.admin;

import java.util.List;

import com.cms.ca.view_counsel_dto;

public interface counsel_service {
	List<view_counsel_dto> counsel_list();
	
	List<view_counsel_dto> counsel_detail(String aply_sn);
}


