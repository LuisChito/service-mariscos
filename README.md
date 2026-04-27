
# Servicio de Mariscos

## Descripción

Este proyecto fue desarrollado para la materia de **Programación Web**.

En este repositorio se documenta y gestiona el servicio de mariscos, incluyendo los endpoints disponibles para consumir la API.

## Endpoints

A continuación se detallan los endpoints que se utilizan para interactuar con el servicio.

### Sucursales

### `GET /sucursales` — Obtener la lista de sucursales.

#### Ejemplo de respuesta

```json
[
    {
        "nombre": "Tijuana",
        "imagen": "/imgs/layout/sucursales/bolivia.webp",
        "direccion": "Insurgentes, Tijuana Baja California",
        "mapa": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76169.49615876176!2d-117.02189400679612!3d32.46605910978985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d949c6ca59b29d%3A0x7fefafcbfb50418d!2sMariscos%20El%20%C3%81ngel%20Radical%20Otay!5e0!3m2!1ses-419!2smx!4v1776405243953!5m2!1ses-419!2smx"
    }
]
```


### `PUT /sucursales/:sucursal` — Modificar el estado de una sucursal.

#### Ejemplo de petición para modificar el status
**Body**

```json
{
    "status": 1
}
```

**Respuesta**

```json
{
    "nombre": "Tijuana",
    "imagen": "/imgs/layout/sucursales/bolivia.webp",
    "direccion": "Insurgentes, Tijuana Baja California",
    "mapa": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76169.49615876176!2d-117.02189400679612!3d32.46605910978985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d949c6ca59b29d%3A0x7fefafcbfb50418d!2sMariscos%20El%20%C3%81ngel%20Radical%20Otay!5e0!3m2!1ses-419!2smx!4v1776405243953!5m2!1ses-419!2smx",
    "status": false
}
```



## Autor

LuisChito
