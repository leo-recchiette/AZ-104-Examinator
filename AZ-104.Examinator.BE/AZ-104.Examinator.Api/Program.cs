using Examinator.Api.Repositories;
using Examinator.Api.Services;
using Examinator.Api.Services.Interfaces;
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

builder.Services.AddScoped<IQuestionRepository, QuestionRepository>();
builder.Services.AddScoped<IQuestionService, QuestionService>();
builder.Services.AddScoped<IExamResultService, ExamResultService>();
// Singleton: nessuno stato, nessuna dipendenza da una richiesta specifica.
builder.Services.AddSingleton<IScoreService, ScoreService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.MapGet("/", () => Results.Redirect("/swagger")).ExcludeFromDescription();
}

app.UseStaticFiles();
app.UseCors();
app.MapControllers();

app.Run();