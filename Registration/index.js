

function validate(){
    let firstNameInput = document.getElementById('valfirstName').value
    let lastNameInput = document.getElementById('vallastName').value
    let emailInput = document.getElementById('valuserName').value
    let phoneInput = document.getElementById('valPhone').value
    let batchInput = document.getElementById('valbatch').value
    let moduleInput = document.getElementById('valmodule').value
    
    let tncInput = document.getElementById('valtnc').checked

    let error = false;
    var onlyalphabet = /^[A-Za-z]+$/;
    if(firstNameInput.match(onlyalphabet) && firstNameInput.length >= 3) {
        document.getElementById('firstname-valid').style.display = 'block'
        document.getElementById('firstname-invalid').style.display = 'none'
    } else {
        document.getElementById('firstname-valid').style.display = 'none'
        document.getElementById('firstname-invalid').style.display = 'block'
        error = true;
    }

    if(lastNameInput.match(onlyalphabet) && lastNameInput.length >= 3) {
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

      var phonenumformat =  /^[0-9]+$/;
      if(phoneInput.match(phonenumformat) && phoneInput.length == 10){
          document.getElementById('Phone-valid').style.display = 'block'
          document.getElementById('Phone-invalid').style.display = 'none'
      } else {
          document.getElementById('Phone-valid').style.display = 'none'
          document.getElementById('Phone-invalid').style.display = 'block'
          error = true;
      }
  

    if(batchInput.length >= 1 && batchInput != "none") {
        document.getElementById('batch-valid').style.display = 'block'
        document.getElementById('batch-invalid').style.display = 'none'
    } else {
        document.getElementById('batch-valid').style.display = 'none'
        document.getElementById('batch-invalid').style.display = 'block'
        error = true;
    }

    if(moduleInput.length >= 1 && moduleInput != "none") {
        document.getElementById('module-valid').style.display = 'block'
        document.getElementById('module-invalid').style.display = 'none'
    } else {
        document.getElementById('module-valid').style.display = 'none'
        document.getElementById('module-invalid').style.display = 'block'
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
        alert('Your details have been saved succesfully!')

        document.getElementById('valfirstName').value = ''
        document.getElementById('vallastName').value = ''
        document.getElementById('valuserName').value = ''
        document.getElementById('valPhone').value = ''
        document.getElementById('valbatch').value = 'none'
        document.getElementById('valmodule').value = ''
        document.getElementById('valtnc').checked = false

        document.getElementById('firstname-valid').style.display = 'none'
        document.getElementById('lastname-valid').style.display = 'none'
        document.getElementById('user-valid').style.display = 'none'
        document.getElementById('Phone-valid').style.display = 'none'
        document.getElementById('batch-valid').style.display = 'none'
        document.getElementById('module-valid').style.display = 'none'
        document.getElementById('tnc-valid').style.display = 'none'

    }

}






