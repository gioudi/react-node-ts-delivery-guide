export interface Terminal {
  message?: string;
  records?: number;
  isError?: boolean;
  data?: Datum[];
  no_results?: string;
}

export interface Datum {
  codigo_terminal?: number;
  codigo_centro?: string;
  nombre?: string;
  abreviado?: string;
  codigo_ciudad?: string;
  direccion?: string;
  telefono?: string;
  codigo_postal?: string;
  operativo?: boolean;
  latitud?: string;
  longitud?: string;
  nombre_ministerio?: string;
  activo?: boolean;
}

export interface TerminalState {
  terminals: Terminal[];
  selectedTerminal: string;
  loading: boolean;
  error: string | null;
}
