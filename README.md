# CotizaPyme

> Proyecto de software full-stack en etapa de validación. Buscamos ayudar a pequeñas empresas a preparar, compartir y dar seguimiento a sus cotizaciones.

## Problema que queremos investigar

En negocios que trabajan por encargo, un presupuesto puede incluir materiales, cantidades, mano de obra y condiciones de entrega. Queremos comprobar si preparar y gestionar esas cotizaciones genera pérdidas de tiempo o dificultades que justifiquen una herramienta digital.

**Importante:** la demanda y las funcionalidades todavía no están validadas con clientes. No presentamos CotizaPyme como un producto terminado.

## Contexto de validación

- **Zona inicial:** San Felipe, Región de Valparaíso, Chile.
- **Rubros por explorar:** construcción, remodelaciones, instalaciones y mantenciones.
- **Primera prospección:** 10 empresas contactadas por correo.
- **Próximo hito:** entrevistar encargados de cotizaciones y verificar los problemas reales.

Las respuestas y datos personales de los participantes no se publicarán en este repositorio.

## MVP candidato (sujeto a entrevistas)

1. Registrar clientes y solicitudes de presupuesto.
2. Preparar cotizaciones con ítems, cantidades, precios y totales.
3. Exportar presupuestos a PDF.
4. Compartir manualmente una cotización por WhatsApp u otro canal.
5. Registrar estados: borrador, enviada, aceptada o rechazada.

**Fuera del MVP inicial:** facturación tributaria SII, cobros en línea, integración automática con WhatsApp e IA generativa.

Ver [alcance propuesto](docs/MVP.md) y [plan de validación](docs/VALIDACION.md).

## Stack técnico propuesto

- **Frontend:** React + TypeScript.
- **Backend:** NestJS + TypeScript.
- **Base de datos:** PostgreSQL.
- **Calidad:** pruebas automatizadas, GitHub Actions y Docker.

Esta arquitectura es una propuesta inicial y podrá ajustarse según los resultados de la validación.

## Forma de trabajo

- `main` representa la versión aprobada.
- Cada cambio se desarrolla en una rama dedicada.
- Revisamos los cambios mediante Pull Requests antes de fusionarlos.
- No subimos contraseñas, archivos `.env` ni datos privados de clientes.

## Estado actual

🟡 **Preparación inicial.** Todavía no hay aplicación funcional ni clientes de pago.

Proyecto personal desarrollado con fines de aprendizaje profesional y exploración de un emprendimiento tecnológico en Chile.
