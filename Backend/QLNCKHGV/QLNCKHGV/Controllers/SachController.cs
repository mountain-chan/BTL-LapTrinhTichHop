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
    public class SachController : ApiController
    {
        private QuanLyGiaoVienDb db = new QuanLyGiaoVienDb();

        [Route("api/Sach/GetLoaiSach")]
        public IHttpActionResult GetLoaiSach()
        {

            IList<LoaiDTModel> listItems = null;
            listItems = db.LoaiSaches.Select(k => new LoaiDTModel()
            {
                Id = k.Id,
                Ten = k.Ten,
                GioChuan = k.GioChuan,
                DonViTinh = k.DonViTinh,
                GhiChu = k.GhiChu

            }).ToList<LoaiDTModel>();

            return Ok(listItems);
        }


        [Route("api/Sach/GetAllSach")]
        public IHttpActionResult GetAllSach(int pageNumber, int pageSize)
        {

            IList<SachModel> listItems = null;
            listItems = db.Saches.Select(k => new SachModel()
            {
                Id = k.Id,
                Ma = k.Ma,
                Ten = k.Ten,
                NoiXuatBan = k.NoiXuatBan,
                NamHoc = k.NamHoc,
                KiHoc = k.KiHoc,
                SoThanhVien = k.SoThanhVien,
                IdLoaiSach = k.IdLoaiSach,
                LoaiSach = k.IdLoaiSach == null ? null : new LoaiSachModel()
                {
                    Id = k.LoaiSach.Id,
                    Ten = k.LoaiSach.Ten
                }
            }).ToList<SachModel>();

            int totalItems = listItems.Count;

            return Ok(new
            {
                items = listItems.ToPagedList(pageNumber + 1, pageSize),
                totals = totalItems
            });
        }

        [Route("api/Sach/GetSachByKi")]
        public IHttpActionResult GetSachByKi(string nam, int ki, int pageNumber, int pageSize)
        {

            IList<SachModel> listItems = null;
            if (nam != "0" && ki != 0)
            {
                listItems = db.Saches.Where(k => k.NamHoc == nam && k.KiHoc == ki)
                .Select(k => new SachModel()
                {
                    Id = k.Id,
                    Ma = k.Ma,
                    Ten = k.Ten,
                    NoiXuatBan = k.NoiXuatBan,
                    NamHoc = k.NamHoc,
                    KiHoc = k.KiHoc,
                    SoThanhVien = k.SoThanhVien,
                    IdLoaiSach = k.IdLoaiSach,
                    LoaiSach = k.IdLoaiSach == null ? null : new LoaiSachModel()
                    {
                        Id = k.LoaiSach.Id,
                        Ten = k.LoaiSach.Ten
                    }
                }).ToList<SachModel>();
            }
            else if (ki == 0 && nam!="0")
            {
                listItems = db.Saches.Where(k => k.NamHoc == nam)
                .Select(k => new SachModel()
                {
                    Id = k.Id,
                    Ma = k.Ma,
                    Ten = k.Ten,
                    NoiXuatBan = k.NoiXuatBan,
                    NamHoc = k.NamHoc,
                    KiHoc = k.KiHoc,
                    SoThanhVien = k.SoThanhVien,
                    IdLoaiSach = k.IdLoaiSach,
                    LoaiSach = k.IdLoaiSach == null ? null : new LoaiSachModel()
                    {
                        Id = k.LoaiSach.Id,
                        Ten = k.LoaiSach.Ten
                    }
                }).ToList<SachModel>();
            }
            else if (nam == "0" && ki!=0)
            {
                listItems = db.Saches.Where(k => k.KiHoc == ki)
                .Select(k => new SachModel()
                {
                    Id = k.Id,
                    Ma = k.Ma,
                    Ten = k.Ten,
                    NoiXuatBan = k.NoiXuatBan,
                    NamHoc = k.NamHoc,
                    KiHoc = k.KiHoc,
                    SoThanhVien = k.SoThanhVien,
                    IdLoaiSach = k.IdLoaiSach,
                    LoaiSach = k.IdLoaiSach == null ? null : new LoaiSachModel()
                    {
                        Id = k.LoaiSach.Id,
                        Ten = k.LoaiSach.Ten
                    }
                }).ToList<SachModel>();
            }
            else
            {
                listItems = db.Saches.Select(k => new SachModel()
                {
                    Id = k.Id,
                    Ma = k.Ma,
                    Ten = k.Ten,
                    NoiXuatBan = k.NoiXuatBan,
                    NamHoc = k.NamHoc,
                    KiHoc = k.KiHoc,
                    SoThanhVien = k.SoThanhVien,
                    IdLoaiSach = k.IdLoaiSach,
                    LoaiSach = k.IdLoaiSach == null ? null : new LoaiSachModel()
                    {
                        Id = k.LoaiSach.Id,
                        Ten = k.LoaiSach.Ten
                    }
                }).ToList<SachModel>();
            }

            int totalItems = listItems.Count;

            return Ok(new
            {
                items = listItems.ToPagedList(pageNumber + 1, pageSize),
                totals = totalItems
            });
        }


        [Route("api/Sach/GetSachById")]
        public IHttpActionResult GetSachById(int id)
        {
            SachModel tmp = null;
            tmp = db.Saches.Where(k => k.Id == id)
                .Select(k => new SachModel()
                {
                    Id = k.Id,
                    Ma = k.Ma,
                    Ten = k.Ten,
                    NoiXuatBan = k.NoiXuatBan,
                    NamHoc = k.NamHoc,
                    KiHoc = k.KiHoc,
                    SoThanhVien = k.SoThanhVien,
                    IdLoaiSach = k.IdLoaiSach,
                    LoaiSach = k.IdLoaiSach == null ? null : new LoaiSachModel()
                    {
                        Id = k.LoaiSach.Id,
                        Ten = k.LoaiSach.Ten
                    }
                }).FirstOrDefault<SachModel>();

            return Ok(tmp);
        }

        [Route("api/Sach/GetSachByGiaoVien")]
        public IHttpActionResult GetSachByGiaoVien(int idGiaoVien, string nam, int ki)
        {
            IList<SachModel> listItems = null;
            listItems = (from k in db.Saches
                         join gv_dt in db.GV_Sach on k.Id equals gv_dt.IdSach
                         where gv_dt.IdGiaoVien == idGiaoVien && k.NamHoc == nam && k.KiHoc == ki
                         select new SachModel()
                         {
                             Id = k.Id,
                             Ma = k.Ma,
                             Ten = k.Ten,
                             NoiXuatBan = k.NoiXuatBan,
                             NamHoc = k.NamHoc,
                             KiHoc = k.KiHoc,
                             SoThanhVien = k.SoThanhVien,
                             IdLoaiSach = k.IdLoaiSach,
                             SoGio = gv_dt.SoGio,
                             SoTrangDaViet = gv_dt.SoTrangDaViet,
                             LoaiSach = k.IdLoaiSach == null ? null : new LoaiSachModel()
                             {
                                 Id = k.LoaiSach.Id,
                                 Ten = k.LoaiSach.Ten
                             }
                         }).ToList<SachModel>();

            return Ok(listItems);
        }

        [Route("api/Sach/ThemSach")]
        public IHttpActionResult PostThem(Sach model)
        {
            if (!ModelState.IsValid)
                return Ok(new { status = false, message = "Sai dữ liệu đầu vào!" });
            db.Saches.Add(model);
            db.SaveChanges();
            return Ok(new { status = true, message = "Thêm mới Đề tài thành công!" });
        }

        [Route("api/Sach/ThemThanhVien")]
        public IHttpActionResult PostThemThanhVien(GV_Sach model)
        {
            if (!ModelState.IsValid)
                return Ok(new { status = false, message = "Sai dữ liệu đầu vào!" });
            db.GV_Sach.Add(model);
            db.SaveChanges();
            return Ok(new { status = true, message = "Thêm thành viên thành công!" });
        }

        [Route("api/Sach/SuaSach")]
        public IHttpActionResult PutSua(Sach model)
        {
            if (!ModelState.IsValid)
                return Ok(new { status = false, message = "Sai dữ liệu đầu vào!" });
            Sach dbEntry = db.Saches.Find(model.Id);
            if (dbEntry == null)
            {
                return Ok(new { status = false, message = "Không tồn tại Đề tài!" });
            }
            dbEntry.Ten = model.Ten;
            dbEntry.NoiXuatBan = model.NoiXuatBan;
            dbEntry.NamHoc = model.NamHoc;
            dbEntry.KiHoc = model.KiHoc;
            dbEntry.IdLoaiSach = model.IdLoaiSach;
            db.SaveChanges();
            return Ok(new { status = true, message = "Sửa Đề tài thành công!" });
        }

        [Route("api/Sach/SuaThanhVien")]
        public IHttpActionResult PutThanhVien(GV_Sach model)
        {
            if (!ModelState.IsValid)
                return Ok(new { status = false, message = "Sai dữ liệu đầu vào!" });
            GV_Sach dbEntry = db.GV_Sach.Find(model.Id);
            if (dbEntry == null)
            {
                return Ok(new { status = false, message = "Cập nhật thất bại!" });
            }

            dbEntry.SoTrangDaViet = model.SoTrangDaViet;
            db.SaveChanges();
            return Ok(new { status = true, message = "Cập nhật thành công!" });
        }

        [Route("api/Sach/XoaSach")]
        public IHttpActionResult DeleteSach(int Id)
        {
            Sach dbEntry = db.Saches.Find(Id);
            if (dbEntry == null)
            {
                return Ok(new { status = false, message = "Không tồn tại Đề tài!" });
            }
            db.Saches.Remove(dbEntry);
            db.SaveChanges();
            return Ok(new { status = true, message = "Xóa Đề tài thành công!" });
        }

        [Route("api/Sach/XoaThanhVien")]
        public IHttpActionResult DeleteThanhVien(int Id)
        {
            GV_Sach dbEntry = db.GV_Sach.Find(Id);
            if (dbEntry == null)
            {
                return Ok(new { status = false, message = "Xóa dữ liệu không thành công!" });
            }
            db.GV_Sach.Remove(dbEntry);
            db.SaveChanges();
            return Ok(new { status = true, message = "Xóa thành viên thành công!" });
        }
    }
}
