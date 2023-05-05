using System.ComponentModel.DataAnnotations;

namespace Hospital_System.Models
{
    public class Doktor
    {

        public int DoktorID { get; set; }

        public string Emri { get; set; }
        public string Specializimi { get; set; }

        public string NumriTelefonit { get; set; }

        public string Email { get; set; }



    }
}