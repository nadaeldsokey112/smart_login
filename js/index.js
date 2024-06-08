// المتغيرات العالمية للتسجيل
var signinName = document.getElementById('signinName');
var signinEmail = document.getElementById('signinEmail');
var signinPassword = document.getElementById('signinPassword');
// المتغيرات العالمية لتسجيل الدخول
var signupEmail = document.getElementById('signupEmail');
var signupPassword = document.getElementById('signupPassword');
// مصفوفة لتخزين المستخدمين 
var personList = [];
var checkPerson = [];

function singUp() {
    var person = {
      userName: signinName.value,
      userEmail: signinEmail.value,
      userPassword: signinPassword.value
    };
  
    // return users storage from localStorage
    var storedPersons = JSON.parse(localStorage.getItem('persons')) || [];
    // check if userEmail already exist or not
    var isEmailExists = storedPersons.some(
        function(storedPerson) {
      return storedPerson.userEmail === person.userEmail;
    }
);
  
    if (!isEmailExists) {
      storedPersons.push(person);
      localStorage.setItem('persons', JSON.stringify(storedPersons));

      var exist = document.getElementById('exist')
      exist.innerHTML = "success";
         exist.style.color = 'green';
      window.location.href = 'index.html';

    } else {
      var exist = document.getElementById('exist')
    exist.innerHTML = "email already exists";
       exist.style.color = 'red ';
    }
  }
  
// fun singIn
function singIn() {
    var person = {
      userEmail: signupEmail.value,
      userPassword: signupPassword.value
    };
  
    var checkPerson = JSON.parse(localStorage.getItem('persons')) || [];
  
    // check if the userEmail && password already exist or not
    var isPersonExists = checkPerson.some(function(storedPerson) {
      return storedPerson.userEmail === person.userEmail && storedPerson.userPassword === person.userPassword;
    });
  
    if (isPersonExists) {
      // تخزين المستخدم الحالي في localStorage
      localStorage.setItem('currentUser', JSON.stringify(person));
      window.location.href = 'home.html';
    } else {
      var notExist = document.getElementById('exist');
      notExist.innerHTML = "incorrect email or password";
      notExist.style.color = 'red';
    }
  }
  
  function displayUserName() {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {
        var storedPersons = JSON.parse(localStorage.getItem('persons')) || [];
        var user = storedPersons.find(function(storedPerson) {
            return storedPerson.userEmail === currentUser.userEmail;
        });

        if (user) {
            document.getElementById('userName').textContent = "Welcome" + " " + user.userName;
        }
    } else {
        window.location.href = 'index.html'; //  return to login page
    }
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}



// function logout(){
//     window.location.href = 'index.html';
// }