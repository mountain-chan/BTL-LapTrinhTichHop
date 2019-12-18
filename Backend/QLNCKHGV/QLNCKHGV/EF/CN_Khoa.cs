namespace QLNCKHGV.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class CN_Khoa
    {
        public int Id { get; set; }

        public int? IdChuNghiem { get; set; }

        public int? IdKhoa { get; set; }

        [Column(TypeName = "date")]
        public DateTime? NgayBatDau { get; set; }

        [Column(TypeName = "date")]
        public DateTime? NgayKetThuc { get; set; }

        public virtual GiaoVien GiaoVien { get; set; }

        public virtual Khoa Khoa { get; set; }
    }
}
