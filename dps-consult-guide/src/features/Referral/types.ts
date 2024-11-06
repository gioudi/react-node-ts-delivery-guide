export interface Estado {
    hora: string | null;
    fecha: string;
    codigo: string;
    descripcion: string;
    internacional: boolean;
  }
  
  export interface DataItem {
    estado: Estado[];
    novedad: any[];
    guias: any[];
    reportes: any | null;
  }
  
  export interface ReferralData {
    isError: boolean;
    data: DataItem[];
    timestamp: string;
    id: string;
    tabs: Tab[];
  }
  
  export interface ReferralResponse {
    data: ReferralData;
    author: {
      name: string;
      lastname: string;
    };
  }

  export interface Tab {
    label: string;
    date: string;
    status: string;
    isError?: boolean;
  }
  