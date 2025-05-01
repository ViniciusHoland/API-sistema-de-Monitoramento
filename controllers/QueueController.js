import Queue from "../models/Queue.js";


function formatarHora(dataISO) {
    const data = new Date(dataISO);
    const horas = data.getHours().toString().padStart(2, '0');
    const minutos = data.getMinutes().toString().padStart(2, '0');
    const segundos = data.getSeconds().toString().padStart(2, '0');
  
    return `${horas}:${minutos}:${segundos}`;
  }

const queueController = {

    insertUser: async (idUser) => {

        try {


            const user = await Queue.create({
                user: idUser
            })

            return console.log(`${idUser} added to the queue`)



        } catch (error) {
            return `Erro ao adicionar usuário à fila: ${error}`
        }

    }, 

    getAllQueues: async (req, res) => {
        try {

            const queues = await Queue.find().populate('user', 'name');


            const formattedQueues = queues.map(queue => {
                return {
                  user: queue.user.name,
                  enteredAt: formatarHora(queue.enteredAt)
                };
              });

              res.status(200).json(formattedQueues);


        } catch (error) {
            res.status(500).json({ message: "error for get all queues" + error.message });
        }
    }

}

export default queueController