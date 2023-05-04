using Hospital_System.Models;
using Microsoft.EntityFrameworkCore;

namespace Hospital_System.Database_Connection
{
    public class DBConnection : DbContext
    {
        public DBConnection(DbContextOptions<DBConnection> options) : base(options)
        {
        }


        public DbSet<User> Users { get; set; }
       // public DbSet<Pacienti> Pacienti { get; set; } 


    }
}
