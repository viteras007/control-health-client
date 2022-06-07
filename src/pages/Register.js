import { useState, useEffect } from "react";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useAppContext } from "../context/appContext";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  // global state and useNavigate
  const {isLoading, showAlert, displayAlert } = useAppContext()
  
  const toggleMember = () => {
    setValues({
      ...values,
      isMember: !values.isMember,
    });
  };

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value })
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const {name, email, password, isMember } = values;
    if(!email || !password || (!isMember && !name)){
      displayAlert();
      return;
    }
    console.log(values)
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Registrar"}</h3>
        {showAlert && <Alert />}
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
