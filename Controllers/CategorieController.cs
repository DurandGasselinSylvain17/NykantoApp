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
    public class CategorieController : ApiController
    {
        private DBModel db = new DBModel();

        // GET: api/Categorie
        public IQueryable<Categorie> GetCategories()
        {
            return db.Categories;
        }

        // GET: api/Categorie/5
        [ResponseType(typeof(Categorie))]
        public IHttpActionResult GetCategorie(int id)
        {
            Categorie categorie = db.Categories.Find(id);
            if (categorie == null)
            {
                return NotFound();
            }

            return Ok(categorie);
        }

        // PUT: api/Categorie/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCategorie(int id, Categorie categorie)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != categorie.CategorieID)
            {
                return BadRequest();
            }

            db.Entry(categorie).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CategorieExists(id))
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

        // POST: api/Categorie
        [ResponseType(typeof(Categorie))]
        public IHttpActionResult PostCategorie(Categorie categorie)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Categories.Add(categorie);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = categorie.CategorieID }, categorie);
        }

        // DELETE: api/Categorie/5
        [ResponseType(typeof(Categorie))]
        public IHttpActionResult DeleteCategorie(int id)
        {
            Categorie categorie = db.Categories.Find(id);
            if (categorie == null)
            {
                return NotFound();
            }

            db.Categories.Remove(categorie);
            db.SaveChanges();

            return Ok(categorie);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CategorieExists(int id)
        {
            return db.Categories.Count(e => e.CategorieID == id) > 0;
        }
    }
}