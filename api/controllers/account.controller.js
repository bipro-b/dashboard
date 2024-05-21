import Account from "../models/account.model.js"
import { errorHandler } from "../utils/error.js";

export const createAccount = async(req,res,next)=>{
    try {

        const account = await Account.create(req.body);
        return res.status(201).json(account);
        
    } catch (error) {
        next(error)
    }
}

export const getAccount = async(req,res,next)=>{
    try {
        const accounts = await Account.find()
        if(!accounts){
            return next(errorHandler(404,'Account is not found'));
        }
        res.status(200).json(accounts);
    } catch (error) {
        next(error)
    }
}

export const getAccountById= async(req,res,next)=>{
    try {
        const Account = await Account.findById(req.params.id);
        if(!Account) return next(errorHandler(404,'User not found!'));
  
        const {password: pass, ...rest} = Account._doc;
        res.status(200).json(rest);
      } catch (error) {
        next(error);
      }
}