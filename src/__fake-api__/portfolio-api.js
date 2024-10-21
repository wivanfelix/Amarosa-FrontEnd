import { subDays, subHours } from 'date-fns';

const now = new Date();

class PortfolioApi {
    getPortfolios() {
        const portfolios = [
            {
                id: '1',
                nombre: 'Cartera Empresarial A',
                contacto: 'Juan Pérez',
                telefono: '12345678', // Teléfono de 8 dígitos
                email: 'juan.perez@amarosa.com', // Email con @amarosa.com
                direccion: 'Avenida Siempre Viva 742, Ciudad A',
                updatedAt: subDays(subHours(now, 7), 1).getTime()
            },
            {
                id: '2',
                nombre: 'Cartera Personal B',
                contacto: 'María López',
                telefono: '87654321', // Teléfono de 8 dígitos
                email: 'maria.lopez@amarosa.com', // Email con @amarosa.com
                direccion: 'Calle Falsa 123, Ciudad B',
                updatedAt: subDays(subHours(now, 2), 2).getTime()
            },
            {
                id: '3',
                nombre: 'Cartera Rapicredit Premium C',
                contacto: 'Carlos Martínez',
                telefono: '23456789', // Teléfono de 8 dígitos
                email: 'carlos.martinez@amarosa.com', // Email con @amarosa.com
                direccion: 'Calle Real 456, Ciudad C',
                updatedAt: subDays(subHours(now, 5), 1).getTime()
            },
            {
                id: '4',
                nombre: 'Cartera Empresarial D',
                contacto: 'Ana González',
                telefono: '87651234', // Teléfono de 8 dígitos
                email: 'ana.gonzalez@amarosa.com', // Email con @amarosa.com
                direccion: 'Plaza Central 101, Ciudad D',
                updatedAt: subDays(subHours(now, 9), 2).getTime()
            },
            {
                id: '5',
                nombre: 'Cartera Personal E',
                contacto: 'Pedro Torres',
                telefono: '34567890', // Teléfono de 8 dígitos
                email: 'pedro.torres@amarosa.com', // Email con @amarosa.com
                direccion: 'Avenida Central 202, Ciudad E',
                updatedAt: subDays(subHours(now, 6), 3).getTime()
            },
            {
                id: '6',
                nombre: 'Cartera Empresarial F',
                contacto: 'Sofía Rodríguez',
                telefono: '45678901', // Teléfono de 8 dígitos
                email: 'sofia.rodriguez@amarosa.com', // Email con @amarosa.com
                direccion: 'Calle Norte 808, Ciudad F',
                updatedAt: subDays(subHours(now, 1), 5).getTime()
            },
            {
                id: '7',
                nombre: 'Cartera Personal G',
                contacto: 'Luis Méndez',
                telefono: '56789012', // Teléfono de 8 dígitos
                email: 'luis.mendez@amarosa.com', // Email con @amarosa.com
                direccion: 'Bulevar Sur 99, Ciudad G',
                updatedAt: subDays(subHours(now, 8), 6).getTime()
            },
            {
                id: '8',
                nombre: 'Cartera Rapicredit Preferencial H',
                contacto: 'Laura Sánchez',
                telefono: '67890123', // Teléfono de 8 dígitos
                email: 'laura.sanchez@amarosa.com', // Email con @amarosa.com
                direccion: 'Avenida Oeste 505, Ciudad H',
                updatedAt: subDays(subHours(now, 3), 4).getTime()
            },
            {
                id: '9',
                nombre: 'Cartera Empresarial I',
                contacto: 'Miguel Romero',
                telefono: '78901234', // Teléfono de 8 dígitos
                email: 'miguel.romero@amarosa.com', // Email con @amarosa.com
                direccion: 'Calle Principal 707, Ciudad I',
                updatedAt: subDays(subHours(now, 12), 7).getTime()
            },
            {
                id: '10',
                nombre: 'Cartera Personal J',
                contacto: 'Carmen Herrera',
                telefono: '89012345', // Teléfono de 8 dígitos
                email: 'carmen.herrera@amarosa.com', // Email con @amarosa.com
                direccion: 'Calle Segunda 808, Ciudad J',
                updatedAt: subDays(subHours(now, 11), 8).getTime()
            }
        ];

        return Promise.resolve(portfolios);
    }
}

export const portfolioApi = new PortfolioApi();
