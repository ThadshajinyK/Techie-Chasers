import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import "./styles.css";
import General from "./tabs/General";

const Settings = () => {
  const [tabKey, initTabKey] = useState("one");
  return (
    <div className='settings-container'>
      <div className='left-side'>
        <Tabs
          activeKey={tabKey}
          onSelect={(e) => initTabKey(e)}
          style={{ width: "100%" }}
        >
          <Tab eventKey='general' title='General'>
            <General />
          </Tab>
          <Tab eventKey='preferences' title='Preferences'>
            <h3>This is preferences part</h3>
          </Tab>
          <Tab eventKey='display' title='Display'>
            <h3>This is display part</h3>
          </Tab>
          <Tab eventKey='report' title='Report'>
            <h3>This is report part</h3>
          </Tab>
        </Tabs>
      </div>
      <div className='right-side'></div>
    </div>
  );
};

export default Settings;
