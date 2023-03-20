import "./styles.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useMediaQuery } from "react-responsive";
import PublicLayout from "../../../layout/PublicLayout";

const Signup = () => {
  const isMobile = useMediaQuery({ query: `(max-width:700px)` });

  return (
    <PublicLayout>
      <form>
        <p className="title">Sign up</p>
        <div>
          <p className="label">Username</p>
          <input type="text" placeholder="Enter your username" />
        </div>
        <div>
          <p className="label">Email</p>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div>
          <p className="label">Password</p>
          <input type="password" placeholder="Enter your password" />
        </div>
        <div className="bottom-wrapper">
          <Link
            to="/login"
            style={{ color: "#000", fontStyle: "italic" }}
          >
            Already have an account? Login
          </Link>
        </div>
        <Button
          variant="dark"
          style={{
            borderRadius: "20px",
            height: "44px",
            marginTop: !isMobile && "20px",
          }}
        >
          Sign up
        </Button>
      </form>
    </PublicLayout>
  );
};

export default Signup;
