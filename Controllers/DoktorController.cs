using Hospital_System.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Data;

namespace Hospital_System.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoktorController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public DoktorController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet] //Read

        public JsonResult Get()
        {
            string query = @"select * from Doktor";
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

        public JsonResult Post(Doktor d)
        {
            string query = @"INSERT INTO Doktor (DoktorID, Emri, Specializimi, NumriTelefonit, Email) VALUES (@DoktorID,@Emri, @Specializimi, @NumriTelefonit, @Email)";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@DoktorID", d.DoktorID);
                    myCommand.Parameters.AddWithValue("@Emri", d.Emri);
                    myCommand.Parameters.AddWithValue("@Specializimi", d.Specializimi);
                    myCommand.Parameters.AddWithValue("@NumriTelefonit", d.NumriTelefonit);
                    myCommand.Parameters.AddWithValue("@Email", d.Email);
                    

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Added successfully!");
        }
        [HttpPut] //Update

        public JsonResult Put(Doktor d)
        {
            string query = @"update Dokto 
                            set Emri = @Emri, Specializimi = @Specializimi,
                            NumriTelefonit = @NumriTelefonit, Email = @Email
                            where DoktorID = @DoktorID";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@DoktorID", d.DoktorID);
                    myCommand.Parameters.AddWithValue("@Emri", d.Emri);
                    myCommand.Parameters.AddWithValue("@Specializimi", d.Specializimi);
                    myCommand.Parameters.AddWithValue("@NumriTelefonit", d.NumriTelefonit);
                    myCommand.Parameters.AddWithValue("@Email", d.Email);
                    //rolin
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Updated successfully!");
        }
        [HttpDelete("{DoktorID}")] //Delete

        public JsonResult Delete(int DoktorID)
        {
            string query = @"delete from Doktor 
                            where DoktorID = @DoktorID";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@DoktorID", DoktorID);

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
