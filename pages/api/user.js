import nextConnect from 'next-connect';
import dbMiddleware from '../../lib/db';

const handler = nextConnect();

handler.use(dbMiddleware);

handler.get(async (req, res) => {

    let doc = await req.db.collection('users').findOne()
    console.log(req)
    //console.log("DB RESPONSE", doc);
    res.json(req);
});

handler.post(async (req, res) => {
    console.log(req.body)
    res.json({status: 200});
});

export default handler;