package com.springboot.vue.demo.Controller;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/v1/login")
public class LoginController {

    @RequestMapping(value = "/L1000", method = RequestMethod.GET)
    @ResponseStatus(value = HttpStatus.OK)
    public JSONArray L1000(){
        JSONArray jsonArray = new JSONArray();

        JSONObject oneInfo = new JSONObject();

        oneInfo.put("name", "송강호");
        oneInfo.put("age", "25");
        oneInfo.put("gender", "남자");
        oneInfo.put("nickname", "남궁민수");

        jsonArray.add(oneInfo);

        oneInfo = new JSONObject();
        oneInfo.put("name", "전지현");
        oneInfo.put("age", "21");
        oneInfo.put("gender", "여자");
        oneInfo.put("nickname", "예니콜");
        jsonArray.add(oneInfo);

        return jsonArray;
    }

    @RequestMapping(value = "/L1001", method = RequestMethod.GET)
    @ResponseStatus(value = HttpStatus.OK)
    public JSONArray L1001(){
        JSONArray jsonArray = new JSONArray();

        JSONObject oneInfo = new JSONObject();

        oneInfo.put("name", "남주혁");
        oneInfo.put("age", "25");
        oneInfo.put("gender", "남자");
        oneInfo.put("nickname", "존잘");

        jsonArray.add(oneInfo);

        oneInfo = new JSONObject();
        oneInfo.put("name", "송혜교");
        oneInfo.put("age", "21");
        oneInfo.put("gender", "여자");
        oneInfo.put("nickname", "존예");
        jsonArray.add(oneInfo);

        return jsonArray;
    }

    @RequestMapping(value = "/L1002", method = RequestMethod.GET)
    @ResponseStatus(value = HttpStatus.OK)
    public JSONArray L1002(){
        JSONArray jsonArray = new JSONArray();

        JSONObject oneInfo = new JSONObject();

        oneInfo.put("name", "정우성");
        oneInfo.put("age", "25");
        oneInfo.put("gender", "남자");
        oneInfo.put("nickname", "잘생");

        jsonArray.add(oneInfo);

        oneInfo = new JSONObject();
        oneInfo.put("name", "손예진");
        oneInfo.put("age", "21");
        oneInfo.put("gender", "여자");
        oneInfo.put("nickname", "예쁨");
        jsonArray.add(oneInfo);

        return jsonArray;
    }
}
