using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QLNCKHGV.Models
{
    public class SachModel
    {
        public int Id { get; set; }
        
        public string Ma { get; set; }
        
        public string Ten { get; set; }
        
        public string NoiXuatBan { get; set; }

        public int? KiHoc { get; set; }
        
        public string NamHoc { get; set; }

        public int? SoThanhVien { get; set; }

        public int? IdLoaiSach { get; set; }

        public int? SoGio { get; set; }

        public int? SoTrangDaViet { get; set; }

        public virtual LoaiSachModel LoaiSach { get; set; }
    }
}