const express = require('express');
const expenseController = require('../controllers/expenses');
const router = express.Router();

router.get('/get', expenseController.getExpense);
router.post('/add', expenseController.addExpense);
router.post('/edit/:id', expenseController.editExpense);
router.get('/delete/:id', expenseController.deleteExpense);

module.exports = router;