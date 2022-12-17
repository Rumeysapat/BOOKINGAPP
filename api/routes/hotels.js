import express from 'express';
import {
  createHotel,
  getAllHotel,
  updateHotel,
  deleteHotel,
  getHotel,
} from '../controllers/hotel.js';
import { verifyAdmin } from '../utils/verifyToken.js';
import Hotel from '../models/Hotel.js';

const router = express.Router();

router.post('/',verifyAdmin,createHotel);

router.put('/:id',verifyAdmin,updateHotel);

router.delete('/:id',verifyAdmin, deleteHotel);

router.get('/:id', getHotel);
router.get('/', getAllHotel);

export default router;
