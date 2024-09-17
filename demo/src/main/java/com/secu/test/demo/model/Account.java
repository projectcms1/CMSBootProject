package com.secu.test.demo.model;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class Account {
    private int userNo; // 사용자 번호
    private String lgnId; // 로그인 ID
    private String pswd; // 비밀번호
    private Timestamp lastLgnDt; // 마지막 로그인 날짜
    private String acntLckYn; // 계정 잠금 여부
    private Timestamp regDt; // 등록 날짜
}
