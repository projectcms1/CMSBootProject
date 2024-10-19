package com.cms.ca.admin;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.cms.ca.notice_dto;

public interface notice_service {
	
	List<notice_dto> notice_list();
	
	List<notice_dto> notice_search_list(String search_part, String search_word);
	
	notice_dto notice_modal(Integer ntc_mttr_sn);
	
	int addnotice(MultipartFile mfile, notice_dto ntdto) throws Exception;
	
	int notice_modify(MultipartFile mfile, notice_dto ntdto, String is_file_delete) throws Exception;
}