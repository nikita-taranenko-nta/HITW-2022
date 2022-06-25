using HITW.Models.Entities;

namespace HITW.Business.Repositories;

public class DatabaseRepository : IDatabaseRepository
{
    public Project GetProject(int id)
    {
        return new Project();
    }
}

public interface IDatabaseRepository
{
    Project? GetProject(int id);
}
