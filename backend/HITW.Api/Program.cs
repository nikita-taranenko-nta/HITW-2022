using HITW.Business.Repositories;
using HITW.Models;
using HITW.Models.Entities;
using HITW.Web.Models;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddHttpClient();

builder.Services.AddControllersWithViews().AddNewtonsoftJson(options => options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);

builder.Services.AddScoped<HitwContext>();
builder.Services.AddScoped<IDatabaseRepository, DatabaseRepository>();

var app = builder.Build();
app.UseSwagger();
app.UseSwaggerUI();

app.UseSwaggerUI(options =>
{
    options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
    options.RoutePrefix = string.Empty;
});


app.MapGet("/project/{id}",         (int id, IDatabaseRepository databaseRepository) =>
{
    var project = databaseRepository.GetProject(id);


    return new ProjectResponse
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
                ThemeId = y.ThemeScore.ThemeId,
                Question = y.Question.Data,
                Answer = y.Data
            }).ToList()
        }).ToList()
    };
});
app.MapGet("/person/{id}/projects", (int id, IDatabaseRepository databaseRepository) =>
{
    return databaseRepository.GetProjects();
});
app.MapPost("/project",              (Project project, IDatabaseRepository databaseRepository) => databaseRepository.AddProject(project));


//app.MapGet("/project",      (IDatabaseRepository databaseRepository) => databaseRepository.GetProjects());

//app.MapPut("/project/{id}", (int id, Project p, IDatabaseRepository databaseRepository) => databaseRepository.Update(p));


app.MapDelete("/project/{id}", (int id, IDatabaseRepository databaseRepository) =>
{
    var item = databaseRepository.GetProjects();
    if (item == null)
        return Results.NotFound();
    //databaseRepository.Remove(item);
    return Results.Ok();
});
app.MapGet("/producer/{name}", (string name) => { throw new NotImplementedException(); });
//app.MapPut("/themeScore/{id}", (int id) => InMemoryThemeScore.Find(t => t.Id == id));

app.MapGet("/questionnaire", (IDatabaseRepository databaseRepository) =>
{
    List<Theme> themes =  databaseRepository.GetQuestionnaire();

    return themes;
});

app.Run();

public partial class Program
{
}

//-UserId: int
//        -Productive unit: string Companyname
//        -Country: 2 letters
//        - Region / Province: string
//        -Municipality / District: string
//        -Producer: Boer->search after 3 characters
//        - Contact details: free text
//        -Confidential information: Free text(big text area)

//POST   /projects
//PUT    /projects/{id}
//DELETE /projects/{id}

//	- UserId: int
//	- Productive unit: string Companyname
//	- Country: 2 letters
//	- Region/Province: string
//	- Municipality/District: string
//	- Producer: Boer -> search after 3 characters
//	- Contact details: free text
//	- Confidential information: Free text (big text area)
	
//GET  /projects
//	 /projects/{id}
//	 Thema {Id, Name, List<Question> questions} Question {Id, Name}
	
//PUT /theme/{id} => List<QuestionAnswer> {question id, string answer}, totalscore int, string free text field
