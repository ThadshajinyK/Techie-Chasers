import "./styles.css";
import LoginImage from "../../images/login-image.jpg";
import Logo from "../../images/eleos_logo.png";
import { useMediaQuery } from "react-responsive";

const PublicLayout = (props) => {
  const isMobile = useMediaQuery({ query: `(max-width:700px)` });

  return (
    <div className='login-container'>
      <div className='left-side'>
        <img
          style={{ width: "90%", height: "100%", borderRadius: "10%" }}
          src={LoginImage}
          alt='login'
        />
      </div>
      <div className='right-side'>
        <img className='logo' src={Logo} alt='eleos' />
        <p className='text'>Welcome to eleos!</p>
        {props.children}
      </div>
    </div>
  );
};

export default PublicLayout;
