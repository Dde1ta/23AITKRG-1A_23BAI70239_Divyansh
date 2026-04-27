package cu.semsix.corsexample.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")

@CrossOrigin(origins = "http://localhost:573")
public class ApiController {

    @GetMapping("/data")
    public Map<String, String> getData() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Hello from Spring Boot!");
        response.put("status", "Success");
        return response;
    }
}