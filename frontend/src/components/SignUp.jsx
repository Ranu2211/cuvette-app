import React, { useState } from "react";
import '../styles/SignUp.css';
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    companyName: '',
    companyEmail: '',
    employeeSize: '',
  });
   const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    navigate("/otp");
    // Add form submission logic here (API call, etc.)
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <p className="form-description">Lorem Ipsum is simply dummy text</p>

        <div className="form-group">
          <i className="fas fa-user input-icon"></i> {/* Icon for Name */}
          <input
            type="text"
            id="name"
            name="name"
            className="input-field"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <i className="fas fa-phone input-icon"></i> {/* Icon for Phone */}
          <input
            type="number"
            id="phone"
            name="phone"
            className="input-field"
            placeholder="Phone no."
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <i className="fas fa-building input-icon"></i> {/* Icon for Company Name */}
          <input
            type="text"
            id="companyName"
            name="companyName"
            className="input-field"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <i className="fas fa-envelope input-icon"></i> {/* Icon for Company Email */}
          <input
            type="email"
            id="companyEmail"
            name="companyEmail"
            className="input-field"
            placeholder="Company Email"
            value={formData.companyEmail}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <i className="fas fa-users input-icon"></i> {/* Icon for Employee Size */}
          <input
            type="number"
            id="employeeSize"
            name="employeeSize"
            className="input-field"
            placeholder="Employee Size"
            value={formData.employeeSize}
            onChange={handleChange}
            required
          />
        </div>

        <p className="terms-conditions">
          By clicking on proceed you will accept our <a href="#">Terms & Conditions</a>
        </p>

        <button type="submit" className="submit-button">Proceed</button>
      </form>
    </div>
  );
};

export default SignUp;
