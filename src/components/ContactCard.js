import React from 'react'
import user from "../images/user.png"

const ContactCard = (props) => {

    const {id, name, email} = props.contact;
  return (
    <div className="item">
    <img className="ui avatar image" src ={user} alt="user" />
    <div className="content">
        <div className="header"> {name}</div>
        <div> {email}</div>
        <i style = {{color: "red", margintop: "5px" }} className="trash alternate outline icon"></i>
    </div>
</div>  )
}

export default ContactCard