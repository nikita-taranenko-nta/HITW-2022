using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace HITW.Models;

public partial class HitwContext : DbContext
{
    protected readonly IConfiguration Configuration;

    public HitwContext(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
    {
        // connect to sql server with connection string from app settings
        options.UseSqlServer(Configuration.GetConnectionString("HitwDatabase"));
    }

    //protected override void OnModelCreating(ModelBuilder modelBuilder)
    //{

    //}
}
