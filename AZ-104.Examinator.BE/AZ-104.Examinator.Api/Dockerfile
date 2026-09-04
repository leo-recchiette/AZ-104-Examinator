# Il build context e' la radice del repo, come per gli altri servizi.
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src

COPY AZ-104.Examinator.BE/AZ-104.Examinator.Api/AZ-104.Examinator.Api.csproj AZ-104.Examinator.BE/AZ-104.Examinator.Api/
RUN dotnet restore AZ-104.Examinator.BE/AZ-104.Examinator.Api/AZ-104.Examinator.Api.csproj

COPY AZ-104.Examinator.BE/AZ-104.Examinator.Api/ AZ-104.Examinator.BE/AZ-104.Examinator.Api/
RUN dotnet publish AZ-104.Examinator.BE/AZ-104.Examinator.Api/AZ-104.Examinator.Api.csproj -c Release -o /app --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS runtime
WORKDIR /app
COPY --from=build /app .
# Screenshot delle domande hotspot/drag_and_drop/hotspot_yes_no, serviti da
# app.UseStaticFiles() su /images/<file>. Copiati a build time (come il JSON
# per l'importer), non bind-montati: un rebuild va rilanciato dopo un
# aggiornamento delle immagini.
COPY AZ-104.QuestionsDataset/az104_Dataset_Images/ /app/wwwroot/images/

EXPOSE 8080
ENTRYPOINT ["dotnet", "AZ-104.Examinator.Api.dll"]
