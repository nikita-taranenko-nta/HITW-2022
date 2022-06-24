var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Hello World!");
app.MapGet("/other", () => "Other Hello World!");

app.Run();


POST /projects
PUT  /projects/{id}

- UserId: int
        - Productive unit: string Companyname
        - Country: 2 letters
        - Region/Province: string
        - Municipality/District: string
        - Producer: Boer -> search after 3 characters
        - Contact details: free text
        - Confidential information: Free text (big text area)
	
GET /projects
    /projects/{id}


