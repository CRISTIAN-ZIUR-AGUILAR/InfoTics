1. Clona el repositorio
Si ya has clonado el repositorio, asegúrate de que esté completo y correctamente descargado. Si no, usa este comando:
git clone https://github.com/CRISTIAN-ZIUR-AGUILAR/InfoTics.git

Luego, navega al directorio del proyecto:
cd InfoTics

3. Instala las dependencias
Asegúrate de tener Node.js y npm instalados. Verifica con:
node -v
npm -v

Si no están instalados, descárgalos desde Node.js.
Instala las dependencias del proyecto usando:
npm install

3. Configura el entorno
Si el proyecto tiene un archivo src/environments/environment.ts o utiliza Firebase,
asegúrate de que las configuraciones necesarias estén completas, especialmente si el proyecto requiere una conexión a Firebase.
Si no existe environment.ts, verifica si hay un archivo environment.example.ts o similar que puedas duplicar y ajustar.

4. Verifica la instalación de Ionic
Asegúrate de tener el CLI de Ionic instalado globalmente:
npm install -g @ionic/cli

Verifica que esté instalado correctamente:
ionic -v

6. Inicia el proyecto
Corre el comando para servir la aplicación:
ionic serve
Esto abrirá automáticamente el navegador web en la dirección http://localhost:8100 con tu proyecto.
