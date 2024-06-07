package com.example.demo.service;

import com.example.demo.model.ApplicationForm;
import com.example.demo.repository.ApplicationFormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ApplicationFormService {

    @Autowired
    private ApplicationFormRepository repository;

    public ApplicationForm saveApplicationForm(ApplicationForm applicationForm) {
        return repository.save(applicationForm);
    }

    public List<ApplicationForm> getAllForms() {
        return repository.findAll();
    }

    public ApplicationForm getFormById(Long id) {
        Optional<ApplicationForm> optionalForm = repository.findById(id);
        return optionalForm.orElse(null);
    }
}
