using Examinator.Api.Repositories;
using Examinator.Api.Services;
using Npgsql;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    // Nessuna autenticazione in gioco e il frontend gira su un'origine diversa
    // in sviluppo (es. Vite su localhost:5173): per ora si accetta qualunque
    // origine. Da restringere quando l'app avra' un dominio reale.
    options.AddDefaultPolicy(policy => policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
});

var connectionString = builder.Configuration.GetConnectionString("Default")
    ?? throw new InvalidOperationException("Connection string 'Default' non configurata.");
builder.Services.AddSingleton(NpgsqlDataSource.Create(connectionString));

// Un'interfaccia per strato: il controller dipende da IQuestionService, mai
// direttamente da QuestionRepository. Sostituire l'accesso ai dati (o iniettare
// un doppio nei test) non richiede toccare service o controller.
builder.Services.AddScoped<IQuestionRepository, QuestionRepository>();
builder.Services.AddScoped<IQuestionService, QuestionService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors();
app.MapControllers();
app.MapGet("/health", () => Results.Ok());

app.Run();
