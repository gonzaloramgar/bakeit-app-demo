# BakeIT

## Ejecutar el proyecto

Necesitas tener Node.js y npm instalados. Abre una terminal en la carpeta del proyecto y ejecuta:

```bash
npm install
npx ng serve
```

Cuando termine la compilación, abre [http://localhost:4200/](http://localhost:4200/) en el navegador. El servidor se actualiza automáticamente al guardar cambios. Para detenerlo, pulsa `Ctrl+C` en la terminal.

Si el puerto 4200 está ocupado, puedes usar otro:

```bash
npx ng serve --port 4201
```

Comandos adicionales:

```bash
npm run build  # Compilar para producción
npm test       # Ejecutar las pruebas
```

Prototipo académico en Angular para descubrir panaderías y comparar productos según cercanía, presupuesto y preferencias nutricionales.

## Funcionalidades actuales

- Búsqueda escrita con frases normales, por ejemplo: «Quiero una panadería cerca, por menos de 5 € y que los bollos de chocolate sean lo más sanos posibles».
- Filtros por presupuesto y distancia máxima.
- Orden por cercanía, precio o clasificación nutricional orientativa.
- Resultados agrupados por panadería, con productos, precios, valores por 100 g y alérgenos declarados en los datos de demostración.
- Pantalla «Buscar por necesidades» que envía la consulta al buscador principal.

## Datos de demostración

Los establecimientos, distancias, precios, alérgenos y datos nutricionales son ficticios y solo sirven para probar la interfaz. La clasificación A–E mostrada en los productos es un indicador orientativo de este prototipo, no un Nutri-Score oficial ni una certificación. Para una versión real haría falta una base de datos de comercios que validen sus perfiles, fuentes verificables para la información nutricional y una función de ubicación/geolocalización.

El buscador actual interpreta algunas palabras clave y patrones con reglas sencillas; **todavía no está conectado a una IA ni a una API de negocios/mapas**.

