using HITW.Models.Entities;
using HITW.Web.Models;

namespace HITW.Web;

public class ModelMapper : IModelMapper
{
    public ProjectResponse mapProject(Project project) => new()
    {
        Id                      = project.Id,
        Name                    = project.Name,
        ProductiveUnit          = project.ProductiveUnit,
        Country                 = project.Country,
        Region                  = project.Region,
        Municipality            = project.Municipality,
        ContactDetails          = project.ContactDetails,
        ConfidentialInformation = project.ConfidentialInformation,
        TermsOfUseComment       = project.TermsOfUseComment,
        ProducerLesson          = project.ProducerLesson,
        TeamLesson              = project.TeamLesson,
        ThemeScores = project.ThemeScores.Select(x => new ThemeScoreResponse
        {
            Id      = x.Id,
            Score   = x.Score,
            Comment = x.Comment,
            Theme = new ThemeResponse
            {
                Id   = x.Theme.Id,
                Name = x.Theme.Name
            },
            QuestionAnswers = x.Answers.Select(y => new QuestionAnswerResponse
            {
                ThemeId  = y.ThemeScore.ThemeId,
                Question = y.Question.Data,
                Answer   = y.Data
            }).ToList()
        }).ToList()
    };
}

public interface IModelMapper
{
    ProjectResponse mapProject(Project project);
}
