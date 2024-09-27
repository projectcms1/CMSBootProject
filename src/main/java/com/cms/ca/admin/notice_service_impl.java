package com.cms.ca.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class notice_service_impl implements notice_service {

	@Autowired
	private notice_repo notice_repo;
	
}
