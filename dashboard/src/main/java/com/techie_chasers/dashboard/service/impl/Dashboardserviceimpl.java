package com.techie_chasers.dashboard.service.impl;

import com.techie_chasers.dashboard.entity.Dashboard;
import com.techie_chasers.dashboard.repository.Dashboardrepository;
import com.techie_chasers.dashboard.service.Dashboardservice;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class Dashboardserviceimpl implements Dashboardservice {
    private final Dashboardrepository dashboardrepository;

    public Dashboardserviceimpl(Dashboardrepository dashboardrepository) {
        this.dashboardrepository = dashboardrepository;
    }

    @Override
    public List<Dashboard> findalldashboard() {
        return dashboardrepository.findAll();
    }

    @Override
    public Optional<Dashboard> findbyid(Long id) {
        return dashboardrepository.findById(id);
    }




    @Override
    public Dashboard savedashboard(Dashboard dashboard) {
        return dashboardrepository.save(dashboard);
    }

    @Override
    public Dashboard updatedashboard(Dashboard dashboard) {
        return dashboardrepository.save(dashboard);
    }

    @Override
    public void deletedashboard(Long dashboard_id) {
        dashboardrepository.deleteById(dashboard_id);
    }
}
