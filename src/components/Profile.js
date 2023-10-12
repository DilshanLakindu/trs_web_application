import React, { useState } from "react";
import profile from "../assets/profile_picture.jpg";

const Profile = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Admin user profile submitted:", user);
  };

  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: "white",
          padding: "80px",
          borderRadius: "10px",
          height: "auto",
          width: "700px",
          opacity: "90%",
          backgroundSize: "cover",
          marginTop:"50px",
          marginBottom:"100px"
        }}
      >
        <div class="container text-center">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-4">
              <h2 style={{ color: "#000000" }}>Admin Profile</h2>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4"></div>
            <div class="col-xs-12 col-sm-12 col-md-4">
              <img
                src={profile}
                width={150}
                height={150}
                style={{ borderRadius: "500px" }}
              ></img>
            </div>
          </div>
        </div>
        <div class="container" style={{ padding: "35px" }}>
          <div class="row">
            <div class ="col">
            <div class="mb-3">
              <label
                for="formGroupExampleInput"
                class="form-label"
                style={{ color: "#000000" }}
              >
                First Name
              </label>
              <input
                class="form-control"
                type="text"
                value={user.firstName}
                aria-label="Disabled input example"
                disabled
                readonly
              />
              </div>
            </div>
            <div class="col">
            <div class="mb-3">
              <label
                for="formGroupExampleInput2"
                class="form-label"
                style={{ color: "#000000" }}
              >
                Last Name
              </label>
              <input
                class="form-control"
                type="text"
                value={user.lastName}
                aria-label="Disabled input example"
                disabled
                readonly
              />
            </div>
            </div>
            <div class="mb-3">
              <label
                for="formGroupExampleInput2"
                class="form-label"
                style={{ color: "#000000" }}
              >
                Email
              </label>
              <input
                class="form-control"
                type="text"
                value={user.email}
                aria-label="Disabled input example"
                disabled
                readonly
              />
            </div>

            <div class="mb-3">
              <label
                for="formGroupExampleInput2"
                class="form-label"
                style={{ color: "#000000" }}
              >
                NIC
              </label>
              <input
                class="form-control"
                type="text"
                value={user.nic}
                aria-label="Disabled input example"
                disabled
                readonly
              />
            </div>
            <div class="mb-3">
              <label
                for="formGroupExampleInput2"
                class="form-label"
                style={{ color: "#000000" }}
              >
                Contact Number
              </label>
              <input
                class="form-control"
                type="text"
                value={user.phone}
                aria-label="Disabled input example"
                disabled
                readonly
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
