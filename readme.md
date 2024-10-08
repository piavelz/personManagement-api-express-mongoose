# API de gestión de personas con Express y MongoDB

_Un proyecto de API básica que se encarga de hacer un CRUD de personas y sus trabajos utilizando Node.js, Express y Mongoose._

### Instalación ✨✨

_Es recomendable utilizar Git Bash._

_Clonar el repositorio:_

```bash
git clone https://github.com/piavelz/personManagement-api-express-mongoose.git
cd personManagement-api-express-mongoose
rm -rf .git
```
### Importar colección a Postman

_Luego de clonar el repositorio, extrae el archivo 'personManagement.postman_collection.json' en una carpeta fuera del proyecto para importarlo en Postman:_

Abre Postman.
1. En la parte superior izquierda, haz clic en el botón **Import**.
2. En la ventana emergente, haz clic en **Select Files** y selecciona el archivo: **"personManagement.postman_collection.json"**.
3. Una vez seleccionado el archivo, haz clic en **Import**.
4. La colección aparecerá en la barra lateral izquierda, lista para ser utilizada.

Debería lucir algo como:

![image](https://github.com/user-attachments/assets/37093004-9af6-40f8-b262-f57041243a2f)

### Abrir el repositorio en Visual Studio Code
_Desde Git Bash puedes ejecutar:_
```bash
code .
```

_Una vez abierto Visual Studio Code, abre la terminal y ejecuta:_

```bash
npm install
```
_Con esto se instalarán los paquetes necesarios para utilizar la API, entre ellos Express, Mongoose, Dotenv y Nodemon. _



## Ejecutando 

_Para ejecutar la API, escribe en la terminal de Visual Studio Code:_
```bash
npm run start
```


Ahora la API está lista para recibir peticiones desde Postman 😁👍🏻
