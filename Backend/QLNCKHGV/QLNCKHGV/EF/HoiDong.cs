namespace QLNCKHGV.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("HoiDong")]
    public partial class HoiDong
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public HoiDong()
        {
            GV_HoiDong = new HashSet<GV_HoiDong>();
        }

        public int Id { get; set; }

        [StringLength(50)]
        public string Ten { get; set; }

        [Column(TypeName = "ntext")]
        public string GhiChu { get; set; }

        public int? IdLoaiHoiDong { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<GV_HoiDong> GV_HoiDong { get; set; }

        public virtual LoaiHoiDong LoaiHoiDong { get; set; }
    }
}
