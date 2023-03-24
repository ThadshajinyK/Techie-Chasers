package com.tomoni.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import java.nio.MappedByteBuffer;
import java.util.List;

@Entity
@Table(name= "server_instance")
public class ServerInstanceEntity {

        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        private Long instance_id;

        @Column(nullable = false)
        private String instance_name;

        @Column(nullable = false)
        private String status;

        @Column(nullable = false)
        private Boolean availability;

        @Column(nullable = false)
        private String host_name;

        @Column(nullable = false)
        private int port_number; //  the port number used by the server instance

        @Column(nullable = false)
        private Long server_disk_capacity;

        @Column(nullable = false)
        private Long server_memory_capacity;

        @Column(nullable = false)
        private Double server_cpu_capacity;

        @ManyToOne
        @JoinColumn(name = "server_id")
        private ServerEntity server;

        @OneToMany(mappedBy = "deployed_instance")
        @LazyCollection(LazyCollectionOption.FALSE)
        private List<ApplicationEntity> applications;

        @OneToMany(mappedBy = "server_instance")
        @LazyCollection(LazyCollectionOption.FALSE)
        private List<MetricsEntity> performance_metrics;

        // constructors, getters, and setters
        public ServerInstanceEntity(){}

        public ServerInstanceEntity(Long instance_id, String instance_name, String status, Boolean availability, String host_name, int port_number, Long server_disk_capacity, Long server_memory_capacity, Double server_cpu_capacity, ServerEntity server) {
                this.instance_id = instance_id;
                this.instance_name = instance_name;
                this.status = status;
                this.availability = availability;
                this.host_name = host_name;
                this.port_number = port_number;
                this.server_disk_capacity = server_disk_capacity;
                this.server_memory_capacity = server_memory_capacity;
                this.server_cpu_capacity = server_cpu_capacity;
                this.server = server;
        }

        public Long getInstance_id() {
                return instance_id;
        }

        public void setInstance_id(Long instance_id) {
                this.instance_id = instance_id;
        }

        public String getInstance_name() {
                return instance_name;
        }

        public void setInstance_name(String instance_name) {
                this.instance_name = instance_name;
        }

        public String getStatus() {
                return status;
        }

        public void setStatus(String status) {
                this.status = status;
        }

        public Boolean getAvailability() {
                return availability;
        }

        public void setAvailability(Boolean availability) {
                this.availability = availability;
        }

        public String getHost_name() {
                return host_name;
        }

        public void setHost_name(String host_name) {
                this.host_name = host_name;
        }

        public int getPort_number() {
                return port_number;
        }

        public void setPort_number(int port_number) {
                this.port_number = port_number;
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
        @JsonBackReference
        public ServerEntity getServer() {
                return server;
        }

        public void setServer(ServerEntity server) {
                this.server = server;
        }

        @JsonManagedReference
        public List<ApplicationEntity> getApplications() {
                return applications;
        }

        public void setApplications(List<ApplicationEntity> applications) {
                this.applications = applications;
        }
        @JsonManagedReference
        public List<MetricsEntity> getPerformance_metrics() {
                return performance_metrics;
        }

        public void setPerformance_metrics(List<MetricsEntity> performance_metrics) {
                this.performance_metrics = performance_metrics;
        }
}

