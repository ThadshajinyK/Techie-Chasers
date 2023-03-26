
import { Titlebar } from './Titlebar/Titlebar';
import { Navigationbar} from './Navigationbar/Navigationbar';
import { ServerPage , AddServerForm } from './Pages/ServerPage';
import { ApplicationPage ,AddAppsForm } from './Pages/ApplicationPage';
import { InstancePage, AddInstanceForm } from './Pages/InstancesPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LogPerform } from './Pages/LogPerform';

function App() {
  return (

  <BrowserRouter>
  <Titlebar/>
  <section className="sidebar"><Navigationbar/></section>
  <Routes>
    <Route path="/Servers" element={<ServerPage/>}></Route>
    <Route path="/Apps" element={<ApplicationPage/>}></Route>
    <Route path="/addApp" element={<AddAppsForm/>}></Route>
    <Route path="/addServer" element={<AddServerForm/>}></Route>
    <Route path="/Servers/Instance" element={<InstancePage/>}></Route>
    <Route path="/addInstance" element={<AddInstanceForm/>}></Route>
    <Route path="/logPerform" element={<LogPerform/>}></Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
