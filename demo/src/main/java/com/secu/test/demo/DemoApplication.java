package com.secu.test.demo;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
@MapperScan("com.secu.test.demo.mapper")
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);

		// 원본 비밀번호
		String rawPassword = "root1234";

		// 데이터베이스에 저장된 암호화된 비밀번호 (예: 이전에 BCrypt로 암호화된 값)
		String encryptedPassword = "$2b$12$ODrD.uLyZHwsjenSLwj84edZqztDj/C9b5Z0H0p6ax8dnkJMKcMCq";

		// PasswordEncoder를 사용하여 암호를 비교
		PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		boolean isMatch = passwordEncoder.matches(rawPassword, encryptedPassword);

		if (isMatch) {
			System.out.println("비밀번호가 일치합니다.");
		} else {
			System.out.println("비밀번호가 일치하지 않습니다.");
		}
	}

}
