docker exec -i elated_dirac /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P NexiosIT1234 < CreateDatabase.sql
docker exec -i elated_dirac /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P NexiosIT1234 < AddData.sql
