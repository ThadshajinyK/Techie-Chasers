package com.Techie_chasers.Server.Monitoring.system.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="Server instance")
public class Server_instances {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long instance_id;
    private String instance_name;
    private String instance_ip;
    private String status;
    private String Cpu_usage;
    private String Memory_usage;
    private String Disk;



}
