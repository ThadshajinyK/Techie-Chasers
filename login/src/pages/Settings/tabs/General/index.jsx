import "./styles.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const General = () => {
  return (
    <Container style={{ width: "100%" }}>
      <Row>
        <Col style={{ width: "100%" }}>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
    // <div>
    //   <div className='mt-3 ml-6'>
    //     <p>Account details</p>
    //   </div>
    //   <div className='card-body'>
    //     <div className='row'>
    //       <div className='col-md-2'>
    //         <p> name</p>
    //       </div>
    //       <div className='col-md-1 text-secondary'>Daniel Martin</div>
    //     </div>
    //     <hr />
    //     <div className='row'>
    //       <div className='col-md-2'>
    //         <p> email</p>
    //       </div>
    //       <div className='col-md-6 text-secondary'>
    //         Email address admin2eleos@gmail.com
    //       </div>
    //     </div>
    //     <hr />
    //     <div className='row'>
    //       <div className='col-md-2'>
    //         <p> phone-no</p>
    //       </div>
    //       <div className='col-md-6 text-secondary'>0761709287</div>
    //     </div>
    //     <hr />
    //     <div className='row'>
    //       <div className='col-md-2'>
    //         <p> role</p>
    //       </div>
    //       <div className='col-md-6 text-secondary'>Role System Analyst</div>
    //     </div>
    //     <hr />
    //     <div className='row'>
    //       <div className='col-md-2'>
    //         <p> AdmiID </p>
    //       </div>
    //       <div className='col-md-6 text-secondary'>
    //         Admin ID From the airport
    //       </div>
    //     </div>
    //     <hr />
    //     <div className='row'>
    //       <div className='col-md-2'>
    //         <p> Location </p>
    //       </div>
    //       <div className='col-md-6 text-secondary'>
    //         Location Eleos Web (pvt) ltd. From Sri lanka
    //       </div>
    //     </div>
    //     <hr />
    //     <div className='row'>
    //       <div className='col-md-2'>
    //         <p> Time-zoe</p>
    //       </div>
    //       <div className='col-md-6 text-secondary'>Time zoneAsia / Colombo</div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default General;
