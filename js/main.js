
// BÀI 1: Tính tiền lương nhân viên
/**
 * Khối 1: Input
 * 
 * nhập số ngày làm
 * soNgayLam
 * 
 * Khối 2: Các bước xử lý
 * 
 * B1: Khai báo biến và gán gt
 * B2: Lập công thức
 *     tongLuong = soNgayLam * 100000;
 * B3: Thông báo kết quả
 * 
 *  Khối 3: Output ( Kết quả đạt được)
 * tongLuong

 */

var soNgayLam = 2;

// var tongLuong = 0;
var tongLuong = soNgayLam * 100000;

console.log(
  "BÀI 1: Tổng lương của nhân viên là: ",
  tongLuong.toLocaleString() + " VNĐ"
);

// BÀI 2: Tính giá trị trung bình 5 số
/**
 * Khối 1: Input
 * 
 * nhập 5 số 
 * so1,so2,so3,so4,so5
 * 
 * Khối 2: Các bước xử lý
 * 
 * B1: Khai báo biến và gán gt
 * B2: Lập công thức
 *     Điểm trung bình: tổng 5 số / 5
 * B3: Thông báo kết quả
 * 
 *  Khối 3: Output ( Kết quả đạt được)
 * diemTrungBinh

 */

var so1 = 5;
var so2 = 5;
var so3 = 5;
var so4 = 5;
var so5 = 5;9

var diemTrungBinh = 0;
diemTrungBinh =
  (Number(so1) + Number(so2) + Number(so3) + Number(so4) + Number(so5)) / 5;
console.log("BÀI 2: Điểm trung bình của 5 số là: ", diemTrungBinh);

//BÀI 3: Quy đổi tiền
/**
 * Khối 1: Input
 * 
 * nhập số tiền cần đổi (USD)
 * soTien
 * 
 * Khối 2: Các bước xử lý
 * 
 * B1: Khai báo biến và gán gt
 * B2: Lập công thức
 *     tinhTien = soTien * 23500
 * B3: Thông báo kết quả
 * 
 *  Khối 3: Output ( Kết quả đạt được)
 * tinhTien

 */

var soTien = 2;

var tinhTien = 0;
tinhTien = soTien * 23500;
console.log("BÀI 3: Quy đổi 2$ bằng : ", tinhTien.toLocaleString() + " VNĐ");


// BÀI 4
/**
 * Khối 1: Input
 * 
 * nhập chiều dài, chiều rộng HCN
 * chieuDai, chieuRong
 * 
 * Khối 2: Các bước xử lý
 * 
 * B1: Khai báo biến và gán gt
 * B2: Lập công thức
 *     Chu vi = ( dài + rộng) *2
 *     Diện tích = dài * rộng
 * B3: Thông báo kết quả
 * 
 *  Khối 3: Output ( Kết quả đạt được)
 * chuViHcn
 * dienTichHcn

 */
var chieuDai = 5;
var chieuRong = 4;

var chuViHcn = 0;
var dienTichHcn = 0;
chuViHcn = (Number(chieuDai) + Number(chieuRong)) * 2;
dienTichHcn = chieuDai * chieuRong;
console.log("BÀI 4: Chu vi hình chữ nhật là: ", chuViHcn);
console.log("Diện tích hình chữ nhật là: ", dienTichHcn);

//BÀI 5: Tính tổng 2 ký số, vd: 89 => 8+9 = 17
/**
 * Khối 1: Input
 * 
 * số nguyên dương có 2 chữ số ( 12, 56, 33)
 * ten (hàng chục), unit (hàng đơn vị)
 * 
 * Khối 2: Các bước xử lý
 * 
 * B1: Khai báo biến và gán gt
 * B2: Lập công thức
 *     bóc tách từng số hàng chục, đơn vị
 *      + lấy hàng chục
 *      lấy số đã nhập chia 10 => lấy phần nguyên (89/10 = 8)  //8
 *      + lấy hàng đơn vị
 *      - lấy số đã nhập chia 10 => lấy phần dư (89/10 = 8 dư 9) // 9
 * B3: Thông báo kết quả
 * 
 *  Khối 3: Output ( Kết quả đạt được)
 * tổng 2 chữ số ( 89 => 8+9)

 */
var num = 89;
var ten = 0;
var unit = 0;
var total = 0;


ten = Math.floor(num / 10); 
unit = num % 10;

total =ten + unit;
console.log("BÀI 5: Tổng 2 ký số trong số 89 là: ",total);
