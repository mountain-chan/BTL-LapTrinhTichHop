using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QLNCKHGV.Models
{
    public class DeTaiModel
    {
        public int Id { get; set; }
        
        public string Ma { get; set; }
        
        public string Ten { get; set; }

        public int? KiHoc { get; set; }
        
        public string NamHoc { get; set; }
        
        public string CoQuanQuanLy { get; set; }

        public int? SoThanhVien { get; set; }

        public int? IdLoaiDeTai { get; set; }

        public int? SoGio { get; set; }

        public int? LaChuTri { get; set; }

        public virtual LoaiDTModel LoaiDeTai { get; set; }
    }
}