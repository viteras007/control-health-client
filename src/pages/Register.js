import { useState, useEffect } from "react";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
  showAlert: false,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  // global state and useNavigate

  const toggleMember = () => {
    setValues({
      ...values,
      isMember: !values.isMember,
    });
  };

  const handleChange = (e) => {
    console.log(e.target);
  };
  const onSubmit = (e) => {
    console.log(e.target);
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Registrar"}</h3>
        {values.showAlert && <Alert />}
        {/* NAME FIELD */}
        {!values.isMember &&
          <FormRow 
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        }
        {/* EMAIL FIELD */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/* PASSWORD FIELD */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          Enviar
        </button>
        <p>
          {values.isMember ? 'Não é um membro ainda?' : 'Já é um membro?'}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? 'Registrar' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
