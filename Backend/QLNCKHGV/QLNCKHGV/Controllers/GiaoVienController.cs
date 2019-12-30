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
    public class GiaoVienController : ApiController
    {
        private QuanLyGiaoVienDb db = new QuanLyGiaoVienDb();

        [Route("api/GiaoVien/GetAllGiaoVien")]
        public IHttpActionResult GetAllGiaoVien(int pageNumber, int pageSize)
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
                Email = k.Email,
                IdBoMon = k.IdBoMon,
                BoMon = k.IdBoMon == null ? null : new BoMonModel()
                {
                    Id = k.BoMon.Id,
                    Ma = k.BoMon.Ma,
                    Ten = k.BoMon.Ten
                }
            }).ToList<GiaoVienModel>();

            int totalItems = listGiaoVien.Count;

            //.Skip(pageSize * pageNumber).Take(pageSize)
            return Ok(new {
                items = listGiaoVien.ToPagedList(pageNumber + 1, pageSize),
                totals = totalItems
            });
        }

        [Route("api/GiaoVien/GetGiaoVienByBoMon")]
        public IHttpActionResult GetGiaoVienByBoMon(int idBoMon, int pageNumber, int pageSize)
        {

            IList<GiaoVienModel> listGiaoVien = null;
            listGiaoVien = db.GiaoViens.Where(gv => gv.IdBoMon == idBoMon)
                .Select(k => new GiaoVienModel()
            {
                Id = k.Id,
                Ma = k.Ma,
                Ten = k.Ten,
                GioiTinh = k.GioiTinh,
                NgaySinh = k.NgaySinh,
                DiaChi = k.DiaChi,
                DienThoai = k.DienThoai,
                Email = k.Email,
                IdBoMon = k.IdBoMon,
                BoMon = k.IdBoMon == null ? null : new BoMonModel()
                {
                    Id = k.BoMon.Id,
                    Ma = k.BoMon.Ma,
                    Ten = k.BoMon.Ten
                }
            }).ToList<GiaoVienModel>();

            int totalItems = listGiaoVien.Count;
            
            return Ok(new
            {
                items = listGiaoVien.ToPagedList(pageNumber + 1, pageSize),
                totals = totalItems
            });
        }


        [Route("api/GiaoVien/Search")]
        public IHttpActionResult GetSearch(string textSearch)
        {

            IList<GiaoVienModel> listGiaoVien = null;
            listGiaoVien = db.GiaoViens.Where(gv => gv.Ma.Contains(textSearch) || gv.Ten.Contains(textSearch))
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
                }).ToList<GiaoVienModel>();

            return Ok(listGiaoVien);
        }


        [Route("api/GiaoVien/GetGiaoVienById")]
        public IHttpActionResult GetGiaoVienById(int idGiaoVien)
        {
            GiaoVienModel giaoVien = null;
            giaoVien = db.GiaoViens.Where(k => k.Id == idGiaoVien)
                .Select(k => new GiaoVienModel()
                {
                    Id = k.Id,
                    Ma = k.Ma,
                    Ten = k.Ten,
                    GioiTinh = k.GioiTinh,
                    NgaySinh = k.NgaySinh,
                    DiaChi = k.DiaChi,
                    DienThoai = k.DienThoai,
                    Email = k.Email,
                    IdBoMon = k.IdBoMon,
                    BoMon = k.IdBoMon == null ? null : new BoMonModel()
                    {
                        Id = k.BoMon.Id,
                        Ma = k.BoMon.Ma,
                        Ten = k.BoMon.Ten
                    }
                }).FirstOrDefault<GiaoVienModel>();

            if (giaoVien == null)
            {
                return NotFound();
            }

            return Ok(giaoVien);
        }

        [Route("api/GiaoVien/GetGiaoVienByBaiBao")]
        public IHttpActionResult GetGiaoVienByBaiBao(int id)
        {
            IList<GiaoVienModel> listGiaoVien = null;
            listGiaoVien = (from gv in db.GiaoViens
                            join gv_bb in db.GV_BaiBao on gv.Id equals gv_bb.IdGiaoVien
                            where gv_bb.IdBaiBao == id
                            select new GiaoVienModel()
                            {
                                Id = gv.Id,
                                Ma = gv.Ma,
                                Ten = gv.Ten,
                                GioiTinh = gv.GioiTinh,
                                NgaySinh = gv.NgaySinh,
                                DiaChi = gv.DiaChi,
                                DienThoai = gv.DienThoai,
                                Email = gv.Email,
                                IdGVBB = gv_bb.Id,
                                BoMon = gv.IdBoMon == null ? null : new BoMonModel()
                                {
                                    Id = gv.BoMon.Id,
                                    Ma = gv.BoMon.Ma,
                                    Ten = gv.BoMon.Ten
                                }
                            }).ToList<GiaoVienModel>();

            return Ok(listGiaoVien);
        }

        [Route("api/GiaoVien/GetGiaoVienByDeTai")]
        public IHttpActionResult GetGiaoVienByDeTai(int id)
        {
            IList<GiaoVienModel> listGiaoVien = null;
            listGiaoVien = (from gv in db.GiaoViens
                            join gv_dt in db.GV_DeTai on gv.Id equals gv_dt.IdGiaoVien
                            where gv_dt.IdDeTai == id
                            select new GiaoVienModel()
                            {
                                Id = gv.Id,
                                Ma = gv.Ma,
                                Ten = gv.Ten,
                                GioiTinh = gv.GioiTinh,
                                NgaySinh = gv.NgaySinh,
                                DiaChi = gv.DiaChi,
                                DienThoai = gv.DienThoai,
                                Email = gv.Email,
                                IdGVDT = gv_dt.Id,
                                LaChuTri = gv_dt.LaChuTri,
                                BoMon = gv.IdBoMon == null ? null : new BoMonModel()
                                {
                                    Id = gv.BoMon.Id,
                                    Ma = gv.BoMon.Ma,
                                    Ten = gv.BoMon.Ten
                                }
                            }).ToList<GiaoVienModel>();

            return Ok(listGiaoVien);
        }

        [Route("api/GiaoVien/GetGiaoVienBySach")]
        public IHttpActionResult GetGiaoVienBySach(int id)
        {
            IList<GiaoVienModel> listGiaoVien = null;
            listGiaoVien = (from gv in db.GiaoViens
                            join gv_sa in db.GV_Sach on gv.Id equals gv_sa.IdGiaoVien
                            where gv_sa.IdSach == id
                            select new GiaoVienModel()
                            {
                                Id = gv.Id,
                                Ma = gv.Ma,
                                Ten = gv.Ten,
                                GioiTinh = gv.GioiTinh,
                                NgaySinh = gv.NgaySinh,
                                DiaChi = gv.DiaChi,
                                DienThoai = gv.DienThoai,
                                Email = gv.Email,
                                IdGVSA = gv_sa.Id,
                                SoTrangDaViet = gv_sa.SoTrangDaViet,
                                BoMon = gv.IdBoMon == null ? null : new BoMonModel()
                                {
                                    Id = gv.BoMon.Id,
                                    Ma = gv.BoMon.Ma,
                                    Ten = gv.BoMon.Ten
                                }
                            }).ToList<GiaoVienModel>();

            return Ok(listGiaoVien);
        }

        [Route("api/GiaoVien/ThemGiaoVien")]
        public IHttpActionResult PostThemGiaoVien(GiaoVien model)
        {
            if (!ModelState.IsValid)
                return Ok(new { status = false, message = "Sai dữ liệu đầu vào!" });
            db.GiaoViens.Add(model);
            db.SaveChanges();
            return Ok(new { status = true, message = "Thêm mới Giáo viên thành công!" });
        }

        [Route("api/GiaoVien/SuaGiaoVien")]
        public IHttpActionResult PutSuaGiaoVien(GiaoVien model)
        {
            if (!ModelState.IsValid)
                return Ok(new { status = false, message = "Sai dữ liệu đầu vào!" });
            GiaoVien dbEntry = db.GiaoViens.Find(model.Id);
            if (dbEntry == null)
            {
                return Ok(new { status = false, message = "Không tồn tại Giáo viên!" });
            }
            dbEntry.Ten = model.Ten;
            dbEntry.GioiTinh = model.GioiTinh;
            dbEntry.NgaySinh = model.NgaySinh;
            dbEntry.DiaChi = model.DiaChi;
            dbEntry.DienThoai = model.DienThoai;
            dbEntry.Email = model.Email;
            dbEntry.IdBoMon = model.IdBoMon;
            db.SaveChanges();
            return Ok(new { status = true, message = "Sửa Giáo viên thành công!" });
        }

        [Route("api/GiaoVien/XoaGiaoVien")]
        public IHttpActionResult DeleteXoaGiaoVien(int Id)
        {
            GiaoVien dbEntry = db.GiaoViens.Find(Id);
            if (dbEntry == null)
            {
                return Ok(new { status = false, message = "Không tồn tại Giáo viên!" });
            }
            db.GiaoViens.Remove(dbEntry);
            db.SaveChanges();
            return Ok(new { status = true, message = "Xóa Giáo viên thành công!" });
        }

    }
}
