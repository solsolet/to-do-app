# ToDoApp ✅

## Comenzando 🚀

_Instrucciones para obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

### Pre-requisitos 📋

Para trabajar usaremos  una **máquina virtual**, aunque se puede trabajar en Windows, Linux u OS X.

La máquina para que nos funcione correctamente como mínimo tendrá 2GHz de procesador, 4GB de RAM y 25GB de HD. Además instalaremos la última versión estable de 64 bits de **Ubuntu**.

Toda la práctica está explicada para la 20.04 LTS. Podemos verificar los parámetros con los comandos:
```
$ lab_release -a
$ uname -m
$ df -h
```
Si usamos el gestor VirtualBox podemos usar la imagen ISO de la última versión de Ubuntu. Es recomendable instalar las extensiones del gestor (desde VirtualBox le diremos que monte el disco con el nuevo software).

### Instalación 🔧

Para la ejecución de esta práctica se necesita tener:
* NodeJS
* Git
* Code (o similar)
* Angular (cons Bootstrap)
* MongoBD (con mongodb y mongojs)
* Nodemon 
* Morgan

Instalamos los programas
```
$ sudo snap install --classic code

$ sudo apt install npm
$ sudo apt install git
$ sudo apt install -y mongodb
$ sudo npm install -g @angular/cli
```

Trabajaremos en la carpeta **to-do-app** dentro de **angular**
```
$ mkdir angular
$ cd angular
$ ng new to-do-app
$ cd to-do-app
```

Añadimos Bootstrap
```
$ ng add @angular/localize
$ npm install bootstrap
$ ng install @ng-bootstrap/ng-bootstrap
```
### Componentes y servicios 🏭
Generamos el componente:
```
$ ng g c components/tasks --skip-test
```
Y los servicios:
```
$ ng g s services/task --skip-test
$ ng g s services/user --skip-tests
$ ng g s services/auth-interceptor --skip-tests
```

### Archivos 📂
Editaremos los siguentes archivos para conseguir la aplicaicón deseada, entre ellos tenemos a `main.ts`. `index.html`, `styles.css`, `app.module.ts`, `app.component.ts`, `app.component.html`, `Task.ts`, `task.service.ts`, `task.component.html`, `task.component.ts`, `user.service.ts`, `auth-interceptor.service.ts`.

## Development server 🖥️

Para probar nuestra aplicación ejecutaremos `ng serve` en la terminal. En el navegador pondremos `http://localhost:4200/`.

Además deberás poner en marcha **mongob** (servidor escuchando en el puerto 27017), **api-rest** (escuchando en 3000), **api-auth-reg** (escuchando en 4000)

## Further help 🆘

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Construido con 🛠️
* [Angular CLI](https://github.com/angular/angular-cli) - version 13.3.4.
* [VS Code](https://code.visualstudio.com) - Editor de texto
* [Postman](http://www.postman.com) - Plataforma API
* [MongoDB](https://www.mongodb.com) - Base de Datos
* [NodeJS](https://nodejs.org) - Base de Datos
* [Moment](https://npmjs.com/package/moment) - Librería
* [Bcrypt](https://npmjs.com/package/bcrypt) - Librería
* [JWT-simple](https://npmjs.com/package/jwt-simple) - Librería

## Versionado 📌
Para todas las versiones disponibles, mira los [tags](https://github.com/solsolet/api-auth-reg/tags).

## Autora ✒️
* **Gemma Sellés** - *Desarrollo de la práctica* - [gls21](https://github.com/solsolet)

## Licencia 📄
Este proyecto no está bajo ninguna licencia.
