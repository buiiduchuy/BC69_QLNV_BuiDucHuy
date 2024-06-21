let arrNhanVien = [];

let getInfoTable = function () {
  let arrNhanVien = getLocalStorage();
  let nhanVien = new NhanVien();
  let listInfo = document.querySelectorAll("#myModal input, #myModal select");
  let flag = true;
  for(let item of listInfo) {
    let {id,value} = item;
    nhanVien[id] = value;
    let errorElement = item.parentElement.nextElementSibling;
    let checkValue = checkEmtyValue(value,errorElement);
    flag &= checkValue
    if(!checkValue) {
      continue
    }
    
    if(id == "email") {
      let checkEmailValue =  checkEmail(value,errorElement)
      flag &= checkEmailValue
    }

    if(id == "tknv") {
      let checkAccountValue =  checkAccount(value,errorElement)
      flag &= checkAccountValue
    }

    if(id == "name") {
      let checkNameValue =  checkName(value,errorElement)
      flag &= checkNameValue
    }

    if(id == "password") {
      let checkTypePassWord =  checkPassWord(value,errorElement)
      flag &= checkTypePassWord
    }

    if(id == "datepicker") {
      let checkDate =  checkDatePicker(value,errorElement)
      flag &= checkDate
    }

    if(id == "luongCB") {
      let checkSalary = checkRankSalary(value,errorElement)
      flag &= checkSalary
    }

    if(id == "gioLam") {
      let checkTime = checkTimeWork(value,errorElement)
      flag &= checkTime
    }

  }

  if(flag) {
    return nhanVien;
  }
  console.log("flag",flag)
};

function setLocalStorage(arr = arrNhanVien) {
  localStorage.setItem("arrNhanVien", JSON.stringify(arr));
}

function getLocalStorage(key = "arrNhanVien") {
  arrNhanVien = JSON.parse(localStorage.getItem(key))
  return arrNhanVien == null ? arrNhanVien = [] : arrNhanVien;
}
getLocalStorage()

document.getElementById("btnThemNV").onclick = function () {
  let nhanVien = getInfoTable();
  if(!nhanVien) {
    return false;
  }
  for(let item of arrNhanVien) {
    if(nhanVien.tknv == item.tknv) {
      document.getElementById("tbTKNV").innerHTML = "Tài khoản đã tồn tại!";
      document.getElementById("tbTKNV").style.display = "block";
      return false;
    }
   }
  arrNhanVien.push(nhanVien);
  setLocalStorage();
  renderNhanVien();
  $('#myModal').modal('hide');
  document.querySelector("#myModal form").reset();
};
document.getElementById("btnThem").onclick = function(){
  document.getElementById("btnCapNhat").style.opacity = "0.8";
  document.getElementById("btnCapNhat").style.pointerEvents = "none"

  document.getElementById("btnThemNV").style.opacity = "1";
  document.getElementById("btnThemNV").style.pointerEvents = "auto"
}

let renderNhanVien = function (arr = arrNhanVien) {
  let content = "";
  for (let item of arr) {
    let newNhanVien = new NhanVien();
    let { tknv, name, email, datepicker, chucvu} = item;
    Object.assign(newNhanVien, item);
    content += `  
    <tr>
      <td>${tknv}</td>
      <td>${name}</td>
      <td>${email}</td>
      <td>${datepicker}</td>
      <td>${chucvu}</td>
      <td>${newNhanVien.tongLuong().toLocaleString("it-IT", { style: "currency", currency: "VND" })}</td>
      <td>${newNhanVien.loaiNhanVien()}</td>
      <td>
      <button onclick="deleteNhanVien('${tknv}')" class="btn btn-danger">Xoá</button>
      <button onclick="editNhanVien('${tknv}')" class="btn btn-warning">Sửa</button>
      </td>
    </tr>
    `;
  }
  arr.length == 0 ? 
  document.getElementById("tableDanhSach").innerHTML = `
  <tr class="text-danger text-center"><td colspan="8">không có nhân viên</td></tr>` :
  document.getElementById("tableDanhSach").innerHTML = content;
  console.log("ar",arr)
};
renderNhanVien();


let deleteNhanVien = function (tknv){
  if (confirm(`Xoá nhân viên xó tài khoản : ${tknv}`) == true) {
    let arr = getLocalStorage();
    arr.forEach((item,index)=> {
      if(item.tknv == tknv) {
       arr.splice(index,1)
      }
    })
    setLocalStorage();
    renderNhanVien();
  } else {
    return false;
  }
}

let editNhanVien = function(tknv) {
  let arr = getLocalStorage();
  let listInfo = document.querySelectorAll("#myModal input, #myModal select");
  let nhanvien = arr.find((item,index)=> {
    return item.tknv == tknv
  })
  for(let item of listInfo) {
    let {id} = item
    item.value = nhanvien[id]
  }
  document.getElementById("btnThemNV").style.opacity = "0.8";
  document.getElementById("btnThemNV").style.pointerEvents = "none"

  $('#myModal').modal('show');
}

document.getElementById("btnCapNhat").onclick = function() {
  let nhanVien = getInfoTable();
  let arr = getLocalStorage();
  for(let item of arr) {
    if(item.tknv === nhanVien.tknv) {
      Object.assign(item,nhanVien)
    }
  }
  setLocalStorage();
  renderNhanVien();
  $('#myModal').modal('hide');
  document.querySelector("#myModal form").reset();
};

// search
document.getElementById("searchName").oninput = function (e){
  let arr = getLocalStorage();
  let textSearch = removeVietnameseTones(e.target.value).trim().toLowerCase();
  let nhanVien = new NhanVien()
  let arrSearch = arr.filter((item , index) => {
    let searchNhanVien = Object.assign(nhanVien,item)
    return removeVietnameseTones(searchNhanVien.loaiNhanVien()).trim().toLowerCase().includes(textSearch);
  });
  renderNhanVien(arrSearch)
}


// btn close
document.getElementById("btnDong").onclick = function (){
  document.querySelector("#myModal form").reset();
}