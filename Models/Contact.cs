using System.ComponentModel.DataAnnotations;

namespace Hospital_System.Models
{
    public class Contact
    {

        public int ContactId { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        public string Number { get; set; }

        public string Message { get; set; }


    }
}
