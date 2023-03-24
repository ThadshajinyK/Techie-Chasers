
import "./styles.css";
import { Link,useNavigate }from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useMediaQuery } from "react-responsive";
import PublicLayout from "../../../layout/PublicLayout";

const Login = () => {
  const isMobile = useMediaQuery({ query: `(max-width:700px)` });
  const navigate= useNavigate()


  return (
    <PublicLayout>
      <form>
        <p className='title'>Login</p>
        <div>
          <p className="label">Email</p>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div>
          <p className='label'>Password</p>
          <input type='password' placeholder='Enter your password' />
        </div>
        <div className='bottom-wrapper'>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <input type='checkbox' id='vehicle1' name='vehicle1' value='Bike' />
            <label style={{ fontStyle: "italic" }} htmlFor='vehicle1'>
              Remember me
            </label>
          </div>
          <Link
            to='/forgot-password'
            style={{ color: "#000", fontStyle: "italic" }}
          >
            Forgot password ?
          </Link>
        </div>
        <Button
          variant='dark'
          style={{
            borderRadius: "20px",
            height: "44px",
            marginTop: !isMobile && "20px",

          }}
          onClick={()=>{
            
            navigate('/dashboard')
           
           
          }}
        >
          Login
        </Button>
        <p>
          Don't you have an account?{" "}
          <Link
            to='/sign-up'
            style={{ color: "#000", fontStyle: "italic" }}
            
          >
            Sign up
          </Link>
        </p>
      </form>
    </PublicLayout>
  );
};

export default Login;
