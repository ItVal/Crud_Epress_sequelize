import {Router} from 'express';
import {getAll, getOne, updateOne, createOne, deleteOne } from '../controllers/ctrls.js';


const router = Router();


router.get('/getAll', getAll) ;
router.get('/getOne/:id', getOne) ;
router.post('/createOne', createOne);
router.put('/updateOne/:id', updateOne) ;
router.get('/deleteOne/:id', deleteOne) ;

export default router;