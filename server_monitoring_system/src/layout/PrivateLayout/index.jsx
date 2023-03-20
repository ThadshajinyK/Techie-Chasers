import "../../App.css";
import { Outlet } from "react-router-dom";
import { Titlebar } from "../../Titlebar/Titlebar";
import { Navigationbar } from "../../Navigationbar/Navigationbar";

const PrivateLayout = () => {
  return (
    <div>
      <Titlebar />
      <div className='private-container'>
        <section className='sidebar'>
          <Navigationbar />
        </section>
        <section className='content'>
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default PrivateLayout;
