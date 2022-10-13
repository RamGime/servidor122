const task = require('../models/Task')
ctrlTask = {};

 
ctrlTask.createTask = async (req, res) => {
    const { title, description } = req.body;

    const task = new Tasks({
        title,
        description,
        userId: req.user._id
    });


    try {
        const newTask = await task.save();

        return res.json({
            msg: 'Se creo la tarea correctamente',
            newTask
        })
    } catch (error) {
        return res.status(500).json({
            msg:'No se creo la Tarea maquinola'
        })
    }
}

ctrlTask.getTasks = async (req, res) => {
    const tasks = await Tasks.find({ userId: req.user._id })
    .populate('userId', ['username','email'])
    return res.json(tasks);
}

ctrlTask.deleteTask = async (req, res) => {
    const { id } = req.params.id;
    const task = await Tasks.findByIdAndDelete(id);
    return res.json({
        msg: 'Tarea eliminada correctamente',
        task
    })
}



module.exports = ctrlTask;