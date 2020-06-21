/* eslint-disable semi */
var value = 1;
 var firebaseConfig = 
{
    apiKey: "AIzaSyBNeXeP13NhKAOmPgKR1s5dFDMZpqN2LjM",
    authDomain: "agroworld-36ae9.firebaseapp.com",
    databaseURL: "https://agroworld-36ae9.firebaseio.com",
    projectId: "agroworld-36ae9",
    storageBucket: "agroworld-36ae9.appspot.com",
    messagingSenderId: "953204878554",
    appId: "1:953204878554:web:ddeabc5f4b3b8b0c1249e3",
    measurementId: "G-4QFDBFFHHP"
  };
  // Initialize Firebase
 // firebase.initializeApp(firebaseConfig);


  firebase.auth.Auth.Persistence.NONE;
  
  
  $("#water_pump").click(function () {

   value = value === 1 ? 0 : 1;

    var postData = {"datum": {"value": value}};
    var wipcleared = [];
    var xhr = new XMLHttpRequest();
    var url = "https://io.adafruit.com/api/v2/dulanjali/feeds/water-pump/data";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("X-AIO-Key", "aio_btJp99cUWnF74pM7IoFix0oqNYiA");

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          var json = JSON.parse(xhr.responseText);
          if (json) {
            console.log(wipcleared);
          }
        } else {

        }
      };
      var data = JSON.stringify(postData);
      xhr.send(data);

});

$("#logout").click(function () {

  firebase.auth().signOut().then(() => {
    navigator.pop();
  }, function (error) {
    // An error happened.
  });
});




