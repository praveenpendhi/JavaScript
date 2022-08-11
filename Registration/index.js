

function validate(){
    let firstNameInput = document.getElementById('valfirstName').value
    let lastNameInput = document.getElementById('vallastName').value
    let emailInput = document.getElementById('valuserName').value
    let cityInput = document.getElementById('valcity').value
    let stateInput = document.getElementById('valstate').value
    let zipInput = document.getElementById('valzip').value
    let tncInput = document.getElementById('valtnc').checked
    let error = false;
    var onlyalphabet = /^[A-Za-z]+$/;
    if(firstNameInput.match(onlyalphabet)) {
        document.getElementById('firstname-valid').style.display = 'block'
        document.getElementById('firstname-invalid').style.display = 'none'
    } else {
        document.getElementById('firstname-valid').style.display = 'none'
        document.getElementById('firstname-invalid').style.display = 'block'
        error = true;
    }

    if(lastNameInput.match(onlyalphabet)) {
        document.getElementById('lastname-valid').style.display = 'block'
        document.getElementById('lastname-invalid').style.display = 'none'
    } else {
        document.getElementById('lastname-valid').style.display = 'none'
        document.getElementById('lastname-invalid').style.display = 'block'
        error = true;
    }
    
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emailInput.match(mailformat)){
        document.getElementById("user-valid").style.display = "block";
        document.getElementById("user-invalid").style.display = "none";
      } else {
        document.getElementById("user-invalid").style.display = "block";
        document.getElementById("user-valid").style.display = "none";
        error = true;
      }

    if(cityInput.match(onlyalphabet) && cityInput.length >= 3) {
        document.getElementById('city-valid').style.display = 'block'
        document.getElementById('city-invalid').style.display = 'none'
    } else {
        document.getElementById('city-valid').style.display = 'none'
        document.getElementById('city-invalid').style.display = 'block'
        error = true;
    }

    if(stateInput.length >= 1 && stateInput != "none") {
        document.getElementById('state-valid').style.display = 'block'
        document.getElementById('state-invalid').style.display = 'none'
    } else {
        document.getElementById('state-valid').style.display = 'none'
        document.getElementById('state-invalid').style.display = 'block'
        error = true;
    }

    var zipformat =  /^[0-9]+$/;
    if(zipInput.match(zipformat) && zipInput.length == 6){
        document.getElementById('zip-valid').style.display = 'block'
        document.getElementById('zip-invalid').style.display = 'none'
    } else {
        document.getElementById('zip-valid').style.display = 'none'
        document.getElementById('zip-invalid').style.display = 'block'
        error = true;
    }

    if(tncInput) {
        document.getElementById('tnc-valid').style.display = 'block'
        document.getElementById('tnc-invalid').style.display = 'none'
    } else {
        document.getElementById('tnc-valid').style.display = 'none'
        document.getElementById('tnc-invalid').style.display = 'block'
        error = true;
    }

    if(error != true)
    {
        alert('You have succesfully registered')

        document.getElementById('valfirstName').value = ''
        document.getElementById('vallastName').value = ''
        document.getElementById('valuserName').value = ''
        document.getElementById('valcity').value = ''
        document.getElementById('valstate').value = 'none'
        document.getElementById('valzip').value = ''
        document.getElementById('valtnc').checked = false

        document.getElementById('firstname-valid').style.display = 'none'
        document.getElementById('lastname-valid').style.display = 'none'
        document.getElementById('user-valid').style.display = 'none'
        document.getElementById('city-valid').style.display = 'none'
        document.getElementById('state-valid').style.display = 'none'
        document.getElementById('zip-valid').style.display = 'none'
        document.getElementById('tnc-valid').style.display = 'none'

    }

}






