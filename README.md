# Login y Register de Usuarios
### SignTalk

---
Todo la carpeta es un proyecto de **Node**. Recuerda que debes tener instalado `node`,`npm` y `nodemon` en tu computadora.

## Crear el proyecto node en la carpeta raíz
1. **Paso 1**: Dirigirte dentro de la carpeta raíz y ejecutar `npm init -y`, luego instalar los siguiente requerimientos:
    ```
    npm i express
    npm i cors
    npm i morgan
    npm i socket.io 
    ```
2. **Paso 2**: Reemplazar el archivo `package.json` por el que se encuentra en el repositorio.


## Crear la base de datos
1. **Paso 1**: Crer un tabla en *DynamoDB* con el nombre **users**.
2. **Paso 2**: Características de la tabla:
    - **Clave de partición**: *user_id* (cadena)
    - **Clave de ordenación**: *fecha_registro*
    - **Configuración de Tabla**: Personalizar configuración
    - **Clase de Tabla**: Estandar
    - **Mode de capacidad**: Bajo demanda
    - Activar la protección contra eliminaciones.

## Carpeta: `backend_logreg`
1. **Paso 1**: Abre la terminal y dirigite a la carpeta **backend_logreg**
2. **Paso 2**: Crear un entorno virtual con el comando `python -m venv env` y luego activar el entorno con el comando `venv/Scripts/activate`
3. **Paso3**: Instalar los requerimientos que se encuentra en el archivo `requeriments.txt` con el comando ```pip install -r requeriment.txt```
5. **Paso 4:** Si construyes desde 0, copiar todos los archivos del repositorio de la carpeta **backend_logreg**. 
4. **Paso 4**: Colocar tus credenciales de *Amazon AWS* en el archivo `key_config.py`.





## Carpeta: `frontend_logreg`
1. **Paso 1**: De preferencia crear desde cero la carpeta **frontend_logreg**.
2. **Paso 2**: Ir a la carpeta raiz y ejecutar el comando `yarn create vite`; crear el proyecto con el nombre **frontend_logreg** y seleccionar la opción **react**.
3. **Paso 3**: En la carpeta **frontend_logreg**, ejecuta el comando `yarn` para instalar los requerimientos.
4. **Paso 4**: Instala las siguientes dependencias:
    ```
   yarn add @faker-js/faker --dev
   yarn add socket.io-client
   yarn add antd
   yarn add reactstrap
   yarn add react-bootstrap
   yarn add react-router-dom
   yarn add @mui/material @emotion/react @emotion/styled
   yarn add @mui/icons-material
   yarn add bootstrap```
5. **Paso 5**: Copiar y reemplazar todos los archivos del repositorio de la carpeta **frontend_logreg**.
6. Levantar el servidor con el comando `yarn dev`.

---------------------------------------------------------------

## Levantar todo el proyecto
1. Dirigirse a la carpeta raíz y ejecutar el comando `npm run dev` para levantar el servidor de **Node**.
2. Dirigirse a la carpeta **frontend_logreg** y ejecutar el comando `yarn dev` para levantar el servidor de **React**.
3. Dirigirse a la carpeta **backend_logreg** y ejecutar el comando `flask run` para levantar el servidor de **Flask**.
