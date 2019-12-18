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
    public class KhoaController : ApiController
    {
        private QuanLyGiaoVienDb db = new QuanLyGiaoVienDb();


        [Route("api/Khoa/GetAllKhoa")]
        public IHttpActionResult GetAllKhoa()
        {
            IList<KhoaModel> listKhoa = null;
            listKhoa = db.Khoas.Select(k => new KhoaModel()
            {
                Id = k.Id,
                Ma = k.Ma,
                Ten = k.Ten
            }).ToList<KhoaModel>();

            if (listKhoa.Count == 0)
            {
                return NotFound();
            }

            return Ok(listKhoa);
        }

        [Route("api/Khoa/GetKhoaById")]
        public IHttpActionResult GetKhoaById(int IdKhoa)
        {
            KhoaModel khoa = null;
            khoa = db.Khoas.Where(k => k.Id == IdKhoa)
                .Select(k => new KhoaModel()
                {
                    Id = k.Id,
                    Ma = k.Ma,
                    Ten = k.Ten
                }).FirstOrDefault<KhoaModel>();

            if (khoa == null)
            {
                return NotFound();

            }

            return Ok(khoa);
        }
    }
}
