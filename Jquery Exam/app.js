function contact() {
  
  alert("User must login for displaying contacts!!");
 
}

let userData;

$(document).ready(function () {
  //Get user data from Json for Login
  $.ajax({
    url: "login.json",
    dataType: "json",
    type: "get",
    data: {},
    success: function (data) {
      userData = data;
    },
    error: function () {
      alert("invalid username or password");
    },
  });

  // button submit
  $("#btn").click(function () {
    //login validation
    if ($("#email").val() == "") {
      $(".error-email").css("opacity", "1");
      return false;
    } else {
      $(".error-email").css("opacity", "0");
    }

    if ($("#password").val() == "") {
      $(".err-password").css("opacity", "1");
      return false;
    } else {
      $(".err-password").css("opacity", "0");
    }

    $.map(userData, function (Obj) {
      // email, password  match and status should be active
      if (
        Obj.email === $("#email").val() &&
        Obj.password === $("#password").val() &&
        Obj.status === "active"
      ) {
        sessionStorage.setItem("name", Obj.firstname);
        sessionStorage.setItem("lname", Obj.lastname);
        sessionStorage.setItem("email", Obj.email);
        sessionStorage.setItem("mobile", Obj.mobile);
        sessionStorage.setItem("loginName", Obj.loginName);
        sessionStorage.setItem("role", Obj.role);

        // Redirecting to index page
        window.location = "login.html";
      }
    });
  });

  // Logout function
  $(".logout").click(function () {
    if (sessionStorage.length > 0) {
      sessionStorage.clear();
      window.location = "index.html";
    }
  });

  // Reset function
  function resetInputs() {
    $("#fname").val("");
    $("#lname").val("");
    $("#emailId").val("");
    $("#mobno").val("");
    $("#city").val("");
  }

  //Search function
  $("#addcontact").on("keyup", function () {
    let value = $(this).val().toLowerCase();
    $("#dataPass tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });

  // Adding new contacts
  let index = 1;
  $("#contact-click").click(function (e) {
    e.preventDefault();
    let fName = $("#fname").val();
    let lName = $("#lname").val();
    let emailId = $("#emailId").val();
    let mobNumber = $("#mobno").val();
    let cityname = $("#city").val();

    let newArr = [];

    let newObj = {
      firstName: fName,
      lastName: lName,
      eMailId: emailId,
      mobileNo: mobNumber,
      cityName: cityname,
    };

    //new contact form validation
    if (fName === "") {
      $(".err-fname").css("opacity", "1");
      return false;
    } else {
      $(".err-fname").css("opacity", "0");
    }
    if (lName === "") {
      $(".err-lname").css("opacity", "1");
      return false;
    } else {
      $(".err-lname").css("opacity", "0");
    }
    if (emailId === "") {
      $(".error-email").css("opacity", "1");
      return false;
    } else {
      $(".error-email").css("opacity", "0");
    }
    if (mobNumber === "") {
      $(".err-mobno").css("opacity", "1");
      return false;
    } else {
      $(".err-mobno").css("opacity", "0");
    }
    if (cityname === "") {
      $(".err-city").css("opacity", "1");
      return false;
    } else {
      $(".err-city").css("opacity", "0");
    }

    newArr.push(newObj);
    Content(newObj);
    // creating tables
    function Content(data) {
      resetInputs();
      let table = document.getElementById("dataPass");
      let row = "";

      for (var i = 0; i <= newArr.length; i++) {
        row = `<tr id=${index}_index style="background-color: #f0f0f0; border: 1px solid #cccccc">
        <td >${index}</td>
        <td id=${index}firstName>${newArr[i]["firstName"]}</td>
        <td id=${index}lastName>${newArr[i]["lastName"]}</td>
        <td id=${index}mobileNo>${newArr[i]["mobileNo"]}</td>
        <td id=${index}eMailId>${newArr[i]["eMailId"]}</td>
        <td id=${index}cityName>${newArr[i]["cityName"]}</td>
        <td id=${index}_icon><i class="fa fa-edit" onClick="edit(${index});"></i> | &nbsp;&nbsp;<i class="fa fa-window-close fa-lg" onClick="del(${index});"></i></td>
        </tr>`;

        table.innerHTML += row;
        index += 1;
      }
    }
  });
});

// Edit directly in field
function edit(index) {
  if (sessionStorage.getItem("role") === "admin") {
    let x = document.getElementById(index + "_index");
    if (x.contentEditable == "true") {
      x.contentEditable = "false";
    } else {
      x.contentEditable = "true";
    }
  } else {
    alert("You can't edit contact");
  }
}

// Delete button
function del(index) {
  if (sessionStorage.getItem("role") === "admin") {
    document.getElementById(index + "_index").style.display = "none";
  } else {
    alert("You can't delete it");
  }
}

//Before/After Login headings
let firstname = sessionStorage.getItem("name");
$(window).on("load", function () {
  if ("name" in sessionStorage) {
    $("#heading").html("Welcome" + " " + firstname + "!!!");
  } else {
    $("#heading").html("Login Here!");
  }
});
