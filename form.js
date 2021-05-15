var submit = document.getElementById("Submit");
submit.onclick = function (e) {
  e.preventDefault();
  var fname = document.getElementById("FirstName");
  var lname = document.getElementById("LastName");
  var Address1 = document.getElementById("Address1");
  var Address2 = document.getElementById("Address2");
  var State = document.getElementById("inputState");
  var Country = document.getElementById("inputCountry");
  var Pincode = document.getElementById("inputPincode");

  var address = [];
  address.push(Address1.value);
  address.push(Address2.value);

  var gender = document.getElementsByName("gender");
  var gvalue;
  for (i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      gvalue = gender[i].value;
    }
  }

  var foodchoice = document.getElementsByName("food");
  var choice = [];
  var count = 0;
  for (i = 0; i < foodchoice.length; i++) {
    if (foodchoice[i].checked) {
      choice.push(foodchoice[i].value);
      count++;
    }
  }
  if (choice.length >= 2) {
    var finalchoice = choice.join(",");
  } else {
    alert("Choose atleast 2 foods");
  }

  createTableBody(
    fname.value,
    lname.value,
    gvalue,
    address,
    State.value,
    Country.value,
    Pincode.value,
    finalchoice
  );

  fname.value = "";
  lname.value = "";
    gvalue = "";
    gender = " ";
  Address1.value = "";
  Address2.value = "";
  State.value = "";
  Country.value = "";
  Pincode.value = "";
    choice = [];
    foodchoice.value = "";
  address = [];
};

function createTableBody(
  fname,
  lname,
  gender,
  address,
  State,
  Country,
  Pin,
  choice
) {
  var tbody = document.getElementById("body");
  var row = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");
  var td5 = document.createElement("td");
  var td6 = document.createElement("td");
  var td7 = document.createElement("td");
    var td8 = document.createElement("td");
    td1.innerHTML = fname;
    td2.innerHTML = lname;
    td3.innerHTML = gender;
    td4.innerHTML = address;
    td5.innerHTML = State;
    td6.innerHTML = Country;
    td7.innerHTML = Pin;
    td8.innerHTML = choice;

  row.append(td1, td2, td3, td4, td5, td6, td7, td8);
  tbody.append(row);
}
