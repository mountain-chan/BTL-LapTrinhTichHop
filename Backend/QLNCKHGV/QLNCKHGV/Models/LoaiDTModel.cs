using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QLNCKHGV.Models
{
    public class LoaiDTModel
    {
        public int Id { get; set; }
        
        public string Ten { get; set; }

        public int? DonViTinh { get; set; }

        public int? GioChuan { get; set; }
        
        public string GhiChu { get; set; }
    }
}