package com.springboot.vue.demo.Controller;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/v1/test")
public class LoginController {

    @RequestMapping(value = "/ping", method = RequestMethod.GET)
    @ResponseStatus(value = HttpStatus.OK)
    public JSONArray test(){
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
}
