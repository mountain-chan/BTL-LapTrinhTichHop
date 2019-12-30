namespace QLNCKHGV.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("LopHocPhan")]
    public partial class LopHocPhan
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public LopHocPhan()
        {
            GV_LopHocPhan = new HashSet<GV_LopHocPhan>();
        }

        public int Id { get; set; }

        [StringLength(5)]
        public string Ma { get; set; }

        public int? SiSo { get; set; }

        public int? KiHoc { get; set; }

        [StringLength(10)]
        public string NamHoc { get; set; }

        public int? IdHocPhan { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<GV_LopHocPhan> GV_LopHocPhan { get; set; }

        public virtual HocPhan HocPhan { get; set; }
    }
}
