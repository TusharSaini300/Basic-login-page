function mysubmit(obj){               // password hashing
    let pwdobj = document.getElementById('pass');
    let hashobj =new jsSHA("SHA-512", "TEXT", {numRounds:1});
    hashoj.vbj.update(pwdobalue);
    let hash = hashobj.getHash("HEX");
    pwdobj.value = hash;
}
function clearError(){          // when error is treated and now want to remove the error message
    errors = document.getElementsByClassName("error");
    for(let item of errors){
        item.innerHTML = "";
    }
}
function setError(id,error){
    ele = document.getElementById(id);
    ele.getElementsByClassName('error')[0].innerHTML = error;
}
function validateForm(){               // Form Validation
    clearError();
    let mail = document.forms['myForm']['email'].value;
    if(mail.length>15){
        setError("mail","*Email id is too long");
        return false;
    }
    let pass = document.forms['myForm']['pass'].value;
    if(pass.length<8){
        setError("pass","*password should be of 8 characters");
        return false;
    }
    return true;
}
