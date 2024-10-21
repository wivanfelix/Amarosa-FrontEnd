import { subDays, subHours } from 'date-fns';

const now = new Date();

class DebtorApi {
    getDebtors() {
        const debtors = [
            {
                id_deudor: '1',
                cui: '1234567890123',
                primer_nombre: 'Luis',
                segundo_nombre: 'Andrés',
                primer_apellido: 'Pérez',
                segundo_apellido: 'Gómez',
                direccion: 'Avenida Central 101, Ciudad A',
                direccion_trabajo: 'Edificio Torres, Oficina 305',
                lugar_trabajo: 'Corporación Pérez',
                telefono: '12345678',
                telefono_trabajo: '87654321',
                prestamos: 3,  // Cantidad de préstamos asociados
                updatedAt: subDays(subHours(now, 7), 1).getTime()
            },
            {
                id_deudor: '2',
                cui: '9876543210123',
                primer_nombre: 'María',
                segundo_nombre: 'Isabel',
                primer_apellido: 'Rodríguez',
                segundo_apellido: 'Jiménez',
                direccion: 'Calle Falsa 123, Ciudad B',
                direccion_trabajo: 'Plaza del Sol, Local 10',
                lugar_trabajo: 'Supermercado El Sol',
                telefono: '23456789',
                telefono_trabajo: '98765432',
                prestamos: 2,
                updatedAt: subDays(subHours(now, 2), 2).getTime()
            },
            {
                id_deudor: '3',
                cui: '1122334455667',
                primer_nombre: 'Carlos',
                segundo_nombre: 'Antonio',
                primer_apellido: 'Sánchez',
                segundo_apellido: 'López',
                direccion: 'Calle Real 456, Ciudad C',
                direccion_trabajo: 'Oficinas Centrales, Piso 7',
                lugar_trabajo: 'Banco Nacional',
                telefono: '34567890',
                telefono_trabajo: '09876543',
                prestamos: 1,
                updatedAt: subDays(subHours(now, 5), 1).getTime()
            },
            {
                id_deudor: '4',
                cui: '2233445566778',
                primer_nombre: 'Ana',
                segundo_nombre: 'Lucía',
                primer_apellido: 'Martínez',
                segundo_apellido: 'Hernández',
                direccion: 'Plaza Central 101, Ciudad D',
                direccion_trabajo: 'Consultorio Médico 402',
                lugar_trabajo: 'Clínica de Especialidades',
                telefono: '45678901',
                telefono_trabajo: '10987654',
                prestamos: 4,
                updatedAt: subDays(subHours(now, 9), 2).getTime()
            },
            {
                id_deudor: '5',
                cui: '3344556677889',
                primer_nombre: 'Pedro',
                segundo_nombre: 'Alonso',
                primer_apellido: 'Torres',
                segundo_apellido: 'Ramírez',
                direccion: 'Avenida Sur 505, Ciudad E',
                direccion_trabajo: 'Torre Corporativa, Piso 9',
                lugar_trabajo: 'Compañía Torres',
                telefono: '56789012',
                telefono_trabajo: '21098765',
                prestamos: 5,
                updatedAt: subDays(subHours(now, 6), 3).getTime()
            },
            {
                id_deudor: '6',
                cui: '4455667788990',
                primer_nombre: 'Sofía',
                segundo_nombre: 'Andrea',
                primer_apellido: 'Vargas',
                segundo_apellido: 'Pérez',
                direccion: 'Calle Norte 808, Ciudad F',
                direccion_trabajo: 'Centro Comercial Norte, Local 2',
                lugar_trabajo: 'Boutique Andrea',
                telefono: '67890123',
                telefono_trabajo: '32109876',
                prestamos: 2,
                updatedAt: subDays(subHours(now, 5), 4).getTime()
            },
            {
                id_deudor: '7',
                cui: '5566778899001',
                primer_nombre: 'Diego',
                segundo_nombre: 'Alberto',
                primer_apellido: 'Ramírez',
                segundo_apellido: 'Díaz',
                direccion: 'Calle Oeste 909, Ciudad G',
                direccion_trabajo: 'Fábrica Ramirez, Sección 3',
                lugar_trabajo: 'Industria Ramirez',
                telefono: '78901234',
                telefono_trabajo: '43210987',
                prestamos: 6,
                updatedAt: subDays(subHours(now, 3), 1).getTime()
            },
            {
                id_deudor: '8',
                cui: '6677889900112',
                primer_nombre: 'Laura',
                segundo_nombre: 'Beatriz',
                primer_apellido: 'Fernández',
                segundo_apellido: 'Morales',
                direccion: 'Avenida Este 202, Ciudad H',
                direccion_trabajo: 'Edificio Fernández, Oficina 1B',
                lugar_trabajo: 'Consultores Fernández',
                telefono: '89012345',
                telefono_trabajo: '54321098',
                prestamos: 1,
                updatedAt: subDays(subHours(now, 2), 5).getTime()
            },
            {
                id_deudor: '9',
                cui: '7788990011223',
                primer_nombre: 'Carmen',
                segundo_nombre: 'Lucía',
                primer_apellido: 'Ortega',
                segundo_apellido: 'Jiménez',
                direccion: 'Calle Secundaria 404, Ciudad I',
                direccion_trabajo: 'Centro Empresarial Ortega, Piso 12',
                lugar_trabajo: 'Servicios Ortega',
                telefono: '90123456',
                telefono_trabajo: '65432109',
                prestamos: 3,
                updatedAt: subDays(subHours(now, 4), 1).getTime()
            },
            {
                id_deudor: '10',
                cui: '8899001122334',
                primer_nombre: 'José',
                segundo_nombre: 'Manuel',
                primer_apellido: 'Vega',
                segundo_apellido: 'Hernández',
                direccion: 'Plaza Mayor 505, Ciudad J',
                direccion_trabajo: 'Corporación Vega, Oficina 7D',
                lugar_trabajo: 'Grupo Vega',
                telefono: '01234567',
                telefono_trabajo: '76543210',
                prestamos: 5,
                updatedAt: subDays(subHours(now, 7), 2).getTime()
            }
        ];

        return Promise.resolve(debtors);
    }
}

export const debtorApi = new DebtorApi();
