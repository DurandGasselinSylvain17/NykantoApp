﻿using System;
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
    public class ProductionController : ApiController
    {
        private DBModel db = new DBModel();

        // GET: api/Production
        public IQueryable<Production> GetProductions()
        {
            return db.Productions;
        }

        // GET: api/Production/5
        [ResponseType(typeof(Production))]
        public IHttpActionResult GetProduction(int id)
        {
            Production production = db.Productions.Find(id);
            if (production == null)
            {
                return NotFound();
            }

            return Ok(production);
        }

        // PUT: api/Production/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutProduction(int id, Production production)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != production.ProductionID)
            {
                return BadRequest();
            }

            db.Entry(production).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductionExists(id))
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

        // POST: api/Production
        [ResponseType(typeof(Production))]
        public IHttpActionResult PostProduction(Production production)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Productions.Add(production);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = production.ProductionID }, production);
        }

        // DELETE: api/Production/5
        [ResponseType(typeof(Production))]
        public IHttpActionResult DeleteProduction(int id)
        {
            Production production = db.Productions.Find(id);
            if (production == null)
            {
                return NotFound();
            }

            db.Productions.Remove(production);
            db.SaveChanges();

            return Ok(production);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ProductionExists(int id)
        {
            return db.Productions.Count(e => e.ProductionID == id) > 0;
        }
    }
}