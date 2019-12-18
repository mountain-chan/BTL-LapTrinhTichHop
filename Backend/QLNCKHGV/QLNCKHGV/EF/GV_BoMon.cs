namespace QLNCKHGV.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class GV_BoMon
    {
        public int Id { get; set; }

        public int? IdGiaoVien { get; set; }

        public int? IdBoMon { get; set; }

        public int? KiHoc { get; set; }

        public int? NamHoc { get; set; }

        public virtual BoMon BoMon { get; set; }

        public virtual GiaoVien GiaoVien { get; set; }
    }
}
