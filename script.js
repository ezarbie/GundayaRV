function submitForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var address = document.getElementById("address").value;
    var birthDate = document.getElementById("birthDate").value;
    var contactNo = document.getElementById("contactNo").value;
    var email = document.getElementById("email").value;
    var zipcode = document.getElementById("zipcode").value;
    var city = document.getElementById("city").value;
    var region = document.getElementById("region").value;

    console.clear();
    console.log("User Information sa taong wala gi loveback:");
    console.log("First Name: " + firstName);
    console.log("Last Name: " + lastName);
    console.log("Address: " + address);
    console.log("Birth Date: " + birthDate);
    console.log("Contact No: " + contactNo);
    console.log("Email: " + email);
    console.log("Zipcode: " + zipcode);
    console.log("City: " + city);
    console.log("Region: " + region);
}

