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

               getprox()

          

              res.status(200).json(formattedQueues);


        } catch (error) {
            res.status(500).json({ message: "error for get all queues" + error.message });
        }
    },

    getProxQueue: async (req, res) => {

        try{

            const queue = await Queue.findOne().sort({ enteredAt: 1 }).populate('user', 'name');

            return  res.status(200).json(queue.user.name)


        } catch (error) {
            res.status(500).json({ message: "error for get prox queues" + error.message });
        }


    },

    deleteAllQueues: async (req, res) => {
        try{


            await Queue.deleteMany()


            res.status(200).json({ message: "All queues deleted" });


        } catch (error) {
            res.status(500).json({ message: "error for delete all queues" + error.message });
        }
    }

}

async function getprox(){
    const queue = await Queue.findOne().sort({ enteredAt: 1 }).populate('user', 'name');

    console.log( "o proximo atendente é " + queue.user.name)
}

export default queueController