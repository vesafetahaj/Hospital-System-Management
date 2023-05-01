using System.Collections.Generic;
using System.Linq;
using Hospital_System.Models;
using Hospital_System.Database_Connection;
using Microsoft.Data.SqlClient;

namespace Hospital_System.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly DBConnection _context;
        private readonly string _connectionString;

        public UserRepository(DBConnection context, string connectionString)
        {
            _context = context;
            _connectionString = connectionString;
        }

        /* public void InsertUser(User user)
         {
             _context.Users.Add(user);
             _context.SaveChanges();
         }*/
        public void InsertUser(User user)
        {
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                SqlCommand command = new SqlCommand("INSERT INTO Users (UserId, Name, Surname, Email, Password) " +
                                                        "VALUES (@UserId, @Name, @Surname, @Email, @Password)", connection);

                command.Parameters.AddWithValue("@UserId", user.UserId);
                command.Parameters.AddWithValue("@Name", user.Name);
                command.Parameters.AddWithValue("@Surname", user.Surname);
                command.Parameters.AddWithValue("@Email", user.Email);
                command.Parameters.AddWithValue("@Password", user.Password);


                command.ExecuteNonQuery();
            }
        }



        public User GetUserByEmail(string email)
        {
            return _context.Users.FirstOrDefault(u => u.Email == email);
        }

        public List<User> GetAllUsers()
        {
            return _context.Users.ToList();
        }
        public User GetUserById(int userId)
        {
            var user = _context.Users.Find(userId);
            if (user != null)
            {
                return user;
            }
            else { return null; }
            
        }


        public void UpdateUser(User user)
        {
            _context.Users.Update(user);
            _context.SaveChanges();
        }

        public void DeleteUser(int userId)
        {
            var user = _context.Users.Find(userId);
            if (user != null)
            {
                _context.Users.Remove(user);
                _context.SaveChanges();
            }
        }


    }
}
