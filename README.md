# cybernauts
### Steps to use api

1. PostgreSQL JDBC Driver (viable with PostgreSQL 9.4+)
2. Download the most recent driver (JDBC 4.2) from: https://jdbc.postgresql.org/download.html

3. Setup the PostgreSQL pqAdmin
4. Make a new dataBase or you can use default one i.e postgre
5. Make a table with required fields, here i build table with entries (company , model , serial , date ,file)

    
    
6. Now open database.js file and fill the entries .
  ``` host: "localhost",
  user: "postgres",
  port: 2000,   ---> // your port no for db
  password: "",   --->//here is your password
  database: " ", ---->// dbbase name 
  ```
  
  
7. Open api.js , at <b>line no. 4 , </b>
  ``` const table = ' '; ----> //table name in which you wants to perform action```

 

### Port : 3001
when the data stored successfully it will respose you about the successfull insertion of data
