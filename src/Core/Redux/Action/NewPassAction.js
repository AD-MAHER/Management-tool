import { message } from "antd";
import axios from "axios";

export const Change_Pass = (data) => async (dispatch) => {
  await axios
    .post(`/change-password`, data)
    .then((res) => {
      if (res.data.status === true) {
        localStorage.setItem("change", JSON.stringify(res.data.status));
        if (JSON.parse(localStorage.getItem("change")) === true) {
          window.location.assign("/");
          message.success( JSON.stringify(res.data.message));
          localStorage.removeItem("authorized");
          localStorage.removeItem("OTP");
          localStorage.removeItem("change");
        }
      } else {
        localStorage.setItem("status", JSON.stringify(res.data.status));
        message.error(res.data.message);
      }
    })

    .catch((err) => {
      localStorage.setItem("change", JSON.stringify(err.response.data.message));
      message.error(err.response.data.message);
    });
};
