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
    public class BaiBaoController : ApiController
    {
        private QuanLyGiaoVienDb db = new QuanLyGiaoVienDb();

        [Route("api/BaiBao/GetLoaiBB")]
        public IHttpActionResult GetLoaiBB()
        {

            IList<LoaiBBModel> listItems = null;
            listItems = db.LoaiBaiBaos.Select(k => new LoaiBBModel()
            {
                Id = k.Id,
                Ten = k.Ten,
                GioChuan = k.GioChuan,
                DonViTinh = k.DonViTinh,
                GhiChu = k.GhiChu

            }).ToList<LoaiBBModel>();
            
            return Ok(listItems);
        }


        [Route("api/BaiBao/GetAllBaiBao")]
        public IHttpActionResult GetAllBaiBao(int pageNumber, int pageSize)
        {

            IList<BaiBaoModel> listItems = null;
            listItems = db.BaiBaos.Select(k => new BaiBaoModel()
            {
                Id = k.Id,
                Ma = k.Ma,
                Ten = k.Ten,
                TenTapChiCongBo = k.TenTapChiCongBo,
                NamHoc = k.NamHoc,
                KiHoc = k.KiHoc,
                SoThanhVien = k.SoThanhVien,
                IdLoaiBaiBao = k.IdLoaiBaiBao,
                LoaiBaiBao = k.IdLoaiBaiBao == null ? null : new LoaiBBModel()
                {
                    Id = k.LoaiBaiBao.Id,
                    Ten = k.LoaiBaiBao.Ten
                }
            }).ToList<BaiBaoModel>();

            int totalItems = listItems.Count;

            return Ok(new
            {
                items = listItems.ToPagedList(pageNumber + 1, pageSize),
                totals = totalItems
            });
        }

        [Route("api/BaiBao/GetBaiBaoByKi")]
        public IHttpActionResult GetBaiBaoByKi(string nam, int ki, int pageNumber, int pageSize)
        {

            IList<BaiBaoModel> listItems = null;
            if (nam != "0" && ki != 0)
            {
                listItems = db.BaiBaos.Where(k => k.NamHoc == nam && k.KiHoc == ki)
                .Select(k => new BaiBaoModel()
                {
                    Id = k.Id,
                    Ma = k.Ma,
                    Ten = k.Ten,
                    TenTapChiCongBo = k.TenTapChiCongBo,
                    NamHoc = k.NamHoc,
                    KiHoc = k.KiHoc,
                    SoThanhVien = k.SoThanhVien,
                    IdLoaiBaiBao = k.IdLoaiBaiBao,
                    LoaiBaiBao = k.IdLoaiBaiBao == null ? null : new LoaiBBModel()
                    {
                        Id = k.LoaiBaiBao.Id,
                        Ten = k.LoaiBaiBao.Ten
                    }
                }).ToList<BaiBaoModel>();
            }
            else if(ki == 0)
            {
                listItems = db.BaiBaos.Where(k => k.NamHoc == nam)
                .Select(k => new BaiBaoModel()
                {
                    Id = k.Id,
                    Ma = k.Ma,
                    Ten = k.Ten,
                    TenTapChiCongBo = k.TenTapChiCongBo,
                    NamHoc = k.NamHoc,
                    KiHoc = k.KiHoc,
                    SoThanhVien = k.SoThanhVien,
                    IdLoaiBaiBao = k.IdLoaiBaiBao,
                    LoaiBaiBao = k.IdLoaiBaiBao == null ? null : new LoaiBBModel()
                    {
                        Id = k.LoaiBaiBao.Id,
                        Ten = k.LoaiBaiBao.Ten
                    }
                }).ToList<BaiBaoModel>();
            }
            else if (nam == "0")
            {
                listItems = db.BaiBaos.Where(k => k.KiHoc == ki)
                .Select(k => new BaiBaoModel()
                {
                    Id = k.Id,
                    Ma = k.Ma,
                    Ten = k.Ten,
                    TenTapChiCongBo = k.TenTapChiCongBo,
                    NamHoc = k.NamHoc,
                    KiHoc = k.KiHoc,
                    SoThanhVien = k.SoThanhVien,
                    IdLoaiBaiBao = k.IdLoaiBaiBao,
                    LoaiBaiBao = k.IdLoaiBaiBao == null ? null : new LoaiBBModel()
                    {
                        Id = k.LoaiBaiBao.Id,
                        Ten = k.LoaiBaiBao.Ten
                    }
                }).ToList<BaiBaoModel>();
            }
            else
            {
                listItems = db.BaiBaos.Select(k => new BaiBaoModel()
                {
                    Id = k.Id,
                    Ma = k.Ma,
                    Ten = k.Ten,
                    TenTapChiCongBo = k.TenTapChiCongBo,
                    NamHoc = k.NamHoc,
                    KiHoc = k.KiHoc,
                    SoThanhVien = k.SoThanhVien,
                    IdLoaiBaiBao = k.IdLoaiBaiBao,
                    LoaiBaiBao = k.IdLoaiBaiBao == null ? null : new LoaiBBModel()
                    {
                        Id = k.LoaiBaiBao.Id,
                        Ten = k.LoaiBaiBao.Ten
                    }
                }).ToList<BaiBaoModel>();
            }

            int totalItems = listItems.Count;

            return Ok(new
            {
                items = listItems.ToPagedList(pageNumber + 1, pageSize),
                totals = totalItems
            });
        }


        [Route("api/BaiBao/GetBaiBaoById")]
        public IHttpActionResult GetBaiBaoById(int id)
        {
            BaiBaoModel tmp = null;
            tmp = db.BaiBaos.Where(k => k.Id == id)
                .Select(k => new BaiBaoModel()
                {
                    Id = k.Id,
                    Ma = k.Ma,
                    Ten = k.Ten,
                    TenTapChiCongBo = k.TenTapChiCongBo,
                    NamHoc = k.NamHoc,
                    KiHoc = k.KiHoc,
                    SoThanhVien = k.SoThanhVien,
                    IdLoaiBaiBao = k.IdLoaiBaiBao,
                    LoaiBaiBao = k.IdLoaiBaiBao == null ? null : new LoaiBBModel()
                    {
                        Id = k.LoaiBaiBao.Id,
                        Ten = k.LoaiBaiBao.Ten
                    }
                }).FirstOrDefault<BaiBaoModel>();

            return Ok(tmp);
        }

        [Route("api/BaiBao/GetBaiBaoByGiaoVien")]
        public IHttpActionResult GetBaiBaoByGiaoVien(int idGiaoVien, string nam, int ki)
        {
            IList<BaiBaoModel> listItems = null;
            listItems = (from k in db.BaiBaos
                            join gv_bb in db.GV_BaiBao on k.Id equals gv_bb.IdBaiBao
                            where gv_bb.IdGiaoVien==idGiaoVien && k.NamHoc==nam && k.KiHoc==ki
                            select new BaiBaoModel()
                            {
                             Id = k.Id,
                             Ma = k.Ma,
                             Ten = k.Ten,
                             TenTapChiCongBo = k.TenTapChiCongBo,
                             NamHoc = k.NamHoc,
                             KiHoc = k.KiHoc,
                             SoThanhVien = k.SoThanhVien,
                             IdLoaiBaiBao = k.IdLoaiBaiBao,
                             SoGio = gv_bb.SoGio,
                             LoaiBaiBao = k.IdLoaiBaiBao == null ? null : new LoaiBBModel()
                             {
                                 Id = k.LoaiBaiBao.Id,
                                 Ten = k.LoaiBaiBao.Ten
                             }
                         }).ToList<BaiBaoModel>();

            return Ok(listItems);
        }

        [Route("api/BaiBao/ThemBaiBao")]
        public IHttpActionResult PostThem(BaiBao model)
        {
            if (!ModelState.IsValid)
                return Ok(new { status = false, message = "Sai dữ liệu đầu vào!" });
            db.BaiBaos.Add(model);
            db.SaveChanges();
            return Ok(new { status = true, message = "Thêm mới Bài báo thành công!" });
        }

        [Route("api/BaiBao/ThemThanhVien")]
        public IHttpActionResult PostThemThanhVien(GV_BaiBao model)
        {
            if (!ModelState.IsValid)
                return Ok(new { status = false, message = "Sai dữ liệu đầu vào!" });
            db.GV_BaiBao.Add(model);
            db.SaveChanges();
            return Ok(new { status = true, message = "Thêm thành viên thành công!" });
        }

        [Route("api/BaiBao/SuaBaiBao")]
        public IHttpActionResult PutSua(BaiBao model)
        {
            if (!ModelState.IsValid)
                return Ok(new { status = false, message = "Sai dữ liệu đầu vào!" });
            BaiBao dbEntry = db.BaiBaos.Find(model.Id);
            if (dbEntry == null)
            {
                return Ok(new { status = false, message = "Không tồn tại Bài báo!" });
            }
            dbEntry.Ten = model.Ten;
            dbEntry.TenTapChiCongBo = model.TenTapChiCongBo;
            dbEntry.NamHoc = model.NamHoc;
            dbEntry.KiHoc = model.KiHoc;
            dbEntry.IdLoaiBaiBao = model.IdLoaiBaiBao;
            db.SaveChanges();
            return Ok(new { status = true, message = "Sửa Bài báo thành công!" });
        }

        [Route("api/BaiBao/XoaBaiBao")]
        public IHttpActionResult DeleteBaiBao(int Id)
        {
            BaiBao dbEntry = db.BaiBaos.Find(Id);
            if (dbEntry == null)
            {
                return Ok(new { status = false, message = "Không tồn tại Bài báo!" });
            }
            db.BaiBaos.Remove(dbEntry);
            db.SaveChanges();
            return Ok(new { status = true, message = "Xóa Bài báo thành công!" });
        }

        [Route("api/BaiBao/XoaThanhVien")]
        public IHttpActionResult DeleteThanhVien(int Id)
        {
            GV_BaiBao dbEntry = db.GV_BaiBao.Find(Id);
            if (dbEntry == null)
            {
                return Ok(new { status = false, message = "Xóa dữ liệu không thành công!" });
            }
            db.GV_BaiBao.Remove(dbEntry);
            db.SaveChanges();
            return Ok(new { status = true, message = "Xóa thành viên thành công!" });
        }

    }
}
