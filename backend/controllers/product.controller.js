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

const listProducts = async (req, res) => {
  const { month, search, page = 1, perPage = 10 } = req.query;

  try {
    const monthIndex = monthMap[month];

    if (!monthIndex) {
      return res.status(400).json({ error: 'Invalid month name' });
    }

    const query = {
      $expr: {
        $eq: [{ $month: '$dateOfSale' }, monthIndex], 
      },
    };

    if (search) {
      query.$or = [
        { title: new RegExp(search, 'i') },
        { description: new RegExp(search, 'i') },
        { price: parseFloat(search) || 0 },
      ];
    }

    const transactions = await Products.find(query)
      .skip((page - 1) * perPage)
      .limit(perPage);

    res.status(200).json(transactions);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};
module.exports = { listProducts };
