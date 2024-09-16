package com.cms.ca;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository("User_repo")
public interface User_repository {
	login_dto login(String LGN_ID);
}
