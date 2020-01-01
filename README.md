# BTL-LapTrinhTichHop
Đề tài: Quản lý nghiên cứu khoa học của giáo viên

## Cấu hình lần đầu

### Back end:
  b1: Mở SQL lên và chạy file QuanLyGiaoVienDB_LTTH.sql
  
  b2: Vào file: Web.config trong đoạn:
  
  ```
<connectionStrings>
    <add name="QuanLyGiaoVienDb" connectionString="data source=MOUNTAIN-CHAN\SQLEXPRESS;initial catalog=QuanLyGiaoVienDB_LTTH;integrated    security=True;MultipleActiveResultSets=True;App=EntityFramework" providerName="System.Data.SqlClient" />
 </connectionStrings>
  ```
  
  Sửa lại: ``` source=MOUNTAIN-CHAN\SQLEXPRESS; ``` thành tên Sqlser của máy mình.
  
  
 ### Front end: 
  Chạy bằng angular 7, trước tiên cần chạy lệnh "npm install" để add các thư viện cần thiết.
  
  
 # Mô tả chức năng
 
 Quản lý thông tin cơ bản và nghiên cứu khoa học của giáo viên:
 
 ## Thông tin cơ bản gồm có: Bộ môn trực thuộc, tên, mã, địa chỉ, ...
 Xem tổng tải nghiên cứu khoa học theo năm học và kì học
 
 Xem danh sách các bài báo, đề tài và sach có tham gia
 
 ## Quản lý nghiên cứu khoa học gồm: 
 
  Bài báo: có chức năng thêm, sửa, xóa và thêm, xóa thành viên tham gia
 
  Nghiên cứu Đề tài: có chức năng thêm, sửa, xóa và thêm, xóa thành viên tham gia
  
  Biên soạn sách: có chức năng thêm, sửa, xóa và thêm, xóa thành viên tham gia
