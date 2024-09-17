package com.secu.test.demo.mapper;

import com.secu.test.demo.model.Account;
import com.secu.test.demo.model.Employee;
import com.secu.test.demo.model.Student;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AccountMapper {
    // 계정 정보 관련 메서드
    Account findAccountByUsername(String lgnId); // 사용자 이름으로 계정 정보 조회
    void insertAccount(Account account);
    void updateAccount(Account account);
    void deleteAccount(int userNo);

    // 학생 정보 관련 메서드
    Student findStudentByAccountId(int userNo);
    void insertStudent(Student student);
    void updateStudent(Student student);
    void deleteStudent(int userNo);

    // 임직원 정보 관련 메서드
    Employee findEmployeeByAccountId(int userNo);
    void insertEmployee(Employee employee);
    void updateEmployee(Employee employee);
    void deleteEmployee(int userNo);
}
