function formValidation()
{
    clearErrors();
    var valid = validatePhone();
    return valid;
}

function validatePhone(){
    var phone = document.getElementById("phone").value;
    phone = phone.trim();
    var errorStyle = document.getElementById("phone");

    if(phone == ""){
        return true;
    }

    if (phone.charAt(0) !== '(' || phone.charAt(4) !== ')' || phone.charAt(5) !== ' ' || phone.charAt(9) !== '-' || phone.length !== 14) {
        showErrors("&#x274C; The phone is not in the correct format!<br>&emsp;&ensp; Format: (111) 111-1111<br>");
        errorStyle.style.border = "2px solid red"
        errorStyle.style.borderRadius = "2px"
        return false;
    }  

    var digit = Number.isInteger(parseInt(phone[1]));
    digit = Number.isInteger(parseInt(phone[2])) && digit;
    digit = Number.isInteger(parseInt(phone[3])) && digit;
    digit = Number.isInteger(parseInt(phone[6])) && digit;
    digit = Number.isInteger(parseInt(phone[7])) && digit;
    digit = Number.isInteger(parseInt(phone[8])) && digit;
    digit = Number.isInteger(parseInt(phone[10])) && digit;
    digit = Number.isInteger(parseInt(phone[11])) && digit;
    digit = Number.isInteger(parseInt(phone[12])) && digit;
    digit = Number.isInteger(parseInt(phone[13])) && digit;
    
    if (digit == false) {
        showErrors("&#x274C; The phone is must be all digits!<br>&emsp;&ensp; Correct format: (111) 111-1111<br>");
        errorStyle.style.border = "2px solid red"
        errorStyle.style.borderRadius = "2px"
        return false;
    }
    
    errorStyle.style.border = "2px solid green"
    errorStyle.style.borderRadius = "2px"
    return true;
}

function showErrors(messages) {     
    document.getElementById('error').innerHTML += messages;
} 

function clearErrors() {
    document.getElementById('error').innerHTML = "";
    document.getElementById("phone").style.border= "1px solid #999";     
}