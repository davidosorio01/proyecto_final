import type { Actions } from './$types';
// Importa nodemailer como un módulo de CommonJS
const nodemailer = require('nodemailer');

// Configuración del transporte de nodemailer
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465, // Puerto de Gmail para conexiones seguras
    secure: true, // True para el puerto 465, false para otros puertos
    auth: {
        user: 'tu-email@example.com', // Coloca aquí tu correo de remitente
        pass: 'tu-contraseña-o-contraseña-de-aplicación' // Contraseña o contraseña de aplicación
    }
});

export const actions: Actions = {
    recuperar: async ({ request }) => {
        const formData = await request.formData();
        const email = formData.get('email')?.toString();

        if (!email) {
            return {
                success: false,
                message: 'Por favor, introduce un correo electrónico válido.'
            };
        }

        try {
            // Genera el token de recuperación
            const resetToken = 'token_de_recuperacion_generado'; // Aquí deberías generar un token real
            const resetURL = `https://tu-sitio.com/reset-password?token=${resetToken}`;

            // Configuración del correo electrónico
            const mailOptions = {
                from: '"Soporte" <soporte@tu-sitio.com>', // Remitente
                to: email,
                subject: 'Recuperación de contraseña',
                html: `<p>Haz clic en el siguiente enlace para restablecer tu contraseña:</p>
                       <p><a href="${resetURL}">Restablecer contraseña</a></p>`
            };

            // Envía el correo electrónico
            await transporter.sendMail(mailOptions);

            return {
                success: true,
                message: 'Correo de recuperación enviado. Por favor, revisa tu bandeja de entrada.'
            };
        } catch (error) {
            console.error('Error al enviar correo:', error);
            return {
                success: false,
                message: 'Ocurrió un error al enviar el correo de recuperación. Inténtalo de nuevo.'
            };
        }
    }
};
