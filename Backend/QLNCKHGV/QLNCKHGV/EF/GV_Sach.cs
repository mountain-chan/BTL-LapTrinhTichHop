namespace QLNCKHGV.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class GV_Sach
    {
        public int Id { get; set; }

        public int? IdGiaoVien { get; set; }

        public int? IdSach { get; set; }

        public int? SoTrangDaViet { get; set; }

        public int? SoGio { get; set; }

        public virtual GiaoVien GiaoVien { get; set; }

        public virtual Sach Sach { get; set; }
    }
}
