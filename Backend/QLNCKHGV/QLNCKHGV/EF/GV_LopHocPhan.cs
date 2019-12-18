namespace QLNCKHGV.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class GV_LopHocPhan
    {
        public int Id { get; set; }

        public int? IdGiaoVien { get; set; }

        public int? IdLopHocPhan { get; set; }

        public int? SoTiet { get; set; }

        public int? SoGio { get; set; }

        public virtual GiaoVien GiaoVien { get; set; }

        public virtual LopHocPhan LopHocPhan { get; set; }
    }
}
