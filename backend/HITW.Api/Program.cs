using HITW.Business.Repositories;
using HITW.Models;
using HITW.Models.Entities;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddHttpClient();

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


app.MapGet("/project/{id}", (int id, IDatabaseRepository databaseRepository) => databaseRepository.GetProjects(id));
app.MapGet("/project",      (IDatabaseRepository databaseRepository) => databaseRepository.GetProjects());

app.MapPost("/project", (Project p , IDatabaseRepository databaseRepository) => databaseRepository.UpdateProject(p));

app.MapPut("/project/{id}", (int id, Project p, IDatabaseRepository databaseRepository) => databaseRepository.Update(p));


app.MapDelete("/project/{id}", (int id, IDatabaseRepository databaseRepository) =>
{
    var item = databaseRepository.GetProjects(id);
    if (item == null)
        return Results.NotFound();
    databaseRepository.Remove(item);
    return Results.Ok();
});
app.MapGet("/producer/{name}", (string name) => { throw new NotImplementedException(); });
app.MapPut("/themeScore/{id}", (int id) => InMemoryThemeScore.Find(t => t.Id == id));

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