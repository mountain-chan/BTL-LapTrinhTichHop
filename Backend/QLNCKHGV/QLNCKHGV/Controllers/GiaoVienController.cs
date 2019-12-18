using QLNCKHGV.EF;
using QLNCKHGV.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace QLNCKHGV.Controllers
{
    public class GiaoVienController : ApiController
    {
        private QuanLyGiaoVienDb db = new QuanLyGiaoVienDb();

        [Route("api/GiaoVien/GetAllGiaoVien")]
        public IHttpActionResult GetAllGiaoVien()
        {
            IList<GiaoVienModel> listGiaoVien = null;
            listGiaoVien = db.GiaoViens.Select(k => new GiaoVienModel()
            {
                Id = k.Id,
                Ma = k.Ma,
                Ten = k.Ten,
                GioiTinh = k.GioiTinh,
                NgaySinh = k.NgaySinh,
                DiaChi = k.DiaChi,
                DienThoai = k.DienThoai,
                Email = k.Email
            }).ToList<GiaoVienModel>();

            if (listGiaoVien.Count == 0)
            {
                return NotFound();
            }

            return Ok(listGiaoVien);
        }

        [Route("api/GiaoVien/GetGiaoVienById")]
        public IHttpActionResult GetGiaoVienById(int IdGiaoVien)
        {
            GiaoVienModel giaoVien = null;
            giaoVien = db.GiaoViens.Where(k => k.Id == IdGiaoVien)
                .Select(k => new GiaoVienModel()
                {
                    Id = k.Id,
                    Ma = k.Ma,
                    Ten = k.Ten,
                    GioiTinh = k.GioiTinh,
                    NgaySinh = k.NgaySinh,
                    DiaChi = k.DiaChi,
                    DienThoai = k.DienThoai,
                    Email = k.Email
                }).FirstOrDefault<GiaoVienModel>();

            if (giaoVien == null)
            {
                return NotFound();
            }

            return Ok(giaoVien);
        }

        [Route("api/GiaoVien/GetGiaoVienByBoMon")]
        public IHttpActionResult GetGiaoVienByBoMon(int idBoMon, int namHoc, int kiHoc)
        {
            IList<GiaoVienModel> listGiaoVien = null;
            listGiaoVien = (from gv in db.GiaoViens
                            join gv_bm in db.GV_BoMon on gv.Id equals gv_bm.IdGiaoVien
                            where gv_bm.IdBoMon == idBoMon && gv_bm.NamHoc == namHoc
                            && gv_bm.KiHoc == kiHoc
                            select new GiaoVienModel()
                            {
                                Id = gv.Id,
                                Ma = gv.Ma,
                                Ten = gv.Ten,
                                GioiTinh = gv.GioiTinh,
                                NgaySinh = gv.NgaySinh,
                                DiaChi = gv.DiaChi,
                                DienThoai = gv.DienThoai,
                                Email = gv.Email
                            }).ToList<GiaoVienModel>();

            if (listGiaoVien.Count == 0)
            {
                return NotFound();
            }

            return Ok(listGiaoVien);
        }
    }
}
