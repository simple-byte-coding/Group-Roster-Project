import { UserService } from "../service/user.service.js";
import { registerUserValidator } from "../validator/user.validator.js";

export function helloWorldController(req, res) {
    res.json({ msg: "Hello World" });
}

export async function registerUserHandler(req, res) {
    const { name, email, password } = req.body;

    console.log(req.body)
    
    const {success} = registerUserValidator.safeParse({ name, email, password });
    if (!success) {
        res.status(400).json({ msg: "Invalid request body" });
        return;
    }

    const userService = new UserService();

    try {
        const hashedPassword = await userService.hashPassword(password);
        console.log("hashed password", hashedPassword)
        console.log("password", password)
        const user = await userService.insertUser({ name, email, password: hashedPassword });
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
   
}