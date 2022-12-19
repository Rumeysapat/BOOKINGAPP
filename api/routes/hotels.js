import express from 'express';
import {
  createHotel,
  getAllHotel,
  updateHotel,
  deleteHotel,
  getHotel,countByCity
} from '../controllers/hotel.js';
import { verifyAdmin } from '../utils/verifyToken.js';
import Hotel from '../models/Hotel.js';

const router = express.Router();

router.post('/',verifyAdmin,createHotel);

router.put('/:id',verifyAdmin,updateHotel);

router.delete('/:id',verifyAdmin, deleteHotel);
router.get("/", getAllHotel);

router.get('/find/:id', getHotel);
router.get('/countByCity', countByCity);
router.get('/countByType', getAllHotel);


export default router;
