# CotizaPyme

**CotizaPyme** es un proyecto full-stack en desarrollo para investigar y simplificar la gestión de clientes, presupuestos y cotizaciones de pequeñas empresas.

> Estado actual: frontend inicial disponible; producto y funcionalidades comerciales todavía **en validación**. No existe un backend ni una versión operativa para clientes.

## Iniciar el frontend

Requisitos: Node.js 22+ y npm.

```bash
git clone https://github.com/mateocuetoc-hub/CotizaPyme.git
cd CotizaPyme/frontend
npm install
npm run dev
```

Abrir la dirección local que muestre Vite (normalmente http://localhost:5173/).

## Tecnologías

- **Hoy:** React, TypeScript y Vite en `frontend/`.
- **Propuestas para después de validar:** NestJS, PostgreSQL, Docker, pruebas automatizadas y CI.

## Validación de negocio

El proyecto comenzó con una primera ronda de diez correos a empresas de San Felipe (octubre de 2026). Todavía no hemos confirmado entrevistas ni disposición a pagar.

Consultar [alcance candidato](docs/MVP.md) y [guion de entrevistas](docs/VALIDACION.md).

## Flujo de Git

`main` contiene la base principal del proyecto. Para cambios más complejos podemos revisar una rama temporal antes de incorporarlos a `main`.

No subir archivos `.env`, secretos ni datos privados de empresas.
