package com.example.alertsandchats.repository;

import com.example.alertsandchats.model.Alert;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlertRepository extends JpaRepository<Alert, Long> {

}
