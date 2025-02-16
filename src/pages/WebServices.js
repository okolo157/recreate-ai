import React from "react";
import emailjs from "emailjs-com";
import "../../src/pages/WebService.css";
import { useState } from "react";

const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xealx6d",
        "template_23xmxqh",
        e.target,
        "WdDMD9QO3XkEHNHUP"
      )
      .then(
        (result) => {
          console.log("Email succefully sent!");
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Error sending email");
          alert("Failed to send message. Please try again.");
        }
      );
    e.target.reset();
  };
  const [selectedOption, setSelectedOption] = useState(
    "Please select a service"
  );

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="bodywork">
      <div className="maincon">
        <div className="textwork">
          <h1>
            {" "}
            READY TO <br></br>
            <span>MAKE E'M </span>
            <br></br> SAY WOW <b>?</b>
          </h1>{" "}
        </div>
        <div className="selectedinput">
          <form className="inputgroup" onSubmit={sendEmail}>
            <input class="inputs" name="text" type="text" placeholder="Name" />

            <input
              type="email"
              className="inputs"
              id="from_email"
              name="from_email"
              placeholder="Your email.."
              required
            />

            <select
              className="custom-select"
              value={selectedOption}
              onChange={handleChange}
            >
              <option value="">Please select a service</option>
              <option value="text">Custom Website Development</option>
              <option value="text2">Web Application</option>
              <option value="text3"> E-commerce Solutions</option>
              <option value="text4">Website Maintenance & Optimization</option>
              <option value="text5"> Landing Pages & Marketing Sites </option>
              <option value="text6"> API Development & Integration</option>
              <option value="text7">
                CMS Development (WordPress, Strapi, etc.)
              </option>
              <option value="text8">SEO & Performance Optimization </option>
              <option value="text9">UI/UX Design & Frontend Development</option>
              <option value="text10">Web Security & Compliance</option>
              <option value="text11">Mobile App Development</option>
            </select>

            <div className="btn">
              <button type="submit" className="formButton">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
