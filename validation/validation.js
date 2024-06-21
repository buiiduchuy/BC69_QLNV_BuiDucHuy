// check empty value 
function checkEmtyValue(text,errorEle) {
  if(text == "") {
    // input empty
    errorEle.innerHTML = "Vui lòng không bỏ trống";
    errorEle.style.display = "block";
    return false;
  } else {
    errorEle.innerHTML = "";
    return  true;
  }
}


// check format account
function checkAccount(text,errorEle) {
  let regexEmail = /^\d{4,6}$/;
  let isValid = regexEmail.test(text);
  if(!isValid) {
     // handle message error
    errorEle.innerHTML = "Vui lòng nhập tối đa 4-6 ký số";
    return false;
  }else {
     // handle message error
     errorEle.innerHTML = "";
     return true;
  }
}

// check format account
function checkName(text,errorEle) {
  let regexEmail = /^[a-zA-Z ]*$/;
  let isValid = regexEmail.test(text);
  if(!isValid) {
     // handle message error
    errorEle.innerHTML = "Vui lòng nhập chuỗi";
    return false;
  }else {
    // handle message error
    errorEle.innerHTML = "";
    return true;
  }
}

// check format mail
function checkEmail(text, errorEle){
  let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let isValid = regexEmail.test(text) // true or false
  if(!isValid) {
    // handle message error
    errorEle.innerHTML = "Vui lòng nhập đúng định dạng email";
    return false;
  }else {
     // handle message error
    errorEle.innerHTML = "";
    return true;
  }
}

// check password
function checkPassWord(text, errorEle) {
  const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{6,10}$/;
  if (!regex.test(text)) {
    // handle message error
    errorEle.innerHTML = "Vui lòng nhập đúng định dạng mật khẩu";
    return false;
  } else {
    // handle message error
    errorEle.innerHTML = "";
    return true;
  }
}

// check rank salary
function checkRankSalary(text,errorEle) {
  let regexSalary = /^[0-9]/;
  if(!regexSalary.test(text)) {
    // input empty
    errorEle.innerHTML = "Vui lòng nhập số";
    errorEle.style.display = "block";
    return false;
  }else {
    console.log("adadadad",Number(text))
    if(Number(text) < 1000000 || Number(text) > 20000000) {
      errorEle.innerHTML = "Vui lòng nhập lương từ 1.000.000  - 20.000.000";
      errorEle.style.display = "block";
      return false;
    }
    else {
      errorEle.innerHTML = "";
      return  true;
    }
  }
}

// check time work
function checkTimeWork(text,errorEle) {
  let regexTimeWork = /^[0-9]/;
  if(!regexTimeWork.test(text)) {
    // input empty
    errorEle.innerHTML = "Vui lòng nhập số";
    errorEle.style.display = "block";
    return false;
  }else {
    if(Number(text) < 80 || Number(text) > 200) {
      // input empty
      errorEle.innerHTML = "Vui lòng nhập số giờ làm từ 80 - 200";
      errorEle.style.display = "block";
      return false;
    } else {
      errorEle.innerHTML = "";
      return  true;
    }
  }
}

// check datepicker
function checkDatePicker(text,errorEle) {
  let regexDate = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
  if(!regexDate.test(text)) {
    // input empty
    errorEle.innerHTML = "Vui lòng nhập đúng định dạng mm/dd/yyyy";
    errorEle.style.display = "block";
    return false;
  }else {
    errorEle.innerHTML = "";
      return  true;
  }
}