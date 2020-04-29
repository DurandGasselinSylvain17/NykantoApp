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
    public class CollectionController : ApiController
    {
        private DBModel db = new DBModel();

        // GET: api/Collection
        public IQueryable<Collection> GetCollections()
        {
            return db.Collections;
        }

        // GET: api/Collection/5
        [ResponseType(typeof(Collection))]
        public IHttpActionResult GetCollection(int id)
        {
            Collection collection = db.Collections.Find(id);
            if (collection == null)
            {
                return NotFound();
            }

            return Ok(collection);
        }

        // PUT: api/Collection/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCollection(int id, Collection collection)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != collection.CollectionID)
            {
                return BadRequest();
            }

            db.Entry(collection).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CollectionExists(id))
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

        // POST: api/Collection
        [ResponseType(typeof(Collection))]
        public IHttpActionResult PostCollection(Collection collection)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Collections.Add(collection);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = collection.CollectionID }, collection);
        }

        // DELETE: api/Collection/5
        [ResponseType(typeof(Collection))]
        public IHttpActionResult DeleteCollection(int id)
        {
            Collection collection = db.Collections.Find(id);
            if (collection == null)
            {
                return NotFound();
            }

            db.Collections.Remove(collection);
            db.SaveChanges();

            return Ok(collection);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CollectionExists(int id)
        {
            return db.Collections.Count(e => e.CollectionID == id) > 0;
        }
    }
}