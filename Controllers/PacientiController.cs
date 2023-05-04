using Hospital_System.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Data;

namespace Hospital_System.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PacientiController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public PacientiController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet] //Read

        public JsonResult Get()
        {
            string query = @"select * from Pacienti";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }
        [HttpPost]//Insert

        public JsonResult Post(Pacienti p)
        {
            string query = @"INSERT INTO Pacienti (Emri, Mbiemri, Datelindja, Numri_i_telefonit, Qyteti, Shteti) VALUES (@Emri, @Mbiemri, @Datelindja, @Numri_i_telefonit, @Qyteti, @Shteti)";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {

                    myCommand.Parameters.AddWithValue("@Emri", p.Emri);
                    myCommand.Parameters.AddWithValue("@Mbiemri", p.Mbiemri);
                    myCommand.Parameters.AddWithValue("@Datelindja", p.Datelindja);
                    myCommand.Parameters.AddWithValue("@Numri_i_telefonit", p.Numri_i_telefonit);
                    myCommand.Parameters.AddWithValue("@Qyteti", p.Qyteti);
                    myCommand.Parameters.AddWithValue("@Shteti", p.Shteti);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Added successfully!");
        }
        [HttpPut] //Update

        public JsonResult Put(Pacienti p)
        {
            string query = @"update Pacienti 
                            set Emri = @Emri, Mbiemri = @Mbiemri, Datelindja = @Datelindja,
                            Numri i telefonit = @Numri_i_telefonit, Qyteti = @Qyteti, Shteti = @Shteti
                            where PacientiId = @PacientiId";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@PacientiId", p.PacientiId);
                    myCommand.Parameters.AddWithValue("@Emri", p.Emri);
                    myCommand.Parameters.AddWithValue("@Mbiemri", p.Mbiemri);
                    myCommand.Parameters.AddWithValue("@Datelindja", p.Datelindja);
                    myCommand.Parameters.AddWithValue("@Numri_i_telefonit", p.Numri_i_telefonit);
                    myCommand.Parameters.AddWithValue("@Qyteti", p.Qyteti);
                    myCommand.Parameters.AddWithValue("@Shteti", p.Shteti);
                    //rolin
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Updated successfully!");
        }
        [HttpDelete("{PacientiId}")] //Delete

        public JsonResult Delete(int PacientiId)
        {
            string query = @"delete from Pacienti 
                            where PacientiId = @PacientiId";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@PacientiId", PacientiId);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Deleted successfully!");
        }
    }
}