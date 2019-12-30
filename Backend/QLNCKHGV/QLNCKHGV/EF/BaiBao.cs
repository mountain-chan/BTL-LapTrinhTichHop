namespace QLNCKHGV.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("BaiBao")]
    public partial class BaiBao
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public BaiBao()
        {
            GV_BaiBao = new HashSet<GV_BaiBao>();
        }

        public int Id { get; set; }

        [StringLength(5)]
        public string Ma { get; set; }

        [StringLength(100)]
        public string Ten { get; set; }

        [StringLength(150)]
        public string TenTapChiCongBo { get; set; }

        public int? KiHoc { get; set; }

        [StringLength(10)]
        public string NamHoc { get; set; }

        public int? SoThanhVien { get; set; }

        public int? IdLoaiBaiBao { get; set; }

        public virtual LoaiBaiBao LoaiBaiBao { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<GV_BaiBao> GV_BaiBao { get; set; }
    }
}
