using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    public class HistoriqueStatutTacheController : ApiController
    {
        private DBModel db = new DBModel();

        // GET: api/HistoriqueStatutTache
        public IQueryable<HistoriqueStatutTache> GetHistoriqueStatutTaches()
        {
            return db.HistoriqueStatutTaches;
        }

        // GET: api/HistoriqueStatutTache/5
        [ResponseType(typeof(HistoriqueStatutTache))]
        public IHttpActionResult GetHistoriqueStatutTache(int id)
        {
            HistoriqueStatutTache historiqueStatutTache = db.HistoriqueStatutTaches.Find(id);
            if (historiqueStatutTache == null)
            {
                return NotFound();
            }

            return Ok(historiqueStatutTache);
        }

        // PUT: api/HistoriqueStatutTache/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutHistoriqueStatutTache(int id, HistoriqueStatutTache historiqueStatutTache)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != historiqueStatutTache.HistoriqueStatutTacheID)
            {
                return BadRequest();
            }

            db.Entry(historiqueStatutTache).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HistoriqueStatutTacheExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/HistoriqueStatutTache
        [ResponseType(typeof(HistoriqueStatutTache))]
        public IHttpActionResult PostHistoriqueStatutTache(HistoriqueStatutTache historiqueStatutTache)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.HistoriqueStatutTaches.Add(historiqueStatutTache);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = historiqueStatutTache.HistoriqueStatutTacheID }, historiqueStatutTache);
        }

        // DELETE: api/HistoriqueStatutTache/5
        [ResponseType(typeof(HistoriqueStatutTache))]
        public IHttpActionResult DeleteHistoriqueStatutTache(int id)
        {
            HistoriqueStatutTache historiqueStatutTache = db.HistoriqueStatutTaches.Find(id);
            if (historiqueStatutTache == null)
            {
                return NotFound();
            }

            db.HistoriqueStatutTaches.Remove(historiqueStatutTache);
            db.SaveChanges();

            return Ok(historiqueStatutTache);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool HistoriqueStatutTacheExists(int id)
        {
            return db.HistoriqueStatutTaches.Count(e => e.HistoriqueStatutTacheID == id) > 0;
        }
    }
}