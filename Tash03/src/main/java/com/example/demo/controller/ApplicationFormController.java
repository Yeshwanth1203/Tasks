package com.example.demo.controller;

import com.example.demo.model.ApplicationForm;
import com.example.demo.service.ApplicationFormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/forms")
public class ApplicationFormController {

    @Autowired
    private ApplicationFormService service;

    @PostMapping("/upload")
    public ResponseEntity<String> uploadForm(
            @RequestParam("address") String address,
            @RequestParam("pincode") String pincode,
            @RequestParam("mobileNo") String mobileNo,
            @RequestParam("pdf") MultipartFile pdf) {

        if (pdf.getSize() > 104857600) { // 100 MB in bytes
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("File size exceeds 100 MB");
        }

        try {
            ApplicationForm form = new ApplicationForm();
            form.setAddress(address);
            form.setPincode(pincode);
            form.setMobileNo(mobileNo);
            form.setPdf(pdf.getBytes());

            service.saveApplicationForm(form);
            return ResponseEntity.status(HttpStatus.OK).body("Form uploaded successfully");

        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upload form");
        }
    }

    @GetMapping
    public ResponseEntity<List<ApplicationForm>> getAllForms() {
        List<ApplicationForm> forms = service.getAllForms();
        return ResponseEntity.ok(forms);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApplicationForm> getFormById(@PathVariable Long id) {
        ApplicationForm form = service.getFormById(id);
        if (form == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.ok(form);
    }
}
