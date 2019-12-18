create database QuanLyGiaoVienDB_LTTH
go

use QuanLyGiaoVienDB_LTTH
go

---------------Thông Tin Cá Nhân Và Thông Tin Liên Quan

Create table GiaoVien
(
	Id int Identity Primary key,
	Ma varchar(6),
	Ten Nvarchar(40),
	GioiTinh Bit, 
	NgaySinh Date,
	QueQuan Nvarchar(100),
	DiaChi Nvarchar(100),
	DienThoai varchar(12),
	Email varchar(50)
)
go

Create table Khoa
(
	Id int Identity Primary key,
	Ma varchar(6),
	Ten Nvarchar(50)
)
go

Create table CN_Khoa
(
	Id int Identity Primary key,
	IdChuNghiem int references GiaoVien(Id),
	IdKhoa int references Khoa(Id),
	NgayBatDau Date,
	NgayKetThuc Date
)
go

Create table BoMon
(
	Id int Identity Primary key,
	Ma varchar(6),
	Ten Nvarchar(50),
	IdKhoa int references Khoa(Id)
)
go

Create table CN_BoMon
(
	Id int Identity Primary key,
	IdChuNghiem int references GiaoVien(Id),
	IdBoMon int references BoMon(Id),
	NgayBatDau Date,
	NgayKetThuc Date
)
go

Create table GV_BoMon
(
	Id int Identity Primary key,
	IdGiaoVien int references GiaoVien(Id),
	IdBoMon int references BoMon(Id),
	NgayChuyenDen Date,
	NgayChuyenDi Date
)
go

---------------------Thong Tin Hoc Vien
Create table He
(
	Id int Identity Primary key,
	Ten Nvarchar(50)
)
go
Create table Lop
(
	Id int Identity Primary key,
	Ma varchar(6),
	Te Nvarchar(50),
	SiSo int,
	IdHe int references He(Id)
)
go
Create table HocVien
(
	Id int Identity Primary key,
	Ma varchar(6),
	Ten Nvarchar(40),
	GioiTinh Bit,
	NgaySinh Date,
	Diachi Nvarchar(100),
	IdLop int references Lop(Id)
)
go
-----------------------Tham Gia Hoi Dong

Create table LoaiHoiDong
(
	Id int Identity Primary key,
	Ten Nvarchar(100)
)
go
Create table HoiDong
(
	Id int Identity Primary key,
	Ten Nvarchar(50),
	GhiChu Ntext,
	IdLoaiHoiDong int references LoaiHoiDong(Id)
)
go
Create table GV_HoiDong
(
	Id int Identity Primary key,
	IdGiaoVien int references GiaoVien(Id),
	IdHoiDong int references HOIDONG(Id),
	VaiTro Nvarchar(20),
	NamHoc int,
	KiHoc int,
	Solan int,
	SoGio int
)
go

-----------------------------------------Huong Dan

Create table LoaiHuongDan
(
	Id int Identity Primary key,
	Ten Nvarchar(200),
	DonViTinh int check (DonViTinh <> 0),
	GioChuan int
)
go

Create table GV_HuongDan
(
	Id int Identity Primary key,
	IdGiaoVien int references GiaoVien(Id),
	IdLoaiHuongDan int references LoaiHuongDan(Id),
	IdHocVien int references HocVien(Id),
	TenDeTai Nvarchar(50),
	NgayBatDau Date,
	NgayKetThuc Date,
	BaoVeThanhCong Bit, -- 1 là bảo vệ thành công, 0 là đang hướng dẫn hoặc bảo vệ thất bại
	SoGio int default 0
)
go
---------------------------------Giang day

Create table LoaiDayHoc
(
	Id int Identity Primary key,
	Ten Nvarchar(200),
	GioChuan int,
	DonViTinh int check (DonViTinh <> 0)
)
go
Create table HocPhan
(
	Id int Identity Primary key,
	Ma varchar(6),
	Ten Nvarchar(100),
	SoTinChi int,
	IdDoiTuongHoc int references He(Id),
	IdLoaiDayHoc int references LoaiDayHoc(Id)
)
go 

Create table LopHocPhan
(
	Id int Identity Primary key,
	Ma varchar(6),
	SiSo int,
	KiHoc int,
	NamHoc int,
	IdHocPhan int references HocPhan(Id)
)
go
Create table GV_LopHocPhan
(
	Id int Identity Primary key,
	IdGiaoVien int references GiaoVien(Id),
	IdLopHocPhan int references LopHocPhan(Id),
	SoTiet int,
	SoGio int default 0
)
go
--------------------------------------Khao Thi

Create table LoaiChamThi
(
	Id int Identity Primary key,
	Ten Nvarchar(200),
	DonViTinh int check (DonViTinh <> 0),
	GioChuan int
)
go

Create table GV_ChamThi
(
	Id int Identity Primary key,
	IdGiaoVien int references GiaoVien(Id),
	IdLoaiChamThi int references LoaiChamThi(Id),
	SoLuong int,
	NamHoc int,
	KiHoc int,
	SoGio int default 0
)
go

----------------------------------------NGHIÊN CỨU KHOA HỌC

Create table LoaiSach
(
	Id int Identity Primary key,
	Ten Nvarchar(200),
	DonViTinh int check (DonViTinh <> 0),
	GioChuan int,
	GhiChu Ntext
)
go
Create table Sach
(
	Id int Identity Primary key,
	Ma varchar(6),
	Ten Nvarchar(100),
	NoiXuatBan Nvarchar(100),
	NgayXuatBan Date,
	SoTinChi int default 0,
	SoThanhVien int check (SoThanhVien <> 0),
	IdLoaiSach int references LoaiSach(Id)
)
go

Create table GV_BienSoanSach
(
	Id int Identity Primary key,
	IdGiaoVien int references GiaoVien(Id),
	IdSach int references Sach(Id),
	LaChuBien int check (0 <= LaChuBien and LaChuBien <= 1) default 0, -- 1 là cán bộ chủ biên
	SoTrangDaViet int default 0,
	SoGio int default 0
)
go

Create table LoaiBaiBao
(
	Id int Identity Primary key,
	Ten Nvarchar(300),
	DonViTinh int check (DonViTinh <> 0),
	GioChuan int,
	GhiChu Ntext
)
go
Create table BaiBao
(
	Id int Identity Primary key,
	Ma varchar(6),
	Ten Nvarchar(100),
	TenTapChiCongBo Nvarchar(150),
	NgayCongBo Date,
	SoThanhVien int check (SoThanhVien <> 0) not null,
	IdLoaiBaiBao int references LoaiBaiBao(Id),
)
go
Create table GV_BaiBao
(
	Id int Identity Primary key,
	IdGiaoVien int references GiaoVien(Id),
	IdBaiBao int references BaiBao(Id),
	VaiTro Nvarchar(50),
	SoGio int default 0
)
go

Create table LoaiDeTai
(
	Id int Identity Primary key,
	Ten Nvarchar(200),
	DonViTinh int check (DonViTinh <> 0),
	GioChuan int,
	GhiChu Ntext
)
go
Create table DeTai
(
	Id int Identity Primary key,
	Ma varchar(6),
	Ten Nvarchar(200),
	NgayBatDau Date,
	NgayKetThuc Date,
	CoQuanQuanLy Nvarchar(200),
	TinhTrang bit, -- 1 đã nghiệm thu, 0 chưa nghiệm thu
	SoThanhVien int check (SoThanhVien <> 0) not null,
	IdLoaiDeTai int references LoaiDeTai(Id)
)
go
Create table GV_DeTaiNghienCuu
(
	Id int Identity Primary key,
	IdGiaoVien int references GiaoVien(Id),
	IdDeTai int references DeTai(Id),
	LaChuTri int check (0 <= LaChuTri and LaChuTri <= 1) default 0, -- 1 là cán bộ chủ trì
	SoGio int default 0
)
go

--======================================== Create trigger ==============


--Trigger insert for table GV_ChamThi
create trigger Insert_GV_ChamThi on GV_ChamThi for insert
as
begin
	declare @Id int, @IdLoaiChamThi int, @SoGio int
	select @Id=Id, @IdLoaiChamThi=IdLoaiChamThi from inserted

	select @SoGio=GioChuan*SoLuong/DonViTinh from LoaiChamThi join GV_ChamThi 
	on LoaiChamThi.Id=GV_ChamThi.IdLoaiChamThi where LoaiChamThi.Id=@IdLoaiChamThi
	update GV_ChamThi set SoGio=@SoGio  where Id=@Id 
end
go

--Trigger update for table LoaiChamThi
create trigger update_LoaiChamThi on LoaiChamThi for update
as
begin
	declare @Id int, @GioChuan int, @DonViTinh int
	select @Id=Id, @GioChuan=GioChuan, @DonViTinh=DonViTinh from inserted
	update GV_ChamThi set SoGio=@GioChuan*SoLuong/@DonViTinh  where IdLoaiChamThi=@Id 
end
go


--Trigger insert for table GV_HuongDan
create trigger Insert_GV_HuongDan on GV_HuongDan for insert
as
begin
	declare @Id int, @IdLoaiHuongDan int, @SoGio int
	select @Id=Id, @IdLoaiHuongDan=IdLoaiHuongDan from inserted

	select @SoGio=GioChuan/DonViTinh from LoaiHuongDan join GV_HuongDan 
	on LoaiHuongDan.Id=GV_HuongDan.IdLoaiHuongDan where LoaiHuongDan.Id=@IdLoaiHuongDan
	update GV_HuongDan set SoGio=@SoGio  where Id=@Id
end
go

--Trigger update for table LoaiHuongDan
create trigger update_LoaiHuongDan on LoaiHuongDan for update
as
begin
	declare @Id int, @GioChuan int, @DonViTinh int
	select @Id=Id, @GioChuan=GioChuan, @DonViTinh=DonViTinh from inserted
	update GV_HuongDan set SoGio=@GioChuan/@DonViTinh  where IdLoaiHuongDan=@Id 
end
go

--Trigger insert for table GV_LopHocPhan
create trigger Insert_GV_LopHocPhan on GV_LopHocPhan for insert
as
begin
	declare @Id int, @IdLopHocPhan int, @SoGio int
	select @Id=Id, @IdLopHocPhan=IdLopHocPhan from inserted

	select @SoGio=GioChuan*SoTiet/DonViTinh from LoaiDayHoc join HocPhan 
	on LoaiDayHoc.Id=HocPhan.IdLoaiDayHoc join LopHocPhan on LopHocPhan.IdHocPhan=HocPhan.Id
	join GV_LopHocPhan on GV_LopHocPhan.IdLopHocPhan=LopHocPhan.Id where LopHocPhan.Id=@IdLopHocPhan
	update GV_LopHocPhan set SoGio=@SoGio  where Id=@Id
end
go

--Trigger update for table LoaiDayHoc
create trigger update_LoaiDayHoc on LoaiDayHoc for update
as
begin
	declare @Id int, @IdLopHocPhan int, @GioChuan int, @DonViTinh int
	select @Id=Id, @GioChuan=GioChuan, @DonViTinh=DonViTinh from inserted

	select @IdLopHocPhan=LopHocPhan.Id from HocPhan join LopHocPhan 
	on LopHocPhan.IdHocPhan=HocPhan.Id where HocPhan.IdLoaiDayHoc=@Id
	update GV_LopHocPhan set SoGio=@GioChuan*SoTiet/@DonViTinh  where IdLopHocPhan=@IdLopHocPhan 
end
go


--Trigger insert for table GV_DeTaiNghienCuu
create trigger Insert_GV_DeTaiNghienCuu on GV_DeTaiNghienCuu for insert
as
begin
	declare @Id int, @IdDeTai int, @SoGio int
	select @Id=Id, @IdDeTai=IdDeTai from inserted

	select @SoGio=(LaChuTri*GioChuan/5 + GioChuan*4/(5*SoThanhVien)) from LoaiDeTai 
	join DeTai on LoaiDeTai.Id=DeTai.IdLoaiDeTai join GV_DeTaiNghienCuu 
	on GV_DeTaiNghienCuu.IdDeTai = DeTai.Id where DeTai.Id=@IdDeTai
	update GV_DeTaiNghienCuu set SoGio=@SoGio  where Id=@Id
end
go

--Trigger update for table LoaiDeTai
create trigger update_LoaiDeTai on LoaiDeTai for update
as
begin
	declare @Id int, @IdDeTai int, @SoThanhVien int, @GioChuan int, @DonViTinh  int
	select @Id=Id, @GioChuan=GioChuan, @DonViTinh=DonViTinh from inserted

	select @IdDeTai=DeTai.Id, @SoThanhVien=SoThanhVien from LoaiDeTai 
	join DeTai on LoaiDeTai.Id=DeTai.IdLoaiDeTai where LoaiDeTai.Id=@Id
	update GV_DeTaiNghienCuu set SoGio=(LaChuTri*@GioChuan/5 + @GioChuan*4/(5*@SoThanhVien)) where IdDeTai=@IdDeTai 
end
go

--Trigger update for table DeTai
create trigger update_DeTai on DeTai for update
as
begin
	declare @Id int, @SoThanhVien int, @GioChuan int, @DonViTinh  int
	select @Id=Id, @SoThanhVien=SoThanhVien from inserted

	select @GioChuan=GioChuan, @DonViTinh=DonViTinh from LoaiDeTai 
	join DeTai on LoaiDeTai.Id=DeTai.IdLoaiDeTai where DeTai.Id=@Id
	update GV_DeTaiNghienCuu set SoGio=(LaChuTri*@GioChuan/5 + @GioChuan*4/(5*@SoThanhVien)) where IdDeTai=@Id 
end
go



--Trigger insert for table GV_BaiBao
create trigger Insert_GV_BaiBao on GV_BaiBao for insert
as
begin
	declare @Id int, @IdBaiBao int, @SoGio int
	select @Id=Id, @IdBaiBao=IdBaiBao from inserted

	select @SoGio=GioChuan/SoThanhVien from LoaiBaiBao join BaiBao 
	on LoaiBaiBao.Id=BaiBao.IdLoaiBaiBao where BaiBao.Id=@IdBaiBao
	update GV_BaiBao set SoGio=@SoGio  where Id=@Id
end
go

--Trigger update for table LoaiBaiBao
create trigger update_LoaiBaiBao on LoaiBaiBao for update
as
begin
	declare @Id int, @IdBaiBao int, @SoThanhVien int, @GioChuan int, @DonViTinh  int
	select @Id=Id, @GioChuan=GioChuan, @DonViTinh=DonViTinh from inserted

	select @IdBaiBao=BaiBao.Id, @SoThanhVien=SoThanhVien from LoaiBaiBao 
	join BaiBao on LoaiBaiBao.Id=BaiBao.IdLoaiBaiBao where LoaiBaiBao.Id=@Id
	update GV_BaiBao set SoGio=@GioChuan/@SoThanhVien where IdBaiBao=@IdBaiBao 
end
go

--Trigger update for table BaiBao
create trigger update_BaiBao on BaiBao for update
as
begin
	declare @Id int, @SoThanhVien int, @GioChuan int, @DonViTinh  int
	select @Id=Id, @SoThanhVien=SoThanhVien from inserted

	select @GioChuan=GioChuan, @DonViTinh=DonViTinh from LoaiBaiBao 
	join BaiBao on LoaiBaiBao.Id=BaiBao.IdLoaiBaiBao where BaiBao.Id=@Id
	update GV_BaiBao set SoGio=@GioChuan/@SoThanhVien where IdBaiBao=@Id 
end
go


--Trigger insert for table GV_BienSoanSach
create trigger Insert_GV_BienSoanSach on GV_BienSoanSach for insert
as
begin
	declare @Id int, @IdSach int, @IdLoaiSach int, @GioChuan int, @DonViTinh int, @SoTinChi int, @SoThanhVien int
	select @Id=Id, @IdSach=IdSach from inserted

	select @IdLoaiSach=LoaiSach.Id, @GioChuan=GioChuan, @DonViTinh=DonViTinh, @SoTinChi=SoTinChi, @SoThanhVien=SoThanhVien 
	from LoaiSach join Sach on LoaiSach.Id=Sach.IdLoaiSach  where Sach.Id=@IdSach

	if(@IdLoaiSach = 1)
		update GV_BienSoanSach set SoGio=@GioChuan*SoTrangDaViet/@DonViTinh  where Id=@Id
	else
		update GV_BienSoanSach set SoGio=(LaChuBien*@GioChuan*@SoTinChi/5+@GioChuan*@SoTinChi*4/(5*@SoThanhVien)) where Id=@Id
end
go

--Trigger update for table LoaiSach
create trigger update_LoaiSach on LoaiSach for update
as
begin
	declare @Id int, @IdSach int, @SoThanhVien int, @GioChuan int, @DonViTinh  int,  @SoTinChi int
	select @Id=Id, @GioChuan=GioChuan, @DonViTinh=DonViTinh from inserted

	select @IdSach=Sach.Id, @SoThanhVien=SoThanhVien, @SoTinChi=SoTinChi from LoaiSach 
	join Sach on LoaiSach.Id=Sach.IdLoaiSach where LoaiSach.Id=@Id

	if(@Id = 1)
		update GV_BienSoanSach set SoGio=@GioChuan*SoTrangDaViet/@DonViTinh  where IdSach=@IdSach
	else
		update GV_BienSoanSach set SoGio=(LaChuBien*@GioChuan*@SoTinChi/5+@GioChuan*@SoTinChi*4/(5*@SoThanhVien)) where IdSach=@IdSach
end
go

--Trigger update for table Sach
create trigger update_Sach on Sach for update
as
begin
	declare @Id int, @IdLoaiSach int, @SoThanhVien int, @GioChuan int, @DonViTinh  int,  @SoTinChi int
	select @Id=Id, @SoThanhVien=SoThanhVien, @SoTinChi=SoTinChi from inserted

	select @IdLoaiSach=LoaiSach.Id, @GioChuan=GioChuan, @DonViTinh=DonViTinh from LoaiSach 
	join Sach on LoaiSach.Id=Sach.IdLoaiSach where Sach.Id=@Id

	if(@IdLoaiSach = 1)
		update GV_BienSoanSach set SoGio=@GioChuan*SoTrangDaViet/@DonViTinh  where IdSach=@Id
	else
		update GV_BienSoanSach set SoGio=(LaChuBien*@GioChuan*@SoTinChi/5+@GioChuan*@SoTinChi*4/(5*@SoThanhVien)) where IdSach=@Id
end
go

--======================================== Add some data for test ==============


INSERT [dbo].[LoaiSach] ([Ten], [DonViTinh], [GioChuan], [GhiChu]) VALUES (N'Sách chuyên khảo', 1, 3, N'Mỗi cán bộ căn cứ vào số trang để tính giờ chuẩn')
INSERT [dbo].[LoaiSach] ([Ten], [DonViTinh], [GioChuan], [GhiChu]) VALUES (N'Giáo trình mới', 1, 150, N'Nếu sách do tập thể thực hiện thì cán bộ chủ trì đc hưởng 1/5 số giờ chuẩn, còn lại 4/5 số giờ chuẩn được chia đều cho tất cả những người tham gia cả bán bộ chủ trì')
INSERT [dbo].[LoaiSach] ([Ten], [DonViTinh], [GioChuan], [GhiChu]) VALUES (N'Giáo trình tái bản', 1, 120, N'Nếu sách do tập thể thực hiện thì cán bộ chủ trì đc hưởng 1/5 số giờ chuẩn, còn lại 4/5 số giờ chuẩn được chia đều cho tất cả những người tham gia cả bán bộ chủ trì')
INSERT [dbo].[LoaiSach] ([Ten], [DonViTinh], [GioChuan], [GhiChu]) VALUES (N'Tài liệu biên dịch, sách tham khảo', 1, 100, N'Nếu sách do tập thể thực hiện thì cán bộ chủ trì đc hưởng 1/5 số giờ chuẩn, còn lại 4/5 số giờ chuẩn được chia đều cho tất cả những người tham gia cả bán bộ chủ trì')
INSERT [dbo].[LoaiSach] ([Ten], [DonViTinh], [GioChuan], [GhiChu]) VALUES (N'Sách hướng dẫn, bài giảng với học phần chưa có giáo trình', 1, 75, N'Nếu sách do tập thể thực hiện thì cán bộ chủ trì đc hưởng 1/5 số giờ chuẩn, còn lại 4/5 số giờ chuẩn được chia đều cho tất cả những người tham gia cả bán bộ chủ trì')

INSERT [dbo].[LoaiBaiBao] ( [Ten], [DonViTinh], [GioChuan], [GhiChu]) VALUES (N'Đăng trong các kỳ hội nghị khoa học trong nước', 1, 100, N'Số giờ chuẩn chia đều cho các tác giả')
INSERT [dbo].[LoaiBaiBao] ( [Ten], [DonViTinh], [GioChuan], [GhiChu]) VALUES (N'Đăng trong tạp chí Khoa học trong nước, có chỉ số ISSN', 1, 150, N'Số giờ chuẩn chia đều cho các tác giả')
INSERT [dbo].[LoaiBaiBao] ( [Ten], [DonViTinh], [GioChuan], [GhiChu]) VALUES (N'Đăng trong các kỳ Hội nghị Khoa học Quốc tế', 1, 150, N'Số giờ chuẩn chia đều cho các tác giả')
INSERT [dbo].[LoaiBaiBao] ( [Ten], [DonViTinh], [GioChuan], [GhiChu]) VALUES (N'Đăng trong tạp chí Khoa học Quốc tế có chỉ số ISI', 1, 200, N'Số giờ chuẩn chia đều cho các tác giả')

INSERT [dbo].[LoaiDeTai] ([Ten], [DonViTinh], [GioChuan], [GhiChu]) VALUES (N'Đề tài, dự án nghiên cứu cấp nhà nước', 1, 400, N'Nếu công trình do tập thể thực hiện thì cán bộ chủ trì hưởng 1/5 số giờ, 4/5 giờ chuẩn còn lại được chia đều cho tất cả các thành viên kể (kể cả cán bộ chủ trì)')
INSERT [dbo].[LoaiDeTai] ([Ten], [DonViTinh], [GioChuan], [GhiChu]) VALUES (N'Đề tài, dự án nghiên cứu cấp học viện', 1, 200, N'Nếu công trình do tập thể thực hiện thì cán bộ chủ trì hưởng 1/5 số giờ, 4/5 giờ chuẩn còn lại được chia đều cho tất cả các thành viên kể (kể cả cán bộ chủ trì)')

INSERT [dbo].[Khoa]  VALUES ('K00001', N'Khoa Công Nghệ Thông Tin')
INSERT [dbo].[Khoa]  VALUES ('K00002', N'Khoa Cơ Khí')
go
INSERT [dbo].[BoMon] VALUES ('BM0001', N'Bộ Môn An Toàn Thông Tin', 1)
INSERT [dbo].[BoMon] VALUES ('BM0002', N'Bộ Môn Hệ Thống Thông Tin', 1)
INSERT [dbo].[BoMon] VALUES ('BM0003', N'Bộ Môn Kỹ Thuật Phần Mềm', 1)
INSERT [dbo].[BoMon] VALUES ('BM0004', N'Bộ Môn Cơ Học Máy', 2)
INSERT [dbo].[BoMon] VALUES ('BM0005', N'Bộ Môn Chế Tạo Máy', 2)
go
INSERT [dbo].[GiaoVien]  VALUES (N'GV0001', N'Lữ Thành K', 1, CAST(N'1975-05-10' AS Date), N'Hải Phòng', N'Xuân Mai Huyện Chươnng Mỹ Thành Phố Hà Nôi', N'0987389277', N'thanhlong@gmail.com')
INSERT [dbo].[GiaoVien]  VALUES (N'GV0002', N'Hà Văn A', 1, CAST(N'1976-03-01' AS Date), N'Ninh Bình', N'236 Hoàng Quốc Việt', N'123456678   ', N'gv02@gmail.com')
INSERT [dbo].[GiaoVien]  VALUES (N'GV0003', N'Chu Thị H', 0, CAST(N'1977-04-01' AS Date), N'Hà Nội', N'210 Cầu Giấy', N'123443221   ', N'gv03@gmail.com')
INSERT [dbo].[GiaoVien]  VALUES (N'GV0004', N'Tạ Văn N', 1, CAST(N'1975-05-01' AS Date), N'Bắc Giang', N'236 Hoàng Quốc Việt', N'123456789   ', N'gv04@gmail.com')
INSERT [dbo].[GiaoVien]  VALUES (N'GV0005', N'Nguyễn Văn B', 1, CAST(N'1980-02-01' AS Date), N'Hà Nội', N'117 Trần Cung', N'123456789   ', N'gv05@gmail.com')
INSERT [dbo].[GiaoVien]  VALUES (N'GV0006', N'Nguyễn Văn C', 1, CAST(N'1980-04-01' AS Date), N'Hà Nội', N'117 Trần Cung', N'123456789   ', N'gv06@gmail.com')
INSERT [dbo].[GiaoVien]  VALUES (N'GV0007', N'Chu Văn A', 1, CAST(N'1980-06-01' AS Date), N'Hà Nội', N'117 Trần Cung', N'123456789   ', N'gv07@gmail.com')
INSERT [dbo].[GiaoVien]  VALUES (N'GV0008', N'Nguyễn Văn C', 1, CAST(N'1980-01-05' AS Date), N'Hà Nội', N'117 Trần Cung', N'123456789   ', N'gv08@gmail.com')
INSERT [dbo].[GiaoVien]  VALUES (N'GV0009', N'Nguyễn Thị H', 0, CAST(N'1980-01-30' AS Date), N'Hà Nội', N'117 Trần Cung', N'123456789   ', N'gv09@gmail.com')
INSERT [dbo].[GiaoVien]  VALUES (N'GV0010', N'Nguyễn Thị K', 0, CAST(N'1980-01-24' AS Date), N'Hà Nội', N'117 Trần Cung', N'123456789   ', N'gv10@gmail.com')
INSERT [dbo].[GiaoVien]  VALUES (N'GV0011', N'Nguyễn Thị E', 0, CAST(N'1980-01-09' AS Date), N'Hà Nội', N'117 Trần Cung', N'123456789   ', N'gv10@gmail.com')
go

INSERT [dbo].[Sach] ([Ma], [Ten], [NoiXuatBan], [NgayXuatBan], [SoTinChi], [SoThanhVien], [IdLoaiSach]) VALUES (N'S001', N'Sách 1', N'Học viện Kỹ Thuật Quân Sự', CAST(N'2018-01-01' AS Date), 0, 3, 1)
INSERT [dbo].[Sach] ([Ma], [Ten], [NoiXuatBan], [NgayXuatBan], [SoTinChi], [SoThanhVien], [IdLoaiSach]) VALUES (N'S002', N'Sách 2', N'Học viện Kỹ Thuật Quân Sự', CAST(N'2018-01-01' AS Date), 3, 3, 2)
INSERT [dbo].[Sach] ([Ma], [Ten], [NoiXuatBan], [NgayXuatBan], [SoTinChi], [SoThanhVien], [IdLoaiSach]) VALUES (N'S003', N'Sách 3', N'Học viện Kỹ Thuật Quân Sự', CAST(N'2018-01-01' AS Date), 0, 4, 1)
INSERT [dbo].[Sach] ([Ma], [Ten], [NoiXuatBan], [NgayXuatBan], [SoTinChi], [SoThanhVien], [IdLoaiSach]) VALUES (N'S004', N'Sách 4', N'Học viện Kỹ Thuật Quân Sự', CAST(N'2018-01-01' AS Date), 0, 5, 1)
INSERT [dbo].[Sach] ([Ma], [Ten], [NoiXuatBan], [NgayXuatBan], [SoTinChi], [SoThanhVien], [IdLoaiSach]) VALUES (N'S005', N'Sách 5', N'Học viện Kỹ Thuật Quân Sự', CAST(N'2018-01-01' AS Date), 0, 2, 1)
INSERT [dbo].[Sach] ([Ma], [Ten], [NoiXuatBan], [NgayXuatBan], [SoTinChi], [SoThanhVien], [IdLoaiSach]) VALUES (N'S006', N'Sách 6', N'Học viện Kỹ Thuật Quân Sự', CAST(N'2018-01-01' AS Date), 4, 4, 3)

INSERT [dbo].[DeTai] ([Ten], [NgayBatDau], [NgayKetThuc], [CoQuanQuanLy], [TinhTrang], [SoThanhVien], [IdLoaiDeTai]) VALUES (N'Nghiên cứu abc', CAST(N'2017-01-01' AS Date), CAST(N'2018-01-01' AS Date), N'Bộ quốc phòng', 1, 4, 1)
INSERT [dbo].[DeTai] ([Ten], [NgayBatDau], [NgayKetThuc], [CoQuanQuanLy], [TinhTrang], [SoThanhVien], [IdLoaiDeTai]) VALUES (N'Nghiên cứu abc', CAST(N'2018-01-01' AS Date), CAST(N'2019-01-01' AS Date), N'Bộ quốc phòng', 1, 3, 1)
INSERT [dbo].[DeTai] ([Ten], [NgayBatDau], [NgayKetThuc], [CoQuanQuanLy], [TinhTrang], [SoThanhVien], [IdLoaiDeTai]) VALUES (N'Nghiên cứu abc', CAST(N'2017-01-01' AS Date), CAST(N'2018-01-01' AS Date), N'Học viện kỹ thuật quân sự', 1, 5, 2)

INSERT [dbo].[BaiBao] ([Ten], [TenTapChiCongBo], [NgayCongBo], [SoThanhVien], [IdLoaiBaiBao]) VALUES (N'Báo T', N'Tạp chí kỹ thuật', CAST(N'2018-03-27' AS Date), 4,1)
INSERT [dbo].[BaiBao] ([Ten], [TenTapChiCongBo], [NgayCongBo], [SoThanhVien], [IdLoaiBaiBao]) VALUES (N'Báo bac', N'Ứng dụng mới', CAST(N'2019-02-01' AS Date), 3, 1)
INSERT [dbo].[BaiBao] ([Ten], [TenTapChiCongBo], [NgayCongBo], [SoThanhVien], [IdLoaiBaiBao]) VALUES (N'Báo VN', N'Kỹ thuật lập trình hiệu quả', CAST(N'2019-01-01' AS Date),5, 2)
INSERT [dbo].[BaiBao] ([Ten], [TenTapChiCongBo], [NgayCongBo], [SoThanhVien], [IdLoaiBaiBao]) VALUES (N'Báo KHCN', N'Bài báo số 2', CAST(N'2018-05-05' AS Date), 1, 2)
INSERT [dbo].[BaiBao] ([Ten], [TenTapChiCongBo], [NgayCongBo], [SoThanhVien], [IdLoaiBaiBao]) VALUES (N'Báo KHCN', N'Bài báo abc', CAST(N'2018-03-03' AS Date), 3, 3)
INSERT [dbo].[BaiBao] ([Ten], [TenTapChiCongBo], [NgayCongBo], [SoThanhVien], [IdLoaiBaiBao]) VALUES (N'Báo abc', N'Bài báo xyz', CAST(N'2018-04-04' AS Date), 1, 3)