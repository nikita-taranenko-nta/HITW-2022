namespace HITW.Business.Repositories;

public class DatabaseRepository : IDatabaseRepository
{
    public Project GetProject(int id)
    {
        return new Project(1, "Project1");
    }
}

public interface IDatabaseRepository
{
    Project? GetProject(int id);
}
