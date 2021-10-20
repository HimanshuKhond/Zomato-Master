import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";

//Models
import { UserModel } from "../../database/user";

//Validation
import { ValidateSignup, ValidateSignin } from "../../Validation/auth";

const Router = express.Router();

/*
Route       /signup
Descript    Signup with email and password
Params      None
Access      Public
Method      POST
*/
Router.post("/signup", async(req,res) => {
    try {
        // const {email, password, fullname, phoneNumber} = req.body.credentials;
        // const {email, phoneNumber} = req.body.credentials;

        //Check wheter email or phone number exists
        // const checkUserByEmail = await UserModel.findOne({email});
        // const checkUserByPhone = await UserModel.findOne({phoneNumber});
        // if (checkUserByEmail || checkUserByPhone) {
        //     return res.json({error: "User already exists"});
        // }

        await ValidateSignup(req.body.credentials);

        await UserModel.findEmailAndPhone(req.body.credentials);

        //hashing and salting
        // const bcryptSalt = await bcrypt.genSalt(8);
        // const hashedPassword = await bcrypt.hash(password, bcryptSalt);

        //DB
        // await UserModel.create({
        //     ...req.body.credentials,
        //     password: hashedPassword
        // });
        const newUser = await UserModel.create(req.body.credentials);

        //JWT Auth Token
        // const token = await jwt.sign({user: {fullname, email}}, "ZomatoApp");
        const token = newUser.generateJwtToken();

        return res.status(200).json({token});

    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

/*
Route       /signin
Descript    Signin with email and password
Params      None
Access      Public
Method      POST
*/
Router.post("/signin", async(req,res) => {
    try {
        await ValidateSignin(req.body.credentials);

        const user = await UserModel.findByEmailAndPassword(
            req.body.credentials
        );

        //JWT Auth Token
        const token = user.generateJwtToken();

        return res.status(200).json({token, status: "Success"});

    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

/*
Route       /google
Descript    Google Signin
Params      None
Access      Public
Method      GET
*/
Router.get("/google", passport.authenticate("google", {
    scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email"
    ],
}));

/*
Route       /google/callback
Descript    Google Signin callback
Params      None
Access      Public
Method      GET
*/
Router.get("/google/callback",passport.authenticate("google", {failureRedirect: "/"}),
    (req,res) => {
        return res.json({token: req.session.passport.user.token});
    }
);

export default Router;


//UserModel.ourStatic()
//checkUserByEmail.ourMethods()