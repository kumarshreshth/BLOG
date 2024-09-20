let firebaseConfig = {
  apiKey: "AIzaSyDHYLnkgslQD_cXF7uSecU2ZsaN9rQkDHc",
  authDomain: "blogging-ce620.firebaseapp.com",
  projectId: "blogging-ce620",
  storageBucket: "blogging-ce620.appspot.com",
  messagingSenderId: "926920626865",
  appId: "1:926920626865:web:48437ce276e03ca69b8890",
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
