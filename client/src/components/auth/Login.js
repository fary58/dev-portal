import React, { Fragment, useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const { name, password } = formData;

  //   const onChange = (e) => {
  //     setFormData({...formData, [e.target.name] : e.target.value});
  //   };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <section className="container">
        <h1 className="large text-primary">Login</h1>

        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input type="text" placeholder="Name" name="name" required />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              minLength="6"
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
        <p className="my-1">
          Don't have an account? <a href="/Register">Register</a>
        </p>
      </section>
    </Fragment>
  );
};

export default Login;
