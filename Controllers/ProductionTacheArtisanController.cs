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
    public class ProductionTacheArtisanController : ApiController
    {
        private DBModel db = new DBModel();

        // GET: api/ProductionTacheArtisan
        public IQueryable<ProductionTacheArtisan> GetProductionTacheArtisans()
        {
            return db.ProductionTacheArtisans;
        }

        // GET: api/ProductionTacheArtisan/5
        [ResponseType(typeof(ProductionTacheArtisan))]
        public IHttpActionResult GetProductionTacheArtisan(int id)
        {
            ProductionTacheArtisan productionTacheArtisan = db.ProductionTacheArtisans.Find(id);
            if (productionTacheArtisan == null)
            {
                return NotFound();
            }

            return Ok(productionTacheArtisan);
        }

        // PUT: api/ProductionTacheArtisan/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutProductionTacheArtisan(int id, ProductionTacheArtisan productionTacheArtisan)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != productionTacheArtisan.ProductionTacheArtisanID)
            {
                return BadRequest();
            }

            db.Entry(productionTacheArtisan).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductionTacheArtisanExists(id))
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

        // POST: api/ProductionTacheArtisan
        [ResponseType(typeof(ProductionTacheArtisan))]
        public IHttpActionResult PostProductionTacheArtisan(ProductionTacheArtisan productionTacheArtisan)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ProductionTacheArtisans.Add(productionTacheArtisan);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (ProductionTacheArtisanExists(productionTacheArtisan.ProductionTacheArtisanID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = productionTacheArtisan.ProductionTacheArtisanID }, productionTacheArtisan);
        }

        // DELETE: api/ProductionTacheArtisan/5
        [ResponseType(typeof(ProductionTacheArtisan))]
        public IHttpActionResult DeleteProductionTacheArtisan(int id)
        {
            ProductionTacheArtisan productionTacheArtisan = db.ProductionTacheArtisans.Find(id);
            if (productionTacheArtisan == null)
            {
                return NotFound();
            }

            db.ProductionTacheArtisans.Remove(productionTacheArtisan);
            db.SaveChanges();

            return Ok(productionTacheArtisan);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ProductionTacheArtisanExists(int id)
        {
            return db.ProductionTacheArtisans.Count(e => e.ProductionTacheArtisanID == id) > 0;
        }
    }
}