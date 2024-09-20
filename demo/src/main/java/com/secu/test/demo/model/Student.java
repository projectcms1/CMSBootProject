package com.secu.test.demo.model;

import lombok.Data;

import java.time.LocalDate;

@Data
public class Student {
    private String stdntNo; // 학생 번호
    private String stdntFlnm; // 학생 성명
    private int userNo; // 계정 번호 (Foreign key)
    private String userEmlAddr; // 이메일 주소
    private String userTelno; // 전화번호
    private String userZip; // 우편번호
    private String userAddr; // 주소
    private String userDaddr; // 상세 주소
    private String userPhoto; // 사진 경로 또는 파일명
    private LocalDate brdt; // 생년월일
    private String dlngBankNm; // 거래 은행명
    private String dlngActno; // 거래 계좌번호
    private String dpstrNm; // 예금주명
    private String univPrd; // 대학 기간
    private String ogdpUniv; // 졸업 대학
    private String ogdpScsbjt; // 졸업 전공
    private String mjr; // 전공
    private String stdntSttsSe; // 학생 상태
}
