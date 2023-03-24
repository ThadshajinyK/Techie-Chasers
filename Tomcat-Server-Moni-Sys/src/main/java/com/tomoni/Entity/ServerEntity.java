package com.tomoni.Entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import java.util.List;

@Entity
@Table(name="server")
public class ServerEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long server_id;

    @Column(nullable = false)
    private String server_name; // name or label for the server

    @Column(nullable = false)
    private String server_location; //location of the server, e.g. data center, cloud provider

    @Column(nullable = false)
    private String ip_address;

    @Column(nullable = false)
    private String host_name;

    @Column(nullable = false)
    private Integer server_port; // port number on which the server is running

    @Column(nullable = false)
    private String server_status; //true for running, false for stopped

    @Column(nullable = false)
    private Long uptime;

    @Column(nullable = false)
    private Boolean availability;

    @Column(nullable = false)
    private Long server_disk_capacity;

    @Column(nullable = false)
    private Long server_memory_capacity;

    @Column(nullable = false)
    private Double server_cpu_capacity;

    @OneToMany(mappedBy ="server")
    @LazyCollection(LazyCollectionOption.FALSE)
    private List<ServerInstanceEntity> instances;

    @OneToMany(mappedBy = "server")
    @LazyCollection(LazyCollectionOption.FALSE)
    private List<MetricsEntity> performance_metrics;

    @OneToMany(mappedBy = "deployed_server")
    @LazyCollection(LazyCollectionOption.FALSE)
    private List<ApplicationEntity> applications;

    // constructors, getters, and setters
    public ServerEntity() {}

    public ServerEntity(Long server_id, String server_name, String server_location, String ip_address, String host_name, Integer server_port, String server_status, Long uptime, Boolean availability, Long server_disk_capacity, Long server_memory_capacity, Double server_cpu_capacity) {
        this.server_id = server_id;
        this.server_name = server_name;
        this.server_location = server_location;
        this.ip_address = ip_address;
        this.host_name = host_name;
        this.server_port = server_port;
        this.server_status = server_status;
        this.uptime = uptime;
        this.availability = availability;
        this.server_disk_capacity = server_disk_capacity;
        this.server_memory_capacity = server_memory_capacity;
        this.server_cpu_capacity = server_cpu_capacity;
    }

    public Long getServer_id() {
        return server_id;
    }

    public void setServer_id(Long server_id) {
        this.server_id = server_id;
    }

    public String getServer_name() {
        return server_name;
    }

    public void setServer_name(String server_name) {
        this.server_name = server_name;
    }

    public String getServer_location() {
        return server_location;
    }

    public void setServer_location(String server_location) {
        this.server_location = server_location;
    }

    public String getIp_address() {
        return ip_address;
    }

    public void setIp_address(String ip_address) {
        this.ip_address = ip_address;
    }

    public String getHost_name() {
        return host_name;
    }

    public void setHost_name(String host_name) {
        this.host_name = host_name;
    }

    public Integer getServer_port() {
        return server_port;
    }

    public void setServer_port(Integer server_port) {
        this.server_port = server_port;
    }

    public String getServer_status() {
        return server_status;
    }

    public void setServer_status(String server_status) {
        this.server_status = server_status;
    }

    public Long getUptime() {
        return uptime;
    }

    public void setUptime(Long uptime) {
        this.uptime = uptime;
    }

    public Boolean getAvailability() {
        return availability;
    }

    public void setAvailability(Boolean availability) {
        this.availability = availability;
    }

    public Long getServer_disk_capacity() {
        return server_disk_capacity;
    }

    public void setServer_disk_capacity(Long server_disk_capacity) {
        this.server_disk_capacity = server_disk_capacity;
    }

    public Long getServer_memory_capacity() {
        return server_memory_capacity;
    }

    public void setServer_memory_capacity(Long server_memory_capacity) {
        this.server_memory_capacity = server_memory_capacity;
    }

    public Double getServer_cpu_capacity() {
        return server_cpu_capacity;
    }

    public void setServer_cpu_capacity(Double server_cpu_capacity) {
        this.server_cpu_capacity = server_cpu_capacity;
    }

    @JsonManagedReference
    public List<ServerInstanceEntity> getInstances() {
        return instances;
    }

    public void setInstances(List<ServerInstanceEntity> instances) {
        this.instances = instances;
    }

    @JsonManagedReference
    public List<MetricsEntity> getPerformance_metrics() {
        return performance_metrics;
    }

    public void setPerformance_metrics(List<MetricsEntity> performance_metrics) {
        this.performance_metrics = performance_metrics;
    }
    @JsonManagedReference
    public List<ApplicationEntity> getApplications() {
        return applications;
    }

    public void setApplications(List<ApplicationEntity> applications) {
        this.applications = applications;
    }
}


/**
 * Doubts:
 * can we add uptime and availability in constructers
 * bcoz they are not measured at initial step.
 */
