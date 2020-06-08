using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    public class BulkProduitsController : ApiController
    {
        private DBModel db = new DBModel();

        // GET: api/BulkProduits
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/BulkProduits/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/BulkProduits
        public void Post(int[] ids, int quantity)
        {
            List<int> IdsPiecesAProd = new List<int>();

            foreach (int elem in ids)
            {
                List<int> IdsPieces = new List<int>();

                IdsPieces = (from tbl in db.Pieces
                             where tbl.Article.ArticleID == elem
                             select tbl.PieceID).Distinct().ToList();

                IdsPiecesAProd.AddRange(IdsPieces);
            }

            int j = 0;
            while (j < quantity)
            {           //A finir ci dessous
                foreach (int elem in IdsPiecesAProd)
                {
                    Produit newProduit = new Produit();

                    newProduit.PieceID = elem;
                    newProduit.StatutProduitID = 1;
                    // "" à remplacer avec méthode de génération de codes barres.
                    newProduit.CodeBarre = "";

                    db.Produits.Add(newProduit);
                }
                j++;
            }

            db.SaveChanges();
        }

        // PUT: api/BulkProduits/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/BulkProduits/5
        public void Delete(int id)
        {
        }
    }
}
