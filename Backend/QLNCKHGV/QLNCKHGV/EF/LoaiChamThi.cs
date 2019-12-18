namespace QLNCKHGV.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("LoaiChamThi")]
    public partial class LoaiChamThi
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public LoaiChamThi()
        {
            GV_ChamThi = new HashSet<GV_ChamThi>();
        }

        public int Id { get; set; }

        [StringLength(200)]
        public string Ten { get; set; }

        public int? DonViTinh { get; set; }

        public int? GioChuan { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<GV_ChamThi> GV_ChamThi { get; set; }
    }
}
