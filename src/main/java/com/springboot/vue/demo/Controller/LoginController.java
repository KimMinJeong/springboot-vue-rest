package com.springboot.vue.demo.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LoginController {

        @RequestMapping(value = "/")
        public String loginForm(){
            return "index";
        }
}
