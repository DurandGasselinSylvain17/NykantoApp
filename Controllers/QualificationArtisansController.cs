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
    public class QualificationArtisansController : ApiController
    {
        private DBModel db = new DBModel();

        // GET: api/QualificationArtisans
        public IQueryable<QualificationArtisan> GetQualificationArtisans()
        {
            return db.QualificationArtisans;
        }

        // GET: api/QualificationArtisans/5
        [ResponseType(typeof(QualificationArtisan))]
        public IHttpActionResult GetQualificationArtisan(int id)
        {
            QualificationArtisan qualificationArtisan = db.QualificationArtisans.Find(id);
            if (qualificationArtisan == null)
            {
                return NotFound();
            }

            return Ok(qualificationArtisan);
        }

        // PUT: api/QualificationArtisans/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutQualificationArtisan(int id, QualificationArtisan qualificationArtisan)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != qualificationArtisan.QualificationArtisanID)
            {
                return BadRequest();
            }

            db.Entry(qualificationArtisan).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!QualificationArtisanExists(id))
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

        // POST: api/QualificationArtisans
        [ResponseType(typeof(QualificationArtisan))]
        public IHttpActionResult PostQualificationArtisan(QualificationArtisan qualificationArtisan)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.QualificationArtisans.Add(qualificationArtisan);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = qualificationArtisan.QualificationArtisanID }, qualificationArtisan);
        }

        // DELETE: api/QualificationArtisans/5
        [ResponseType(typeof(QualificationArtisan))]
        public IHttpActionResult DeleteQualificationArtisan(int id)
        {
            QualificationArtisan qualificationArtisan = db.QualificationArtisans.Find(id);
            if (qualificationArtisan == null)
            {
                return NotFound();
            }

            db.QualificationArtisans.Remove(qualificationArtisan);
            db.SaveChanges();

            return Ok(qualificationArtisan);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool QualificationArtisanExists(int id)
        {
            return db.QualificationArtisans.Count(e => e.QualificationArtisanID == id) > 0;
        }
    }
}