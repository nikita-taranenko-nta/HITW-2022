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

    public Project? GetProjects(int id)
    {
        return _hitwContext.Project.SingleOrDefault(x => x.Id == id);
    }

    public void AddProject(Project project)
    {
        _hitwContext.Project.Add(project);
        _hitwContext.SaveChanges();
    }

    public void UpdateProject(Project project)
    {
        try
        {
            _hitwContext.Project.Update(project);
            _hitwContext.SaveChanges();
        }
        catch (Exception e)
        {
            Console.WriteLine(e);

            throw;
        }
    }

    public void RemoveProject(int id)
    {
        var project = _hitwContext.Project.SingleOrDefault(x => x.Id == id);

        if (project == null)
        {
            return;
        }

        _hitwContext.Project.Remove(project);
        _hitwContext.SaveChanges();
    }

    public void UpdateTheme(Theme theme)
    {
        _hitwContext.Theme.Add(theme);
        _hitwContext.SaveChanges();
    }

    public void UpdateThemeIdentifiedActions(int themeScoreId, string? producerActions, string? teamActions)
    {
        var identifiedAction = _hitwContext.IdentifiedAction.Single(x => x.ThemeScoreId == themeScoreId);

        if (producerActions != null)
        {
            identifiedAction.Data  = producerActions;
            identifiedAction.Actor = "Producer";
        }

        if (teamActions != null)
        {
            identifiedAction.Data  = teamActions;
            identifiedAction.Actor = "Team";
        }

        _hitwContext.IdentifiedAction.Update(identifiedAction);
        _hitwContext.SaveChanges();
    }

    public void UpdateLessonsLearned(int projectId, bool isProducer, string answer)
    {
        var projectLessonLearned = _hitwContext.ProjectLessonLearned.Single(x => x.ProjectId == projectId);
        projectLessonLearned.Data = answer;
        projectLessonLearned.IsProducer = isProducer;

        _hitwContext.ProjectLessonLearned.Update(projectLessonLearned);
        _hitwContext.SaveChanges();
    }

    public List<Project> GetProjects()
    {
        //return _hitwContext.Project.Where(x => x.PersonId == personId).ToList();
        return _hitwContext.Project.ToList();
    }

    public List<Theme> GetQuestionnaire()
    {
         throw new NotImplementedException();
    }
}

public interface IDatabaseRepository
{
    Project?      GetProjects(int id);
    List<Project> GetProjects();
    void          AddProject(Project project);
    void          UpdateProject(Project project);
    void          RemoveProject(int id);
    void          UpdateTheme(Theme theme);
    void          UpdateThemeIdentifiedActions(int themeScoreId, string? producerActions, string? teamActions);
    void          UpdateLessonsLearned(int projectId, bool isProducer, string answer);
    List<Theme> GetQuestionnaire();
}
