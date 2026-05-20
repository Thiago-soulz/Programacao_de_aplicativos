const express = require('express');

const router = express.Router();

const {
    createPeca,
    getAllPecas,
    getPecaById,
    updatePeca,
    deletePeca
} = require('../controllers/pecas.controller');

const {
    validateCreatePeca,
    validateGetPecaById,
    validateUpdatePeca,
    validateDeletePeca,
    validateGetAllPecas
} = require('../middlewares/pecas.middleware');


// CREATE
router.post(
    '/',
    validateCreatePeca,
    createPeca
);

// GET ALL
router.get(
    '/',
    validateGetAllPecas,
    getAllPecas
);

// GET BY ID
router.get(
    '/:id',
    validateGetPecaById,
    getPecaById
);

// UPDATE
router.put(
    '/:id',
    validateUpdatePeca,
    updatePeca
);

// DELETE
router.delete(
    '/:id',
    validateDeletePeca,
    deletePeca
);

module.exports = router;