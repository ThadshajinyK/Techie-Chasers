package com.example.alertsandchats.controller;

import com.example.alertsandchats.exception.ResourceNotFoundException;
import com.example.alertsandchats.model.Alert_thresholds;
import com.example.alertsandchats.repository.Alert_thresholdsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/alert_thresholds/")
public class Alert_thresholdsController {
    @Autowired
    private Alert_thresholdsRepository alertThresholdsRepository;

    //get all alert_threshold REST API
    @GetMapping("getAllAlert_thresholds")
    public List<Alert_thresholds> getAllAlert_thresholds(){
        return alertThresholdsRepository.findAll();

    }

    //build create alert_threshold REST API
    @PostMapping("createNewAlert_thresholds")
    public Alert_thresholds createAlert_threshold(@RequestBody Alert_thresholds alert_thresholds){

        return alertThresholdsRepository.save(alert_thresholds);
    }


    //build get alert byId REST API
    @GetMapping("{id}")
    public ResponseEntity<Alert_thresholds> getAlert_thresholdById(@PathVariable Long id){
        Alert_thresholds alert_thresholds = alertThresholdsRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Alert_threshold not exist with id:"+id));
        return ResponseEntity.ok(alert_thresholds);
    }


    //build update alert_threshold REST API
    @PutMapping("{id}")
    public ResponseEntity<Alert_thresholds> updateAlert_thresholds(@PathVariable Long id,@RequestBody Alert_thresholds alert_thresholdsDetails){
        Alert_thresholds updateAlert_thresholds = alertThresholdsRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Alert_threshold not exist with id: "+id));
        updateAlert_thresholds.setMetric_name(alert_thresholdsDetails.getMetric_name());
        updateAlert_thresholds.setThreshold_value(alert_thresholdsDetails.getThreshold_value());
        updateAlert_thresholds.setComparison_operator(alert_thresholdsDetails.getComparison_operator());

        alertThresholdsRepository.save(updateAlert_thresholds);
        return ResponseEntity.ok(updateAlert_thresholds);
    }

    //build delete alert_threshold REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteAlert_thresholds(@PathVariable long id){

        Alert_thresholds alert_thresholds = alertThresholdsRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("alert_threshold not exist with id: "+id));
        alertThresholdsRepository.delete(alert_thresholds);

        return  new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

