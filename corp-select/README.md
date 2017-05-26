# BkCorpSelect

Componente que implementa 
el elemento de formulario "select" con sus distintas opciones.

El componente se compone a su vez de dos componentes: `BkCorpSelect` y `BkCoprSelectoption`, conteniendo el primero al segundo.

## `BkCorpSelectOption`

Este componente representa una de las opciones que va a contener el componente `BkCorpSelect`, por tanto
el contenido de este componente será transcluído al componente "padre" `BkCorpSelect`. 

### Propiedades

| Nombre | Opcional | Tipo 	| Definición |
| -------| -------- | ----- | ---------- |
| `label` | `false` | `string` | Label de la opción|
| `value` | `false` | `any` | Valor de la opción |
| `selected` | `true` | `boolean` | Indica si la opción está seleccionada |

### Eventos

| Nombre | Valor emitido | Descripción |
| ------ | ----------- | ----------- |
| `select` | `void` | Evento lanzado al seleccionar la opción |


### Ejemplos

A continuación se muestran algunos ejemplos de cómo utilizar el componente:

Por defecto:

    <bk-corp-select-option  
        label="myLabel" 
        value="myValue">
    </bk-corp-select-option>

Personalizado:
    `<bk-corp-select-option 
      *ngFor="let city of cities" 
      [label]="city.label" 
      [value]="city.value">
    </bk-corp-select-option>`


## `BkCorpSelectComponent`

Este componente representa el Select de un formulario el cual contiene diferentes opciones `BkCoprSelectoption`.

### Transclusión de contenido

Este componente transcluye el contenido del componente anteriormente descrito `BkCorpSelectOption`.

### Propiedades

| Nombre | Opcional | Tipo 	| Definición |
| -------| -------- | ----- | ---------- |
| `label` | `true` | `string` | Etiqueta que identifica el Combo o Select |
| `placeholder` | `true` | `string` | Texto por defecto del componente. |
| `disabled` | `true` | `boolean` | Atributo para deshabilitar la interacción con el componente |
| `required` | `true` | `boolean` | Atributo indicador de que el campo es obligatorio rellenarlo. |

### Eventos

| Nombre | Valor emitido | Descripción |
| ------ | ----------- | ----------- |
| `change` | `any` | Evento lanzado al seleccionar una opción |

### Ejemplos

A continuación se muestran algunos ejemplos de cómo utilizar el componente:

Por defecto:

    <bk-corp-select></bk-corp-select>

Personalizado:

    `<bk-corp-select 
        name="mySelect"
        label="Mi label" 
        placeholder="Mi placeholder"
        required="true"
        [(ngModel)]="model">
        <bk-corp-select-option 
            *ngFor="let city of cities" 
            [label]="city.label" 
            [value]="city.value">
        </bk-corp-select-option>
     </bk-corp-select>`


## Demo
Para afianzar más la interacción con el componente se puede descargar este repositorio y manipular la demostración que contiene. Para ello hay que seguir los siguientes pasos:

1. Clonar el repositorio
2. Instalar las dependencias ejecutando `npm install`
3. Levantar el servidor usando `npm start`
4. Abrir el navegador en `localhost:8080`
5. Modificar la interacción con el componente usando el código bajo la carpeta `demo`