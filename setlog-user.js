var firebaseConfig = {
  apiKey: "AIzaSyBDTepNpOwDW6gHUVllLnhNqEbQlgIDrCs",
  authDomain: "cerpen-ignelius.firebaseapp.com",
  databaseURL: "https://cerpen-ignelius-default-rtdb.firebaseio.com",
  projectId: "cerpen-ignelius",
  storageBucket: "cerpen-ignelius.firebasestorage.app",
  messagingSenderId: "885660076096",
  appId: "1:885660076096:web:2a1578a4463237ad08b7a5"
};

var app = firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var database = firebase.database();

function cekStatusLogin() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user && user.emailVerified) {
      document.querySelectorAll('.isLogin').forEach(element => {
        element.style.display = 'block';
      });
document.querySelectorAll('.notLogin').forEach(element => {
        element.style.display = 'none';
      });

    } else {
document.querySelectorAll('.isLogin').forEach(element => {
        element.style.display = 'none';
      });
document.querySelectorAll('.notLogin').forEach(element => {
        element.style.display = 'block';
      });
    }
  });
}

// Panggil fungsi saat halaman dimuat
window.onload = cekStatusLogin;

function logoutUser() {
  firebase.auth().signOut()
    .then(() => {
      alert(igneliusLoginJS.logoutSukses);
      localStorage.removeItem('loggedInUser');
      
    })
    .catch(() => {
      alert(igneliusLoginJS.logoutGagal);
    });
}
