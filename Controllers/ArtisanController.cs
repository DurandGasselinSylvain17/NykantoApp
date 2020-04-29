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
    public class ArtisanController : ApiController
    {
        private DBModel db = new DBModel();

        // GET: api/Artisan
        public IQueryable<Artisan> GetArtisans()
        {
            return db.Artisans;
        }

        // GET: api/Artisan/5
        [ResponseType(typeof(Artisan))]
        public IHttpActionResult GetArtisan(int id)
        {
            Artisan artisan = db.Artisans.Find(id);
            if (artisan == null)
            {
                return NotFound();
            }

            return Ok(artisan);
        }

        // PUT: api/Artisan/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutArtisan(int id, Artisan artisan)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != artisan.ArtisanID)
            {
                return BadRequest();
            }

            db.Entry(artisan).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ArtisanExists(id))
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

        // POST: api/Artisan
        [ResponseType(typeof(Artisan))]
        public IHttpActionResult PostArtisan(Artisan artisan)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Artisans.Add(artisan);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = artisan.ArtisanID }, artisan);
        }

        // DELETE: api/Artisan/5
        [ResponseType(typeof(Artisan))]
        public IHttpActionResult DeleteArtisan(int id)
        {
            Artisan artisan = db.Artisans.Find(id);
            if (artisan == null)
            {
                return NotFound();
            }

            db.Artisans.Remove(artisan);
            db.SaveChanges();

            return Ok(artisan);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ArtisanExists(int id)
        {
            return db.Artisans.Count(e => e.ArtisanID == id) > 0;
        }
    }
}