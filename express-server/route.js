// ./express-server/routes/product.server.route.js
import express from 'express';

//import controller file
import * as homeslider from './controllers/homeslider.server.controller';  
import * as searchController from './controllers/search.server.controller';
import * as messageController from './controllers/message.server.controller'; 
import * as reviewController from './controllers/reviews.server.controller';
import * as cardController from './controllers/cards.server.controller'; 
import * as mobiletokenController from './controllers/verfication.server.controller';
 
import * as userController from './controllers/user.server.controller';
import * as sitesettings from './controllers/sitesettings.server.controller';
import * as commonController from './controllers/common.server.controller';
import * as wishlistController from './controllers/wishlist.server.controller';

var multer = require("multer"); 

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/')
    },  
    filename: function(req, file, cb) {
        console.log('File Name', file);
        cb(null, Date.now() + '.jpg')
    } 
});
 
var upload = multer({ storage: storage });

// get an instance of express router
const router = express.Router();

//Home Slider
router.route('/slider').get(homeslider.getHomeSliders);
router.route('/slider').post(homeslider.addHomeSlider);
router.route('/slider').put(homeslider.updateHomeSlider);
router.route('/slider/:id').delete(homeslider.deleteHomeSlider); 

// //review
// router.route('/review').post(reviewController.addReviews);
// router.route('/getreview/:id').post(reviewController.getReviews);
// router.route('/getuserreview').post(reviewController.getuserReviews);
// router.route('/getReviewsByuser').post(reviewController.getReviewsByuser);

// // payout - card details
// router.route('/savecard').post(cardController.addcarddetails);
// router.route('/getcard/:id').get(cardController.getCards);
// router.route('/updatecard').put(cardController.updateCards);
// router.route('/deletecard/:id').delete(cardController.deleteCards);
 


// //sitesettings
// router.route('/updatesitesettings').put(sitesettings.updatesitesettings);
// router.route('/getsitesettings').get(sitesettings.getsitesettings);

// // servicefeee
// router.route('/getservicefees').get(sitesettings.getservicefees);
// router.route('/updateservicefees').put(sitesettings.updateservicefees);

// // commonController
// router.route('/getcurrency').get(commonController.getCurrencylist);
// router.route('/getcurrencylist').get(commonController.getCurrencyname);
// router.route('/updateCurrencyName').put(commonController.updateCurrencyName);
// router.route('/getAllCurrencyname').get(commonController.getAllCurrencyname);

// //search
// router.route('/search').post(searchController.searchProducts);

// //message
// router.route('/message').post(messageController.getMessages); 
// router.route('/reply').post(messageController.replyMessages);
// router.route('/deletemessage/:id').delete(messageController.deleteMessage);
// router.route('/statuschange').put(messageController.updateStatus);

// //user data
// router.route('/userupdate').put(userController.updateUsers);
// router.route('/userpicupdate').put(userController.updateUsersImage);
// router.route('/getuser').post(userController.getuser);

// //mobileverification
// router.route('/generatemobileverfication').post(mobiletokenController.generatemobileToken);
// router.route('/verifymobileToken').post(mobiletokenController.verifymobileToken);
// router.route('/googleverification').post(mobiletokenController.googleverification);


 

// file upload
router.post('/upload', upload.array("myfile[]", 12), function(req, res, next) {
    return res.send({
        success: true,
        file: req.files
    });
});

export default router;