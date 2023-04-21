// export const getAllTasks = async () => {
//     try {
//         const response = await fetch(' https://the-trivia-api.com/api/questions?categories=history&limit=3', {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//         });
//         const data = await response.json();
//         console.log("GET:", data);
//         return data
//     } catch (error) {
//         console.error(error);
//         return error
//     }
//     // https://the-trivia-api.com/api/questions?categories=history&limit=3
//     // https://localhost:3000/api/tasks
// }

export const getAllTasks = async () => {
    try {
        const response = await axios.get('/api/tasks');
        const tasks = response.data;
        return tasks;
    } catch (error) {
        console.error("sa");
        return [];
    }
}