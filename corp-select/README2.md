Select
===============================================

`<bk-corp-select>` es un campo de formulario para la selección de un valor entre un conjunto de opciones, similar al elemento nativo `<select>` con las particularidades que determina la [especificación de UX para aplicaciones corporativas]

Instalación
------------------------------------------

Instalar el módulo *bk-corp-select* con npm o yarn

```
npm install --save --production git+https://aqdes-stash.cm.es/stash/scm/arqteaqac/corp-select.git
```

E incorporar a tu aplicación la hoja de estilo *core.css* que se encuentra la carpeta *node_modules/corp-styles/dist/*

```
<link rel="stylesheet" href="../node_modules/corp-styles/dist/core.css">
```

### <span id="angularcli_18"></span>angular-cli

Si estás utilizando [angular-cli] para desarrollar tu aplicación, incorpora los estilos en el fichero fichero *.angular-cli.json*, en la propiedad *styles* dentro de *apps*

    "styles": [
        "../node_modules/corp-styles/dist/core.css",
        "styles.scss"
    ],

###  Compatibilidad con navegadores antiguos (IE9, IE10, IE11, Safari 7 y 8, Android 4.1+ )

El componente está contruido con los mismo estandares que Angular por lo que asume que ya están incluidas en tu aplicación las dependencias necesarias para que tu aplicación sea compatible con navegadores antiguos (polyfills). Puedes encontrar más información [en la documentación de Angular](https://angular.io/docs/ts/latest/guide/browser-support.html)


Uso
----------------------------

En tu template, crea un elemento `<bk-corp-select>`. Para cada una de las opciones del select añade un elemento `<bk-corp-select-option>`

<div material-docs-example="select-basic"></div>

### Recuperar el valor seleccionado

Este componente está implementado como un elemento de formulario de Angular, lo que significa que puedes manipular su valor utilizando las directivas *ngModel*, *formControl*, etc ...

Desarrollo
----------------------------

Descarga el componente de su repositorio Stash

```
git clone https://aqdes-stash.cm.es/stash/scm/arqteaqac/corp-select.git
```

Instala todas sus depencias con el comando `npm install`

Arranca en **localhost:8080** la página de ejemplos del componente con el comando `npm start`

[especificación de UX para aplicaciones corporativas]: http://colint/sitios/UxProcesos/Documentos%20compartidos/Externos/04%20Dise%C3%B1o%20visual/Aplicaciones%20corporativas/S%C3%A1banas%20de%20componentes/03-form-mensajes_aviso.png
[angular-cli]: https://cli.angular.io/