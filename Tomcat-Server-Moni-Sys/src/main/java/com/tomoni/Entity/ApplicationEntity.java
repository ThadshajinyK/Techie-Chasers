package com.tomoni.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import java.util.List;

@Entity
@Table(name="application")
public class ApplicationEntity {
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        private Long app_id;

        @Column(nullable = false)
        private String app_name;

        @Column(nullable = false)
        private String app_version;

        @Column(nullable = false)
        private Boolean availability;

        @Column(nullable = false)
        private String status;//running, stopped, error

        @Column(nullable = false)
        private Long request_count;// total number of requests received by the application

        @Column(nullable = false)
        private Long response_time;//The average response time of the application

        @Column(nullable = false)
        private Integer error_count;// total number of errors encountered by the application

        @ManyToOne
        @JoinColumn(name="server_id")
        private ServerEntity deployed_server;

        @ManyToOne
        @JoinColumn(name = "instance_id")
        private ServerInstanceEntity deployed_instance;

        @OneToMany(mappedBy = "application")
        @LazyCollection(LazyCollectionOption.FALSE)
        private List<MetricsEntity> performance_metrics;

        // constructors, getters, and setters

        public ApplicationEntity(){}

        public ApplicationEntity(Long app_id, String app_name, String app_version, Boolean availability, String status,
                                 Long request_count, Long response_time, Integer error_count) {
                this.app_id = app_id;
                this.app_name = app_name;
                this.app_version = app_version;
                this.availability = availability;
                this.status = status;
                this.request_count = request_count;
                this.response_time = response_time;
                this.error_count = error_count;
        }

        public Long getApp_id() {
                return app_id;
        }

        public void setApp_id(Long app_id) {
                this.app_id = app_id;
        }

        public String getApp_name() {
                return app_name;
        }

        public void setApp_name(String app_name) {
                this.app_name = app_name;
        }

        public String getApp_version() {
                return app_version;
        }

        public void setApp_version(String app_version) {
                this.app_version = app_version;
        }

        public Boolean getAvailability() {
                return availability;
        }

        public void setAvailability(Boolean availability) {
                this.availability = availability;
        }

        public String getStatus() {
                return status;
        }

        public void setStatus(String status) {
                this.status = status;
        }

        public Long getRequest_count() {
                return request_count;
        }

        public void setRequest_count(Long request_count) {
                this.request_count = request_count;
        }

        public Long getResponse_time() {
                return response_time;
        }

        public void setResponse_time(Long response_time) {
                this.response_time = response_time;
        }

        public Integer getError_count() {
                return error_count;
        }

        public void setError_count(Integer error_count) {
                this.error_count = error_count;
        }

        @JsonBackReference
        public ServerEntity getDeployed_server() {
                return deployed_server;
        }

        public void setDeployed_server(ServerEntity deployed_server) {
                this.deployed_server = deployed_server;
        }

        @JsonBackReference
        public ServerInstanceEntity getDeployed_instance() {
                return deployed_instance;
        }

        public void setDeployed_instance(ServerInstanceEntity deployed_instance) {
                this.deployed_instance = deployed_instance;
        }
        @JsonManagedReference
        public List<MetricsEntity> getPerformance_metrics() {
                return performance_metrics;
        }

        public void setPerformance_metrics(List<MetricsEntity> performance_metrics) {
                this.performance_metrics = performance_metrics;
        }
}
