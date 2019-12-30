namespace QLNCKHGV.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class GV_BaiBao
    {
        public int Id { get; set; }

        public int? IdGiaoVien { get; set; }

        public int? IdBaiBao { get; set; }

        public int? SoGio { get; set; }

        public virtual BaiBao BaiBao { get; set; }

        public virtual GiaoVien GiaoVien { get; set; }
    }
}
