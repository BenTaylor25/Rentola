using Rentola.Services.Items;

var builder = WebApplication.CreateBuilder(args);
{
    builder.Services.AddControllers();
    builder.Services.AddScoped<IItemService, ItemService>();
    builder.Services.AddSwaggerGen();
    builder.Services.AddCors(setup => {
        setup.AddDefaultPolicy(policyBuilder => {
            policyBuilder
                .WithOrigins("http://localhost:5173")
                .WithMethods("GET", "POST", "PUT", "DELETE");
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
