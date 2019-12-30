namespace QLNCKHGV.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class GV_HuongDan
    {
        public int Id { get; set; }

        public int? IdGiaoVien { get; set; }

        public int? IdLoaiHuongDan { get; set; }

        public int? IdHocVien { get; set; }

        [StringLength(50)]
        public string TenDeTai { get; set; }

        public int? KiHoc { get; set; }

        [StringLength(10)]
        public string NamHoc { get; set; }

        public bool? BaoVeThanhCong { get; set; }

        public int? SoGio { get; set; }

        public virtual GiaoVien GiaoVien { get; set; }

        public virtual HocVien HocVien { get; set; }

        public virtual LoaiHuongDan LoaiHuongDan { get; set; }
    }
}
