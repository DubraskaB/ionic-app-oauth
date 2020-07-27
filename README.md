# Instalación, configuración y descripción

## Tecnologías usadas

1. Node 12.18.3
2. Ionic 6.10.1
3. npm 6.14.6

## Pasos a seguir

1. Clonar el repo.

```
git clone https://github.com/DubraskaB/ionic-app-oauth
```
2. Ingresar al directorio que contiene el repo.
```
cd ionic-app-oauth
```
3. Instalar los paquetes de node.
```
npm install
``` 
4. Levantar la aplicación.
```
ionic serve
``` 
5. IMPORTANTE.
```
Es necesario haber levantado el ambiente del BackEnd con exito.
https://github.com/DubraskaB/nodejs-express-api-oauth-psql 
``` 
## Descripción de la aplicación

Esta aplicación se conecta con un Backend realizado con nodeJS, ExpressJS y PostgresSQL que utiliza el método OAuth en su API.

1. Si ingreso por primera vez debe registarse para crear un usuario.

2. Debe realizar un login con los datos de su usuario creado.

3. Solo cuando haga login de forma exitosa podrá ver la sección de promociones y promoción del día. 

4. Puede hacer logout para borrar los datos de sesión o ingresar con otro usuario. 
