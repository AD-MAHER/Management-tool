import { message } from "antd";
import axios from "axios";

export const Verify_Otp = (data) => async (dispatch) => {
  await axios
    .post(`/verify-otp?otp=${data.OTP}`)
    .then((res) => {
      console.log(res);
      if (res.data.status === true) {
        localStorage.setItem("OTP", JSON.stringify(res.data.status));
        if (JSON.parse(localStorage.getItem("OTP")) === true) {
          window.location.assign("/new_pass");
          message.success(JSON.stringify(res.data.message))
          localStorage.removeItem("forgot");
        }
      } else {
        message.error(res.data.message, 5);
      }
    })
    .catch((err) => {
      localStorage.setItem("OTP", JSON.stringify(err.message));
      message.error(err.message);
    });
};
