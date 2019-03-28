function sendVerification() {

    var user = firebase.auth().currentUser;

    user.sendEmailVerification().then(function () {
        // Email sent.

        window.alert("Verification sent");
        firebase.auth().signOut();
        window.location.href = 'index.html';

    }).catch(function (error) {
        // An error happened.

        window.alert("Error: " + error.message);
    });


}