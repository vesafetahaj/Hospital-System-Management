using Microsoft.AspNetCore.Mvc;

namespace Hospital_System.Controllers
{

    [ApiController]
    [Route("Administrator")]
    public class AdministratorController : Controller
    {
        public IActionResult AdministratorIndex()
        {
            ViewData["Message"] = "Welcome to the Administrator dashboard!";
            return View("~/Pages/AdministratorDashboard.cshtml");
        }
    }
}
