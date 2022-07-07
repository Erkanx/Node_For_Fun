

const tasks = {
    tasks: [
    {
        text: 'Grocery shopping',
        completed: true
    }, 
    {
        text: 'Grocery shopping',
        completed: false
    }, 
    {
        text: 'Grocery shopping',
        completed: false
    }],
    getTasksToDo() {
        return this.tasks.filter((task) => {
            return task.completed === false
        })
    }
}

console.log(tasks.getTasksToDo());

