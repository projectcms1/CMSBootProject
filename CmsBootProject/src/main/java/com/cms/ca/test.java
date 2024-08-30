package com.cms.ca;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class test {
	
	@Autowired
	test_repo repo;
	
	@GetMapping("testok.do")
	public String testok() {
		List<test_dto> result = this.repo.findAll();
		System.out.println(result);
		
		return "/testok";
	}
}
