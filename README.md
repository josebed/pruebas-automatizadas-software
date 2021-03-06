# pruebas-automatizadas-software

## Final. Estrategia de pruebas:

### Estrategia de pruebas:

En el siguiente link se encuentra el documento de las estrategias de pruebas.
[Estrategia de pruebas](https://uniandes-my.sharepoint.com/:w:/g/personal/je_bedoya_uniandes_edu_co/EVwKJNMHQoBAm5ZL4s-lROUBD5jVUndbVG6rbL_UlO9OmQ?e=n2yMaM).

Los pasos para ejecutar las pruebas exploratorias de la semana 8 estan en la carpeta final

## 1. Funcionalidades probadas: 

| Funcionalidad | Acciones | Descripción |
| ------------- | ------ | ----------- |
 | Login | Ingresar correo y contraseña y hacer click en sign in | Permite el ingreso de usuarios a la aplicación, mediante el uso de credenciales
 | Posts | - Crear post | Permite gestionar diferentes posts publicados en el sitio web | 
 |  | - Previsualizar post | | 
 |  | - Publicar post | | 
 |  | - Modificar post | | 
 |  | - Eliminar post |  | 
 | Pages | - Crear | Permite gestionar diferentes páginas web publicadas en la aplicación | 
 |  | - Previsualizar |  | 
 |  | - Publicar |  | 
 |  | - Modificar | | 
 |  | - Eliminar | 
 | Tags | - Crear | Permite crear y modificar etiquetas internas y externas que se pueden aplicar a las páginas y posts | 
 |  | - Listar |  | 
 |  | - Eliminar |  | 
 | Members | - Crear | Permite la creación, modificación y eliminación de miembros de la plataforma | 
 |  | - Modificar |  | 
 |  | - Eliminar |  | 
 | Staff | - Invitar | A través de esta opción se pueden gestionar los usuarios que tienen acceso a la plataforma: administradores, editores, contribuidores y autores | 
 |  | - Revocar |  | 
 |  | - Modificar información | | 
 | Navigation | - Crear | Permite la gestión de los diferentes elemenots que aparecen en la barra de navegación de la aplicación | 
 |  | - Modificar |  | 
 |  | - Eliminar |  |
 | Profile | - Modificar información del usuario | Permite gestionar la información del usuario que está usando la aplicación |
 | Modo oscuro | - Cambiar a modo oscuro | Permite cambiar el color de fondo de la aplicación | 
 |  | - Cambiar a modo claro |  |
 
 ## 2. Escenarios ejecutados

 | Escenario | Acciones | 
| ------ | ----- |
 | Crear y previsualizar post | Realizar login en la app, click en crear post, llenar la información, hacer click en visualizar, validar que se creó el post | 
 | Crear y previsualizar page | Realizar login en la app, click en crear page, llenar la información, hacer click en visualizar, validar que se creó el page | 
 | Crear y tag | Realizar login en la app, click en tags, click en nuevo tag, llenar los campos, click en guardar, click en tags, validar creación | 
 | Crear y publicar post | Realizar login, crear post, click en publicar, validar que se haya publicado | 
 | Crear y publicar page | Realizar login, crear page, click en publicar, validar que se haya publicado | 
 | Crear y modificar post | Realizar login, Crear post, guardarlo, listarlos, seleccionarlo y modificarlo | 
 | Crear y eliminar post | Realizar login, crear page, ir a configuración, eliminarlo, confirmar | 
 | Crear y modificar page | Realizar login, crear page, listar pages, click en la recién creada, click en settings, modificar datos | 
 | Crear y eliminar page | Realizar login, crear page, click en settings, eliminar y confirmar | 
 | Crear y eliminar tag | Realizar login, crear tag, click en guardar, click en borrar, confirmar | 
 | Adicionar link en barra de navegacion | Realizar login, ir a navegacion, adicionar elemento y guardar cambios|
 | Editar link en barra de navegacion | Realizar login, ir a navegacion, cick en elemento, editar lable, editar URL y  guardar cambios|
 | Borrar link en barra de navegacion | Realizar login, ir a navegacion, cick en borrar elemento y  guardar cambios|
 | Invitar usuario con rol de editar | Realizar login, ir a staff, llenar formulario, enviar invitacion y validar listado de usuarios invitados | 
 | Invitar usuario 2 veces el mismo usuario | Realizar login, ir a staff, llenar formulario, enviar invitacion y validar que no permita enviar la invitacion | 
 | Revocar invitacion a usuario | Realizar login, ir a staff, seleccionar de la lista usuario y revokar invitacion, validar que el usuario se quiteo de la lista de usuarios invitados| 
 | Agregar miembro | Realizar login, ir miembros, click en nuevo miembor, llenar el formulario, guardar los cambios, validar que esta en la lista de miembros|
 | Editar miembro | Realizar login, ir miembros, seleccionar miembor, editar cambo en formulario, guardar los cambios, validar que esta en la lista de miembros editado|
 | Borrar miembro | Realizar login, ir miembros, seleccionar miembor, borrar, confimar borrado y  validar que no esta en la lista de miembros|
 | Cambiar a modo oscuro | Realizar login, cambiar a modo oscuro y validar su activacion | 
 | Editar perfil | Realizar login, ingredar a perfil, modificar nombre y ubicacino y guarda cambios | 

## Proceso Para Ejecutar

## Puppeteer

En el siguiente apartado se tratará una guía para ejecutar las pruebas en un entorno local usando puppeteer.

### Requerimientos

Node 16.13.0
ghost

Se cuenta con un tutorial para la instalación de ghost según la documentación oficial en el siguiente [enlace](https://ghost.org/docs/ghost-cli/#ghost-install)

### Ejecución

#### Instalar ghost

Luego de tener instalado el node y el ghost, se debe correr el siguiente comando sobre una carpeta vacía en la cual se van a ejecutar las pruebas:
```sh
ghost install local
```

Al terminar, se ejecutará ghost en la ruta local localhost:2368. En caso de ser la primera vez que se instala es recomendable saltarse el próximo paso e ir directamente a la ejecución de las pruebas.

#### Ejecutar ghost

En caso de ya tener una versión instalada de ghost, se recomienda borrar el archivo .db que hay en la carpeta data para poder correr como nuevo la instalación de ghost usando luego el comando:
```sh
ghost start
```
#### Correr las Pruebas
En caso de ser la primera vez que se corre el script (o de tener vacía la carpeta data como se sugiere que se haga), se debe ejecturar el siguiente comando dentro de la carpeta puppeteer:
```sh
node index.js --clean
```
Esto va a permitir crear el blog usando la información en el archivo properties.json

#### Revisión de artifacts

Al terminar, podrá verse en la carpeta artifacts una carpeta con cada escenario retratando paso a paso una captura de pantalla del proceso que se llevó a cabo.

#### Generacion imagenes para RTV 

Ghost versión 3.42: ejecutar docker run -d -e url=http://localhost:2368 -p 2368:2368 --name ghost_3.42 ghost:3.42

#### Correr las Pruebas Ghost 3.42

Situarse en la carpeta puppeteer y ejecutar 
```
node indexv3_42.js
```

## Kraken

### Software:
1. Node js, v16.13.0
1. Kraken: descargar siguiendo https://thesoftwaredesignlab.github.io/KrakenMobile/
2. Ghost versión 4.42, con la configuración incial: crear usuario y sitio.
3. Ghost versión 3.42: ejecutar docker run -d -e url=http://localhost:3001 -p 3001:2368 --name ghost_3.42 ghost:3.42 (Crear usuario y sitio)

### Ejecución:
1. Clonar el repositorio https://github.com/josebed/pruebas-automatizadas-software, branch main
2. Ubicarse dentro del path kraken
3. Ejecutar npm install
4. Instalar kraken local: npm install kraken-node
5. Abrir el archivos properties.json y cambiar las credenciales: url, username y password según haya configurado el ambiente (las que tienen el 2 al final, son para la segunda versión que se pruebe).
6. Ejecutar los escenarios: ./node_modules/kraken-node/bin/kraken-node run create_post.feature --properties=properties.json
7. En la carpete reports se alamacenarán los reportes de la ejecución.
8. En la carpeta artifacts se almacenarán los screenshots dentro de las carpetas v1 y v2 y al interior de estas, una carpeta por escenario.

## Pros y Contra de las herramientas

### Puppeteer

| Pros | Contras | 
| ------ | ----- |
| Permite la creación estructurada de los flujos de manera que sean entendibles | Los flujos deben considerar la latencia de la página que se está probando y eso a nivel de código es verboso |
| Recrea de manera fiel lo que el usuario final va a ver, al renderizar las vistas en un explorador | Los flujos, al considerar la latencia, pueden tomar demasiado tiempo si son varios flujos que no pueden reutilizar escenarios o que deben ser ejecutados independientemente |
| Está escrito en javascript, lo cual hace fácil su desarrollo para la mayoría de desarrolladores frontend y fullstack | Está optimizado para ejecutar flujos en el frontend |
| Permite la captura de evidencias lo cual puede ayudar para documentar ciertos flujos | No trae herramientas para hacer validaciones incluidas, debe incluirse librerías externas |

### Kraken

| Pros | Contras | 
| ------ | ----- |
| Prueba el flujo y no se acopla a posiciones      |  Se acopla si el nombre del boton cambia de nombre de clase o id     |
| se puede probar un flujo largo       |  toma muchas horas\hombre para realisar la preuba 2e2      |
| permite ingresar texto aleatori o base      |    el texto aleatori podria danar el flujo esperado       |
| Es un excelente tipo de prueba caja negra       |  se acopla a los botones y no todas las veces se es presiso con el flujo de objetos HTML       | 
| El lenguaje para escribir los pasos con ghiven-ghen-then es intuitivo | toma tiempo en escribir los escenarios  |
| Toma capturas del flujo para hacer un debbug preciso  | toma tiempo en procesar pruebas largas  |

## PRUEBAS DE REGRESION VISUAL (RESEMBLE)

### Pre requisitos

Ejecutar los pasos descritos previamente en el titulo "Proceso Para Ejecutar" tanto para Puppeteer como Kraken.

### Ejecucion RTV

Situarse en la carpeta resemble y estando ahí, ejecutar el siguiente comando: 

```
node index.js
```

al finalizar la ejecución vera un mensaje en consola como el siguiente
![imagen](https://user-images.githubusercontent.com/98704646/168517071-5e48fe02-8f35-4661-8330-800f557bcd8e.png)

### Ejecucion RTV

Una vez finalizado el paso anterior se generaran 2 reportes: 
 1. En la carpeta resemble > comparacion > kraken abrir el archivo report.html, este contiene los resultado de las pruebas realizadas con las imagenes generadas con kraken.
 2. En la carpeta resemble > comparacion > puppeteer abrir el archivo report.html, este contiene los resultado de las pruebas realizadas con las imagenes generadas con puppeteer para los diferentes escenarios.

## Pros y Contra de herramientas para VRT

### ResembleJS

| Pros | Contras | 
| ------ | ----- |
| Facil configuración, e intregración con otras herramientas | No genera reportes automáticamente |
| Permite hacer análisis considerando o sin considerar los colores. | Si la información es dinámica, puede generar diferencias aunque el html sea el mismo, dado que solo se basa en imágenes |
| Permite personailzar el estilo deseado para la salida | la comparacion se realiza bit a bit lo que puede levanta falsos positivos por colores o algun posicionamiento |
| Permite realizar las comparaciones solo en un área de la imagen |  |

### BackstopJS

| Pros | Contras | 
| ------ | ----- |
| Analiza el DOM html, garantizando que las comparaciones se hacen sobre la estrucutra de la UI | Sensible a contenido dinámico |
| Permite la integración con Playwright y Puppeteer | Requiere se indique el elemento de referencia |
| Generar reporte automatico  | Se debe aprobar los escenarios válidos |

## SEMANA 7

## Puppeteer

En el siguiente apartado se tratará una guía para ejecutar las pruebas en un entorno local usando puppeteer.

### Requerimientos

Node 16.13.0
ghost

Se cuenta con un tutorial para la instalación de ghost según la documentación oficial en el siguiente [enlace](https://ghost.org/docs/ghost-cli/#ghost-install)

### Ejecución

Es importante resaltar que ghost por defecto pone un límite en los requests que se pueden hacer por hora desde la misma IP, dada la cantidad de pruebas que existen y que los escenarios exceden esa cantidad, se recomienda reiniciar el contador en la base de datos de ghost o eliminar la base de datos en la carpeta /content/data y reiniciar como si fuera la primera vez como se indica en el paso de "Correr las Pruebas".

![LoggedIn](https://user-images.githubusercontent.com/98429879/169741791-efa909f8-391d-49bf-9acc-78528bc0f619.jpg)

Idealmente se recomienda hacer este paso entre ejecuciones de Kraken y Puppeteer para evitar inconvenientes. Y reiniciar el ghost como si fuera la primera vez.

#### Instalar ghost

Luego de tener instalado el node y el ghost, se debe correr el siguiente comando sobre una carpeta vacía en la cual se van a ejecutar las pruebas:
```sh
ghost install local
```

Al terminar, se ejecutará ghost en la ruta local localhost:2368. En caso de ser la primera vez que se instala es recomendable saltarse el próximo paso e ir directamente a la ejecución de las pruebas.

#### Ejecutar ghost

En caso de ya tener una versión instalada de ghost, se recomienda borrar el archivo .db que hay en la carpeta data para poder correr como nuevo la instalación de ghost usando luego el comando:
```sh
ghost start
```
#### Correr las Pruebas

Las pruebas de escenarios generados con faker y demás estrategias adicionales están en la carpeta puppeteerPD, allí se ejecutarán los escenarios y se generarán los artifacts.

En caso de ser la primera vez que se corre el script (o de tener vacía la carpeta data como se sugiere que se haga), se debe ejecturar el siguiente comando dentro de la carpeta puppeteer:
```sh
node index.js --clean
```
Esto va a permitir crear el blog usando la información en el archivo properties.json

Cada escenario se ejecuta de manera aislada y secuencial, dejando en claro el propósito de cada uno, el flujo, si es negativo o positivo, el tipo de datos que se están usando y el resultado de la prueba.

#### Revisión de artifacts

Al terminar, podrá verse en la carpeta artifacts una carpeta con cada escenario retratando paso a paso una captura de pantalla del proceso que se llevó a cabo.

## Kraken

### Software:
1. Node js, v16.13.0
1. Kraken: descargar siguiendo https://thesoftwaredesignlab.github.io/KrakenMobile/
2. Ghost versión 4.42, con la configuración incial: crear usuario y sitio.

### Ejecución:
1. Clonar el repositorio https://github.com/josebed/pruebas-automatizadas-software, branch main
2. Ubicarse dentro del path krakenPD
3. Ejecutar npm install
4. Instalar kraken local: npm install kraken-node
5. Abrir el archivos properties.json y cambiar las credenciales: url, username y password según haya configurado el ambiente.
6. Ejecutar los escenarios: ./node_modules/kraken-node/bin/kraken-node run --properties=properties.json
7. En la carpete reports se alamacenarán los reportes de la ejecución.

## Estrategia de pruebas

### Se realizaron pruebas haciendo uso de:
1. Pool de datos a priori: se usaron para login, casos de valores de frontera (máximo número de caracteres soportado por un campo de entrada), pruebas con entradas vacías. 
  - Para la generación de datos aleatorios para pruebas de frontera, se empleó la herramienta https://es.lipsum.com/
  - Los datos, en el caso de Kraken, se encuentran dentro del archivo properties.json
  - Los datos, en el caso de Puppeteer, se encuentran en el archivo datapool.json
3. Pool de datos pseudo-aleatorios: Se usaron para crear posts, pages, tags, entre otros, mediante la herramienta faker de kraken y se usaron luego para validar información del éxito o errores en la ejecución de los escenarios.
4. Datos aleatorios: Se usaron mediante las librerías faker de javascript y faker de kraken, en la generación de posts, pages, tags, members, modificación de settings, datos que no se volvieron a requerir en la ejecución.

### Funcionalidades:
1. Log in
2. Post: crear, listar, preview, modificar, settings.
3. Tag: Crear, lista.
4. Page: Crear, listar.
5. Memebers: Crear, listar.
6. Staff: invite, listar.
7. Navegación: Crear, listar.
8. Editar perfil
9. Settings: General

### Estrategias:
1. Se realizó por lo menos una prueba exitosa por cada funcionalidad probada.
2. Se realizaron pruebas de creación de diferentes funcionalidades, teniendo todos los campos vacíos.
3. Se realizaron pruebas de valores de frontera para diferentes campos en diferentes funcionalidades: con número máximo de caracteres permitos, uno por encima y uno por debajo.
4. Se realizaron pruebas con valores de correo electrónico errado.
5. Se realizaron pruebas con algunos campos obligatorios vacíos.
6. Se realizaron pruebas en las herramientas: Kraken (60) y Puppeteer (60).

