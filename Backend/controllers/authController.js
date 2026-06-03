const pool = require('../config/database');

const login = async (req, res) => {

    try {

        const { usuario, password } = req.body;

        const resultado = await pool.query(
            `
            SELECT *
            FROM usuarios
            WHERE usuario = $1
            AND activo = true
            `,
            [usuario]
        );

        if (resultado.rows.length === 0) {

            return res.status(401).json({
                success: false,
                message: 'Usuario no encontrado'
            });

        }

        const user = resultado.rows[0];

        if (user.password_hash !== password) {

            return res.status(401).json({
                success: false,
                message: 'Contraseña incorrecta'
            });

        }

        res.json({
            success: true,
            usuario: user.nombre_completo,
            rol: user.id_rol
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: 'Error interno'
        });

    }

};

module.exports = {
    login
};