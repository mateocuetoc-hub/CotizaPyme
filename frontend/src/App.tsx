// Esta es una página de presentación inicial, no un sistema de cotizaciones operativo.
// Las funcionalidades se implementarán y validarán de forma incremental.

const funcionalidades = [
  {
    numero: '01',
    nombre: 'Clientes',
    descripcion: 'Mantener los datos de contacto y las solicitudes de cada cliente organizadas.',
  },
  {
    numero: '02',
    nombre: 'Cotizaciones',
    descripcion: 'Preparar presupuestos claros con materiales, servicios y cantidades.',
  },
  {
    numero: '03',
    nombre: 'Seguimiento',
    descripcion: 'Saber qué propuestas están pendientes, aceptadas o rechazadas.',
  },
]

function App() {
  return (
    <div className="sitio">
      <header className="barra">
        <a className="marca" href="#inicio" aria-label="CotizaPyme, ir al inicio">
          <span className="marca-icono">C<span>.</span></span>
          <span>Cotiza<span>Pyme</span></span>
        </a>

        <nav aria-label="Navegación principal">
          <a href="#funcionalidades">Propuesta</a>
          <a href="#estado">Estado del proyecto</a>
        </nav>
      </header>

      <main id="inicio">
        <section className="hero" aria-labelledby="titulo-principal">
          <div className="hero-contenido">
            <p className="etiqueta"><span className="punto" /> PROYECTO EN VALIDACIÓN · SAN FELIPE, CHILE</p>
            <h1 id="titulo-principal">
              Cotizar debería ser <span>más simple.</span>
            </h1>
            <p className="hero-texto">
              Estamos explorando una forma más ordenada de preparar presupuestos,
              gestionar clientes y dar seguimiento a las cotizaciones de pequeñas empresas.
            </p>
            <div className="botones">
              <a className="boton primario" href="#funcionalidades">Conocer la propuesta <span aria-hidden="true">→</span></a>
              <a
                className="boton secundario"
                href="https://github.com/mateocuetoc-hub/CotizaPyme"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver el proyecto en GitHub
              </a>
            </div>
            <p className="nota">Primera versión visual · Aún no disponible para clientes</p>
          </div>

          <div className="muestra" aria-label="Ejemplo ilustrativo de una cotización">
            <div className="muestra-encabezado">
              <div>
                <p className="muestra-subtitulo">VISTA CONCEPTUAL</p>
                <h2>Nueva cotización</h2>
              </div>
              <span className="estado">Borrador</span>
            </div>
            <div className="muestra-cliente">
              <span>Cliente</span>
              <strong>Cliente de ejemplo</strong>
            </div>
            <div className="tabla-encabezado"><span>Descripción</span><span>Subtotal</span></div>
            <div className="fila"><span>Materiales</span><strong>$150.000</strong></div>
            <div className="fila"><span>Mano de obra</span><strong>$85.000</strong></div>
            <div className="total"><span>Subtotal ilustrativo</span><strong>$235.000</strong></div>
            <p className="muestra-pie">Montos de demostración, sin impuestos. No es una cotización real.</p>
          </div>
        </section>

        <section className="seccion caracteristicas" id="funcionalidades">
          <div className="seccion-encabezado">
            <p className="sobretitulo">QUÉ ESTAMOS INVESTIGANDO</p>
            <h2>Una herramienta pensada para el trabajo diario.</h2>
            <p>Estas son ideas iniciales que confirmaremos con entrevistas a negocios reales.</p>
          </div>
          <div className="cuadricula">
            {funcionalidades.map((item) => (
              <article className="tarjeta" key={item.numero}>
                <span className="numero">{item.numero}</span>
                <h3>{item.nombre}</h3>
                <p>{item.descripcion}</p>
                <span className="tarjeta-estado">Funcionalidad propuesta</span>
              </article>
            ))}
          </div>
        </section>

        <section className="seccion cierre" id="estado">
          <div>
            <p className="sobretitulo">CONSTRUYENDO CON EVIDENCIA</p>
            <h2>Primero escuchar. Después construir.</h2>
          </div>
          <p>
            Iniciamos una campaña de contacto con diez empresas de San Felipe.
            Las siguientes decisiones de producto dependerán de los problemas
            identificados en entrevistas, no de suposiciones.
          </p>
        </section>
      </main>

      <footer className="pie">
        <strong>Cotiza<span>Pyme</span></strong>
        <span>Proyecto en desarrollo · San Felipe, Chile</span>
      </footer>
    </div>
  )
}

export default App
