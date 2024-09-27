package com.cms.ca.security;

import java.io.IOException;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.stereotype.Component;

import com.cms.ca.service.AccountService;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class CustomAuthenticationFailureHandler implements AuthenticationFailureHandler{
	
	private AccountService accountservice;
	
	public CustomAuthenticationFailureHandler(AccountService accountservice) {
		this.accountservice = accountservice;
	}
	
	@Override
	public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response,
			AuthenticationException exception) throws IOException, ServletException {
		String lgn_id = request.getParameter("username");
		if(lgn_id != null) {
			accountservice.lockAccount(lgn_id);
		}
		
		response.sendRedirect("/login?error=true");
	}
}
