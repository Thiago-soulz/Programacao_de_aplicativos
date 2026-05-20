const db = require('../database/connection');


// ====================================
// CREATE
// ====================================

const createPeca = async (req, res) => {

    try {

        const {
            nome_peca,
            codigo_peca,
            fornecedor,
            quantidade,
            preco_unitario,
            estoque
        } = req.body;

        const sql = `
            INSERT INTO pecas
            (nome_peca, codigo_peca, fornecedor,
            quantidade, preco_unitario, estoque)
            VALUES (?, ?, ?, ?, ?, ?)
        `;

        const [result] = await db.execute(sql, [
            nome_peca,
            codigo_peca,
            fornecedor,
            quantidade,
            preco_unitario,
            estoque
        ]);

        return res.status(201).json({
            message: 'Peça cadastrada',
            id: result.insertId
        });

    } catch (error) {

        return res.status(500).json({
            error: error.message
        });

    }

};


// ====================================
// GET ALL
// ====================================

const getAllPecas = async (req, res) => {

    try {

        const [pecas] = await db.execute(
            'SELECT * FROM pecas'
        );

        return res.status(200).json({
            total: pecas.length,
            pecas
        });

    } catch (error) {

        return res.status(500).json({
            error: error.message
        });

    }

};


// ====================================
// GET BY ID
// ====================================

const getPecaById = async (req, res) => {

    try {

        const { id } = req.params;

        const [peca] = await db.execute(
            'SELECT * FROM pecas WHERE id = ?',
            [id]
        );

        if (peca.length === 0) {
            return res.status(404).json({
                error: 'Peça não encontrada'
            });
        }

        return res.status(200).json(peca[0]);

    } catch (error) {

        return res.status(500).json({
            error: error.message
        });

    }

};


// ====================================
// UPDATE
// ====================================

const updatePeca = async (req, res) => {

    try {

        const { id } = req.params;

        const {
            nome_peca,
            codigo_peca,
            fornecedor,
            quantidade,
            preco_unitario,
            estoque
        } = req.body;

        const sql = `
            UPDATE pecas
            SET
            nome_peca = ?,
            codigo_peca = ?,
            fornecedor = ?,
            quantidade = ?,
            preco_unitario = ?,
            estoque = ?
            WHERE id = ?
        `;

        await db.execute(sql, [
            nome_peca,
            codigo_peca,
            fornecedor,
            quantidade,
            preco_unitario,
            estoque,
            id
        ]);

        return res.status(200).json({
            message: 'Peça atualizada'
        });

    } catch (error) {

        return res.status(500).json({
            error: error.message
        });

    }

};


// ====================================
// DELETE
// ====================================

const deletePeca = async (req, res) => {

    try {

        const { id } = req.params;

        await db.execute(
            'DELETE FROM pecas WHERE id = ?',
            [id]
        );

        return res.status(200).json({
            message: 'Peça removida'
        });

    } catch (error) {

        return res.status(500).json({
            error: error.message
        });

    }

};


module.exports = {
    createPeca,
    getAllPecas,
    getPecaById,
    updatePeca,
    deletePeca
};