firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // window.alert("Logged In");
        var user = firebase.auth().currentUser;

        if (user != null) {

            window.location.href = 'Verification.html';

        }

    } else {

        // window.alert("Logged Out");

    }
});

function create_account() {

    var userEmail = document.getElementById("inputUser").value;
    var userPass = document.getElementById("inputPsw").value;

    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error : " + errorMessage);
        // ...
    });

  

}