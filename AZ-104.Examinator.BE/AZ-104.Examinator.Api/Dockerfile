# Il build context e' la radice del repo, come per gli altri servizi.
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src

COPY AZ-104.Examinator.BE/AZ-104.Examinator.Api/AZ-104.Examinator.Api.csproj AZ-104.Examinator.BE/AZ-104.Examinator.Api/
RUN dotnet restore AZ-104.Examinator.BE/AZ-104.Examinator.Api/AZ-104.Examinator.Api.csproj

COPY AZ-104.Examinator.BE/AZ-104.Examinator.Api/ AZ-104.Examinator.BE/AZ-104.Examinator.Api/
RUN dotnet publish AZ-104.Examinator.BE/AZ-104.Examinator.Api/AZ-104.Examinator.Api.csproj -c Release -o /app --no-restore

# Screenshot delle domande hotspot/drag_and_drop/hotspot_yes_no/alcune
# multiple_choice, serviti da app.UseStaticFiles() su /images/<file>. Nel repo
# resta solo lo zip (857 PNG sciolti gonfierebbero troppo la git history): si
# scompatta qui, in una fase di build usa-e-getta - lo zip non arriva mai
# nell'immagine finale ne' viene mai scritto sciolto sull'host. Un rebuild va
# rilanciato dopo un aggiornamento dello zip.
RUN apt-get update && apt-get install -y --no-install-recommends unzip && rm -rf /var/lib/apt/lists/*
COPY AZ-104.QuestionsDataset/az104_Dataset_Images.zip /tmp/images.zip
RUN mkdir -p /images && unzip -q -j /tmp/images.zip -d /images && rm /tmp/images.zip

FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS runtime
WORKDIR /app
COPY --from=build /app .
COPY --from=build /images/ /app/wwwroot/images/

EXPOSE 8080
ENTRYPOINT ["dotnet", "AZ-104.Examinator.Api.dll"]
