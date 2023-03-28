
import { Titlebar } from '../components/Titlebar';
import { Navigationbar } from '../components/Navigationbar/Navigationbar';

import Gutters from '../components/gutter';
import BasicTable from '../components/Table';
// import { Chart } from '../components/Chart/Chart';
import React, { useState } from 'react';
import CircularProgressBar from '../components/Chart/Chart';
import { Linechart } from '../components/Chart/Linechart';



function Dashboard() {
 
  return (
    <div>
      <Titlebar />
      <div className="container">
        <section className="sidebar">
          <Navigationbar />
        </section>
        <section className="content">
         <Gutters/>
         <div class="row justify-content-center">
    <div class="col-md-8">
      <Linechart/>
    </div>
    <div className='col-md-2'></div>
    <div class="col-md-2">
       <CircularProgressBar/>
    </div>
    
  </div>
         
       
        <BasicTable/>

        </section>
        
       

      </div>
      
    </div>
  );
}

export default Dashboard
