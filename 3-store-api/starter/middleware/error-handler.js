

const errorHandler =  async (err, req, res, next) => {
    console.log(err)   
    res.status(500).json({ msg: 'Something went wrong, please try again later' });
}

module.exports = errorHandler;

  
   
