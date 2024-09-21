package com.cms.ca.student;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.cms.ca.selfTestAnswer_dto;
import com.cms.ca.selfTestInfo_dto;
import com.cms.ca.selfTestQitem_dto;
import com.cms.ca.selfTestResult_dto;

@Mapper
@Repository("insp_repo")
public interface SlfPsycInspRepository {

	List<selfTestInfo_dto> getAllListInsp();
	
	List<selfTestQitem_dto> getAllListQitem(String insp_no);
	
	List<selfTestAnswer_dto> getAllListAnswer(String insp_no);
	
	List<selfTestResult_dto> getAllListResult(String insp_no);
}
