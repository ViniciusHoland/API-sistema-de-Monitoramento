import jwt from 'jsonwebtoken';


function verifyToken(req, res, next) {

    try{

        const token = req.headers.authorization.split(' ')[1];

        if(!token) {
            return res.status(401).json({ message: "token inexistent" });
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        if(!decodedToken) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        req.userID = decodedToken.id;

        next();


    } catch (error) {
        res.status(401).json({ message: "error for verify token " }); 
    }



}

export default verifyToken;