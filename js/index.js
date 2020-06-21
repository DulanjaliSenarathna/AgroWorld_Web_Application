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
  firebase.initializeApp(firebaseConfig);
  

  firebase.auth.Auth.Persistence.NONE;

// var mqtt = require('mqtt')
// var client  = mqtt.connect('mqtt://test.mosquitto.org')

  //Login 
  $("#signin").click(function()
  {
      var email = $("#your_email").val();
      var password = $ ("#your_pass").val();

      if(email !="" && password !="")
      {
          var result = firebase.auth().signInWithEmailAndPassword(email,password);

          result.catch(function(error)
          {
              var errorCode = error.code;
              var errorMessage = error.message;

              console.log(errorCode);
              console.log(errorMessage);

              window.alert("Message : "+errorMessage);
          }
          );
          

      }
      else
      {
          window.alert("Please fii all fields");
      }
  }
  );

 

//Register User
  $("#signup").click(function()
  {
      var email = $("#your_email").val();
      var password = $ ("#your_pass").val();
      var cPassword = $ ("#re_pass").val();

      if(email !="" && password !="" && cPassword!="" )
      {
          if(password == cPassword)
          {
            var result = firebase.auth().createUserWithEmailAndPassword(email,password);

            result.catch(function(error)
            {
                var errorCode = error.code;
                var errorMessage = error.message;
  
                console.log(errorCode);
                console.log(errorMessage);
  
                window.alert("Message : "+errorMessage);
            }
            );
            
          }
          else
          {
            window.alert("Password is not match with confirm password");
          }

      }
      else
      {
          window.alert("Please fii all fields");
      }
  }
  );

  //password reset
  $("#reset_password").click(function()
  {
    var auth = firebase.auth();
    var email = $("#your_email").val();

    if(email !="")
    {
        auth.sendPasswordResetEmail(email).then(function()
        {
            window.alert("Email has been send to you, please check the email");
        })
        .catch(function(error)
        {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);

            window.alert("Message : "+errorMessage);
        });
    }
    else
    {
        window.alert("Please enter your email first");
    }
  });

  $("#update").click(function () {

    var fullname = $("#full_name").val();
    var username = $ ("#user_name").val();
    var mobile = $ ("#mobile_number").val();

    var rootRef = firebase.database().ref().child("users");
    var userID = firebase.auth().currentUser.uid;
    var usersRef = rootRef.child(userID);

    if(fullname!="" && username!="" && mobile!="")
    {
        var userData = 
        {
            "user_fullname":fullname,
            "username":username,
            "user_phone":mobile,
            "uid":userID
        };

        usersRef.set(userData,function(error)
        {
            if(error) 
            {
                var errorCode = error.code;
                var errorMessage = error.message;
    
                console.log(errorCode);
                console.log(errorMessage);
    
                window.alert("Message : "+errorMessage);
            }
            else
            {
                window.location.href="Dashboard/index.html";
            }
        });
    }
    else
    {
        window.alert("Please fii all fields");
    }


});