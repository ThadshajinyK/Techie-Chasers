package com.example.alertsandchats;

import com.example.alertsandchats.model.Alert;
import com.example.alertsandchats.model.Alert_thresholds;
import com.example.alertsandchats.repository.AlertRepository;
import com.example.alertsandchats.repository.Alert_thresholdsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AlertsAndChatsApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(AlertsAndChatsApplication.class, args);
    }
    @Autowired
    private AlertRepository alertRepository;

    @Autowired
    private Alert_thresholdsRepository alertThresholdsRepository;


    @Override
    public void run(String... args) throws Exception {
//        Alert alert1 = new Alert();
//        alert1.setId(123);
//        alert1.setType("High memory usage");
//        alert1.setDescription("Memory usage exceed 90%");
//        alert1.setTimeTriggered("1999/08/07");
//        alert1.setApp_id(234);
//        alert1.setServer_id(345);
//        alert1.setSolved_or_not(true);
//        alert1.setSeverity_level("High");
//        alertRepository.save(alert1);
//
//        Alert alert2 = new Alert();
//        alert2.setId(12);
//        alert2.setType("High cpu usage");
//        alert2.setDescription("cpu usage exceed 90%");
//        alert2.setTimeTriggered("1999/08/09");
//        alert2.setApp_id(234);
//        alert2.setServer_id(347);
//        alert2.setSolved_or_not(false);
//        alert2.setSeverity_level("High");
//        alertRepository.save(alert2);


//        Alert_thresholds alert_thresholds1 = new Alert_thresholds();
//        alert_thresholds1.setMetric_name("cpu");
//        alert_thresholds1.setThreshold_value(98.0);
//        alert_thresholds1.setComparison_operator("dif");
//        alertThresholdsRepository.save(alert_thresholds1);
//
//        Alert_thresholds alert_thresholds2 = new Alert_thresholds();
//        alert_thresholds2.setMetric_name("memory");
//        alert_thresholds2.setThreshold_value(30.9);
//        alert_thresholds2.setComparison_operator("dif");
//        alertThresholdsRepository.save(alert_thresholds2);








    }
}
