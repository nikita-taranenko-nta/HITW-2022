using HITW.Business.Repositories;
using HITW.Models;
using HITW.Models.Entities;
using HITW.Web;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddHttpClient();
builder.Services.AddCors();
builder.Services.AddScoped<HitwContext>();
builder.Services.AddScoped<IDatabaseRepository, DatabaseRepository>();
builder.Services.AddScoped<IModelMapper, ModelMapper>();
var app = builder.Build();
app.UseSwagger();
app.UseSwaggerUI();

app.UseSwaggerUI(options =>
{
    options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
    options.RoutePrefix = string.Empty;
});

app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
app.MapGet("/projects",      (IDatabaseRepository databaseRepository) => databaseRepository.GetProjects());
app.MapGet("/projects/{id}", (int id, IDatabaseRepository databaseRepository, IModelMapper modelMapper) => modelMapper.mapProject(databaseRepository.GetProject(id)));
app.MapPost("/projects", (Project project, IDatabaseRepository databaseRepository) => databaseRepository.AddProject(project));
app.MapDelete("/projects/{id}", (int id, IDatabaseRepository databaseRepository) => databaseRepository.RemoveProject(id));
app.MapGet("/persons/{id}/projects", (int id, IDatabaseRepository databaseRepository) => databaseRepository.GetProjects());
app.MapGet("/questionnaire",         (IDatabaseRepository databaseRepository) => databaseRepository.GetQuestionnaire());
app.Run();
