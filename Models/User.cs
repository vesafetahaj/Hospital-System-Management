﻿using System.ComponentModel.DataAnnotations;

namespace Hospital_System.Models
{
    public class User
    {
        
        public int UserId { get; set; }

        public string Name { get; set; }
        public string Surname { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        
    }
}
