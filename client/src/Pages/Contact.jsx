import React from "react"; 
import {BiMailSend,BiPhoneCall, BiSupport} from 'react-icons/bi'
const Contact = () => {
  return ( 
      <div className="row contactus" style={{minHeight:"80vh"}}>
        <div className="col-md-6">
          <img src="/" alt="" style={{width:"100%"}} />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">Contact Us</h1>
          <p className="text-justify mt-2">any query and info about product feel free to call anytime we 24X7 avilable</p>
          <p className="nt-3"><BiMailSend/> : www.prusotamyadav110@gmail.com</p>
          <p className="mt-3">
            <BiPhoneCall/> : 9801622232
          </p>
          <p className="mt-3">
            <BiSupport/> : 1530-4565-4568 (toll free)
          </p>
        </div>
      </div> 
  );
};

export default Contact;
