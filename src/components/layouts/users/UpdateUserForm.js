import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";

import { updateUser } from "../../../redux/actions/userActions";
import classes from "./AddUserForm.module.css";
import PromptModal from "../../../utils/PromptModal";

function AddUserForm(props) {
  const baseUrl = "https://jsonplaceholder.typicode.com";

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

  const [showPrompt, setShowPrompt] = useState(false);
  const [loading, setLoading] = useState(false);

  const users = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch();
  const { id } = useParams();

  const userId = Number(id);

  const fetchUser = async (userId) => {
    const req = axios.get(`${baseUrl}/users/${userId}`);
    const res = await req;

    req.then(
      () => {
        setName(res.data.name);
        setUserName(res.data.username);
        setEmail(res.data.email);
        setPhone(res.data.phone);
        setWebsite(res.data.website);
        setStreet(res.data.address.street);
        setSuite(res.data.address.suite);
        setCity(res.data.address.city);
        setCompanyName(res.data.company.name);
        setCompanyMotto(res.data.company.catchPhrase);
      },
      (err) => err
    );
  };

  useEffect(() => {
    fetchUser(userId);
    // eslint-disable-next-line
  }, []);

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
    setLoading(true);

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

    const req = axios.put(`${baseUrl}/users`, userData);
    const res = await req;

    req.then(
      () => {
        users.push(res.data);
        console.log(users);
        dispatch(updateUser(users));
        setShowPrompt(true);

        setTimeout(() => {
          setShowPrompt(false);
        }, 2000);
        // setLoading(false);
        // setName("");
        // setUserName("");
        // setEmail("");
        // setStreet("");
        // setSuite("");
        // setCity("");
        // setPhone("");
        // setWebsite("");
        // setCompanyName("");
        // setCompanyMotto("");
      },
      (err) => err
    );
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      {showPrompt && (
        <PromptModal>
          <p>successfully updated</p>
        </PromptModal>
      )}
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
          type="text"
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
        <button type="submit" className="btn btn-success btn-sm">
          {loading ? "Loading..." : "Add User"}
        </button>
      </div>
    </form>
  );
}

export default AddUserForm;
