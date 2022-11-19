import { connectToMainDatabase } from "@lib/mongo/main";
import { ObjectId } from "mongodb";

const POSTS_COLLECTION = process.env.POSTS_COLLECTION;

export default async (req, res) => {
    if (req.method === 'DELETE') {
        const { _id } = req.query;
    
        try {
            const { db } = await connectToMainDatabase();

            const result = await db
                .collection(POSTS_COLLECTION)
                .deleteOne({ _id: ObjectId(_id) })

            res.status(200).json({
                status: "success",
                code: 200,
                message: 'Successful!'
            });
        }
        catch (err) {
            console.log(err);
            res.status(400).json({
                status: "error",
                code: 400,
                message: err.message
            });
        }
    }
    else if (req.method === 'PATCH') {
        const { _id } = req.query;
        const data = req.body;
    
        try {
            const { db } = await connectToMainDatabase();

            const result = await db
                .collection(POSTS_COLLECTION)
                .updateOne({ _id: ObjectId(_id) }, {
                    $set: {
                        title: data.title
                    }
                })

            res.status(200).json({
                status: "success",
                code: 200,
                message: 'Successful!'
            });
        }
        catch (err) {
            console.log(err);
            res.status(400).json({
                status: "error",
                code: 400,
                message: err.message
            });
        }
    }
}