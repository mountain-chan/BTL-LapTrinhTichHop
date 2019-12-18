namespace QLNCKHGV.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("LoaiDeTai")]
    public partial class LoaiDeTai
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public LoaiDeTai()
        {
            DeTais = new HashSet<DeTai>();
        }

        public int Id { get; set; }

        [StringLength(200)]
        public string Ten { get; set; }

        public int? DonViTinh { get; set; }

        public int? GioChuan { get; set; }

        [Column(TypeName = "ntext")]
        public string GhiChu { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<DeTai> DeTais { get; set; }
    }
}
