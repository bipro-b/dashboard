import express from 'express'
import {createAccount, getAccount, getAccountById } from '../controllers/account.controller.js';
// import { verifyToken } from '../utils/verifyUser.js';
const router  = express.Router();


router.get('/:id',getAccountById);
router.get("/",getAccount);
router.post('/create',createAccount);


export default router;