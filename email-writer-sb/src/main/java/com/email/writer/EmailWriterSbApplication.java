package com.email.writer;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.nio.file.Paths;

@SpringBootApplication
public class EmailWriterSbApplication {

    public static void main(String[] args) {
        // Ensure Dotenv looks in "email-writer-sb/" directory
        Dotenv dotenv = Dotenv.configure()
                .directory(Paths.get("email-writer-sb").toAbsolutePath().toString()) // Explicitly set the directory
                .ignoreIfMissing() // Prevents crash if file is missing
                .load();

        // Set system properties so Spring can access them
        System.setProperty("GEMINI_API_URL", dotenv.get("GEMINI_API_URL"));
        System.setProperty("GEMINI_API_KEY", dotenv.get("GEMINI_API_KEY"));

        SpringApplication.run(EmailWriterSbApplication.class, args);

        // Debug: Check if values are loaded
        System.out.println("Gemini API URL: " + System.getProperty("GEMINI_API_URL"));
        System.out.println("Gemini API Key: " + System.getProperty("GEMINI_API_KEY"));
    }
}
