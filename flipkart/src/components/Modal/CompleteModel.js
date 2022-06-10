import React from "react";
import LoginModal from "./LoginModal";
import NumberLogin from "./NumberLogin";
import RegisterModal from "./RegisterModal";

const CompleteModel = () => {
  return (
    <div>
      <LoginModal />
      <NumberLogin />
      <RegisterModal />
    </div>
  );
};

export default CompleteModel;
