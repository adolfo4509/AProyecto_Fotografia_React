import Footer from '../Footer/Footer'
import Nav from '../nav/nav'
import '../styles/styles.css'
const Contactanos = () => {
  return (
    <div>
      <Nav />
      <main className="contenedor seccion contenido-centrado">
        <h1 className="contactanos centrar-texto">Contacto</h1>
        <h2 className="formulario-lleno centrar-texto">
          Llena el formulario de contacto
        </h2>
        <form className="contacto" action="">
          <fieldset className="contacto_fieldset">
            <legend>Información de personal</legend>
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Nombre"
              required
            />
            <label htmlFor="apellidos">Apellidos</label>
            <input
              type="text"
              name="apellidos"
              id="apellidos"
              placeholder="Apellidos"
              required
            />
            <label htmlFor="">E-mail</label>
            <input
              type="email"
              name="correo"
              id="correo"
              placeholder="Ingresa tu correo"
              required
            />
            <label htmlFor="">Télefono</label>
            <input
              type="tel"
              name="telefono"
              id="telefono"
              placeholder="Ingresa tu Teléfono"
              required
            />
            <legend>Cómo desea ser contactad@:</legend>
            <div className="forma-contacto">
              <label htmlFor="telefono">Télefono</label>
              <input
                type="radio"
                name="telefono"
                value="telefono"
                id="telefono"
              />
              <label htmlFor="correo">E-mail</label>
              <input type="radio" name="email" value="email" id="email" />
            </div>
            <p>Si eligió Teléfono, elija la fecha y la hora</p>
            <label htmlFor="fecha">Fecha</label>
            <input type="date" name="fecha" id="fecha" required />
            <label htmlFor="hora">Hora</label>
            <input
              type="time"
              name="hora"
              id="hora"
              required
              min="09:00"
              max="18:00"
            />
            <legend>Información sobre el evento</legend>
            <label htmlFor="opciones">Tipo de evento</label>
            <select name="opciones" id="">
              <option value="" disabled selected>
                --Seleccione--
              </option>
              <option value="boda">Boda</option>
              <option value="bautizo">Bautizo</option>
              <option value="primera comunion">Primera comunion</option>
              <option value="confirmacion">Confirmación</option>
              <option value="graduacion">Graduación</option>
              <option value="quinceañera">Quinceañera</option>
              <option value="gestante">Gestante</option>
            </select>
            <label htmlFor="lugar Evento">Lugar del Evento</label>
            <input type="text" />
            <label htmlFor="">Observaciones</label>
            <textarea
              name="mensaje"
              id="mensaje"
              cols="30"
              rows="10"
            ></textarea>

            <input
              className="boton boton-verde"
              type="submit"
              value="enviar"
              id="enviar"
            />
          </fieldset>
        </form>
      </main>
      <Footer />
    </div>
  )
}

export default Contactanos
