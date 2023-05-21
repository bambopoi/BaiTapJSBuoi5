// BÀI TẬP 1

// progress
function calcAreaGrade(area) {
  if (area === "A") return 2;
  if (area === "B") return 1;
  if (area === "C") return 0.5;
  return 0;
}
function calcTypeGrade(type) {
  if (type === "1") return 2.5;
  if (type === "2") return 1.5;
  if (type === "3") return 1;
  return 0;
}

document.getElementById("btnSubmit").onclick = function exercise1() {
  // inpput
  var benchmark = document.getElementById("benchmarkInput").value;
  var subject1 = +document.getElementById("subject1").value;
  var subject2 = +document.getElementById("subject2").value;
  var subject3 = +document.getElementById("subject3").value;
  var areaVal = document.getElementById("areaSelect").value;
  var typeVal = document.getElementById("typeSelect").value;

  // output
  var xepLoai = 0;
  var areaGrade = calcAreaGrade(areaVal);
  var typeGrade = calcTypeGrade(typeVal);
  var total = subject1 + subject2 + subject3 + areaGrade + typeGrade;
  // progress
  if (
    total >= benchmark &&
    subject1 !== 0 &&
    subject2 !== 0 &&
    subject3 !== 0
  ) {
    xepLoai = "Bạn đã đậu";
  } else {
    xepLoai = "Bạn đã rớt";
  }

  document.getElementById("ketQua").innerHTML =
    "Kết quả: " + total + "  ;  " + "Xếp loại: " + xepLoai;
};

// BÀI TẬP 2

document.getElementById("btn2").onclick = function baitap2() {

  // input
  var ten2 = document.getElementById("ten2").value;
  var num2 = document.getElementById("num2").value * 1;

  // output
  var ketQua = "";

  // progress
  if (num2 <= 50) {
    ketQua = num2 * 500;
  } else if (num2 > 50 && num2 <= 100) {
    ketQua = 50 * 500 + (num2 - 50) * 650;
  } else if (num2 > 100 && num2 <= 200) {
    ketQua = 50 * 500 + 50 * 650 + (num2 - 100) * 850;
  } else if (num2 > 200 && num2 <= 350) {
    ketQua = 50 * 500 + 50 * 650 + 100 * 850 + (num2 - 200) * 1100;
  } else {
    ketQua = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (num2 - 350) * 1300;
  }
  ketQua = new Intl.NumberFormat("vn-VN").format(ketQua) + " Đ";
  document.getElementById("ketQua2").innerHTML =
    "Họ tên: " + ten2 + " ; " + "Số tiền: " + ketQua;
};

// BÀI TẬP 3
document.getElementById("btn3").onclick = function () {

  // input
  var name3 = document.getElementById("name3").value;
  var soNguoi = document.getElementById("soNguoi").value * 1;
  var thuNhap = document.getElementById("thuNhap").value - 4e6 - 16e5 * soNguoi;

  // output
  var ketQua3;

  // progress
  if (thuNhap > 0 && thuNhap <= 60e6) {
    ketQua3 = thuNhap * 0.05;
  } else if (thuNhap > 60e6 && thuNhap <= 120e6) {
    ketQua3 = thuNhap * 0.1;
  } else if (thuNhap > 120e6 && thuNhap <= 210e6) {
    ketQua3 = thuNhap * 0.15;
  } else if (thuNhap > 210e6 && thuNhap <= 384e6) {
    ketQua3 = thuNhap * 0.2;
  } else if (thuNhap > 384e6 && thuNhap <= 624e6) {
    ketQua3 = thuNhap * 0.25;
  } else if (thuNhap > 624e6 && thuNhap <= 960e6) {
    ketQua3 = thuNhap * 0.3;
  } else if (thuNhap > 960e6) {
    ketQua3 = thuNhap * 0.35;
  }

  ketQua3 = new Intl.NumberFormat("vn-VN").format(ketQua3) + " Đ";
  document.getElementById("ketQua3").innerHTML =
    "Họ tên: " + name3 + " ; " + "Tiền thuế thu nhập cá nhân: " + ketQua3;
};

// BÀI TẬP 4

document.getElementById("btn4").onclick = function () {

  // input
  var maKH, loaiKH, soKN, soKC, phiXuLy, phiCoBan, phiCaoCap, tongTien;
  maKH = document.getElementById("maKhach").value;
  loaiKH = document.getElementById("loaiKhach").value;
  soKN = document.getElementById("soKetNoi").value;
  soKC = document.getElementById("soKenh").value;

  // progress
  if (loaiKH == "1") {
    phiXuLy = 4.5;
    phiCoBan = 20.5;
    phiCaoCap = 7.5 * soKC;
  } else if (loaiKH == "2") {
    phiXuLy = 15;
    if (soKN <= 10) {
      phiCoBan = 75;
    } else {
      phiCoBan = 75 + (soKN - 10) * 5;
    }
    phiCaoCap = 50 * soKC;
  }

  // output
  var tongTien = phiXuLy + phiCoBan + phiCaoCap;
  tongTien = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(tongTien);
  console.log(maKH, loaiKH, soKN, soKC, phiXuLy, phiCoBan, phiCaoCap, tongTien);

  document.getElementById("ketQua4").innerHTML =
    "Mã khách hàng: " + maKH + " ; " + "Sô tiền: " + tongTien;
};

// progress
function showHide() {
  var loaiKhach = document.getElementById("loaiKhach").value;
  if (loaiKhach == "2") {
    document.getElementById("soKetNoi").style.display = "inline";
  } else {
    document.getElementById("soKetNoi").style.display = "none";
  }
}
