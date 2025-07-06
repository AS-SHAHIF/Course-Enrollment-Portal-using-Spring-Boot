package com.example.Course.Registration.System.service;

import com.example.Course.Registration.System.model.Course;
import com.example.Course.Registration.System.model.CourseRegistry;
import com.example.Course.Registration.System.repository.CourseRegistryRepo;
import com.example.Course.Registration.System.repository.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {

    @Autowired
    CourseRepo courserepo;

    @Autowired
    CourseRegistryRepo courseregistryrepo;

    public List<Course> getAllCourse() {
        return courserepo.findAll();
    }


    public List<CourseRegistry> getAllRegistry() {
        return courseregistryrepo.findAll();
    }

    public void courseRegistration(String username, String email, String courseName) {
        CourseRegistry courseRegistry=new CourseRegistry(username,email,courseName);
        courseregistryrepo.save(courseRegistry);
    }
}
