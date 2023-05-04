using System.ComponentModel.DataAnnotations;

namespace Hospital_System.Models
{
    public class Pacienti
    {

        public int PacientiId { get; set; }

        public string Emri { get; set; }

        public string Mbiemri { get; set; }

        public string Datelindja { get; set; }

        public string Numri_i_telefonit { get; set; }

        public string Qyteti { get; set; }

        public string Shteti { get; set; }

    }
}