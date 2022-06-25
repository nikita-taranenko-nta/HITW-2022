using HITW.Business.Repositories;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddScoped<IDatabaseRepository, DatabaseRepository>();

var app = builder.Build();

//using (var scope = app.Services.CreateScope())
//{
//    var sampleService = scope.ServiceProvider.GetRequiredService<SampleService>();
//    sampleService.DoSomething();
//}

app.MapGet("/project/{id}", (int id) => InMemoryProjects.Find(x => x.Id == id));
app.MapGet("/project", () => InMemoryProjects);

app.MapPost("/project", (Project p) => InMemoryProjects.Add(p));

app.MapPut("/project/{id}", (int id, Project newProj) =>
{
    var oldProj = InMemoryProjects.Find(x => x.Id == id);
    if (oldProj == null)
        return Results.NotFound();
    InMemoryProjects.Remove(oldProj);
    InMemoryProjects.Add(newProj);
    return Results.Ok();
});


app.MapDelete("/project/{id}", (int id) =>
{
    var item = InMemoryProjects.Find(x => x.Id == id);
    if (item == null)
        return Results.NotFound();
    InMemoryProjects.Remove(item);
    return Results.Ok();
});
app.MapGet("/producer/{name}", (string name) => { throw new NotImplementedException(); });
app.MapPut("/themeScore/{id}", (int id) => InMemoryThemeScore.Find(t => t.Id == id));

app.Run();

public partial class Program
{
    internal static List<Project> InMemoryProjects = new();
    internal static List<Theme> InMemoryThemeScore = new();
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