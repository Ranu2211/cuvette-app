import React , { useState } from 'react';
import { FaEnvelope, FaPhone ,FaCheckCircle} from 'react-icons/fa'; // Importing icons
import '../styles/OtpForm.css'; // Importing CSS for styling
import { useNavigate } from 'react-router-dom';


const OtpForm = () => {
    const [isEmailVerified, setEmailVerified] = useState(false);
  const [isMobileVerified, setMobileVerified] = useState(false);
   const navigate = useNavigate();
  // Simulated verification handler (replace this with actual verification logic)
  const handleVerifyEmail = () => {
    // Logic for verifying email OTP would go here
    setEmailVerified(true);
    
  };

  const handleVerifyMobile = () => {
    // Logic for verifying mobile OTP would go here
    setMobileVerified(true);
    setTimeout(() => {
        navigate("/home");
    },2000)
  };
  return (
    <div className="otp-signup-container">
         <form className="signup-form" 
        //  onSubmit={handleSubmit}
         >
      <h2>Sign Up</h2>
      <p className="form-description">Lorem Ipsum is simply dummy text</p>
      
      <div className="form-group">
          <i className="fas fa-envelope input-icon"></i> {/* Icon for Company Email */}
          <input
            type="text"
            id="Email"
            name="companyEmail"
            className="input-field"
            placeholder="Email OTP"
            // value={formData.companyEmail}
            // onChange={handleChange}
            required
          />
          {isEmailVerified ? (
            <FaCheckCircle className="success-icon" />
          ) : (
         <button className="verify-button" onClick={handleVerifyEmail}>Verify</button>
          )}
        </div>
         

      <div className="form-group">
        <i className="fas fa-phone input-icon"></i> 
          <input type="text" id="mobile" className="input-field" placeholder="Mobile OTP" required/>
        {isMobileVerified ? (
            <FaCheckCircle className="success-icon" />
          ) : (
            
        <button className="verify-button" onClick={handleVerifyMobile}>Verify</button>
        )}
       </div>
       </form>
    </div>
  );
};

export default OtpForm;
