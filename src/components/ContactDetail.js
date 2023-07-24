import React from "react";
import { Link } from "react-router-dom";
import userdetail from "../images/userdetail.jpeg";

const ContactDetail= (props) => {
  return (
    <div className="main">
        <div className="ui card centered">
            <div className="image">
                <img src={userdetail} alt ="user" />
            </div>
            <div className="content"> 
                <div className="header">Kumar</div>
                <div className="description">Kumar62.shivu@gmail.com</div>
            </div>
        </div>

    </div>
  );
};

export default ContactDetail;