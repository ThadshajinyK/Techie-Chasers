package com.Techie_chasers.Server.Monitoring.system.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="Server")
public class Server {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Server_id;
    private String Host_name;
    private String Ip_address;
    private String Status;
    private String Server_location;
    private String Cpu_usage;
    private String Memory_usage;
    private String Disk;




}
