package com.cms.ca.student;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.cms.ca.slfPsycInsp_dto;

@Mapper
@Repository("insp_repo")
public interface SlfPsycInspRepository {

	List<slfPsycInsp_dto> getAllListInsp();
}
