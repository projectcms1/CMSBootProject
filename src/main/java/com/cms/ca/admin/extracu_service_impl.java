package com.cms.ca.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class extracu_service_impl implements extracu_service {

	@Autowired
	private extracu_repo extracu_repo;
}
