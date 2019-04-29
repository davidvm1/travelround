$(document).ready(function () {

    var rootRef = firebase.database().ref();

    rootRef.on("child_added", snap => {

        $("#listaViajes").append("<a href='#' class='list - group - item'>" + snap.val() + "</a>");
       


    });


});