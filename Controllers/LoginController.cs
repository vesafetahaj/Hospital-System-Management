using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Hospital_System.Models;
using Hospital_System.Database_Connection;

namespace Hospital_System.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly DBConnection _context;

        public LoginController(DBConnection context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult Login(Login login)
        {
            if (ModelState.IsValid)
            {
                // Query the database to find a user with the provided email and password
                var user = _context.Users.FirstOrDefault(u => u.Email == login.Email && u.Password == login.Password);

                if (user != null)
                {
                    // If a matching user is found, create a session cookie to store their user ID
                    if (user.Password == login.Password)
                    {
                        // If the password is correct, create a session cookie to store their user ID
                        HttpContext.Session.SetInt32("UserId", user.UserId);

                        return Ok();
                    }
                    else
                    {
                        // If the password is incorrect, return a 401 Unauthorized status code
                        return Unauthorized("Incorrect password");
                    }

                }
               else
                {
                    // If no user is found with the provided email, return a 404 Not Found status code
                    return NotFound("User account not found");
                }
            }
            else
            {
                return BadRequest(ModelState);
            }
        }
    }
}
