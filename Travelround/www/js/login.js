
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        window.alert("Logged In");
    } else {
        
    }
});


function login() {

    var userEmail = document.getElementById("inputUser").value;
    var userPass = document.getElementById("inputPsw").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error : " + errorMessage);
        // ...
    });

    
}

