using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QLNCKHGV.Models
{
    public class BaiBaoModel
    {
        public int Id { get; set; }
        
        public string Ma { get; set; }
        
        public string Ten { get; set; }
        
        public string TenTapChiCongBo { get; set; }

        public int? KiHoc { get; set; }
        
        public string NamHoc { get; set; }

        public int? SoThanhVien { get; set; }

        public int? SoGio { get; set; }

        public int? IdLoaiBaiBao { get; set; }

        public virtual LoaiBBModel LoaiBaiBao { get; set; }
    }
}