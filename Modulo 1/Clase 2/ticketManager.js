class TicketManager {
  constructor(precioBase) {
    this.precioBase = precioBase;
    this.eventos = [];
  }

  calcularPrecioFinal() {
    return this.precioBase * 1.15;
  }

  agregarEvento(
    nombre,
    lugar,
    capacidad = 50,
    precio = this.calcularPrecioFinal()
  ) {
    const evento = {
      id: this.eventos.length + 1,
      nombre,
      lugar,
      capacidad,
      precio,
      fechaCreacion: new Date(),
      participantes: [],
    };

    this.eventos.push(evento);
  }

  getEventos() {
    return this.eventos;
  }

  agregarParticipante(id, nombre) {
    const evento = this.eventos.find((evento) => evento.id === id);
    evento.participantes.push(nombre);
  }

  ponerEventoEnGira(id, lugar, fechaInicio) {
    const evento = this.eventos.find((evento) => evento.id === id);
    const eventoGira = {
      ...evento,
      id: this.eventos.length + 1,
      lugar,
      fechaInicio,
      participantes: [],
    };

    this.eventos.push(eventoGira);
  }
}

const ticketManager = new TicketManager(100);
ticketManager.agregarEvento("Festival de verano", "Buenos Aires");
ticketManager.agregarEvento("Festival de invierno", "Bariloche", 100, 200);
ticketManager.agregarParticipante(1, "Juan");
ticketManager.agregarParticipante(1, "Pedro");
ticketManager.agregarParticipante(2, "Maria");
ticketManager.agregarParticipante(2, "Jose");
ticketManager.ponerEventoEnGira(1, "Cordoba", new Date());
console.log(ticketManager.getEventos());
