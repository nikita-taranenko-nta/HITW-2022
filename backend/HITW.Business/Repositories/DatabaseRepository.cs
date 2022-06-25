using HITW.Models;
using HITW.Models.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

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

    public void SetProject(Project project)
    {
        try
        {

            _hitwContext.Project.Add(project);
            _hitwContext.SaveChanges();
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
    }

    public List<Project> GetProject()
    {
        return _hitwContext.Project.ToList();
    }
}

public interface IDatabaseRepository
{
    Project? GetProject(int id);
    List<Project> GetProject();
    void SetProject(Project project);
}
