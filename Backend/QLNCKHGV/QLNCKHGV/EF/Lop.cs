namespace QLNCKHGV.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Lop")]
    public partial class Lop
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Lop()
        {
            HocViens = new HashSet<HocVien>();
        }

        public int Id { get; set; }

        [StringLength(5)]
        public string Ma { get; set; }

        [StringLength(50)]
        public string Te { get; set; }

        public int? SiSo { get; set; }

        public int? IdHe { get; set; }

        public virtual He He { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<HocVien> HocViens { get; set; }
    }
}
