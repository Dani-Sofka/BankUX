# Aplicación Node.js con Express

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

## Descripción del Proyecto

Esta es una aplicación desarrollada con Node.js y Express que permite a los usuarios registrarse e iniciar sesión. La autenticación se gestiona mediante un token generado desde un backend en Java. Además, la aplicación incluye validación de datos y manejo de errores, proporcionando una experiencia de usuario segura y robusta.

## Estructura del Proyecto

El proyecto sigue una estructura organizada para facilitar su mantenimiento y escalabilidad:

```
project-folder/
├── public/         # Archivos estáticos como CSS, JavaScript del cliente, imágenes, etc.
├── src/
│   ├── controllers/ # Lógica de controladores
│   ├── models/      # Modelos de datos
│   ├── routes/      # Definición de rutas
│   ├── views/       # Plantillas HTML o motores de vistas
├── node_modules/   # Dependencias de Node.js
├── .env            # Variables de entorno
├── package.json    # Configuración del proyecto y dependencias
├── README.md       # Documentación del proyecto
```

## Instalación

Sigue estos pasos para configurar el proyecto en tu máquina local:

1. Clona este repositorio:
   ```bash
   https://github.com/Dani-Sofka/BankUX.git
   ```

2. Ve al directorio del proyecto:
   ```bash
   cd project-folder
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

4. Configura las variables de entorno en un archivo `.env`.

5. Inicia el servidor:
   ```bash
   npm run dev
   ```

## Funcionalidades

- **Registro de Usuarios:** Permite registrar nuevos usuarios con validaciones de datos.
- **Inicio de Sesión:** Los usuarios pueden iniciar sesión para obtener acceso.
- **Autenticación por Token:** La autenticación se realiza con tokens generados por el backend en Java.
- **Manejo de Errores:** Mensajes claros y específicos en caso de errores de validación.

## Imágenes

### Ejemplo de Pantalla de Inicio de Sesión

![image](https://github.com/user-attachments/assets/d981d841-33ff-432d-8b51-140886408fcb)

### Ejemplo de Pantalla de Registro de Usuario

![image](https://github.com/user-attachments/assets/5c6e09ad-8ba3-4cf6-bc53-d067535e9792)

### Estructura de Carpetas

![image](https://github.com/user-attachments/assets/daaf1996-8ede-422a-9bf1-a2a07de59f84)

### Endpoints consumidos desde Java

![image](https://github.com/user-attachments/assets/74061d6d-7663-45c7-a513-3cb4a6f022cf)

### Dependencias principales:
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logoColor=white)
![Dotenv](https://img.shields.io/badge/Dotenv-ECD53F?style=for-the-badge&logoColor=black)
![EJS](https://img.shields.io/badge/EJS-82B6E9?style=for-the-badge&logoColor=black)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

### Dependencias de desarrollo:
![Nodemon](https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logoColor=white)

## Contribución

Si deseas contribuir a este proyecto, por favor sigue los pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza los cambios y haz un commit:
   ```bash
   git commit -m "Agregada nueva funcionalidad"
   ```
4. Sube los cambios a tu fork:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
