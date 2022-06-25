namespace HITW.Web.Models;

public class ProjectResponse
{
    public int                       Id                      { get; set; }
    public string?                   Name                    { get; set; }
    public string?                   ProductiveUnit          { get; set; }
    public string?                   Country                 { get; set; }
    public string?                   Region                  { get; set; }
    public string?                   Municipality            { get; set; }
    public string?                   ContactDetails          { get; set; }
    public string?                   ConfidentialInformation { get; set; }
    public string?                   TermsOfUseComment       { get; set; }
    public string?                   ProducerLesson          { get; set; }
    public string?                   TeamLesson              { get; set; }
    public List<ThemeScoreResponse>? ThemeScores             { get; set; }
}
