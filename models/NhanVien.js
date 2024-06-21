// Khởi tạo 1 lớp đối tương nhân viên cho bài tập quản lý nhân viên
class NhanVien {
  tknv= "";
  name = "";
  email = "";
  password = "";
  datepicker = "";
  luongCB = "";
  chucvu = "";
  gioLam = "";

  tongLuong = function () {
    switch (this.chucvu) {
      case "Sếp":
        return Number(this.luongCB) * 3;
      case "Trưởng phòng":
        return Number(this.luongCB) * 2;
      case "Nhân viên":
        return Number(this.luongCB) * 1;
    }
  }
  loaiNhanVien = function () {
    if(this.gioLam >= 192) {
      return "xuất sắc";
    }else if (this.gioLam >= 176) {
      return "giỏi";
    } else if (this.gioLam >= 160) {
      return "khá";
    } else {
      return "trung bình";
    }
  }
}