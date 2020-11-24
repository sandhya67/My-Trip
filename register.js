import React from "react";

function Register() {
  return (
    <div class="text-center" class="col-md-4 offset-4 mt-2 card">
      <form class="form-register">
        <h1  class="h3 mb-3 font-weight-normal">Register</h1>
        <p><b>Enter Your UserName</b></p>
        <label for="userName" class="sr-only">
          userName
        </label>
        <input
          type="text"
          id="userName"
          class="form-control"
          placeholder="Enter Your UserName....."
          required
          autoFocus
        />
        <p><b>Enter Your Password</b></p>
        <label for="inputPassword" class="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder=" Enter Your Password...."
          pattern=".{5,}"
          required
        />
        <p><b>Enter Your Email</b></p>
        <label for="Email" class="sr-only">
          Email
        </label>
        <input
          type="email"
          id="email"
          class="form-control"
          placeholder="Enter Your email...."
          pattern=".{5,}"
          required
        />
        <p><b>Enter Your PhoneNo</b></p>
        <label for="PhoneNo" class="sr-only">
          PhoneNo
        </label>
        <input
          type="text"
          id="number"
          class="form-control"
          placeholder="Enter Your PhoneNo...."
          pattern=".{5,}"
          required
        />
        <p><b></b>Select a Gender:</p>
        <p class="gender">
          <span class="gen"></span>
          <input type="radio" name="ge" class="genm" />
          Male
          <input type="radio" name="ge" class="genm" />
          Female
          <input type="radio" name="ge" class="genm" />
          Others
        </p>
        <label for="dropdown" class="sr-only" >
          Places
          </label>
        <select class="form-control" id = "dropdown" >
    <option value="Places">Select a Place</option>
    <option value="1">Goa</option>
    <option value="2">Mumbai</option>
    <option value="3">Hyderabad</option>
    <option value="4">ladak</option>
</select>
<p><b>Enter Your Address</b></p>
<label for="textarea" class="sr-only">
         Address
        </label>
        <input
          type="textarea"
          id="address"
          class="form-control"
          placeholder="Enter Your Address...."
          pattern=".{5,}"
          required
        />
        <button class="btn btn-lg btn-primary btn-block" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;