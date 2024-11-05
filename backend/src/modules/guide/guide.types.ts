export interface Guide {
  isError?: boolean;
  data?: Data;
}

export interface Data {
  reconstruido?: boolean;
  remesas?: boolean;
  guia?: string;
  cliente?: Cliente;
  remitente?: Remitente;
  destinatario?: Destinatario;
  fecha_hora_recogida?: null;
  fecha_hora_entrega?: null;
  producto?: Producto;
  servicio?: Servicio;
  guia_liquidada?: boolean;
  recaudo_anulado?: null;
  valor_recaudo_contra_entrega?: null;
  peso?: null;
  volumen?: null;
  alto?: null;
  ancho?: null;
  largo?: null;
  flete?: Flete;
  valor_declarado?: null;
  total_unidades?: null;
  total_unidades_declarado?: number;
  referencia?: string;
  observaciones?: string;
  factura?: null;
  fuente_guia?: null;
  medios_pago?: null;
  codigo_grupo_planilla?: null;
  tipoguia?: number;
  abreviado_cuenta?: string;
  unidades?: Unidade[];
  contenido?: null;
  codigo_vinculo?: null;
  firma_guia?: FirmaGuia;
  source?: string;
}

export interface Cliente {
  nit?: null;
  razon_social?: string;
  div?: null;
}

export interface Destinatario {
  nit?: null;
  div?: null;
  nombre?: string;
  telefono?: string;
  zonificacion?: { [key: string]: null | string };
  email?: null;
  tipo_poblacion_destino?: null;
}

export interface FirmaGuia {
  codigo_remision?: string;
  terminal?: number;
  equipo?: string[];
  reparte?: number;
  cedula?: string;
  movil?: string;
  fecha_entrega?: FechaEntrega;
  observacion?: string;
}

export interface FechaEntrega {
  _seconds?: number;
  _nanoseconds?: number;
}

export interface Flete {
  flete_fijo?: null;
  flete_total?: null;
  flete_variable?: null;
  otros_valores?: null;
  valor_facturado?: null;
}

export interface Producto {
  abreviado_producto?: string;
  codigo_producto_sorter?: null;
  codigo_producto?: number;
  peso_liquidado?: null;
  peso_volumen?: null;
}

export interface Remitente {
  nit?: null;
  div?: null;
  nombre?: string;
  telefono?: string;
  zonificacion?: { [key: string]: null | string };
  email?: null;
}

export interface Servicio {
  nivel_servicio?: string;
  codigo_nivel_servicio?: null;
  descripcion?: string;
}

export interface Unidade {
  guia?: string;
  etiqueta1d?: string;
  etiqueta2d?: string;
  fecha_hora_recogida?: null;
  fecha_hora_entrega?: null;
  referencia_detalle?: string;
  numero_unidad?: number;
  ultimo_estado_tracking?: UltimoEstadoTracking;
}

export interface UltimoEstadoTracking {
  codigo?: null;
  nombre?: null;
}
