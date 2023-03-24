import React from "react";
import App from "../App";
import { Icon } from '@iconify/react';
import Server from "../Data/Server";



export const ApplicationPage = ()=>{
    const apps = [
        {
            App_ID: "001",
            App_name: "Ticket Master",
            Client_name: "David Johnson",
            status: "running",
            app_type: "Retail POS",
            Version: "2.0",
            instance: "Instance 01"
          }
          ,
          {
            App_ID: "002",
            App_name: "Event Planner",
            Client_name: "Maria Rodriguez",
            status: "stopped",
            app_type: "Event Management",
            Version: "1.5",
            instance: "Instance 02"
          }
          ,
          {
            App_ID: "003",
            App_name: "Sales Tracker",
            Client_name: "John Smith",
            status: "running",
            app_type: "Sales Management",
            Version: "3.2",
            instance: "Instance 03"
          }
          ,
          {
            App_ID: "004",
            App_name: "Inventory Manager",
            Client_name: "Sophia Lee",
            status: "running",
            app_type: "Inventory Management",
            Version: "2.1",
            instance: "Instance 04"
          }
          ,
          {
            App_ID: "005",
            App_name: "Time Tracker",
            Client_name: "James Kim",
            status: "stopped",
            app_type: "Time Management",
            Version: "1.0",
            instance: "Instance 05"
          }
          ,
          {
            App_ID: "006",
            App_name: "Task Manager",
            Client_name: "Emily Chen",
            status: "running",
            app_type: "Task Management",
            Version: "2.3",
            instance: "Instance 06"
          }
          ,
          {
            App_ID: "007",
            App_name: "CRM",
            Client_name: "Brian Wilson",
            status: "running",
            app_type: "CRM",
            Version: "4.0",
            instance: "Instance 07"
          }
          ,
          {
            App_ID: "008",
            App_name: "Expense Tracker",
            Client_name: "Linda Nguyen",
            status: "stopped",
            app_type: "Expense Management",
            Version: "1.2",
            instance: "Instance 08"
          }
          ,
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
                    <th>App ID</th>
                    <th>App Name</th>
                    <th>Client Name</th>
                    <th>Status</th>
                    <th>App Type</th>
                    <th>Version</th>
                    <th>Server Instance</th>
                </tr> {/*2nd row*/}

               

                {apps.map((val,key)=>{
                    return(
                        <tr key={key}>
                            <td>{val.App_ID}</td>
                            <td>{val.App_name}</td>
                            <td>{val.Client_name}</td>
                            <td>
  <span className={`badge rounded-pill text-bg-${val.status === "running" ? "success" : "danger"}`}>
    {val.status}
  </span>
</td>
                            <td>{val.app_type}</td>
                            <td>{val.Version}</td>
                            <td>{val.instance}</td>
                           
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