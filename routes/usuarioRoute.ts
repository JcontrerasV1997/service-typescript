import {Router} from 'express';
import { deleteUsuario, getUsuarios, getUsuariosId, postUsuario, putUsuario } from '../controller/usuarioController';

const router= Router();

router.get('/', getUsuarios);
router.get('/:id', getUsuariosId);
router.post('/agregar', postUsuario);
router.put('/:id', putUsuario);
router.delete('/:id', deleteUsuario);

export default router;

