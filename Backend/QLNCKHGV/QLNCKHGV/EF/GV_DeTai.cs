namespace QLNCKHGV.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class GV_DeTai
    {
        public int Id { get; set; }

        public int? IdGiaoVien { get; set; }

        public int? IdDeTai { get; set; }

        public int? LaChuTri { get; set; }

        public int? SoGio { get; set; }

        public virtual DeTai DeTai { get; set; }

        public virtual GiaoVien GiaoVien { get; set; }
    }
}
