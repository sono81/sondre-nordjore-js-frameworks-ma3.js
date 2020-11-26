import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  userName: yup.string().required("Username is required"),
  password: yup.string().min(4).required("required"),
});

function LoginForm() {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });

  function onSubmit(data) {
    console.log("data", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="userName">Username: </label>
      <input
        name="userName"
        type="text"
        placeholder="Enter username"
        ref={register({ required: true })}
      />
      {errors.userName && <p>{errors.userName.message}</p>}

      <label htmlFor="password">Password: </label>
      <input
        name="password"
        type="password"
        placeholder="Enter password"
        minLength="4"
        ref={register({ required: true })}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <input type="submit" />
    </form>
  );
}

export default LoginForm;
