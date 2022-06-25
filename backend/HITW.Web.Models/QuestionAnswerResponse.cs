namespace HITW.Web.Models;

public class QuestionAnswerResponse
{
    public int     Id       { get; set; }
    public int?    ThemeId  { get; set; }
    public string? Question { get; set; }
    public string? Answer   { get; set; }
}
