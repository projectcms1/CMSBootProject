package com.cms.ca;

import java.io.PrintWriter;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import jakarta.annotation.Resource;
import jakarta.servlet.ServletResponse;

@Controller
public class login_controller {
		PrintWriter pw = null;
		String LGN_ID = "20240001";
		@Resource(name="User_service")
		private User_service user_service;
		
		
	  	//index 페이지
		@GetMapping("/")
		public String index() {
		
			return "/index/index3";
		}	
		
		//index 로그인 페이지
		@PostMapping("/loginok.do")
		public String login(Model m, ServletResponse res) {
			res.setContentType("text/html;charset=utf-8");
			
			try {
			login_dto one = this.user_service.login(LGN_ID);
			
				if(one==null) {
					System.out.println("null");
				}
				
			}catch(Exception e) {
				System.out.println("쿼리오류");
			}

			return null;
		}
}
