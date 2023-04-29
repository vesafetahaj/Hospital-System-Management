using Microsoft.AspNetCore.Mvc;

namespace Hospital_System.Controllers
{
    public class DoctorController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
