const Products = require('../models/product');

const getStatistics = async (req, res, caller = false) => {
  const { month } = req.query;

  const monthMapping = {
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
    December: 12
  };

  const monthIndex = monthMapping[month];

  if (!monthIndex) {
    return res.status(400).json({ error: 'Invalid month name' });
  }

  try {
    const transactions = await Products.find({
      $expr: {
        $eq: [{ $month: '$dateOfSale' }, monthIndex], // Match the month, ignoring the year
      },
    });
//calculations
    const totalSales = transactions.reduce((sum, t) => sum + t.price, 0);
    const soldItems = transactions.filter(t => t.sold).length;
    const unsoldItems = transactions.length - soldItems;

    if (caller === true) {
      return { totalSales, soldItems, unsoldItems };
    } else {
      res.status(200).json({ totalSales, soldItems, unsoldItems });
    }
  } catch (error) {
    console.error('Error fetching statistics:', error);
    if (caller === true) {
      return {};
    } else {
      res.status(500).json({ error: 'Failed to fetch statistics' });
    }
  }
};

module.exports = { getStatistics };
