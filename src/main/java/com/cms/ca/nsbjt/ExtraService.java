package com.cms.ca.nsbjt;

import java.util.List;

import com.cms.ca.extra_dto;

public interface ExtraService {
	extra_dto getOneProgram(Long pgmNo);
	List<extra_dto> getAllPrograms();	//모든 프로그램 조회
}
