package com.cms.ca.nsbjt;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import com.cms.ca.extra_dto;

@Mapper
public interface ExtraRepository {
	extra_dto getOneProgram(Long pgmNo);	//프로그램 번호로 프로그램 정보조회
	List<extra_dto> getAllPrograms();	//모든 프로그램 출력
}
