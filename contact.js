function getGender() {
    return document.querySelector('input[name="gender"]:checked')
}

document.addEventListener("DOMContentLoaded", function() {
    fields.Name = document.getElementById('Name');
    fields.email = document.getElementById('email');
    fields.address = document.getElementById('adress');
    fields.housenumber = document.getElementById('housenumber');
    fields.country = document.getElementById('country');
    fields.question = document.getElementById('question');
})

function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;

    return (value.lenght > 0);
}

function isNumber(num) {
    return (num.length > 0) && !isNaN(num);
}

function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
   }

function fieldValidation(field, validationFunction) {
    if (field == null) return false;
   
    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
    field.className = 'placeholderRed';
    } else {
    field.className = '';
    }
   
    return isFieldValid;
   }

   function isValid() {
    var valid = true;
    
    valid &= fieldValidation(fields.Name, isNotEmpty);
    valid &= fieldValidation(fields.gender, isNotEmpty);
    valid &= fieldValidation(fields.address, isNotEmpty);
    valid &= fieldValidation(fields.country, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);
    valid &= fieldValidation(fields.housenumber, isNumber);
    valid &= fieldValidation(fields.question, isNotEmpty);
   
    return valid;
   }

   class User {
    constructor(Name, gender, address, country, email, question) {
    this.name = Name;
    this.gender = gender;
    this.address = address;
    this.country = country;
    this.email = email;
    this.question = question;
    }
   }

function sendContact() {
    fields.gender = getGender();

    if (isValid()){
        let usr = new User(Name.value, fields.gender.value, address.value, country.value, email.value)
        alert(`${usr.Name} Thanks for contacting.`)

    } else {
      alert("There was an error")
    }
}