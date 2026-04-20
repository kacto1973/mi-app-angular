# Mi Primer Componente en Angular

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli).

## Descripción de la Práctica

El objetivo de esta práctica es crear un componente en Angular que sirva como una tarjeta de presentación personalizable. 

El componente creado (`TarjetaComponent`) cumple con los siguientes criterios:
- Tiene su propio selector (`app-tarjeta`), plantilla HTML y estilos CSS.
- Utiliza la directiva `@Input()` para recibir los datos de entrada (como el **nombre** y la **edad**).
- Maneja eventos a través de bindings como `(click)` para actualizar un contador de "Likes".
- Hace uso de interpolación `{{ }}` en su plantilla para reflejar la información de forma dinámica en la pantalla.

## Requisitos Previos
- Tener [Node.js](https://nodejs.org/) instalado.
- Tener Angular CLI instalado globalmente: `npm install -g @angular/cli`

## Cómo ejecutar el proyecto

Para echar a andar este proyecto en tu computadora, sigue estos pasos:

1. **Clonar este repositorio** o descargar los archivos.
2. Abre una terminal (Línea de Comandos o PowerShell) dentro de la carpeta del proyecto.
3. Instala las dependencias del proyecto ejecutando el siguiente comando:
   ```bash
   npm install
   ```
4. Una vez instaladas las dependencias y sin errores, inicia el servidor de desarrollo local ejecutando:
   ```bash
   ng serve
   ```
5. Al terminar de compilar, abre tu navegador web de preferencia y dirígete a:
   [http://localhost:4200/](http://localhost:4200/)

Cualquier cambio que realices en el código fuente causará que la página en el navegador se recargue automáticamente.
