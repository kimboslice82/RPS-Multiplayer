 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyBB6mqbTJUdxdF8Q6rjeilQ-TC-kxV0F5U",
    authDomain: "rps-multiplayer-bfa21.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-bfa21.firebaseio.com",
    projectId: "rps-multiplayer-bfa21",
    storageBucket: "rps-multiplayer-bfa21.appspot.com",
    messagingSenderId: "314572265229"
};

firebase.initializeApp(config);

// Create a variable to reference the database.
var database = firebase.database();
var playerOneName = "";
var playerTwoName = "";

//whent the user clicks the start button
$("#submit-name").on("click", function() {
    
    event.preventDefault();
    
    playerOneName = $("#player1").val().trim();
    playerTwoName = $("#player2").val().trim();
    
    console.log(playerOneName);
    console.log(playerTwoName);

    return false;
})

//whent the user clicks the submit button to chat
$("submit").on("click", function() {
    var playerOneChat = $("#player1").val().trim();
    var playerTwoChat = $("#player2").val().trim();
    
    console.log(playerOneChat);
    console.log(playerTwoChat);

    return false;
})