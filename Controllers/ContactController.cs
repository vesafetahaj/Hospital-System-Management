using Hospital_System.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Data;

namespace Hospital_System.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public ContactController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet] //Read

        public JsonResult Get()
        {
            string query = @"select * from Contact";
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

        public JsonResult Post(Contact c)
        {
            string query = @"INSERT INTO Contact (Name, Email, Number, Message) VALUES (@Name, @Email, @Number, @Message)";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {

                    myCommand.Parameters.AddWithValue("@Name", c.Name);
                    myCommand.Parameters.AddWithValue("@Email", c.Email);
                    myCommand.Parameters.AddWithValue("@Number", c.Number);
                    myCommand.Parameters.AddWithValue("@Message", c.Message);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Added successfully!");
        }
        [HttpPut] //Update

        public JsonResult Put(Contact c)
        {
            string query = @"update Contact 
                            set Name = @Name ,Email = @Email,Number = @Number, Message = @Message 
                            where ContactId = @ContactId";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@ContactId", c.ContactId);
                    myCommand.Parameters.AddWithValue("@Name", c.Name);
                    myCommand.Parameters.AddWithValue("@Email", c.Email);
                    myCommand.Parameters.AddWithValue("@Number", c.Number);
                    myCommand.Parameters.AddWithValue("@Message", c.Message);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Updated successfully!");
        }
        [HttpDelete("{ContactId}")] //Delete

        public JsonResult Delete(int ContactId)
        {
            string query = @"delete from Contact 
                            where ContactId = @ContactId";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@ContactId", ContactId);

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
