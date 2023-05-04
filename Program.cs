using Hospital_System.Database_Connection;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System.Web.Http.Cors;

namespace Hospital_System
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddControllers().AddNewtonsoftJson();
            builder.Services.AddControllersWithViews();
            //database
            builder.Services.AddDbContext<DBConnection>(optins => optins.UseSqlServer(
                builder.Configuration.GetConnectionString("DefaultConnection")));

            //identities
            //builder.Services.AddIdentity<>

            builder.Services.AddDistributedMemoryCache();

            builder.Services.AddSession(options =>
            {
                options.IdleTimeout = TimeSpan.FromSeconds(10);
                options.Cookie.HttpOnly = true;
                options.Cookie.IsEssential = true;
            });

            var app = builder.Build();


            // Configure the HTTP request pipeline.
            if (!app.Environment.IsDevelopment())
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseRouting();
            EnableCorsAttribute cors = new EnableCorsAttribute("*", "*", "*");

            app.UseAuthorization();

            app.UseSession();


            app.MapControllerRoute(
            name: "default",
            pattern: "{controller}/{action=Index}/{id?}");

            app.MapControllerRoute(
            name: "User",
            pattern: "api/[controller]/{action=Index}/{id?}",
            defaults: new { controller = "User" });

            app.MapControllerRoute(
            name: "Login",
            pattern: "api/[controller]/{action=Index}/{id?}",
            defaults: new { controller = "Login" });

            app.MapControllerRoute(
            name: "Contact",
            pattern: "api/[controller]/{action=Index}/{id?}",
            defaults: new { controller = "Contact" });

            app.MapFallbackToFile("index.html");

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.Run();
        }
    }
}
