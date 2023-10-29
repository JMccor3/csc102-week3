function checkCreds() {
    //input validation for week 3
    console.log("checkCreds() Started")
    document.getElementById("loginStatus").innerHTML = "Status of Login";
    //variable needed creation
    var firstName;
    var lastName;
    var zipCode;
    var zipCodeNumb;
    var fullName;
    var fullNameLength;

    //fill in the variables
    //working on inputting first name
    firstName = document.getElementById("Fname").value;
    console.log("The firstname was input as:" + firstName);
    //working on inputting last name
    lastName = document.getElementById("Lname").value;
    console.log("The lastname was input as:" + lastName);
    //inputting zip code
    zipCode = document.getElementById("Zipcode").value;
    console.log("The zipcode was input as:" + zipCode);
    //full name input
    fullName = firstName + " " + lastName;
    console.log("The fullname was input as:" + fullName);

    fullNameLength = fullName.length;
    console.log("The fullname was input with:" + fullNameLength + "characters.");

    zipCodeNumb = parseInt(zipCode);
    console.log("The zipcode was input with:" + zipCodeNumb + "characters.");

    //things to check: full name length <20; 
    if (fullNameLength > 20) { document.getElementById("loginStatus").innerHTML = "Invalid full name"; }
    //zipcode = 5 digits;
    else if (zipCode.length != 5) {
        document.getElementById("loginStatus").innerHTML = "invalid Zipcode";
    }
    else { alert("User credentials passed! welcome to the site, " + fullName) }


}
function checkPalin(){
    console.log ("checkPalin() started");
    
}