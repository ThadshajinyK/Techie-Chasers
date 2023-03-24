package com.tomoni.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import java.sql.Timestamp;

@Entity
@Table(name = "performance_metric")
public class MetricsEntity {

        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        private Long metric_id;

        @Column(nullable = false)
        private Timestamp timestamp; //Timestamp of when the performance metric was measured

        @Column(nullable = false)
        private String metric_type;// Type of metric being measured (e.g. CPU usage, memory usage, disk usage,
        // response time, request time, thread usage, uptime, RPS)

        @Column(nullable = false)
        private Double metric_value; //Current value of the performance metric

        @ManyToOne
        @JoinColumn(name="server_id")
        private ServerEntity server;

        @ManyToOne
        @JoinColumn(name="server_instance_id")
        private ServerInstanceEntity server_instance;

        @ManyToOne
        @JoinColumn(name = "app_id")
        private ApplicationEntity application;

        /*@Column(nullable = false)
    private Long uptime; //time in milliseconds since the server was last started

    @Column(nullable = false)
    private Boolean availability; //server is currently available or not
    */

        // constructors, getters, and setters
        public MetricsEntity(){}

        public MetricsEntity(Long metric_id, Timestamp timestamp, String metric_type, Double metric_value) {
                this.metric_id = metric_id;
                this.timestamp = timestamp;
                this.metric_type = metric_type;
                this.metric_value = metric_value;
        }

        public Long getMetric_id() {
                return metric_id;
        }

        public void setMetric_id(Long metric_id) {
                this.metric_id = metric_id;
        }

        public Timestamp getTimestamp() {
                return timestamp;
        }

        public void setTimestamp(Timestamp timestamp) {
                this.timestamp = timestamp;
        }

        public String getMetric_type() {
                return metric_type;
        }

        public void setMetric_type(String metric_type) {
                this.metric_type = metric_type;
        }

        public Double getMetric_value() {
                return metric_value;
        }

        public void setMetric_value(Double metric_value) {
                this.metric_value = metric_value;
        }

        @JsonBackReference
        public ServerEntity getServer() {
                return server;
        }

        public void setServer(ServerEntity server) {
                this.server = server;
        }

        @JsonBackReference
        public ServerInstanceEntity getServer_instance() {
                return server_instance;
        }

        public void setServer_instance(ServerInstanceEntity server_instance) {
                this.server_instance = server_instance;
        }

        @JsonBackReference
        public ApplicationEntity getApplication() {
                return application;
        }

        public void setApplication(ApplicationEntity application) {
                this.application = application;
        }
}
