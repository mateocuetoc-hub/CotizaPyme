# CotizaPyme — Alcance inicial del MVP

**Estado:** hipótesis de producto, sujeta a entrevistas con negocios reales.

## Usuario objetivo (hipótesis)

Dueños, administradores y encargados comerciales de micro y pequeñas empresas de San Felipe que realizan trabajos por encargo: remodelaciones, mantenciones, instalaciones o servicios técnicos.

## Flujo de usuario que queremos validar

1. El negocio recibe una solicitud por teléfono, WhatsApp, correo o presencialmente.
2. Registra cliente, trabajo solicitado y antecedentes necesarios.
3. Prepara un presupuesto con servicios/materiales, cantidades y precios.
4. Revisa el total y exporta una cotización en PDF.
5. Envía manualmente la propuesta por el canal habitual.
6. Marca si la cotización quedó pendiente, fue aceptada o rechazada.

## Funciones candidatas para V1

| Prioridad | Funcionalidad | Criterio de terminado |
| --- | --- | --- |
| P0 | Autenticación de cuenta del negocio | Un usuario puede iniciar/cerrar sesión y acceder solo a sus datos |
| P0 | Gestión de clientes | Crear, listar, editar y buscar clientes |
| P0 | Cotizaciones e ítems | Crear presupuestos con descripción, cantidad, precio unitario y total calculado |
| P0 | PDF | Descargar un documento legible con datos del negocio y desglose de precios |
| P0 | Estados | Distinguir borrador, enviada, aceptada y rechazada |
| P1 | Compartir por WhatsApp manualmente | Abrir un mensaje preparado sin envío automático |
| P1 | Historial / duplicado de presupuestos | Reutilizar la estructura de una cotización anterior |

El detalle se ajustará con datos de entrevistas antes de implementar cada módulo.

## Exclusiones explícitas para el MVP

- Facturación electrónica y emisión de DTE ante el SII.
- Integración automática o masiva con WhatsApp.
- Pasarelas de pago y conciliación.
- IA para generar precios o tomar decisiones sin revisión humana.
- Inventario, compras, gestión de obras y ERP completo.

## Restricciones iniciales

- Ningún secreto o dato real de clientes en GitHub.
- Separación de información por negocio si se admiten múltiples empresas.
- Dinero representado con un tipo apropiado para evitar errores de punto flotante; definición de impuestos y redondeos antes de implementarlos.
- Pruebas automatizadas para cálculo de totales, autorización y funcionalidades principales.
- Producto responsive para uso en celular.

## Criterio para avanzar

Antes de comprometer la V1, buscamos:
- Al menos 5–6 entrevistas con negocios pertinentes.
- Problemas repetidos y relevantes en la gestión de cotizaciones.
- Al menos dos negocios interesados en probar un prototipo.
- Señales explícitas de disposición a pagar o de valor económico medible.

Si estos criterios no se cumplen, reformulamos el nicho o el alcance.
