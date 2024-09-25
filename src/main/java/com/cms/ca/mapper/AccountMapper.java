package com.cms.ca.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.cms.ca.employee_dto;
import com.cms.ca.login_dto;
import com.cms.ca.student_dto;



@Mapper
public interface AccountMapper {
    // 계정 정보 관련 메서드
    login_dto findAccountByUsername(String lgnId); // 사용자 이름으로 계정 정보 조회
    void insertAccount(login_dto account);
    void updateAccount(login_dto account);
    void deleteAccount(int userNo);

    // 학생 정보 관련 메서드
    student_dto findStudentByAccountId(int userNo);
    void insertStudent(student_dto student);
    void updateStudent(student_dto student);
    void deleteStudent(int userNo);

    // 임직원 정보 관련 메서드
    employee_dto findEmployeeByAccountId(int userNo);
    void insertEmployee(employee_dto employee);
    void updateEmployee(employee_dto employee);
    void deleteEmployee(int userNo);
}
