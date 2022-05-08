## ¿Cómo ejecutar las pruebas con Kraken?

### Software:
1. Node js, v16.13.0
1. Kraken: descargar siguiendo https://thesoftwaredesignlab.github.io/KrakenMobile/
2. Ghost versión 4.42, con la configuración incial: crear usuario y sitio.

### Ejecución: 
1. Clonar el repositorio https://github.com/josebed/pruebas-automatizadas-software, branch main
2. Ubicarse dentro del path kraken
3. Ejecutar npm install
4. Instalar kraken local: npm install kraken-node
5. Abrir el archivos properties.json y cambiar las credenciales: url, username y password según haya configurado el ambiente.
6. Ejecutar los escenarios: ./node_modules/kraken-node/bin/kraken-node run create_post.feature --properties=properties.json
7. En la carpete reports se alamacenarán los reportes de la ejecución.
