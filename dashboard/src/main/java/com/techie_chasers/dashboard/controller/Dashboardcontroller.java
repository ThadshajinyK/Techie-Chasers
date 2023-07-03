package com.techie_chasers.dashboard.controller;

import com.techie_chasers.dashboard.entity.Dashboard;
import com.techie_chasers.dashboard.service.Dashboardservice;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/dashboard")
public class Dashboardcontroller {

    private final Dashboardservice dashboardservice;

    public Dashboardcontroller(Dashboardservice dashboardservice) {
        this.dashboardservice = dashboardservice;
    }
    @GetMapping
    public List<Dashboard> findalldashboard(){
        return dashboardservice.findalldashboard();
    }


    @GetMapping("/{id}")
    public Optional<Dashboard> findDashboardById(@PathVariable("id") Long id) {
        return dashboardservice.findbyid();
    }

    @PostMapping
    public Dashboard saveDashboard(@RequestBody Dashboard dashboard) {
        return dashboardservice.savedashboard(dashboard);
    }

    @PutMapping
    public Dashboard updateDashboard(@RequestBody Dashboard dashboard) {
        return dashboardservice.updatedashboard(dashboard);
    }

    @DeleteMapping("/{id}")
    public void deleteEmployee(@PathVariable("id") Long id) {
        empService.deleteEmployee(id);


}
