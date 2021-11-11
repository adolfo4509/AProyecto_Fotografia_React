import React from "react";
import { Link } from "react-router-dom";
import "../styles/contactanos.css";
import { boostrap } from "bootstrap";

const Contactanos = () => {
  return (
    <div>
      <div className="contactanos_">
        <Link to="/">Inicio</Link>
        <Link to="/nosotros">Nosotros</Link>
      </div>
      <div className="contenedor seccion contenido-centrado">
        <h1 className="contactanos centrar-texto">Contacto</h1>
        <h2 className="formulario-lleno centrar-texto">
          Llena el Formulario de Contacto
        </h2>
        <form className="contacto" action="">
          <fieldset>
            <legend>Información Personal</legend>
            <label for="nombre">Nombre</label>
            <input type="text" id="nombre" placeholder="Nombre" />
            <label for="nombre">Apellidos</label>
            <input type="text" id="apellidos" placeholder="Apellidos" />

            <label for="email">E-Mail</label>
            <input type="email" id="email" placeholder="e-mail" required />

            <label for="telefono">Teléfono</label>
            <input
              type="tel"
              id="telefono"
              placeholder="Ingresa tu Teléfono"
              required
            />

            <legend class="centrar-legend">Cómo desea ser contactado:</legend>
            <div class="forma-contacto">
              <label for="telefono">Teléfono</label>
              <input
                type="radio"
                name="contacto"
                value="telefono"
                id="telefono"
              />

              <label for="correo">E-mail</label>
              <input type="radio" name="contacto" value="correo" id="correo" />
            </div>

            <p>Si eligió Teléfono, elija la fecha y la hora</p>
            <label for="fecha">Fecha</label>
            <input type="date" id="fecha" />
            <label for="hora">Hora</label>
            <input type="time" id="hora" min="09:00" max="18:00" />
            <legend class="centrar-legend">Información sobre el evento</legend>
            <label for="opciones">Tipo de evento</label>
            <select name="opciones" id="">
              <option value="" disabled selected>
                --Seleccione--
              </option>
              <option value="boda">Boda</option>
              <option value="bautizo">Bautizo</option>
              <option value="primera_comunion">Primera Comunion</option>
              <option value="grado">Grado</option>
              <option value="cumpleaños">Cumpleaños</option>
              <option value="diferentesEventos">Diferentes Eventos</option>
            </select>
            <label for="lugarEvento">Lugar del Evento</label>
            <input type="text" />
            <label for="mensaje">Observaciones</label>
            <textarea id="mensaje"></textarea>
            <button className="btn btn-primay">Enviar</button>
            <input class="boton boton-verde" type="submit" value="Enviar" />
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Contactanos;
