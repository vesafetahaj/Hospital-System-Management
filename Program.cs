using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace Hospital_System
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddControllersWithViews();

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

            app.MapControllerRoute(
                name: "Administrator",
                pattern: "Administrator/{action=AdministratorIndex}/{id?}",
                defaults: new { controller = "Administrator" });

            app.MapControllerRoute(
                name: "Doctor",
                pattern: "Doctor/{action=Index}/{id?}",
                defaults: new { controller = "Doctor" });

            app.MapControllerRoute(
                name: "Patient",
                pattern: "Patient/{action=Index}/{id?}",
                defaults: new { controller = "Patient" });

            app.MapControllerRoute(
                name: "Receptionist",
                pattern: "Receptionist/{action=Index}/{id?}",
                defaults: new { controller = "Receptionist" });

            app.MapFallbackToFile("index.html");

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.Run();
        }
    }
}
