import Button from "../../components/Button";
import Input from "../../components/Input";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
const Form = ({ isSignInPage = true }) => {
  const [data, setData] = useState({
    ...(!isSignInPage && {
      // if it is login, then it adds fullname to the array of objects
      fullname: "",
    }),
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  return (
    <div className="bg-light h-screen flex items-center justify-center">
      <div class="bg-white w-[600px] h-[800px] shadow-lg rounded-lg flex flex-col justify-center items-center">
        <div className="text-4xl font-extrabold">
          Welcome {isSignInPage && "Back"}
        </div>
        <div className="text-xl font-light mb-14">
          {isSignInPage ? "Sign in to get explored" : "Sign Up to get started"}
        </div>
        <form className="flex flex-col items-center w-full">
          {/* check whether the form is valid or not. on submit we can convert to a
        json format and we can save to the database */}
          {!isSignInPage && (
            <Input
              label="Full Name"
              name="name"
              placeholder="Enter your Full Name"
              className="mb-6 w-[50%]"
              value={data.fullname}
              onChange={(e) => setData({ ...data, fullname: e.target.value })}
            />
          )}
          <Input
            label="Email address"
            name="email"
            placeholder="Enter your email"
            className="mb-6 w-[50%]"
            value={data.email}
            type="email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            className="mb-14 w-[50%]"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <Button
            label={!isSignInPage ? "Sign up" : "Log In"}
            type="submit"
            className="w-1/2 mb-2"
          />
        </form>
        <div>
          {isSignInPage
            ? "Didn't have an account? "
            : "Already have an account? "}
          <span className="text-primary cursor-pointer underline" onClick={() => navigate(`/users/${isSignInPage ? 'sign_up' : 'sign_in'}`)}>
            {isSignInPage ? "Sign up" : "Sign in"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Form;
