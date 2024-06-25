import Unit from '../models/Unit.js';

// Obtener todas las unidades
const getUnits = async (req, res) => {
    try {
        const units = await Unit.find({});
        res.json(units);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener unidad por ID
const getUnitById = async (req, res) => {
    try {
        const unit = await Unit.findById(req.params.id);
        if (unit) {
            res.json(unit);
        } else {
            res.status(404).json({ message: 'Unidad no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear nueva unidad
const createUnit = async (req, res) => {
    const { courseID, unitNumber, unitName, description, video, quizzID, completed } = req.body;

    const newUnit = new Unit({
        courseID,
        unitNumber,
        unitName,
        description,
        video,
        quizzID,
        completed,
    });

    try {
        const createdUnit = await newUnit.save();
        res.status(201).json(createdUnit);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualizar unidad
const updateUnit = async (req, res) => {
    const { courseID, unitNumber, unitName, description, video, quizzID, completed } = req.body;

    try {
        const unit = await Unit.findById(req.params.id);

        if (unit) {
            unit.courseID = courseID;
            unit.unitNumber = unitNumber;
            unit.unitName = unitName;
            unit.description = description;
            unit.video = video;
            unit.quizzID = quizzID;
            unit.completed = completed;

            const updatedUnit = await unit.save();
            res.json(updatedUnit);
        } else {
            res.status(404).json({ message: 'Unidad no encontrada' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar unidad
const deleteUnit = async (req, res) => {
    try {
        const unit = await Unit.findById(req.params.id);

        if (unit) {
            await unit.remove();
            res.json({ message: 'Unidad eliminada' });
        } else {
            res.status(404).json({ message: 'Unidad no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export {
    getUnits,
    getUnitById,
    createUnit,
    updateUnit,
    deleteUnit
}