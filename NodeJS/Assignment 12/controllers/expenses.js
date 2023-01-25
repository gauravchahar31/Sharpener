const db = require('../database/connection');

exports.getExpense = async(req, res) => {
    try{
        const expenses = await db.execute('SELECT * FROM expense');
        res.json(expenses[0]);
    }
    catch(err){
        console.error(err);
    }
}


exports.addExpense = async (req, res) => {
    try{
        await db.execute(`INSERT INTO expense(Amount, Description, Category) VALUES(${req.body.amount},'${req.body.desc}',${req.body.category})`);
        res.redirect('/');
    }
    catch(err){
        console.error(err);
    }
}

exports.editExpense = async (req, res) => {
    try{
        const id = req.params.id;
        await db.execute(`UPDATE expense SET Amount=${req.body.amount}, Description='${req.body.desc}', Category=${req.body.category} WHERE id = ${id}`);
        res.redirect('/');
    }
    catch(err){
        console.error(err);
    }
}

exports.deleteExpense = async (req, res) => {
    try{
        const id = req.params.id;
        await db.execute(`DELETE FROM expense WHERE id = ${id}`);
        res.redirect('/');
    }
    catch(err){
        console.error(err);
    }
}