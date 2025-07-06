package com.example.Course.Registration.System.controller;

import com.example.Course.Registration.System.model.Course;
import com.example.Course.Registration.System.model.CourseRegistry;
import com.example.Course.Registration.System.repository.CourseRegistryRepo;
import com.example.Course.Registration.System.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*")


@RestController
public class CourseController {

    @Autowired
    CourseService courseservice;



    @GetMapping("courses")
    public List<Course> getAllCourse(){
        return courseservice.getAllCourse();
    }

    @GetMapping("courses/enrolled")
    public List<CourseRegistry> getAllRegistry(){
        return courseservice.getAllRegistry();
    }
    @PostMapping("courses/register")
    public void courseRegistration(@RequestParam("username") String username,
                                     @RequestParam("email") String email,
                                     @RequestParam("courseName") String courseName){
        courseservice.courseRegistration(username,email,courseName);


    }

}
