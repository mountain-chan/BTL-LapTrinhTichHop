namespace QLNCKHGV.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("BoMon")]
    public partial class BoMon
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public BoMon()
        {
            GiaoViens = new HashSet<GiaoVien>();
        }

        public int Id { get; set; }

        [StringLength(5)]
        public string Ma { get; set; }

        [StringLength(50)]
        public string Ten { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<GiaoVien> GiaoViens { get; set; }
    }
}
