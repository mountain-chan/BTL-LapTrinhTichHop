namespace QLNCKHGV.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("LoaiDayHoc")]
    public partial class LoaiDayHoc
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public LoaiDayHoc()
        {
            HocPhans = new HashSet<HocPhan>();
        }

        public int Id { get; set; }

        [StringLength(200)]
        public string Ten { get; set; }

        public int? GioChuan { get; set; }

        public int? DonViTinh { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<HocPhan> HocPhans { get; set; }
    }
}
