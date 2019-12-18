namespace QLNCKHGV.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Sach")]
    public partial class Sach
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Sach()
        {
            GV_BienSoanSach = new HashSet<GV_BienSoanSach>();
        }

        public int Id { get; set; }

        [StringLength(6)]
        public string Ma { get; set; }

        [StringLength(100)]
        public string Ten { get; set; }

        [StringLength(100)]
        public string NoiXuatBan { get; set; }

        [Column(TypeName = "date")]
        public DateTime? NgayXuatBan { get; set; }

        public int? SoTinChi { get; set; }

        public int? SoThanhVien { get; set; }

        public int? IdLoaiSach { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<GV_BienSoanSach> GV_BienSoanSach { get; set; }

        public virtual LoaiSach LoaiSach { get; set; }
    }
}
