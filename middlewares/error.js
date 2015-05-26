'use strict';
exports.notFound = function (req,res,next){
    res.status(404);
    res.render('notfound');
};

exports.serverError= function(error,req,res,next){
    res.status(500);
    res.render('servererror',{error:error});
};
