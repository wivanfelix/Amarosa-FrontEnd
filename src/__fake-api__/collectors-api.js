import { subDays, subHours } from 'date-fns';

const now = new Date();

class CollectorApi {
    getCollectors() {
        const collectors = [
            {
                id_cartera: '1',
                id_cobrador: '101',
                codigo_cobrador: 'COB-001',
                cui: '1234567890123',
                primer_nombre: 'Mario',
                segundo_nombre: 'Eduardo',
                primer_apellido: 'García',
                segundo_apellido: 'Méndez',
                nit: '1234567-8',
                email: 'mario.garcia@cobranza.com',
                telefono: '12345678',
                estado: 'Activo',
                updatedAt: subDays(subHours(now, 7), 1).getTime()
            },
            {
                id_cartera: '2',
                id_cobrador: '102',
                codigo_cobrador: 'COB-002',
                cui: '9876543210123',
                primer_nombre: 'Ana',
                segundo_nombre: 'Beatriz',
                primer_apellido: 'Rodríguez',
                segundo_apellido: 'Pérez',
                nit: '7654321-2',
                email: 'ana.rodriguez@cobranza.com',
                telefono: '23456789',
                estado: 'Activo',
                updatedAt: subDays(subHours(now, 5), 2).getTime()
            },
            {
                id_cartera: '3',
                id_cobrador: '103',
                codigo_cobrador: 'COB-003',
                cui: '1122334455667',
                primer_nombre: 'Carlos',
                segundo_nombre: 'Antonio',
                primer_apellido: 'Sánchez',
                segundo_apellido: 'López',
                nit: '1122334-5',
                email: 'carlos.sanchez@cobranza.com',
                telefono: '34567890',
                estado: 'Activo',
                updatedAt: subDays(subHours(now, 4), 1).getTime()
            },
            {
                id_cartera: '4',
                id_cobrador: '104',
                codigo_cobrador: 'COB-004',
                cui: '2233445566778',
                primer_nombre: 'Laura',
                segundo_nombre: 'Elena',
                primer_apellido: 'Martínez',
                segundo_apellido: 'González',
                nit: '2233445-6',
                email: 'laura.martinez@cobranza.com',
                telefono: '45678901',
                estado: 'Inactivo',
                updatedAt: subDays(subHours(now, 8), 1).getTime()
            },
            {
                id_cartera: '5',
                id_cobrador: '105',
                codigo_cobrador: 'COB-005',
                cui: '3344556677889',
                primer_nombre: 'Roberto',
                segundo_nombre: 'José',
                primer_apellido: 'Torres',
                segundo_apellido: 'Ramírez',
                nit: '3344556-7',
                email: 'roberto.torres@cobranza.com',
                telefono: '56789012',
                estado: 'Activo',
                updatedAt: subDays(subHours(now, 3), 1).getTime()
            },
            {
                id_cartera: '6',
                id_cobrador: '106',
                codigo_cobrador: 'COB-006',
                cui: '4455667788990',
                primer_nombre: 'Sandra',
                segundo_nombre: 'Paola',
                primer_apellido: 'Vargas',
                segundo_apellido: 'López',
                nit: '4455667-8',
                email: 'sandra.vargas@cobranza.com',
                telefono: '67890123',
                estado: 'Inactivo',
                updatedAt: subDays(subHours(now, 6), 1).getTime()
            },
            {
                id_cartera: '7',
                id_cobrador: '107',
                codigo_cobrador: 'COB-007',
                cui: '5566778899001',
                primer_nombre: 'David',
                segundo_nombre: 'Alonso',
                primer_apellido: 'Ramírez',
                segundo_apellido: 'Díaz',
                nit: '5566778-9',
                email: 'david.ramirez@cobranza.com',
                telefono: '78901234',
                estado: 'Activo',
                updatedAt: subDays(subHours(now, 2), 2).getTime()
            },
            {
                id_cartera: '8',
                id_cobrador: '108',
                codigo_cobrador: 'COB-008',
                cui: '6677889900112',
                primer_nombre: 'Gabriela',
                segundo_nombre: 'Sofía',
                primer_apellido: 'Fernández',
                segundo_apellido: 'Morales',
                nit: '6677889-0',
                email: 'gabriela.fernandez@cobranza.com',
                telefono: '89012345',
                estado: 'Activo',
                updatedAt: subDays(subHours(now, 5), 3).getTime()
            },
            {
                id_cartera: '9',
                id_cobrador: '109',
                codigo_cobrador: 'COB-009',
                cui: '7788990011223',
                primer_nombre: 'Carmen',
                segundo_nombre: 'Lucía',
                primer_apellido: 'Ortega',
                segundo_apellido: 'Jiménez',
                nit: '7788990-1',
                email: 'carmen.ortega@cobranza.com',
                telefono: '90123456',
                estado: 'Inactivo',
                updatedAt: subDays(subHours(now, 4), 2).getTime()
            },
            {
                id_cartera: '10',
                id_cobrador: '110',
                codigo_cobrador: 'COB-010',
                cui: '8899001122334',
                primer_nombre: 'José',
                segundo_nombre: 'Manuel',
                primer_apellido: 'Vega',
                segundo_apellido: 'Hernández',
                nit: '8899001-2',
                email: 'jose.vega@cobranza.com',
                telefono: '01234567',
                estado: 'Activo',
                updatedAt: subDays(subHours(now, 7), 2).getTime()
            }
        ];

        return Promise.resolve(collectors);
    }
}

export const collectorApi = new CollectorApi();
