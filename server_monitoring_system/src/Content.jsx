import React from "react";
import App from "./App";
import { Icon } from '@iconify/react';
import Server from "./Data/Server";

export const Content = ()=>{
    const server = [
        {host_name:'server1', ip_address:'192.168.1.100', status:'online', server_location: 'New York', cpu:2.4, memory:16.0, disk:500.0, uptime:"6 days"},
        {host_name:'server2', ip_address:'192.168.1.101', status:'online', server_location:'California',cpu: 2.6, memory:32.0, disk:1000.0 ,uptime:"6 days" },
        {host_name:'server3', ip_address:'192.168.1.102', status:'offline', server_location:'Texas', cpu:2.8, memory:64.0, disk:2000.0,uptime:"6 days"},
        {host_name:'server4', ip_address:'192.168.1.103', status:'online', server_location:'New York', cpu:2.4, memory:16.0,disk: 500.0,uptime:"6 days"},
        {host_name:'server5', ip_address:'192.168.1.104', status:'online', server_location:'California', cpu:2.6, memory:32.0, disk:1000.0,uptime:"6 days"},
        {host_name:'server6', ip_address:'192.168.1.105', status:'offline', server_location:'Texas', cpu:2.8, memory:64.0, disk:2000.0,uptime:"6 days"},
        {host_name:'server7', ip_address:'192.168.1.106', status:'online', server_location:'New York', cpu:2.4, memory:16.0, disk:500.0,uptime:"6 days"},
        {host_name:'server8', ip_address:'192.168.1.107', status:'online', server_location:'California', cpu:2.6, memory:32.0,disk: 1000.0,uptime:"6 days"},
        {host_name:'server9', ip_address:'192.168.1.108', status:'offline', server_location:'Texas', cpu:2.8, memory:64.0, disk:2000.0,uptime:"6 days"},
        {host_name:'server10', ip_address:'192.168.1.109', status:'online', server_location:'New York', cpu:2.4, memory:16.0, disk:500.0,uptime:"6 days"},
    ];
    
    return(
        <div>
            <div className="overview">
                <span className="overview-item"><p className="header">Servers Overview</p></span>
                <span className="overview-item">
                <button className="btn btn-outline-info overview-item">Add server</button>
                <button className="btn btn-outline-success overview-item">select</button>
                <button className="btn btn-outline-danger overview-item">Delete<Icon className="mt-0" icon="material-symbols:delete-outline" width="20" height="20" /></button>
                <button className="btn btn-outline-secondary overview-item"><Icon icon="material-symbols:more-horiz" width="15" height="15" /></button>
                </span>
                
            </div>

            <table className="server-table" >
                <tr>{/*1st row */}
                    <th>Server name</th>
                    <th>IP address</th>
                    <th>Host name</th>
                    <th>Status</th>
                    <th>CPU usage</th>
                    <th>Memory usage</th>
                    <th>Disk usage</th>
                    <th>Uptime</th>
                </tr> {/*2nd row*/}

               

                {server.map((val,key)=>{
                    return(
                        <tr key={key}>
                            <td>{val.host_name}</td>
                            <td>{val.ip_address}</td>
                            <td>{val.host_name}</td>
                            <td>{val.status}</td>
                            <td>{val.cpu}</td>
                            <td>{val.memory}</td>
                            <td>{val.disk}</td>
                            <td>{val.uptime}</td>
                        </tr>
                    )
                })}
                

            </table>

            <div class="pagination">
                <button className="pn-btn">prev</button>
                <button><span>1</span></button>
                <button><span>2</span></button>
                <button><span>3</span></button>
                <button><span>4</span></button>
                <button><span>5</span></button>
                <button className="pn-btn">next</button>

            </div>
        
        </div>
    );

}