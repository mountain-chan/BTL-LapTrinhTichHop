namespace QLNCKHGV.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("HocPhan")]
    public partial class HocPhan
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public HocPhan()
        {
            LopHocPhans = new HashSet<LopHocPhan>();
        }

        public int Id { get; set; }

        [StringLength(5)]
        public string Ma { get; set; }

        [StringLength(100)]
        public string Ten { get; set; }

        public int? SoTinChi { get; set; }

        public int? IdDoiTuongHoc { get; set; }

        public int? IdLoaiDayHoc { get; set; }

        public virtual He He { get; set; }

        public virtual LoaiDayHoc LoaiDayHoc { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<LopHocPhan> LopHocPhans { get; set; }
    }
}
