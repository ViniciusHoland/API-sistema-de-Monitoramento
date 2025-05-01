import Queue from "../models/Queue";


const queueController = {

    insertUser: async (idUser) => {

        try {

            const user = await Queue.create({
                user: idUser
            })

            return user;



        } catch (error) {
            res.status(500).json({ message: error.message });
        }

    }



}