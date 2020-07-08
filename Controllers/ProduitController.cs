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
    public class ProduitController : ApiController
    {
        private DBModel db = new DBModel();

        // GET: api/Produit
        public IQueryable<Produit> GetProduits()
        {
            return db.Produits;
        }

        // GET: api/Produit/5
        [ResponseType(typeof(Produit))]
        public IHttpActionResult GetProduit(int id)
        {
            Produit produit = db.Produits.Find(id);
            if (produit == null)
            {
                return NotFound();
            }

            return Ok(produit);
        }

        // PUT: api/Produit/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutProduit(int id, Produit produit)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != produit.ProduitID)
            {
                return BadRequest();
            }

            db.Entry(produit).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProduitExists(id))
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

        // POST: api/Produit
        [ResponseType(typeof(Produit))]
        public IHttpActionResult PostProduit(Produit produit)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Produits.Add(produit);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = produit.ProduitID }, produit);
        }

        // DELETE: api/Produit/5
        [ResponseType(typeof(Produit))]
        public IHttpActionResult DeleteProduit(int id)
        {
            Produit produit = db.Produits.Find(id);
            if (produit == null)
            {
                return NotFound();
            }

            db.Produits.Remove(produit);
            db.SaveChanges();

            return Ok(produit);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ProduitExists(int id)
        {
            return db.Produits.Count(e => e.ProduitID == id) > 0;
        }
    }
}