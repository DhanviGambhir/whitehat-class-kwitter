
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA06ns_mUEtEiyPheQm_5LEeIxXPBwK530",
  authDomain: "kwitter-8a5ec.firebaseapp.com",
  databaseURL: "https://kwitter-8a5ec-default-rtdb.firebaseio.com",
  projectId: "kwitter-8a5ec",
  storageBucket: "kwitter-8a5ec.appspot.com",
  messagingSenderId: "800941105190",
  appId: "1:800941105190:web:af0c77d0140305bb6346e7",
  measurementId: "G-F7C6WB56P4"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}