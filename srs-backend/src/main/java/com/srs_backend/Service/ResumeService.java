package com.srs_backend.Service;

import com.srs_backend.Entity.Resume;
import com.srs_backend.Repository.ResumeRepository;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ResumeService {

    private final ResumeRepository resumeRepository;
    @Value("${resume.upload.dir}")
    private  String UPLOAD_DIR;

    @Autowired
    public ResumeService(ResumeRepository resumeRepository) {
        this.resumeRepository = resumeRepository;
    }

    public Resume saveResume(MultipartFile file) throws IOException {
        // Generate a unique file name
        String fileName = UUID.randomUUID() + "_" + file.getOriginalFilename();
        String filePath = UPLOAD_DIR + fileName;

        // Ensure the upload directory exists
        Files.createDirectories(Paths.get(UPLOAD_DIR));

        // Save the file to disk
        File uploadedFile = new File(filePath);
        file.transferTo(uploadedFile);

        String extractedText = "";

        // Extract text from PDF file
        try (PDDocument document = PDDocument.load(uploadedFile)) {
            PDFTextStripper stripper = new PDFTextStripper();
            extractedText = stripper.getText(document);
        } catch (IOException e) {
            // Log or handle the error
            throw new IOException("Error extracting text from PDF file: " + e.getMessage());
        }

        // Create a new Resume entity and save it to the database
        Resume resume = new Resume(null, fileName, filePath, extractedText, LocalDateTime.now());
        return resumeRepository.save(resume);
    }

    public Optional<Resume> getResumeById(Long id) {
        return resumeRepository.findById(id);
    }



    public boolean deleteResume(Long id) {
        Optional<Resume> resume = resumeRepository.findById(id);
        if (resume.isPresent()) {
            resumeRepository.delete(resume.get());
            return true;
        }
        return false;
    }


    public List<Resume> searchResumes(String keyword) {
        return resumeRepository.findByExtractedTextContainingOrFileNameContaining(keyword, keyword);
    }
}