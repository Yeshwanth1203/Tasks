package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.ApplicationForm;

public interface ApplicationFormRepository extends JpaRepository<ApplicationForm, Long> {

}
