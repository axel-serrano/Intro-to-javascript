let userRole = prompt("Ingrese su nivel de membresia");
let accesslevel;
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not Authenticated";

if (userRole === "employee"){
    accesslevel = "Welcome Employee, you have access to all Dietary Services";
} else if (userRole === "enrolled member"){
    accesslevel = "Welcome Member, you have access to all Dietary Services and one-on-one interaction with a dietician";
} else if (userRole === "subscriber"){
    accesslevel = "Welcome Subscriber, you have partial access to facilitate the Dietary Services only";
} else {
    accesslevel = "you're a non-subcriber, please subscribe for access to all benefits";
    userRole = prompt("Hello actually you don't have a subscription, \nPlease write Member or Subscriber depending on the type of member you want");
    isAuthenticated = false;
    if (userRole === "member" || userRole === "subscriber"){
        accesslevel = `Now you are enrolled like ${userRole} enjoy with all your benefits`;
    } else {
        isAuthenticated = false;
        alert("sorry, leave us your coment for why reason you don't want subscribe")
        
    }
}

console.log("Access level:" + accesslevel);
console.log("Authentication Status: " + authenticationStatus);
