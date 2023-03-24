package com.example.alertsandchats.repository;

import com.example.alertsandchats.model.Chat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatRepository extends JpaRepository<Chat, Long> {
}
