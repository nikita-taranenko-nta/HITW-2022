namespace HITW.Web.Models;

public class ThemeScoreResponse
{
    public int                           Id              { get; set; }
    public int?                          Score           { get; set; }
    public string?                       Comment         { get; set; }
    public ThemeResponse?                Theme           { get; set; }
    public List<QuestionAnswerResponse>? QuestionAnswers { get; set; }
}
