package com.srs_backend.Repository;

import com.srs_backend.Entity.Resume;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ResumeRepository extends JpaRepository<Resume, Long> {

    List<Resume> findByExtractedTextContainingOrFileNameContaining(String extractedTextKeyword,
                                                                   String fileNameKeyword);
}
