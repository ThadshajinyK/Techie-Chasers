package com.example.alertsandchats.controller;

import com.example.alertsandchats.exception.ResourceNotFoundException;
import com.example.alertsandchats.model.Alert;
import com.example.alertsandchats.repository.AlertRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/alert/")
public class AlertController {

    @Autowired
    private AlertRepository alertRepository;

    //get all alerts REST API
    @GetMapping("getAllAlerts")
    public List<Alert> getAllAlerts(){
        return alertRepository.findAll();

    }

    //build create alert REST API
    @PostMapping("createAlert")
    public Alert createAlert(@RequestBody Alert alert){

        return alertRepository.save(alert);
    }


    //build get alert byId REST API
    @GetMapping("{id}")
    public ResponseEntity<Alert> getAlertById( @PathVariable Long id){
        Alert alert = alertRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Alert not exist with id:"+id));
        return ResponseEntity.ok(alert);
    }


    //build update employee REST API
    @PutMapping("{id}")
    public ResponseEntity<Alert> updateAlert(@PathVariable Long id,@RequestBody Alert alertDetails){
        Alert updateAlert = alertRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Alert not exist with id: "+id));
        updateAlert.setType(alertDetails.getType());
        updateAlert.setDescription(alertDetails.getDescription());
        updateAlert.setTimeTriggered(alertDetails.getTimeTriggered());
        updateAlert.setApp_id(alertDetails.getApp_id());
        updateAlert.setServer_id(alertDetails.getServer_id());
        updateAlert.setSolved_or_not(alertDetails.isSolved_or_not());
        updateAlert.setSeverity_level(alertDetails.getSeverity_level());

        alertRepository.save(updateAlert);
        return ResponseEntity.ok(updateAlert);
    }

    //build delete alert REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteAlert(@PathVariable long id){

        Alert alert = alertRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("alert not exist with id: "+id));
        alertRepository.delete(alert);

        return  new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
