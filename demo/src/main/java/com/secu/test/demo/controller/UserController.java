package com.secu.test.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UserController {

    @GetMapping("/login")
    public String loginPage() {
        return "login"; // login.html 템플릿을 반환
    }

    @GetMapping("/index")
    public String indexPage() {
        return "index"; // index.html 템플릿을 반환
    }

    @GetMapping("/admin/dashboard")
    public String adminDashboard() {
        return "admin/dashboard"; // admin/dashboard.html 템플릿을 반환
    }

    @GetMapping("/professor/home")
    public String professorHome() {
        return "professor/home"; // professor/home.html 템플릿을 반환
    }

    @GetMapping("/counselor/home")
    public String counselorHome() {
        return "counselor/home"; // counselor/home.html 템플릿을 반환
    }

    @GetMapping("/staff/home")
    public String staffHome() {
        return "staff/home"; // staff/home.html 템플릿을 반환
    }
}
