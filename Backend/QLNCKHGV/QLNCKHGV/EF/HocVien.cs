namespace QLNCKHGV.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("HocVien")]
    public partial class HocVien
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public HocVien()
        {
            GV_HuongDan = new HashSet<GV_HuongDan>();
        }

        public int Id { get; set; }

        [StringLength(5)]
        public string Ma { get; set; }

        [StringLength(40)]
        public string Ten { get; set; }

        public bool? GioiTinh { get; set; }

        [Column(TypeName = "date")]
        public DateTime? NgaySinh { get; set; }

        [StringLength(100)]
        public string Diachi { get; set; }

        public int? IdLop { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<GV_HuongDan> GV_HuongDan { get; set; }

        public virtual Lop Lop { get; set; }
    }
}
