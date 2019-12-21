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
    public class BoMonController : ApiController
    {
        private QuanLyGiaoVienDb db = new QuanLyGiaoVienDb();

        [Route("api/BoMon/GetAllBoMon")]
        public IHttpActionResult GetAllBoMon()
        {
            IList<BoMonModel> listBoMon = null;
            listBoMon = db.BoMons.Select(k => new BoMonModel()
            {
                Id = k.Id,
                Ma = k.Ma,
                Ten = k.Ten
            }).ToList<BoMonModel>();

            if (listBoMon.Count == 0)
            {
                return NotFound();
            }

            return Ok(listBoMon);
        }

        [Route("api/BoMon/GetBoMonById")]
        public IHttpActionResult GetBoMonById(int IdBoMon)
        {
            BoMonModel bomon = null;
            bomon = db.BoMons.Where(k => k.Id == IdBoMon)
                .Select(k => new BoMonModel()
                {
                    Id = k.Id,
                    Ma = k.Ma,
                    Ten = k.Ten
                }).FirstOrDefault<BoMonModel>();

            if (bomon == null)
            {
                return NotFound();
            }

            return Ok(bomon);
        }
        
    }
}
