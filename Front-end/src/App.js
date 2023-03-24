
import './App.css';
import { Titlebar } from './Titlebar/Titlebar';
import { Navigationbar, Navigationbar2,Navigationbar3 } from './Navigationbar/Navigationbar';
import { Content } from './Content';
import { ApplicationPage } from './Pages/ApplicationPage';
import { Addserver } from './Pages/Addserver';

function App() {
  return (
    <div>
      <Titlebar />
      <div className="container">
        <section className="sidebar">
          <Navigationbar/>
        </section>
        <section className="content">
          <ApplicationPage/>
        </section>
      </div>
    </div>
  );
}

export default App;
