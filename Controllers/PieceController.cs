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
    public class PieceController : ApiController
    {
        private DBModel db = new DBModel();

        // GET: api/Piece
        public IQueryable<Piece> GetPieces()
        {
            return db.Pieces;
        }

        // GET: api/Piece/5
        [ResponseType(typeof(Piece))]
        public IHttpActionResult GetPiece(int id)
        {
            Piece piece = db.Pieces.Find(id);
            if (piece == null)
            {
                return NotFound();
            }

            return Ok(piece);
        }

        // PUT: api/Piece/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPiece(int id, Piece piece)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != piece.PieceID)
            {
                return BadRequest();
            }

            db.Entry(piece).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PieceExists(id))
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

        // POST: api/Piece
        [ResponseType(typeof(Piece))]
        public IHttpActionResult PostPiece(Piece piece)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Pieces.Add(piece);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = piece.PieceID }, piece);
        }

        // DELETE: api/Piece/5
        [ResponseType(typeof(Piece))]
        public IHttpActionResult DeletePiece(int id)
        {
            Piece piece = db.Pieces.Find(id);
            if (piece == null)
            {
                return NotFound();
            }

            db.Pieces.Remove(piece);
            db.SaveChanges();

            return Ok(piece);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PieceExists(int id)
        {
            return db.Pieces.Count(e => e.PieceID == id) > 0;
        }
    }
}