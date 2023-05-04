import dbConnect from '@/utils/dbConnect';
import Task from '@/schemas/task';

const handlerTasks = async (req, res) => {
    await dbConnect()
    const { method } = req

    switch (method) {
        case 'GET':
            try {
                const token = req.cookies.token
                const tasks = await Task.find({ user_id: token })
                res.status(200).json(tasks)
            } catch (err) {
                console.log(err)
            }
            break;
        case 'POST':
            try {
                const newTask = await Task.create(req.body)
                res.status(200).json(newTask)
            } catch (err) {
                console.log(err)
            }
            break;
        case 'PUT':
            try {
                const task = await Task.updateOne({ id: req.body.id }, req.body, { new: true, runValidators: true });
                if (!task) {
                    return res.status(404).json({ success: false, message: 'Task not found' });
                }
                res.status(200).json({ success: true, data: task });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'DELETE':
            try {
                console.log("req.query.id:", req.body.id)
                const deletedTask = await Task.deleteOne({ id: req.body.id });
                if (!deletedTask) {
                    return res.status(404).json({ success: false, message: 'Task not found' });
                }
                return res.status(200).json({ success: true, data: {} });
            } catch (err) {
                return res.status(500).json({ success: false, error: err.message });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}

export default handlerTasks