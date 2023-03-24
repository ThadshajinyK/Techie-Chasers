package com.example.alertsandchats.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="alert_thersholds")
public class Alert_thresholds {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String metric_name;
    private double threshold_value;
    private String comparison_operator;
}
