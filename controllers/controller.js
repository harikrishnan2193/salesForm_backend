const Branches = require('../models/branchSchema')
const Sales = require('../models/salesSchema')

exports.getBranch = async (req, res) => {
    try {
        const branches = await Branches.find()
        res.status(200).json(branches)
    } catch (error) {
        res.status(401).json('Request failed dew to ', error)
    }
}

exports.postSales = async (req, res) => {
    const { salesperson, branch, amount, description } = req.body
    try {
        if (!salesperson || !branch || !amount) {
            return res.status(406).json('Salesperson, branch, and amount are required');
        }
        else {
            const newSale = new Sales({
                salesperson,
                branch,
                amount,
                description
            });

            await newSale.save();
            res.status(200).json(newSale)
        }

    } catch (error) {
        res.status(401).json('Request failed dew to ', error)
    }
}

exports.getAllSales = async (req, res) => {
    try {
        const allSales = await Sales.find()
        res.status(200).json(allSales)
    } catch (error) {
        res.status(401).json('Request failed dew to ', error)
    }
}

exports.editSales = async (req, res) => {
    const { id } = req.params;
    const { salesperson, branch, amount, description } = req.body;
    try {
        const updatedSale = await Sales.findByIdAndUpdate(id, { salesperson, branch, amount, description }, { new: true });
        if (!updatedSale) {
            return res.status(404).json('Sale record not found');
        }
        res.status(200).json({ message: 'Sales record updated successfully', sale: updatedSale });
    } catch (error) {
        console.error('Error updating sales record:', error);
        res.status(500).json('Request failed due to an error', error);
    }
}

exports.deleteSales = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedSale = await Sales.findByIdAndDelete({ _id: id });
        if (!deletedSale) {
            return res.status(404).json('Sale record not found');
        }
        res.status(200).json('Sales record deleted successfully');
    } catch (error) {
        console.error('Error deleting sales record:', error);
        res.status(500).json('Request failed due to an error', error);
    }
}