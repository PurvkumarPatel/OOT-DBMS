$(document).ready(function() {
    $("#login-form").submit(function(e) {
      e.preventDefault();
      var username = $("#username").val();
      var password = $("#password").val();
      console.log("Username: " + username + " Password: " + password);
      // Add code here to send the login information to the server for authentication
    });
  });
  