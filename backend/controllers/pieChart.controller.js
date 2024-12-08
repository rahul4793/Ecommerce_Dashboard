const Products = require('../models/product');

const monthMap = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
};

const getPieChartData = async (req, res, caller = false) => {
  const { month } = req.query;

  try {
    //month name to numeric value
    const monthIndex = monthMap[month];

    if (!monthIndex) {
      throw new Error('Invalid month name');
    }

    const transactions = await Products.find({
      $expr: {
        $eq: [{ $month: '$dateOfSale' }, monthIndex], 
      },
    });

    const categoryCounts = {};

    transactions.forEach((transaction) => {
      const category = transaction.category;
      categoryCounts[category] = (categoryCounts[category] || 0) + 1;
    });

    if (caller == true) {
      return categoryCounts;
    } else {
      res.status(200).json(categoryCounts);
    }
  } catch (error) {
    console.error('Error fetching pie chart data:', error);
    if (caller == true) {
      return {};
    } else {
      res.status(500).json({ error: 'Failed to fetch pie chart data' });
    }
  }
};
module.exports = { getPieChartData };
