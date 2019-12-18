namespace QLNCKHGV.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("LoaiHuongDan")]
    public partial class LoaiHuongDan
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public LoaiHuongDan()
        {
            GV_HuongDan = new HashSet<GV_HuongDan>();
        }

        public int Id { get; set; }

        [StringLength(200)]
        public string Ten { get; set; }

        public int? DonViTinh { get; set; }

        public int? GioChuan { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<GV_HuongDan> GV_HuongDan { get; set; }
    }
}
