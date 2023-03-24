package com.Techie_chasers.Server.Monitoring.system.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Data
@Table(name="Application")
public class app {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long app_id;
    private String appname;
    private String apptype;
    private Integer version;
    private String status;
    private Date data_created;
    private String url;

}
