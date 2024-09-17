package com.secu.test.demo.model;

import lombok.Data;

import java.time.LocalDate;

@Data
public class Employee {
    private int empNo; // 임직원 번호
    private String empFlnm; // 임직원 성명
    private int userNo; // 계정 번호 (Foreign key)
    private String empEmlAddr; // 이메일 주소
    private String empTelno; // 전화번호
    private String empZip; // 우편번호
    private String empAddr; // 주소
    private String empDaddr; // 상세 주소
    private String empPhoto; // 사진 경로 또는 파일명
    private String eduCrtfctNo; // 교육 자격증 번호
    private LocalDate eduCrtfctIssuYmd; // 교육 자격증 발행일
    private LocalDate brdt; // 생년월일
    private String dlngBankNm; // 거래 은행명
    private String dlngActno; // 거래 계좌번호
    private String dpstrNm; // 예금주명
    private String ogdpInstNm; // 졸업 기관명
    private String ogdpDeptNm; // 졸업 학과명
    private String jbgdNm; // 직급명
    private String mjr; // 전공
    private String acntStts; // 계정 상태
    private String mngAuthrt; // 관리 권한
}
