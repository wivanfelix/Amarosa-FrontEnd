import { subDays, subHours } from 'date-fns';

const now = new Date();

class IndividualCustomerApi {
    getCustomers() {
        const customers = [
            {
                id_cliente: '1',
                cui: '1234567890123',
                primer_nombre: 'Juan',
                segundo_nombre: 'Carlos',
                primer_apellido: 'Pérez',
                segundo_apellido: 'González',
                direccion: 'Avenida Siempre Viva 742, Ciudad A',
                email: 'juan.perez@mail.com',
                estado: 'Activo',
                nit: '12345678',
                telefono: '12345678',
                updatedAt: subDays(subHours(now, 7), 1).getTime()
            },
            {
                id_cliente: '2',
                cui: '9876543210123',
                primer_nombre: 'María',
                segundo_nombre: 'José',
                primer_apellido: 'López',
                segundo_apellido: 'Ramírez',
                direccion: 'Calle Falsa 123, Ciudad B',
                email: 'maria.lopez@mail.com',
                estado: 'Inactivo',
                nit: '87654321',
                telefono: '87654321',
                updatedAt: subDays(subHours(now, 2), 2).getTime()
            },
            {
                id_cliente: '3',
                cui: '1122334455667',
                primer_nombre: 'Carlos',
                segundo_nombre: 'Andrés',
                primer_apellido: 'Martínez',
                segundo_apellido: 'López',
                direccion: 'Calle Real 456, Ciudad C',
                email: 'carlos.martinez@mail.com',
                estado: 'Activo',
                nit: '22334455',
                telefono: '23456789',
                updatedAt: subDays(subHours(now, 5), 1).getTime()
            },
            {
                id_cliente: '4',
                cui: '2233445566778',
                primer_nombre: 'Ana',
                segundo_nombre: 'Lucía',
                primer_apellido: 'González',
                segundo_apellido: 'Sánchez',
                direccion: 'Plaza Central 101, Ciudad D',
                email: 'ana.gonzalez@mail.com',
                estado: 'Activo',
                nit: '33445566',
                telefono: '87651234',
                updatedAt: subDays(subHours(now, 9), 2).getTime()
            },
            {
                id_cliente: '5',
                cui: '3344556677889',
                primer_nombre: 'Pedro',
                segundo_nombre: 'Alonso',
                primer_apellido: 'Torres',
                segundo_apellido: 'Rivas',
                direccion: 'Avenida Central 202, Ciudad E',
                email: 'pedro.torres@mail.com',
                estado: 'Inactivo',
                nit: '44556677',
                telefono: '34567890',
                updatedAt: subDays(subHours(now, 6), 3).getTime()
            },
            {
                id_cliente: '6',
                cui: '4455667788990',
                primer_nombre: 'Sofía',
                segundo_nombre: 'Marta',
                primer_apellido: 'Rodríguez',
                segundo_apellido: 'Ortiz',
                direccion: 'Calle Norte 808, Ciudad F',
                email: 'sofia.rodriguez@mail.com',
                estado: 'Activo',
                nit: '55667788',
                telefono: '45678901',
                updatedAt: subDays(subHours(now, 5), 4).getTime()
            },
            {
                id_cliente: '7',
                cui: '5566778899001',
                primer_nombre: 'Luis',
                segundo_nombre: 'Miguel',
                primer_apellido: 'Fernández',
                segundo_apellido: 'Vega',
                direccion: 'Calle Sur 909, Ciudad G',
                email: 'luis.fernandez@mail.com',
                estado: 'Activo',
                nit: '66778899',
                telefono: '56789012',
                updatedAt: subDays(subHours(now, 3), 1).getTime()
            },
            {
                id_cliente: '8',
                cui: '6677889900112',
                primer_nombre: 'Laura',
                segundo_nombre: 'Beatriz',
                primer_apellido: 'Herrera',
                segundo_apellido: 'Morales',
                direccion: 'Avenida Principal 303, Ciudad H',
                email: 'laura.herrera@mail.com',
                estado: 'Inactivo',
                nit: '77889900',
                telefono: '67890123',
                updatedAt: subDays(subHours(now, 2), 5).getTime()
            },
            {
                id_cliente: '9',
                cui: '7788990011223',
                primer_nombre: 'Diego',
                segundo_nombre: 'Armando',
                primer_apellido: 'Ramírez',
                segundo_apellido: 'Jiménez',
                direccion: 'Calle Secundaria 404, Ciudad I',
                email: 'diego.ramirez@mail.com',
                estado: 'Activo',
                nit: '88990011',
                telefono: '78901234',
                updatedAt: subDays(subHours(now, 4), 1).getTime()
            },
            {
                id_cliente: '10',
                cui: '8899001122334',
                primer_nombre: 'Carmen',
                segundo_nombre: 'Isabel',
                primer_apellido: 'Vargas',
                segundo_apellido: 'Soto',
                direccion: 'Plaza Comercial 505, Ciudad J',
                email: 'carmen.vargas@mail.com',
                estado: 'Activo',
                nit: '99001122',
                telefono: '89012345',
                updatedAt: subDays(subHours(now, 7), 2).getTime()
            }
        ];

        return Promise.resolve(customers);
    }
}

export const individualCustomerApi = new IndividualCustomerApi();
