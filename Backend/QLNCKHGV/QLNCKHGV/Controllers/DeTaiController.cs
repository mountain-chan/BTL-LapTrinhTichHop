using PagedList;
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
    public class DeTaiController : ApiController
    {
        private QuanLyGiaoVienDb db = new QuanLyGiaoVienDb();

        [Route("api/DeTai/GetLoaiDT")]
        public IHttpActionResult GetLoaiDT()
        {

            IList<LoaiDTModel> listItems = null;
            listItems = db.LoaiDeTais.Select(k => new LoaiDTModel()
            {
                Id = k.Id,
                Ten = k.Ten,
                GioChuan = k.GioChuan,
                DonViTinh = k.DonViTinh,
                GhiChu = k.GhiChu

            }).ToList<LoaiDTModel>();

            return Ok(listItems);
        }


        [Route("api/DeTai/GetAllDeTai")]
        public IHttpActionResult GetAllDeTai(int pageNumber, int pageSize)
        {

            IList<DeTaiModel> listItems = null;
            listItems = db.DeTais.Select(k => new DeTaiModel()
            {
                Id = k.Id,
                Ma = k.Ma,
                Ten = k.Ten,
                CoQuanQuanLy = k.CoQuanQuanLy,
                NamHoc = k.NamHoc,
                KiHoc = k.KiHoc,
                SoThanhVien = k.SoThanhVien,
                IdLoaiDeTai = k.IdLoaiDeTai,
                LoaiDeTai = k.IdLoaiDeTai == null ? null : new LoaiDTModel()
                {
                    Id = k.LoaiDeTai.Id,
                    Ten = k.LoaiDeTai.Ten
                }
            }).ToList<DeTaiModel>();

            int totalItems = listItems.Count;

            return Ok(new
            {
                items = listItems.ToPagedList(pageNumber + 1, pageSize),
                totals = totalItems
            });
        }

        [Route("api/DeTai/GetDeTaiByKi")]
        public IHttpActionResult GetDeTaiByKi(string nam, int ki, int pageNumber, int pageSize)
        {

            IList<DeTaiModel> listItems = null;
            if (nam != "0" && ki != 0)
            {
                listItems = db.DeTais.Where(k => k.NamHoc == nam && k.KiHoc == ki)
                .Select(k => new DeTaiModel()
                {
                    Id = k.Id,
                    Ma = k.Ma,
                    Ten = k.Ten,
                    CoQuanQuanLy = k.CoQuanQuanLy,
                    NamHoc = k.NamHoc,
                    KiHoc = k.KiHoc,
                    SoThanhVien = k.SoThanhVien,
                    IdLoaiDeTai = k.IdLoaiDeTai,
                    LoaiDeTai = k.IdLoaiDeTai == null ? null : new LoaiDTModel()
                    {
                        Id = k.LoaiDeTai.Id,
                        Ten = k.LoaiDeTai.Ten
                    }
                }).ToList<DeTaiModel>();
            }
            else if (ki == 0 && nam!="0")
            {
                listItems = db.DeTais.Where(k => k.NamHoc == nam)
                .Select(k => new DeTaiModel()
                {
                    Id = k.Id,
                    Ma = k.Ma,
                    Ten = k.Ten,
                    CoQuanQuanLy = k.CoQuanQuanLy,
                    NamHoc = k.NamHoc,
                    KiHoc = k.KiHoc,
                    SoThanhVien = k.SoThanhVien,
                    IdLoaiDeTai = k.IdLoaiDeTai,
                    LoaiDeTai = k.IdLoaiDeTai == null ? null : new LoaiDTModel()
                    {
                        Id = k.LoaiDeTai.Id,
                        Ten = k.LoaiDeTai.Ten
                    }
                }).ToList<DeTaiModel>();
            }
            else if (nam == "0" && ki!=0)
            {
                listItems = db.DeTais.Where(k => k.KiHoc == ki)
                .Select(k => new DeTaiModel()
                {
                    Id = k.Id,
                    Ma = k.Ma,
                    Ten = k.Ten,
                    CoQuanQuanLy = k.CoQuanQuanLy,
                    NamHoc = k.NamHoc,
                    KiHoc = k.KiHoc,
                    SoThanhVien = k.SoThanhVien,
                    IdLoaiDeTai = k.IdLoaiDeTai,
                    LoaiDeTai = k.IdLoaiDeTai == null ? null : new LoaiDTModel()
                    {
                        Id = k.LoaiDeTai.Id,
                        Ten = k.LoaiDeTai.Ten
                    }
                }).ToList<DeTaiModel>();
            }
            else
            {
                listItems = db.DeTais.Select(k => new DeTaiModel()
                {
                    Id = k.Id,
                    Ma = k.Ma,
                    Ten = k.Ten,
                    CoQuanQuanLy = k.CoQuanQuanLy,
                    NamHoc = k.NamHoc,
                    KiHoc = k.KiHoc,
                    SoThanhVien = k.SoThanhVien,
                    IdLoaiDeTai = k.IdLoaiDeTai,
                    LoaiDeTai = k.IdLoaiDeTai == null ? null : new LoaiDTModel()
                    {
                        Id = k.LoaiDeTai.Id,
                        Ten = k.LoaiDeTai.Ten
                    }
                }).ToList<DeTaiModel>();
            }

            int totalItems = listItems.Count;

            return Ok(new
            {
                items = listItems.ToPagedList(pageNumber + 1, pageSize),
                totals = totalItems
            });
        }


        [Route("api/DeTai/GetDeTaiById")]
        public IHttpActionResult GetDeTaiById(int id)
        {
            DeTaiModel tmp = null;
            tmp = db.DeTais.Where(k => k.Id == id)
                .Select(k => new DeTaiModel()
                {
                    Id = k.Id,
                    Ma = k.Ma,
                    Ten = k.Ten,
                    CoQuanQuanLy = k.CoQuanQuanLy,
                    NamHoc = k.NamHoc,
                    KiHoc = k.KiHoc,
                    SoThanhVien = k.SoThanhVien,
                    IdLoaiDeTai = k.IdLoaiDeTai,
                    LoaiDeTai = k.IdLoaiDeTai == null ? null : new LoaiDTModel()
                    {
                        Id = k.LoaiDeTai.Id,
                        Ten = k.LoaiDeTai.Ten
                    }
                }).FirstOrDefault<DeTaiModel>();

            return Ok(tmp);
        }

        [Route("api/DeTai/GetDeTaiByGiaoVien")]
        public IHttpActionResult GetDeTaiByGiaoVien(int idGiaoVien, string nam, int ki)
        {
            IList<DeTaiModel> listItems = null;
            listItems = (from k in db.DeTais
                         join gv_dt in db.GV_DeTai on k.Id equals gv_dt.IdDeTai
                         where gv_dt.IdGiaoVien == idGiaoVien && k.NamHoc == nam && k.KiHoc == ki
                         select new DeTaiModel()
                         {
                             Id = k.Id,
                             Ma = k.Ma,
                             Ten = k.Ten,
                             CoQuanQuanLy = k.CoQuanQuanLy,
                             NamHoc = k.NamHoc,
                             KiHoc = k.KiHoc,
                             SoThanhVien = k.SoThanhVien,
                             IdLoaiDeTai = k.IdLoaiDeTai,
                             SoGio = gv_dt.SoGio,
                             LaChuTri = gv_dt.LaChuTri,
                             LoaiDeTai = k.IdLoaiDeTai == null ? null : new LoaiDTModel()
                             {
                                 Id = k.LoaiDeTai.Id,
                                 Ten = k.LoaiDeTai.Ten
                             }
                         }).ToList<DeTaiModel>();

            return Ok(listItems);
        }

        [Route("api/DeTai/ThemDeTai")]
        public IHttpActionResult PostThem(DeTai model)
        {
            if (!ModelState.IsValid)
                return Ok(new { status = false, message = "Sai dữ liệu đầu vào!" });
            db.DeTais.Add(model);
            db.SaveChanges();
            return Ok(new { status = true, message = "Thêm mới Đề tài thành công!" });
        }

        [Route("api/DeTai/ThemThanhVien")]
        public IHttpActionResult PostThemThanhVien(GV_DeTai model)
        {
            if (!ModelState.IsValid)
                return Ok(new { status = false, message = "Sai dữ liệu đầu vào!" });
            db.GV_DeTai.Add(model);
            db.SaveChanges();
            return Ok(new { status = true, message = "Thêm thành viên thành công!" });
        }

        [Route("api/DeTai/SuaDeTai")]
        public IHttpActionResult PutSua(DeTai model)
        {
            if (!ModelState.IsValid)
                return Ok(new { status = false, message = "Sai dữ liệu đầu vào!" });
            DeTai dbEntry = db.DeTais.Find(model.Id);
            if (dbEntry == null)
            {
                return Ok(new { status = false, message = "Không tồn tại Đề tài!" });
            }
            dbEntry.Ten = model.Ten;
            dbEntry.CoQuanQuanLy = model.CoQuanQuanLy;
            dbEntry.NamHoc = model.NamHoc;
            dbEntry.KiHoc = model.KiHoc;
            dbEntry.IdLoaiDeTai = model.IdLoaiDeTai;
            db.SaveChanges();
            return Ok(new { status = true, message = "Sửa Đề tài thành công!" });
        }

        [Route("api/DeTai/SuaThanhVien")]
        public IHttpActionResult PutThanhVien(GV_DeTai model)
        {
            if (!ModelState.IsValid)
                return Ok(new { status = false, message = "Sai dữ liệu đầu vào!" });
            GV_DeTai dbEntry = db.GV_DeTai.Find(model.Id);
            if (dbEntry == null)
            {
                return Ok(new { status = false, message = "Cập nhật thất bại!" });
            }

            if(model.LaChuTri == 1)
            {
                GV_DeTai dbEntry2 = db.GV_DeTai.Where(x => x.LaChuTri == 1).FirstOrDefault();
                if (dbEntry2 != null && dbEntry2.Id != model.Id)
                {
                    dbEntry2.LaChuTri = 0;
                }
            }
            dbEntry.LaChuTri = model.LaChuTri;
            db.SaveChanges();
            return Ok(new { status = true, message = "Cập nhật thành công!" });
        }

        [Route("api/DeTai/XoaDeTai")]
        public IHttpActionResult DeleteDeTai(int Id)
        {
            DeTai dbEntry = db.DeTais.Find(Id);
            if (dbEntry == null)
            {
                return Ok(new { status = false, message = "Không tồn tại Đề tài!" });
            }
            db.DeTais.Remove(dbEntry);
            db.SaveChanges();
            return Ok(new { status = true, message = "Xóa Đề tài thành công!" });
        }

        [Route("api/DeTai/XoaThanhVien")]
        public IHttpActionResult DeleteThanhVien(int Id)
        {
            GV_DeTai dbEntry = db.GV_DeTai.Find(Id);
            if (dbEntry == null)
            {
                return Ok(new { status = false, message = "Xóa dữ liệu không thành công!" });
            }
            db.GV_DeTai.Remove(dbEntry);
            db.SaveChanges();
            return Ok(new { status = true, message = "Xóa thành viên thành công!" });
        }
    }
}
