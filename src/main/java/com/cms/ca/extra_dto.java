package com.cms.ca;

import lombok.Data;

@Data
public class extra_dto {
	// 비교과 프로그램 정보
    private Integer pgmNo;
    private String pgmFlNm, pgmExpln, pgmBgngDt, pgmEndDt, aplyBgngDt, aplyEndDt, ctgryNm, operInstNm, maxNope, empNopgmImg;

    // 프로그램 신청정보 | pgmNo : key
    private Integer pgmAplySn, stdntNo;
    private String aplyDt, prgrsStts;

    // 프로그램 일정정보 | pgmNo : key
    private Integer pgmCycl;
    private String pgmPrgrsYmd, pgmBgngTm, pgmEndTm, ptrt;

    // 참여대상자 구분정보 | pgmNo : key
    private String stsCd, scsbjt, schYr;

    // 프로그램 일정 참여결과 | pgmNo, pgmAplySn, pgmCycl : key
    private String ptcpYn;  
}
