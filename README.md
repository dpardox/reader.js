# Reader javascript

Leer imagenes y previsualizarlas en el navegador.

## Instalación rápida

Constante desarrollo.

### NPM

```sh
npm install reader
```

# Cómo usar

## HTML

```html
<img id="preview">
<p id="filename"></p>
<a id="trigger" class="button is-primary">Subir foto</a>
<input type="file" id="input" class="is-hidden">
```

> Para el ejemplo se usan clases de [Bulma.io](https://bulma.io/)

## Instancia

Crear una instancia del objeto asignando un elemento *trigger* y un *input de tipo archivo*:

```js
var reader = new app.Reader('#trigger', '#input', {
    preview: '#preview',
    filename: '#filename'
});
```

## Subir el formulario con la imagen

### jQuery

Serializar el formulario con `formData`:

```js
var form = document.querySelector('#form');
var formData = new FormData(form);

$.ajax({
    url: 'http://domain.com/api/service',
    type: 'POST', // Versiones antiguas
    method: 'POST',
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
    success: function (response) {
        console.log('Response: ', response);
    },
    error: function () {
        console.error('Ocurrió un error');
    }
});
```