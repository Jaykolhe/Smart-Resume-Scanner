package com.srs_backend.Controller;

import com.srs_backend.Entity.Resume;
import com.srs_backend.Service.ResumeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/resumes")
@CrossOrigin(origins = "http://localhost:5173")
public class ResumeController {

    private final ResumeService resumeService;

    public ResumeController(ResumeService resumeService) {
        this.resumeService = resumeService;
    }

    // Endpoint for uploading a resume
    @PostMapping("/upload")
    public ResponseEntity<?> uploadResume(@RequestParam("file") MultipartFile file) {
        try {
            // Save the resume and return the saved object
            Resume savedResume = resumeService.saveResume(file);
            return ResponseEntity.ok(savedResume);
        } catch (IOException e) {
            // Handle file upload or extraction errors
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error uploading or processing the resume: " + e.getMessage());
        }
    }


    @GetMapping("/resumes/{id}")
    public ResponseEntity<Resume> getResumeById(@PathVariable Long id) {
        Optional<Resume> resume = resumeService.getResumeById(id);
        return resume.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/resumes/{id}")
    public ResponseEntity<Void> deleteResume(@PathVariable Long id) {
        boolean deleted = resumeService.deleteResume(id);
        return deleted ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }


    @GetMapping("/resumes/search")
    public ResponseEntity<List<Resume>> searchResumes(@RequestParam String keyword) {
        List<Resume> resumes = resumeService.searchResumes(keyword);
        return ResponseEntity.ok(resumes);
    }
}
