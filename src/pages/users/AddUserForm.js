import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import classes from "./AddUserForm.module.css";
import { addUserAsync } from "../../redux/features/userSlice";


function AddUserForm() {

  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [street, setStreet] = useState("");
  const [suite, setSuite] = useState("");
  const [city, setCity] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyMotto, setCompanyMotto] = useState("");


  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  //onChange handlers
  const nameChangeHandler = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };
  const userNameChangeHandler = (event) => {
    event.preventDefault();
    setUserName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };
  const phoneChangeHandler = (event) => {
    event.preventDefault();
    setPhone(event.target.value);
  };
  const websiteChangeHandler = (event) => {
    event.preventDefault();
    setWebsite(event.target.value);
  };
  const streetChangeHandler = (event) => {
    event.preventDefault();
    setStreet(event.target.value);
  };
  const suiteChangeHandler = (event) => {
    event.preventDefault();
    setSuite(event.target.value);
  };
  const cityChangeHandler = (event) => {
    event.preventDefault();
    setCity(event.target.value);
  };
  const companyNameChangeHandler = (event) => {
    event.preventDefault();
    setCompanyName(event.target.value);
  };
  const companyMottoChangeHandler = (event) => {
    event.preventDefault();
    setCompanyMotto(event.target.value);
  };
  //onSubmit Handler
  const submitHandler = async (event) => {
    event.preventDefault();

    const userData = {
      id: users.length + 1,
      name,
      userName,
      email,
      address: {
        street,
        suite,
        city,
      },
      phone,
      website,
      company: {
        name: companyName,
        catchPhrase: companyMotto,
      },
    };

    //dispatch add user action
    dispatch(addUserAsync(userData));


    //reset the form values
        setName("");
        setUserName("");
        setEmail("");
        setStreet("");
        setSuite("");
        setCity("");
        setPhone("");
        setWebsite("");
        setCompanyName("");
        setCompanyMotto("");
      
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
     
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          className="form-control form-control-sm"
          type="text"
          value={name}
          onChange={nameChangeHandler}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="name">Username</label>
        <input
          className="form-control form-control-sm"
          type="text"
          value={userName}
          onChange={userNameChangeHandler}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="name">Email</label>
        <input
          className="form-control form-control-sm"
          type="email"
          value={email}
          onChange={emailChangeHandler}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="name">Phone</label>
        <input
          className="form-control form-control-sm"
          type="number"
          value={phone}
          onChange={phoneChangeHandler}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="name">Website</label>
        <input
          type="url"
          className="form-control form-control-sm"
          value={website}
          onChange={websiteChangeHandler}
          required
          placeholder="e.g https://yoursite.com"
        />
      </div>
      <hr />
      <h6>address</h6>
      <div className="form-group">
        <label htmlFor="name">Street</label>
        <input
          className="form-control form-control-sm"
          type="text"
          value={street}
          onChange={streetChangeHandler}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="name">Suite</label>
        <input
          className="form-control form-control-sm"
          type="text"
          value={suite}
          onChange={suiteChangeHandler}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="name">City</label>
        <input
          className="form-control form-control-sm"
          type="text"
          value={city}
          onChange={cityChangeHandler}
          required
        />
      </div>

      <hr />
      <h6>Company</h6>

      <div className="form-group">
        <label htmlFor="name">Company Name</label>
        <input
          className="form-control form-control-sm"
          type="text"
          value={companyName}
          onChange={companyNameChangeHandler}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Company Motto</label>
        <input
          className="form-control form-control-sm"
          type="text"
          value={companyMotto}
          onChange={companyMottoChangeHandler}
          required
        />
      </div>

      <div className="form">
        <button type="submit" className="btn btn-primary btn-sm">
         Add User
        </button>
      </div>
    </form>
  );
}

export default AddUserForm;
