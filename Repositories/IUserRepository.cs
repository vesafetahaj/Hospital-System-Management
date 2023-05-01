using Hospital_System.Models;

namespace Hospital_System.Repositories
{
    public interface IUserRepository
    {
        User GetUserById(int userId);
        User GetUserByEmail(string email);
        void InsertUser(User user);
        void UpdateUser(User user);
        void DeleteUser(int userId);
        List<User> GetAllUsers();
    }
}
