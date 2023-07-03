package com.techie_chasers.dashboard.repository;

import com.techie_chasers.dashboard.entity.Dashboard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Dashboardrepository extends JpaRepository<Dashboard,Long> {
}
