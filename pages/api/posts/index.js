import { connectToMainDatabase } from "@lib/mongo/main";

const POSTS_COLLECTION = process.env.POSTS_COLLECTION;

export default async (req, res) => {
    if (req.method === 'GET') {
        try {
            const { db } = await connectToMainDatabase();

            const result = await db
                .collection(POSTS_COLLECTION)
                .find()
                .toArray();

            setTimeout(() => {
                res.status(200).json({
                    status: "success",
                    code: 200,
                    data: result
                });
            }, 1000)
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
    else if (req.method === 'POST') {
        const data = req.body;

        try {
            const { db } = await connectToMainDatabase();

            const result = await db
                .collection(POSTS_COLLECTION)
                .insertOne(data);

            res.status(201).json({
                status: "success",
                code: 201,
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