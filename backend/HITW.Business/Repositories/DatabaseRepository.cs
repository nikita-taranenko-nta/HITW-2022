using HITW.Models;
using HITW.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace HITW.Business.Repositories;

public class DatabaseRepository : IDatabaseRepository
{
    private readonly HitwContext _hitwContext;

    public DatabaseRepository(HitwContext hitwContext)
    {
        _hitwContext = hitwContext;
    }
    public Project? GetProject(int id)
    {
        return _hitwContext.Project.SingleOrDefault(x => x.Id == id);
    }
}

public interface IDatabaseRepository
{
    Project? GetProject(int id);
}
