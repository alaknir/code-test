import axios from "axios";

const services = ({ url, method }) => async () =>
  await axios[method](url)
    .then(response => {
      if (response.status === 200) {
        return response;
      }
      throw { error: `status ${response.status}` };
    })
    .catch(error => {
      console.log("Internal server error");
      console.log("servie failed with error: ", error);
    });

export default services;
