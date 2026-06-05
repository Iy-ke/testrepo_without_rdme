let userType = "non-subscriber";
let isauthorised;
let one_on_one_with_dietician;
let enrolled = false;

switch (userType){
    case "employee":
        isauthorised = "Full dietary Services";
        one_on_one_with_dietician = false;
        break;
    case "enrolled Member":
        isauthorised = "Full dietary Services";
        one_on_one_with_dietician = true;
        break;
    case "subscriber":
        isauthorised = "Partial access to Dietary Services";
        one_on_one_with_dietician = false;
        break;
    default:
        isauthorised = enrolled == true || enrolled == "subscribed" ? "Full dietary Services" : "Please enroll or subscribe"
        one_on_one_with_dietician = enrolled == true || enrolled == "subscribed" ? "Yes" : "No"
    
}

console.log(`hello ${userType}, your authorisation type is: ${isauthorised}, and your access to one on one with dietician is ${one_on_one_with_dietician}`)