const products = require('../models/products');

const getallproductstatic = async (req, res) => {
    const product = await products.find({
        price: { $gt: 30, $lt: 44 }
    })
    .sort('-name price')
    .select('name price')
    .limit(30)
    .skip(2);
    res.status(200).json({ product, nmb0fvalues: product.length });
}

const getallproducts = async (req, res) => {
    const { featured, company, name, sort, fields, numericalFilters } = req.query;
    const newObject = {};

    if (featured) {
        newObject.featured = featured === 'true' ? true : false;
    }

    if (company) {
        newObject.company = company;
    }

    if (name) {
        newObject.name = { $regex: name, $options: 'i' };
    }

    // Handling numerical filters
    if (numericalFilters) {
        const operatorMap = {
            '>': '$gt',
            '>=': '$gte',
            '=': '$eq',
            '<': '$lt',
            '<=': '$lte',
        };
        const regEx = /\b(<|>|>=|=|<|<=)\b/g;
        let filters = numericalFilters.replace(regEx, (match) => `-${operatorMap[match]}-`);

        const options = ['price', 'rating'];
        filters.split(',').forEach((item) => {
            const [field, operator, value] = item.split('-');
            if (options.includes(field)) {
                newObject[field] = { ...newObject[field], [operator]: Number(value) };
            }
        });
    }

    console.log(newObject); // To see the resulting query object

    let result = products.find(newObject);

    if (sort) {
        const sortedList = sort.split(',').join(' ');
        result = result.sort(sortedList);
    } else {
        result = result.sort('createdAt');
    }

    if (fields) {
        const fieldList = fields.split(',').join(' ');
        result = result.select(fieldList);
    }

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    result = result.skip(skip).limit(limit);

    const product = await result;

    res.status(200).json({ product, nmb0fvalues: product.length });
}

module.exports = {
    getallproducts,
    getallproductstatic,
};
