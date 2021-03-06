import { Request, Response } from "express";
import Usuario from "../models/usuarios";
export const getUsuarios = async (req: Request, res: Response) => {
    const usuarios = await Usuario.findAll();
    res.json({
        msg: 'getUsuarios',
        usuarios
    })
}
export const getUsuariosId = async (req: Request, res: Response) => {
    const { id } = req.params;
    const usuarioId = await Usuario.findByPk(id);
    if (usuarioId) {
        res.json({
            usuarioId
        })

    } else {
        res.status(404);
    }
}
export const postUsuario = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        const existeEmail = await Usuario.findOne({
            where: {
                email: body.email
            }
        })
        if (existeEmail) {
            return res.status(400).json({
                msg: 'ya existe un usuario con el email' + body.email
            });
        }
        const usuario = await Usuario.create(body);
        res.json({ usuario });
    } catch (error: any) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador'
        })
    }
}
export const putUsuario = async(req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const usuario= await Usuario.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: 'no existe un usuario con el id '+ id
            })
        }
        await usuario.update(body);
        res.json({usuario})
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'hable con el administrador'
        })
    }
}

export const deleteUsuario = (req: Request, res: Response) => {
    const { id } = req.params;

    res.json({
        msg: 'deleteUsuario',
        id
    })
}
