package com.cms.ca;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface test_repo {
	List<test_dto> findAll();
}
