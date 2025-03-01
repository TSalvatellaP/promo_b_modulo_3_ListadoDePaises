# Proyecto de Búsqueda de Países

Este proyecto es una aplicación web React que permite a los usuarios buscar y filtrar información sobre países. Los usuarios pueden buscar países por nombre o filtrar por continente. Cada país se muestra en una tarjeta individual con información como la bandera, el nombre, el continente y la capital.

## Características

* **Búsqueda por Nombre:** Permite a los usuarios buscar países escribiendo el nombre en un campo de texto.
* **Filtro por Continente:** Permite a los usuarios filtrar países seleccionando un continente de una lista desplegable.
* **Tarjetas de País:** Muestra información detallada de cada país en una tarjeta individual.
* **Eliminación de Tarjetas:** Permite a los usuarios eliminar tarjetas individuales haciendo clic en el botón "X".
* **Diseño Responsivo:** La aplicación está diseñada para funcionar en diferentes tamaños de pantalla.

## Estructura del Proyecto

El proyecto está estructurado en los siguientes componentes principales:

* **`CountriesList.js`:**
    * Este componente gestiona la lista de países y renderiza las tarjetas de país.
    * Utiliza el estado para mantener la lista de países y proporciona la funcionalidad para eliminar tarjetas.
    * Recibe una lista de países como prop.
* **`CountryCard.js`:**
    * Este componente representa una tarjeta individual para cada país.
    * Muestra información como la bandera, el nombre, el continente y la capital del país.
    * Proporciona un botón "X" para eliminar la tarjeta.
    * Recibe los datos del país y una función de cierre como props.
* **`Filters.js`:**
    * Este componente contiene los filtros de búsqueda por nombre y por continente.
    * Proporciona campos de entrada y listas desplegables para la búsqueda y el filtrado.
    * Llama a funciones pasadas como props para actualizar los criterios de búsqueda y filtrado.
* **`App.js`:**
    * Este componente es el componente raíz de la aplicación.
    * Gestiona el estado de la aplicación, incluyendo la lista de países y los criterios de búsqueda y filtrado.
    * Renderiza los componentes `Filters` y `CountriesList`.
* **`index.css`:**
    * Contiene los estilos CSS para la aplicación.

## Cómo Ejecutar el Proyecto

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1.  **Clona el repositorio:**

    \`\`\`bash
    git clone [https://github.com/TSalvatellaP/promo_b_modulo_3_ListadoDePaises.git]
    \`\`\`

2.  **Navega al directorio del proyecto:**

    \`\`\`bash
    cd [nombre del directorio]
    \`\`\`

3.  **Instala las dependencias:**

    \`\`\`bash
    npm install
    \`\`\`

4.  **Ejecuta la aplicación:**

    \`\`\`bash
    npm start
    \`\`\`

5.  **Abre la aplicación en tu navegador:**
    * La aplicación se abrirá automáticamente en tu navegador predeterminado. Si no, puedes acceder a ella en `http://localhost:3000`.

## Dependencias

El proyecto utiliza las siguientes dependencias:

* `react`
* `prop-types`

## Mejoras Futuras

* Añadir paginación para manejar grandes listas de países.
* Implementar la capacidad de ordenar los países por diferentes criterios.
* Añadir más información detallada sobre cada país.
* Añadir test unitarios y de integración.

## Autor

[Tania Salvatella]

## Licencia

Este proyecto está bajo la licencia [...].