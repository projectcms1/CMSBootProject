package com.cms.ca;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import jakarta.annotation.Resource;

@Service
@Repository("User_service")
public class User_serviceImpl implements User_service {
	
	@Resource(name = "User_repo")
	private User_repository user_repo;
	
	@Override
	public login_dto login(String LGN_ID) {

		return this.user_repo.login(LGN_ID);
	}
}
