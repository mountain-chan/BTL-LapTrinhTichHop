namespace QLNCKHGV.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DeTai")]
    public partial class DeTai
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public DeTai()
        {
            GV_DeTai = new HashSet<GV_DeTai>();
        }

        public int Id { get; set; }

        [StringLength(5)]
        public string Ma { get; set; }

        [StringLength(200)]
        public string Ten { get; set; }

        public int? KiHoc { get; set; }

        [StringLength(10)]
        public string NamHoc { get; set; }

        [StringLength(200)]
        public string CoQuanQuanLy { get; set; }

        public int? SoThanhVien { get; set; }

        public int? IdLoaiDeTai { get; set; }

        public virtual LoaiDeTai LoaiDeTai { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<GV_DeTai> GV_DeTai { get; set; }
    }
}
