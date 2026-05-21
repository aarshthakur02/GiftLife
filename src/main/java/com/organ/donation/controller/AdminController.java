package com.organ.donation.controller;

import com.organ.donation.repository.UserRepository;
import com.organ.donation.repository.DonorRepository;
import com.organ.donation.repository.RecipientRepository;
import com.organ.donation.repository.MatchesRepository;
import com.organ.donation.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private DonorRepository donorRepository;

    @Autowired
    private RecipientRepository recipientRepository;

    @Autowired
    private MatchesRepository matchesRepository;

    @GetMapping("/analytics")
    public ResponseEntity<Map<String, Object>> getAnalytics() {
        Map<String, Object> analytics = new HashMap<>();
        long totalUsers      = userRepository.count();
        long totalDonors     = donorRepository.count();
        long totalRecipients = recipientRepository.count();
        long totalMatches    = matchesRepository.count();
        analytics.put("totalUsers", totalUsers);
        analytics.put("totalDonors", totalDonors);
        analytics.put("totalRecipients", totalRecipients);
        analytics.put("totalMatches", totalMatches);
        analytics.put("matchSuccessRate",
            totalDonors > 0 ? (totalMatches * 100 / totalDonors) : 0);
        return ResponseEntity.ok(analytics);
    }

    @PutMapping("/verify/donor/{donorId}")
    public ResponseEntity<String> verifyDonor(@PathVariable Long donorId) {
        return ResponseEntity.ok(adminService.verifyDonor(donorId));
    }

    @PutMapping("/reject/donor/{donorId}")
    public ResponseEntity<String> rejectDonor(@PathVariable Long donorId) {
        return ResponseEntity.ok(adminService.rejectDonor(donorId));
    }

    @PutMapping("/verify/recipient/{recipientId}")
    public ResponseEntity<String> verifyRecipient(@PathVariable Long recipientId) {
        return ResponseEntity.ok(adminService.verifyRecipient(recipientId));
    }

    @PutMapping("/reject/recipient/{recipientId}")
    public ResponseEntity<String> rejectRecipient(@PathVariable Long recipientId) {
        return ResponseEntity.ok(adminService.rejectRecipient(recipientId));
    }
}
