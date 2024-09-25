package com.cms.ca;

public class Extracurricular_dto {
	//비교과 프로그램 정보
	Integer PGM_NO;
	String PGM_FLNM,PGM_EXPLN,PGM_BGNG_DT,PGM_END_DT,APLY_BGNG_DT,APLY_END_DT,CTGRY_NM,OPER_INST_NM,MAX_NOPE,EMP_NOPGM_IMG;
	
	//프로그램 신청정보 | PGM_NO : key
	Integer PGM_APLY_SN,STDNT_NO;
	String APLY_DT,PRGRS_STTS;
	
	//프로그램 일정정보 | PGM_NO : key
	Integer PGM_CYCL;
	String PGM_PRGRS_YMD,PGM_BGNG_TM,PGM_END_TM,PTRT;
	
	//참여대상자 구분정보 | PGM_NO : key
	String STS_CD,SCSBJT,SCH_YR;
	
	//프로그램 일정 참여결과 | PGM_NO,PGM_APLY_SN,PGM_CYCL : key
	String PTCP_YN;
}
