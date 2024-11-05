import React from 'react';
import DpsTimeLine from './DpsTimeLine';

const defaultTabs = [
    { label: 'Recogida', date: '2022/09/24 7:20 PM', status: 'Recogida' },
    { label: 'Terminal Origen', date: '2022/09/24 7:20 PM', status: 'Terminal Origen' },
    { label: 'En transporte', date: '2022/09/24 7:20 PM', status: 'En transporte' },
    { label: 'Entrega parcial', date: '2022/09/24 7:20 PM', status: 'Entrega parcial' },
    { label: 'Entregada', date: '2022/09/24 7:20 PM', status: 'Entregada' },
    { label: 'Cerrado por incidencia', date: '2022/09/24 7:20 PM', status: 'Cerrado por incidencia', isError: true },
];

export default {
    component: DpsTimeLine,
};

export const DefaultDpsTimeLine = () => {
    return (
        <DpsTimeLine tabs={defaultTabs} />
    );
};

