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
            IQueryable<Artisan> query = from tbl in db.Artisans
                        select tbl;

            foreach (Artisan elem in query)
            {
                QualificationArtisan qualif = new QualificationArtisan();

                qualif.Nom = (from tbl in db.QualificationArtisans
                                                 where tbl.QualificationArtisanID == elem.QualificationArtisanID
                                                 select tbl.Nom).FirstOrDefault();

                qualif.QualificationArtisanID = (from tbl in db.QualificationArtisans
                              where tbl.QualificationArtisanID == elem.QualificationArtisanID
                              select tbl.QualificationArtisanID).FirstOrDefault();

                elem.QualificationArtisan = qualif;

            }


            // return db.Artisans.Include(e => e.QualificationArtisan);
            // return db.Artisans;
            return query;
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

            Artisan oldArtisan = new Artisan();

            oldArtisan = (from ligne in db.Artisans
                          where ligne.ArtisanID == id
                          select ligne).FirstOrDefault();

            oldArtisan.Nom = artisan.Nom;
            oldArtisan.QualificationArtisanID = artisan.QualificationArtisanID;
            // oldArtisan.QualificationArtisan.Nom = artisan.QualificationArtisan.Nom;
            // oldArtisan.QualificationArtisan.QualificationArtisanID = artisan.QualificationArtisan.QualificationArtisanID;


            //db.Entry(artisan).State = EntityState.Modified;

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

            Artisan newArtisan = new Artisan();

            newArtisan.Nom = artisan.Nom;
            newArtisan.QualificationArtisanID = artisan.QualificationArtisanID;


            db.Artisans.Add(newArtisan);
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