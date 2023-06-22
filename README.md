# Login y Register de Usuarios
### SignTalk

---
## Levantar el backend

### Crear la base de datos
1. **Paso 1**: Crer un tabla en *DynamoDB* con el nombre **users**.
2. **Paso 2**: Características de la tabla:
    - **Clave de partición**: *user_id* (cadena)
    - **Clave de ordenación**: *fecha_registro*
    - **Configuración de Tabla**: Personalizar configuración
    - **Clase de Tabla**: Estandar
    - **Mode de capacidad**: Bajo demanda
    - Activar la protección contra eliminaciones.

### Crear el entorno virtual
1. **Paso 1**: Abre la terminal y dirigite a la carpeta **backend_logreg**
2. **Paso 2**: Crear un entorno virtual con el comando `python -m venv env` y luego activar el entorno con el comando `venv/Scripts/activate`
3. **Paso3**: Instalar los requerimientos que se encuentra en el archivo `requeriments.txt` con el comando ```pip install -r requeriment.txt```
5. **Paso 4:** Copiar todos los archivos del repositorio de la carpeta **backend_logreg**. 
4. **Paso 4**: Colocar tus credenciales de *Amazon AWS* en el archivo `key_config.py`.

#Finalmente ejecutar el comando `flask run` para levantar el servidor.

## Levantar el frontend
1. **Paso 1**: Abre la terminal y dirigite a la carpeta **frontend_logreg**
2. **Paso 2**: Si creas desde cero, ejecutar el comando `yarn create vite`, crear el proyecto con el nombre **frontend_logreg** y seleccionar la opción **react**.
3. **Paso 3**: Ejecuta el comando `yarn` para instalar los requerimientos.
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
5. **Paso 5**: Copiar todos los archivos que no estén del repositorio de la carpeta **frontend_logreg** a tu carpeta **frontend_logreg** local.
6. Levantar el servidor con el comando `yarn dev`.
