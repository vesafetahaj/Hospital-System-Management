using Hospital_System.Models;
using System.Data.SqlClient;
public class UserRepository
{
    private readonly string _connectionString;

    public UserRepository(string connectionString)
    {
        _connectionString = connectionString;
    }

    public User GetUserByUsernameAndPassword(string Email, string Password)
    {
        using (var connection = new SqlConnection(_connectionString))
        {
            connection.Open();
            var command = new SqlCommand("SELECT UserId, Email, Password FROM Users WHERE Email = @Email AND Password = @Password", connection);
            command.Parameters.AddWithValue("@Email", Email);
            command.Parameters.AddWithValue("@Password", Password);
            var reader = command.ExecuteReader();
            if (reader.Read())
            {
                var user = new User
                {
                    UserId = reader.GetInt32(reader.GetOrdinal("UserId")),
                    Email = reader.GetString(reader.GetOrdinal("Email")),
                    Password = reader.GetString(reader.GetOrdinal("Password"))
                };
                return user;
            }
            else
            {
                return null;
            }
        }
    }
}
