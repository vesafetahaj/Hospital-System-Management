using Microsoft.AspNetCore.Mvc;

namespace Hospital_System.Controllers
{
    public class PatientController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
