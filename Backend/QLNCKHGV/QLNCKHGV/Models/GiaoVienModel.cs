using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QLNCKHGV.Models
{
    public class GiaoVienModel
    {
        public int Id { get; set; }

        public int IdGVBB { get; set; }

        public int IdGVDT { get; set; }

        public int IdGVSA { get; set; }

        public string Ma { get; set; }
        
        public string Ten { get; set; }

        public bool? GioiTinh { get; set; }
        
        public DateTime? NgaySinh { get; set; }
        
        public string DiaChi { get; set; }
        
        public string DienThoai { get; set; }
        
        public string Email { get; set; }

        public int? IdBoMon { get; set; }

        public virtual BoMonModel BoMon { get; set; }

        public int? SoTrangDaViet { get; set; }

        public int? LaChuTri { get; set; }
    }
}