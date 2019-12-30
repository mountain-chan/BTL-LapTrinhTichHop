namespace QLNCKHGV.EF
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class QuanLyGiaoVienDb : DbContext
    {
        public QuanLyGiaoVienDb()
            : base("name=QuanLyGiaoVienDb")
        {
        }

        public virtual DbSet<BaiBao> BaiBaos { get; set; }
        public virtual DbSet<BoMon> BoMons { get; set; }
        public virtual DbSet<DeTai> DeTais { get; set; }
        public virtual DbSet<GiaoVien> GiaoViens { get; set; }
        public virtual DbSet<GV_BaiBao> GV_BaiBao { get; set; }
        public virtual DbSet<GV_ChamThi> GV_ChamThi { get; set; }
        public virtual DbSet<GV_DeTai> GV_DeTai { get; set; }
        public virtual DbSet<GV_HoiDong> GV_HoiDong { get; set; }
        public virtual DbSet<GV_HuongDan> GV_HuongDan { get; set; }
        public virtual DbSet<GV_LopHocPhan> GV_LopHocPhan { get; set; }
        public virtual DbSet<GV_Sach> GV_Sach { get; set; }
        public virtual DbSet<He> He { get; set; }
        public virtual DbSet<HocPhan> HocPhans { get; set; }
        public virtual DbSet<HocVien> HocViens { get; set; }
        public virtual DbSet<HoiDong> HoiDongs { get; set; }
        public virtual DbSet<LoaiBaiBao> LoaiBaiBaos { get; set; }
        public virtual DbSet<LoaiChamThi> LoaiChamThis { get; set; }
        public virtual DbSet<LoaiDayHoc> LoaiDayHocs { get; set; }
        public virtual DbSet<LoaiDeTai> LoaiDeTais { get; set; }
        public virtual DbSet<LoaiHoiDong> LoaiHoiDongs { get; set; }
        public virtual DbSet<LoaiHuongDan> LoaiHuongDans { get; set; }
        public virtual DbSet<LoaiSach> LoaiSaches { get; set; }
        public virtual DbSet<Lop> Lops { get; set; }
        public virtual DbSet<LopHocPhan> LopHocPhans { get; set; }
        public virtual DbSet<Sach> Saches { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<BaiBao>()
                .Property(e => e.Ma)
                .IsUnicode(false);

            modelBuilder.Entity<BaiBao>()
                .Property(e => e.NamHoc)
                .IsUnicode(false);

            modelBuilder.Entity<BaiBao>()
                .HasMany(e => e.GV_BaiBao)
                .WithOptional(e => e.BaiBao)
                .HasForeignKey(e => e.IdBaiBao);

            modelBuilder.Entity<BoMon>()
                .Property(e => e.Ma)
                .IsUnicode(false);

            modelBuilder.Entity<BoMon>()
                .HasMany(e => e.GiaoViens)
                .WithOptional(e => e.BoMon)
                .HasForeignKey(e => e.IdBoMon);

            modelBuilder.Entity<DeTai>()
                .Property(e => e.Ma)
                .IsUnicode(false);

            modelBuilder.Entity<DeTai>()
                .Property(e => e.NamHoc)
                .IsUnicode(false);

            modelBuilder.Entity<DeTai>()
                .HasMany(e => e.GV_DeTai)
                .WithOptional(e => e.DeTai)
                .HasForeignKey(e => e.IdDeTai);

            modelBuilder.Entity<GiaoVien>()
                .Property(e => e.Ma)
                .IsUnicode(false);

            modelBuilder.Entity<GiaoVien>()
                .Property(e => e.DienThoai)
                .IsUnicode(false);

            modelBuilder.Entity<GiaoVien>()
                .Property(e => e.Email)
                .IsUnicode(false);

            modelBuilder.Entity<GiaoVien>()
                .HasMany(e => e.GV_BaiBao)
                .WithOptional(e => e.GiaoVien)
                .HasForeignKey(e => e.IdGiaoVien);

            modelBuilder.Entity<GiaoVien>()
                .HasMany(e => e.GV_ChamThi)
                .WithOptional(e => e.GiaoVien)
                .HasForeignKey(e => e.IdGiaoVien);

            modelBuilder.Entity<GiaoVien>()
                .HasMany(e => e.GV_DeTai)
                .WithOptional(e => e.GiaoVien)
                .HasForeignKey(e => e.IdGiaoVien);

            modelBuilder.Entity<GiaoVien>()
                .HasMany(e => e.GV_HoiDong)
                .WithOptional(e => e.GiaoVien)
                .HasForeignKey(e => e.IdGiaoVien);

            modelBuilder.Entity<GiaoVien>()
                .HasMany(e => e.GV_HuongDan)
                .WithOptional(e => e.GiaoVien)
                .HasForeignKey(e => e.IdGiaoVien);

            modelBuilder.Entity<GiaoVien>()
                .HasMany(e => e.GV_LopHocPhan)
                .WithOptional(e => e.GiaoVien)
                .HasForeignKey(e => e.IdGiaoVien);

            modelBuilder.Entity<GiaoVien>()
                .HasMany(e => e.GV_Sach)
                .WithOptional(e => e.GiaoVien)
                .HasForeignKey(e => e.IdGiaoVien);

            modelBuilder.Entity<GV_ChamThi>()
                .Property(e => e.NamHoc)
                .IsUnicode(false);

            modelBuilder.Entity<GV_HoiDong>()
                .Property(e => e.NamHoc)
                .IsUnicode(false);

            modelBuilder.Entity<GV_HuongDan>()
                .Property(e => e.NamHoc)
                .IsUnicode(false);

            modelBuilder.Entity<He>()
                .HasMany(e => e.HocPhans)
                .WithOptional(e => e.He)
                .HasForeignKey(e => e.IdDoiTuongHoc);

            modelBuilder.Entity<He>()
                .HasMany(e => e.Lops)
                .WithOptional(e => e.He)
                .HasForeignKey(e => e.IdHe);

            modelBuilder.Entity<HocPhan>()
                .Property(e => e.Ma)
                .IsUnicode(false);

            modelBuilder.Entity<HocPhan>()
                .HasMany(e => e.LopHocPhans)
                .WithOptional(e => e.HocPhan)
                .HasForeignKey(e => e.IdHocPhan);

            modelBuilder.Entity<HocVien>()
                .Property(e => e.Ma)
                .IsUnicode(false);

            modelBuilder.Entity<HocVien>()
                .HasMany(e => e.GV_HuongDan)
                .WithOptional(e => e.HocVien)
                .HasForeignKey(e => e.IdHocVien);

            modelBuilder.Entity<HoiDong>()
                .HasMany(e => e.GV_HoiDong)
                .WithOptional(e => e.HoiDong)
                .HasForeignKey(e => e.IdHoiDong);

            modelBuilder.Entity<LoaiBaiBao>()
                .HasMany(e => e.BaiBaos)
                .WithOptional(e => e.LoaiBaiBao)
                .HasForeignKey(e => e.IdLoaiBaiBao);

            modelBuilder.Entity<LoaiChamThi>()
                .HasMany(e => e.GV_ChamThi)
                .WithOptional(e => e.LoaiChamThi)
                .HasForeignKey(e => e.IdLoaiChamThi);

            modelBuilder.Entity<LoaiDayHoc>()
                .HasMany(e => e.HocPhans)
                .WithOptional(e => e.LoaiDayHoc)
                .HasForeignKey(e => e.IdLoaiDayHoc);

            modelBuilder.Entity<LoaiDeTai>()
                .HasMany(e => e.DeTais)
                .WithOptional(e => e.LoaiDeTai)
                .HasForeignKey(e => e.IdLoaiDeTai);

            modelBuilder.Entity<LoaiHoiDong>()
                .HasMany(e => e.HoiDongs)
                .WithOptional(e => e.LoaiHoiDong)
                .HasForeignKey(e => e.IdLoaiHoiDong);

            modelBuilder.Entity<LoaiHuongDan>()
                .HasMany(e => e.GV_HuongDan)
                .WithOptional(e => e.LoaiHuongDan)
                .HasForeignKey(e => e.IdLoaiHuongDan);

            modelBuilder.Entity<LoaiSach>()
                .HasMany(e => e.Saches)
                .WithOptional(e => e.LoaiSach)
                .HasForeignKey(e => e.IdLoaiSach);

            modelBuilder.Entity<Lop>()
                .Property(e => e.Ma)
                .IsUnicode(false);

            modelBuilder.Entity<Lop>()
                .HasMany(e => e.HocViens)
                .WithOptional(e => e.Lop)
                .HasForeignKey(e => e.IdLop);

            modelBuilder.Entity<LopHocPhan>()
                .Property(e => e.Ma)
                .IsUnicode(false);

            modelBuilder.Entity<LopHocPhan>()
                .Property(e => e.NamHoc)
                .IsUnicode(false);

            modelBuilder.Entity<LopHocPhan>()
                .HasMany(e => e.GV_LopHocPhan)
                .WithOptional(e => e.LopHocPhan)
                .HasForeignKey(e => e.IdLopHocPhan);

            modelBuilder.Entity<Sach>()
                .Property(e => e.Ma)
                .IsUnicode(false);

            modelBuilder.Entity<Sach>()
                .Property(e => e.NamHoc)
                .IsUnicode(false);

            modelBuilder.Entity<Sach>()
                .HasMany(e => e.GV_Sach)
                .WithOptional(e => e.Sach)
                .HasForeignKey(e => e.IdSach);
        }
    }
}
