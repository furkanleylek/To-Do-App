import dbConnect from '@/utils/dbConnect';
import DoneTasks from '@/schemas/done';

const handlerDoneTasks = async (req, res) => {
    await dbConnect()
    const { method } = req

    switch (method) {
        case 'GET':
            try {
                const token = req.cookies.token
                const tasks = await DoneTasks.find({ user_id: token })
                res.status(200).json(tasks)
            } catch (err) {
                console.log(err)
            }
            break;
        case 'POST':
            try {
                const doneTask = await DoneTasks.create(req.body)
                res.status(200).json(doneTask)
            } catch (err) {
                console.log(err)
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}

export default handlerDoneTasks