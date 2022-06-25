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

    public Project GetProject(int id)
    {
        return _hitwContext.Projects
                           .Include(x => x.ThemeScores).ThenInclude(x => x.Answers).ThenInclude(x => x.Question)
                           .Include(x => x.ThemeScores).ThenInclude(x => x.Theme)
                           .Single(x => x.Id == id);
    }

    public List<Project> GetProjects(int personId)
    {
        return _hitwContext.Projects.Where(x => x.PersonId == personId).ToList();
    }

    public void AddProject(Project project)
    {
        _hitwContext.Projects.Add(project);

        _hitwContext.SaveChanges();

        var themeScores = _hitwContext.Themes.Select(x => new ThemeScore{ProjectId = project.Id, ThemeId = x.Id, }).ToList();
        _hitwContext.ThemeScores.AddRange(themeScores);

        _hitwContext.SaveChanges();

        foreach (var themeScore in themeScores)
        {
            var answers = _hitwContext.Questions.Where(x => x.ThemeId == themeScore.ThemeId).Select(x => new Answer
            {
                QuestionId   = x.Id,
                ThemeScoreId = themeScore.Id
            }).ToList();

            _hitwContext.Answers.AddRange(answers);
        }

        _hitwContext.SaveChanges();
    }

    public void UpdateProject(Project project)
    {
        try
        {
            _hitwContext.Projects.Update(project);
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
        var project = _hitwContext.Projects.SingleOrDefault(x => x.Id == id);

        if (project == null)
        {
            return;
        }

        _hitwContext.Projects.Remove(project);
        _hitwContext.SaveChanges();
    }

    public void UpdateTheme(Theme theme)
    {
        _hitwContext.Themes.Add(theme);
        _hitwContext.SaveChanges();
    }

    public void UpdateThemeIdentifiedActions(int themeScoreId, string? producerActions, string? teamActions)
    {
        var identifiedAction = _hitwContext.IdentifiedActions.Single(x => x.ThemeScoreId == themeScoreId);

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

        _hitwContext.IdentifiedActions.Update(identifiedAction);
        _hitwContext.SaveChanges();
    }

    public void UpdateLessonsLearned(int projectId, bool isProducer, string answer)
    {
        var projectLessonLearned = _hitwContext.ProjectLessonLearneds.Single(x => x.ProjectId == projectId);
        projectLessonLearned.Data = answer;
        projectLessonLearned.IsProducer = isProducer;

        _hitwContext.ProjectLessonLearneds.Update(projectLessonLearned);
        _hitwContext.SaveChanges();
    }

    public List<Project> GetProjects()
    {
        return _hitwContext.Projects.ToList();
    }

    public List<Theme> GetQuestionnaire()
    {
        return _hitwContext.Themes.Include(t=> t.Questions).ToList(); //.Include(t => t.Question).ToList();
    }
}

public interface IDatabaseRepository
{
    Project      GetProject(int id);
    List<Project> GetProjects();
    void          AddProject(Project project);
    void          UpdateProject(Project project);
    void          RemoveProject(int id);
    void          UpdateTheme(Theme theme);
    void          UpdateThemeIdentifiedActions(int themeScoreId, string? producerActions, string? teamActions);
    void          UpdateLessonsLearned(int projectId, bool isProducer, string answer);
    List<Theme> GetQuestionnaire();
}
