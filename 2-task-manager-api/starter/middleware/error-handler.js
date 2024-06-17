const { CustomerApieError  } = require('../errors/customer-errors');

const errorHandler = (err, req, res, next) => {
    if (err instanceof CustomerApieError) {
        return res.status(err.statusCode).json({ message: err.message });
    }
    res.status(500).json({ message: 'Something went wrong, please try again later' });
};

module.exports = errorHandler;
  
   