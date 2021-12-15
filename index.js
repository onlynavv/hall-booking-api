import express from "express";
import dotenv from "dotenv"

dotenv.config()

const app = express()

const PORT = process.env.PORT

app.use(express.json())

let rooms = []
let bookedRooms = []
let customers = []

app.get("/", (request, response)=>{
    response.send("hai from room booking")
})

app.get("/rooms", (request, response)=>{
    response.send(rooms)
})

// create rooms
app.post("/rooms", (request, response)=>{
    const roomData = request.body
    rooms = [...rooms, roomData]
    response.send(rooms)
})

// get all the rooms
app.get("/rooms/:id", (request, response)=>{
    const {id} = request.params

    const result = rooms.find((item)=>{
        return item.id === +id
    })
    response.send(result)
})

//book rooms
app.post("/rooms/book/:id", (request, response)=>{
    const {id} = request.params

    const {name} = request.body

    const timestamp = Date.now()
    const dataInfo = new Date(timestamp)
    const date = dataInfo.getDate()
    const month = dataInfo.getMonth()
    const year = dataInfo.getFullYear()
    const hours = dataInfo.getHours()
    const minutes = dataInfo.getMinutes()

    const bookedDate = date + ':' + month + ":" + year
    const startTime = hours + ':' + minutes
    let diffTime = startTime.split(":")
    const findEndTime = +diffTime[0] + 1
    const endTime = findEndTime + ":" + minutes

    const roomData = rooms.find((item)=>{
        return item.id === +id
    })

    const checkRoomBooked = bookedRooms.find((item)=>{
        return item.id === +id
    })

    if(!checkRoomBooked && rooms.length > 0){
        bookedRooms = [...bookedRooms, {
            id: roomData.id,
            name:name,
            date: bookedDate,
            startTime: startTime,
            endTime: endTime,
            room_name: roomData.room_name,
            status: "booked"
        }]
        roomData.status = "booked"
        customers = [...customers, {
            name:name,
            room_name:roomData.room_name,
            date: bookedDate,
            startTime: startTime,
            endTime: endTime
        }]
        response.send({msg:"room booked", bookedRooms, customers})
    }else{
        response.send({msg: "sorry!!!, room not available"})
    }
})

// get all the booked rooms
app.get("/bookedRooms", (request, response)=>{
    response.send(bookedRooms)
})

// get all the customers with booked data
app.get("/customerBooked", (request, response)=>{
    response.send(customers)
})

app.listen(PORT, ()=>{
    console.log("app connected at port ", PORT)
})