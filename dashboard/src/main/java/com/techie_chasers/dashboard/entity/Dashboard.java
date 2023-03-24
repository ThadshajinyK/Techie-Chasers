package com.techie_chasers.dashboard.entity;

import jakarta.persistence.*;

@Entity
@Table(name="Dashboard")
public class Dashboard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long dashboard_id;
    private Long metric_id;
    private String matric_name;
    private Long server_id;
    private Long app_id;
    private Long server_instance_id;
    private String ip_address;
    private String location;
    private String status;
    private String app_name;

    public Dashboard() {
    }

    public Dashboard(Long dashboard_id, Long metric_id, String matric_name, Long server_id, Long app_id, Long server_instance_id, String ip_address, String location, String status, String app_name) {
        this.dashboard_id = dashboard_id;
        this.metric_id = metric_id;
        this.matric_name = matric_name;
        this.server_id = server_id;
        this.app_id = app_id;
        this.server_instance_id = server_instance_id;
        this.ip_address = ip_address;
        this.location = location;
        this.status = status;
        this.app_name = app_name;
    }

    public Long getDashboard_id() {
        return dashboard_id;
    }

    public void setDashboard_id(Long dashboard_id) {
        this.dashboard_id = dashboard_id;
    }

    public Long getMetric_id() {
        return metric_id;
    }

    public void setMetric_id(Long metric_id) {
        this.metric_id = metric_id;
    }

    public String getMatric_name() {
        return matric_name;
    }

    public void setMatric_name(String matric_name) {
        this.matric_name = matric_name;
    }

    public Long getServer_id() {
        return server_id;
    }

    public void setServer_id(Long server_id) {
        this.server_id = server_id;
    }

    public Long getApp_id() {
        return app_id;
    }

    public void setApp_id(Long app_id) {
        this.app_id = app_id;
    }

    public Long getServer_instance_id() {
        return server_instance_id;
    }

    public void setServer_instance_id(Long server_instance_id) {
        this.server_instance_id = server_instance_id;
    }

    public String getIp_address() {
        return ip_address;
    }

    public void setIp_address(String ip_address) {
        this.ip_address = ip_address;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getApp_name() {
        return app_name;
    }

    public void setApp_name(String app_name) {
        this.app_name = app_name;
    }
}
