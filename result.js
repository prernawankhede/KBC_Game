

let firstquestion = document.querySelector('.que-1');
if (firstquestion) {
    firstquestion.style.display = "block";
}

let activeQuestion = 1;
const questionClassPrefix = '.que-';

function changeColor(optionValue) {
    if (optionValue === true) {
        alert('sahi jawab');

        const currentActiveClass = questionClassPrefix + activeQuestion;
        let activeQuestionEle = document.querySelector(currentActiveClass);
        activeQuestionEle.style.display = "none";

        activeQuestion = activeQuestion + 1;

        if (activeQuestion == 16) {
            alert('End of the game');
            window.location.assign("index.html")
        }

        const newActiveClass = questionClassPrefix + activeQuestion;
        let newActiveQueEle = document.querySelector(newActiveClass);
        newActiveQueEle.style.display = "block";
    } else {
        alert('afsos!! galat jawab');
        window.location.assign("gameover.html")
    }

}

function validEmailChk(){
    var validPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    email = document.getElementById('emailid');

    if (email.value.match(validPattern)) {
        alert("Valid email address!");  
        document.getElementById('createAcc_btn').disabled = false; 
        return true;
    
      } else {
    
        alert("Invalid email address!"); 
        document.getElementById('createAcc_btn').disabled = true;    
        return false;
    
      }
    
}


function createalert() {

    
        let fName = document.getElementById('firstname').value;
        let lName = document.getElementById('lastname').value;
        let emailId = document.getElementById('emailid').value;
        let pass = document.getElementById('pass').value;
        let cnfrm_pass = document.getElementById('cnfrm-pass').value;
        let age = document.getElementById('age').value;
        let gender = document.querySelector('input[name="gender"]:checked').value;

        if (fName !== "" && lName !== "" && emailId !== "" && pass !== "" && cnfrm_pass !== "" && age !== "" && gender != "") {
            alert("You have signup successfully");
            window.location.assign("home.html")
        }
        else {
            alert("Please fill all the fields");
        }
    }


    function validate_password() {

        var myInput = document.getElementById("pass");
        var length = document.getElementById("length");

        // When the user clicks on the password field, show the message box
        myInput.onfocus = function () {
            document.getElementById('message').style.display = "block";
        }

        // When the user clicks outside of the password field, hide the message box
        myInput.onblur = function () {
            document.getElementById('message').style.display = "none";
        }

        myInput.onkeyup = function () {
            //Validate length
            if (myInput.value.length >= 8) {
                length.classList.remove("Invalid");
                length.classList.add("Valid");
            }
            else {
                length.classList.remove("Valid");
                length.classList.add("Invalid");
            }
        }


        var password = document.getElementById('pass').value;
        var confirm_pass = document.getElementById('cnfrm-pass').value;
        if (password != confirm_pass) {
            document.getElementById('wrong_pass_alert').style.color = 'red';
            document.getElementById('wrong_pass_alert').innerHTML = '❌ Use same Password';
            document.getElementById('createAcc_btn').style.opacity = (0.3);
        }
        else {
            document.getElementById('wrong_pass_alert').style.color = 'green';
            document.getElementById('wrong_pass_alert').innerHTML = 'Password Matched';
            document.getElementById('createAcc_btn').style.opacity = (1);
        }
    }



    add = document.getElementById('createAcc_btn');
    add.addEventListener('click', () => {
        console.log("Updating List...")

        firstname = document.getElementById("firstname").value,
            lastname = document.getElementById("lastname").value,
            email = document.getElementById("emailid").value,
            pw = document.getElementById("pass").value,
            conpass = document.getElementById("cnfrm-pass").value,
            age = document.getElementById("age").value,
            gender = document.querySelector('input[name="gender"]:checked').value

        if (localStorage.getItem('valuesJson') == null) {
            valuesJsonArray = [];
            valuesJsonArray.push([firstname, lastname, email, pw, conpass, age, gender])
            localStorage.setItem('valuesJson', JSON.stringify(valuesJsonArray))
        }
        else {
            valuesJsonArrayStr = localStorage.getItem('valuesJson');
            valuesJsonArray = JSON.parse(valuesJsonArrayStr);
            valuesJsonArray.push([firstname, lastname, email, pw, conpass, age, gender]);
            localStorage.setItem('valuesJson', JSON.stringify(valuesJsonArray));
        }
    });



