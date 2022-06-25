namespace HITW.Web.Models;

public class Question
{
    public int     Id      { get; set; }
    public int?    ThemeId { get; set; }
    public string? Name    { get; set; }
    public string? Data    { get; set; }
}
