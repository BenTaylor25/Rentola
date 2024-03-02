using Rentola.Services.Items;

const string FRONTEND_URL = "http://localhost:5173";

var builder = WebApplication.CreateBuilder(args);
{
    builder.Services.AddControllers();
    builder.Services.AddScoped<IItemService, ItemService>();
    builder.Services.AddSwaggerGen();
    builder.Services.AddCors(setup => {
        setup.AddDefaultPolicy(policyBuilder => {
            policyBuilder
                .WithOrigins(FRONTEND_URL)
                .WithMethods("GET", "POST", "PUT", "DELETE")
                .AllowAnyHeader();
        });
    });
}

var app = builder.Build();
{
    app.UseHttpsRedirection();
    app.UseCors();
    app.MapControllers();
}

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.Run();
