import dbConnect from '@/utils/dbConnect';
import Task from '@/schemas/task';

const handlerTasks = async (req, res) => {
    await dbConnect()

    const { method } = req

    if (method === "GET") {
        try {
            const tasks = await Task.find()
            res.status(200).json(tasks)
            console.log(tasks)
        } catch (err) {
            console.log(err)
        }
    }
    if (method === "POST") {
        try {
            const newTask = await Task.create(req.body)
            res.status(200).json(newTask)
        } catch (err) {
            console.log(err)
        }
    }
}

export default handlerTasks