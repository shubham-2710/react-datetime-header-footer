var DateTime = require("../DateTime.js");
var React = require("react");
var ReactDOM = require("react-dom");

var test = React.createElement("tr", { className: "check" }, "shubham ");

ReactDOM.render(
  React.createElement(DateTime, {
    viewMode: "time",
    dateFormat: false,
    isValidDate: function(current) {
      return current.isBefore(DateTime.moment().startOf("month"));
    }
  }),
  document.getElementById("datetime")
);
