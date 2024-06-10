import express from "express";
import User from "../model/User.js"; // Asegúrate de tener la ruta correcta al modelo

const userRouter = express.Router();

// Obtener todos los usuarios
userRouter.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Obtener un usuario por ID
userRouter.get("/:id", async (req, res) => {
    try {
        const user = await User.findOne({ Id: req.params.id });
        if (!user) return res.status(404).json({ error: "User not found" });
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Crear un nuevo usuario
userRouter.post("/", async (req, res) => {
    try {
        const { Id, Nombre, Email, Password } = req.body;
        const newUser = new User({ Id, Nombre, Email, Password });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Eliminar un usuario por ID
userRouter.delete("/:id", async (req, res) => {
    try {
        const user = await User.findOneAndDelete({ Id: req.params.id });
        if (!user) return res.status(404).json({ error: "User not found" });
        res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Actualizar un usuario por ID
userRouter.put("/:id", async (req, res) => {
    try {
        const { Nombre, Email, Password } = req.body;
        const user = await User.findOneAndUpdate(
            { Id: req.params.id },
            { Nombre, Email, Password },
            { new: true, runValidators: true }
        );
        if (!user) return res.status(404).json({ error: "User not found" });
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

export default userRouter;
