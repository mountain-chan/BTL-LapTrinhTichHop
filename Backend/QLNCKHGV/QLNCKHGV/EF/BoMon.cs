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
            CN_BoMon = new HashSet<CN_BoMon>();
            GV_BoMon = new HashSet<GV_BoMon>();
        }

        public int Id { get; set; }

        [StringLength(6)]
        public string Ma { get; set; }

        [StringLength(50)]
        public string Ten { get; set; }

        public int? IdKhoa { get; set; }

        public virtual Khoa Khoa { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CN_BoMon> CN_BoMon { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<GV_BoMon> GV_BoMon { get; set; }
    }
}
