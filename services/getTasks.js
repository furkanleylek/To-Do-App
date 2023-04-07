export const getAllTasks = async () => {

    fetch('/api/tasks')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // burada alınan verilerle istediğiniz işlemleri yapabilirsiniz
        })
        .catch(error => console.error(error));
}