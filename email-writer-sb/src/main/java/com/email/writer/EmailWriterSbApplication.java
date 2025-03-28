package com.email.writer;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EmailWriterSbApplication {

    @Value("${gemini.api.url}")
    private String geminiApiUrl;

    @Value("${gemini.api.key}")
    private String geminiApiKey;

    public static void main(String[] args) {
        SpringApplication.run(EmailWriterSbApplication.class, args);
    }

    // Add a constructor to print values after Bean creation
    public EmailWriterSbApplication() {
        System.out.println("Gemini API URL: " + geminiApiUrl);
        System.out.println("Gemini API Key: " + geminiApiKey);
    }
}
