using HITW.Models;
using HITW.Models.Entities;

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

    public void UpdateProject(Project project)
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

    public List<Project> GetProjects(int personId)
    {
        return _hitwContext.Project.Where(x => x.PersonId == personId).ToList();
    }
}

public interface IDatabaseRepository
{
    Project?      GetProject(int id);
    List<Project> GetProjects(int personId);
    void          AddProject(Project project);
    void          UpdateProject(Project project);
    void          RemoveProject(int id);
    void          UpdateTheme(Theme theme);
    void          UpdateThemeSummaryActions(int themeId, string producerActions, string teamActions);
    void          UpdateLessonsLearned(int projectId, bool isProducer, string answer);
    void          AddPriori(List<>);
    void          AddPostAssessment(int projectId, bool isProducer, string answer);
}
