namespace QLNCKHGV.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("GiaoVien")]
    public partial class GiaoVien
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public GiaoVien()
        {
            GV_BaiBao = new HashSet<GV_BaiBao>();
            GV_ChamThi = new HashSet<GV_ChamThi>();
            GV_DeTai = new HashSet<GV_DeTai>();
            GV_HoiDong = new HashSet<GV_HoiDong>();
            GV_HuongDan = new HashSet<GV_HuongDan>();
            GV_LopHocPhan = new HashSet<GV_LopHocPhan>();
            GV_Sach = new HashSet<GV_Sach>();
        }

        public int Id { get; set; }

        [StringLength(5)]
        public string Ma { get; set; }

        [StringLength(40)]
        public string Ten { get; set; }

        public bool? GioiTinh { get; set; }

        [Column(TypeName = "date")]
        public DateTime? NgaySinh { get; set; }

        [StringLength(100)]
        public string DiaChi { get; set; }

        [StringLength(12)]
        public string DienThoai { get; set; }

        [StringLength(50)]
        public string Email { get; set; }

        public int? IdBoMon { get; set; }

        public virtual BoMon BoMon { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<GV_BaiBao> GV_BaiBao { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<GV_ChamThi> GV_ChamThi { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<GV_DeTai> GV_DeTai { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<GV_HoiDong> GV_HoiDong { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<GV_HuongDan> GV_HuongDan { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<GV_LopHocPhan> GV_LopHocPhan { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<GV_Sach> GV_Sach { get; set; }
    }
}
