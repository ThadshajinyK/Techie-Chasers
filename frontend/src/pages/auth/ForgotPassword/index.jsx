import PublicLayout from "../../../layout/PublicLayout";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useMediaQuery } from "react-responsive";

const ForgotPassword = () => {
  const isMobile = useMediaQuery({ query: `(max-width:700px)` });
  return (
    <PublicLayout>
      <form>
        <p className='title'>Forgot password ?</p>
        <p>
          Enter the email address you used when you joined and we'll send you
          instructions to reset your password.
        </p>

        <div>
          <p className='label'>Email</p>
          <input type='text' placeholder='Enter you email' />
        </div>

        <Button
          variant='dark'
          style={{
            borderRadius: "20px",
            height: "44px",
            marginTop: !isMobile && "20px",
          }}
        >
          Submit
        </Button>

        <Link style={{ color: "#000" }} to='/login'>
          Back to login
        </Link>
      </form>
    </PublicLayout>
  );
};

export default ForgotPassword;
