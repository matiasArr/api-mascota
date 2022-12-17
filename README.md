# api-mascota
API QUE RETORNE TODAS LAS MASCOTAS DEL PROPIETARIO JUNTO CON SU INFORMACIÓN ADEMÁS DE LAS VACUNAS

# Compromisos del proyecto

- Vista 1: Listado con todas las mascotas que tiene un propietario

- Vista 2: Descripción de la mascota

- Vista 3: Detalle Propietario

- Vista 4: Listar Vacunas

### Recomendaciones para levantar el proyecto
- Crear archivo .env y copiar el contenido del archivo .env.example y pegar en su .env
- Es necesario crear una base de datos en phpmyadmin llamada: db 
- Luego se puede levantar el proyecto con el comando:
> npm run dev 


# step-by-step guide

commands:

> npm init -y: initialize project in node

> npm install nodemon -D: install nodemon for dependecies 

> npm install express 

> npm install dotenv --save

> npm install mysql

> npm install --save sequelize

> npm i cors express nodemon


- remove triangulito(^) in version of the dependecies of package.json
- create index.js file 
- create script dev for nodemon 
    "dev": "nodemon index.js",
    "start": "node index.js",

 
- CORS

> const cors = require('cors');

>

>> app.use(function (req, res, next){

>> //Enabling cors

>> res.header("Access-Control-Allow-Origin", "*");

>> res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");

>> res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-clint-key, x-client-token, x-client-secret, Authorization");

>> next();

>> });