import dbConnect from "../../../utils/dbConnect";
import Note1 from "../../../models/Note";

dbConnect();

export default async (req,res) => {
    const {method} = req;
    console.log("method:")
    console.log(method)

    switch(method){

        case 'GET' :
            try {
                const notes = await Note1.find ({}) ;
                res.status ( 200 ) .json ( { 
                    success : true , 
                    data : notes 
                } )
            } 
            catch ( error ) {
                res.status(400).json( { 
                    success : false 
                } ) ;
            }
            break ;

        case 'POST':
            try {
                const note = await Note1.create(req.body);
                res.status(201).json({
                    "success":true,
                    "data":note
                })
            } catch (error) {
                res.status ( 400 ) .json ( { 
                    success : false 
                } ) ;
            }
            break;
        default:
            res.status ( 400 ) .json ( { 
                success : false 
            } ) ;
            break;
    }
}