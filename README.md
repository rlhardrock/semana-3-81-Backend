# semana-3


BACKEND

Download Zip 
Open Project 

npm install   (si ya hay un package.json)

git init  
crear repositorio github
.gitignore

install dependencies

iniciar configuracion
npx sequelize-cli init (no forzar  si ya esta configurado de origen)

crear folder    controllers
crear file dentro del folder UserController.js


confirmar en package.json si  existe  >Debug   "scripts" : { "start-dev": "node index.js", "dev": "nodemon server.js" }

npm run dev


server.js  es el mismo index.js (start point)


Crear API para integrar con Frontend

configurar  unicamente development  en config / config.json

developmen:{ 
    Username: nD3UOjiEIQ

Database name: nD3UOjiEIQ

Password: KpI9h6pUfP

Server: remotemysql.com

Port: 3306
    dialect:  mysql   posgres   mariadb
}


Port: 3306



usar model generate  para el modelo/clase --> user  y sus atributos
se esta usando npx   y  sin espacio entre los atributos  --name table   --attributes field: ....

npx sequelize-cli model:generate --name user --attributes name:string,password:string,email:string,profession:string,rol:string,vehiculo:string
 

Migracion DDBB

npx sequelize-cli db:migrate


registro de prueba   crear usuario a autenticar por seeders   opcional

npx sequelize-cli seed:generate --name seed-user

bcrypt generator crear una nueva contraseña y reemplazar la que esta por defecto



ejecutar la semilla de prueba
npx sequelize-cli db:seed:all

--> en seeders/migrations el nombre de la tabla esta pluralizado,  dejarlo en singular

