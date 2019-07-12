var axios = require("axios");

module.exports = {
  fetchValues: function() {
    var encodedURI = window.encodeURI("http://localhost:8080/properties/all");
    return axios.get(encodedURI).then(response => {
      console.log("fetchProperties: ", response.data);
      return response.data;
    });
  }
};
 