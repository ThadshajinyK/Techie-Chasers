package com.techie_chasers.dashboard.service;

import com.techie_chasers.dashboard.entity.Dashboard;

import java.util.List;
import java.util.Optional;

public interface Dashboardservice {

    List<Dashboard>findalldashboard();
    Optional<Dashboard>findbyid();

    Optional<Dashboard> findbyid(Long dashboard_id);

    Dashboard savedashboard(Dashboard dashboard);
    Dashboard updatedashboard(Dashboard dashboard);
    void deletedashboard(Long dashboard_id );
}
