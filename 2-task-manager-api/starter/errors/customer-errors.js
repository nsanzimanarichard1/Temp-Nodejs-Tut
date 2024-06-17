class CustomerApieError extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode
    }
}

const createCustomerError = (msg, statusCode) =>{
    return new CustomerApieError(msg, statusCode)
}
module.exports = { createCustomerError, CustomerApieError} 