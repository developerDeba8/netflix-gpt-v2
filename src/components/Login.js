import { BG_IMAGE_URL } from "../utils/constants";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_IMAGE_URL} alt="netflix background" />
      </div>
      <form className="absolute  text-black w-3/12 p-8 bg-black bg-opacity-85 my-32 mx-auto right-0 left-0 rounded-lg">
        <h1 className="font-bold  text-white text-3xl my-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="my-4 p-3 w-full bg-gray-700 bg-opacity-90"
            placeholder="Name"
          />
        )}
        <input
          placeholder="Email or Phone Number"
          className="my-4 p-3 w-full bg-gray-700 bg-opacity-90"
        />
        <input
          placeholder="Password"
          className="my-4 p-3 w-full bg-gray-700 bg-opacity-90"
        />
        <button
          type="submit"
          className="my-6 p-3 w-full text-white bg-red-700 rounded-lg"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="text-white my-6 cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
