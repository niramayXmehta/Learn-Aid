const express = require("express");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const userData = require("./userdata").userData;
const http = require("http");

const Authentication_Router = express.Router();

Authentication_Router.post("/login", async (req, res) => {
    try {
        const loginFailureMessage = "Email or Password is incorrect."
        let getUser = userData.find(user => req.body.uname == user.email)

        if (getUser) {
            let formPassword = req.body.psw
            let realPassword = getUser.password

            let isPasswordCorrect = await bcrypt.compare(formPassword, realPassword);
            if (isPasswordCorrect) {
                res.json({ok: true});
            } else {
                res.json({
                    ok: false,
                    err: loginFailureMessage,
                });
            }
        } else {
            res.json({
                ok: false,
                err: loginFailureMessage,
            });
        }
    } catch {
        res.json({ok: false});
    }
})

Authentication_Router.post("/register", async (req, res) => {
    try {
        let isEmailUsed = userData.find(user => req.body.email == user.email)

        if (isEmailUsed) {
            res.json({
                ok: false,
                err: "Email already used!",
            });
        } else {
            if (req.body.psw != req.body['psw-repeat']) {
                res.json({
                    ok: false,
                    err: "Passwords do not match!",
                });
                return;
            }

            let hashedPassword = await bcrypt.hash(req.body.psw, 10);
            let user = {
                email: req.body.email,
                password: hashedPassword,
            };

            userData.push(user);

            console.log(userData);

            res.json({ok: true});
        }
    } catch {
        res.json({ok: false});
    }
});

module.exports = Authentication_Router