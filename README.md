# hall-booking-api

## 1) create rooms
### click [https://hallroom-booking-api-task.herokuapp.com/rooms](https://hallroom-booking-api-task.herokuapp.com/rooms)

ex: give post body like this

```
{
    "id":1,
    "room_name":"a01",
    "seats":10,
    "amenities":["free wifi", "television", "parking lot", "mini fridge"],
    "price": 120,
    "status":"available"
}
```
![image](https://user-images.githubusercontent.com/77113035/146212955-52208de7-d1e1-4132-a2c1-9bfad611ec94.png)

## rooms lists

### click [https://hallroom-booking-api-task.herokuapp.com/rooms](https://hallroom-booking-api-task.herokuapp.com/rooms)

![image](https://user-images.githubusercontent.com/77113035/146213141-2fee7efc-b227-4b1b-937e-9294d9df5182.png)

## get rooms individually

### click [https://hallroom-booking-api-task.herokuapp.com/rooms/1](https://hallroom-booking-api-task.herokuapp.com/rooms/1)

![image](https://user-images.githubusercontent.com/77113035/146213275-84f516b3-dd3b-43f6-9d35-1c9df9ff8a97.png)

## 2) book rooms

post body be like this,
```
{
    "name":"kumar"
}
```

### click [https://hallroom-booking-api-task.herokuapp.com/rooms/book/1](https://hallroom-booking-api-task.herokuapp.com/rooms/book/1)

![image](https://user-images.githubusercontent.com/77113035/146213415-f8195794-c4c7-4a17-903a-a8380b90a245.png)

## 3) booked rooms list

### click [https://hallroom-booking-api-task.herokuapp.com/bookedRooms](https://hallroom-booking-api-task.herokuapp.com/bookedRooms)

![image](https://user-images.githubusercontent.com/77113035/146213528-fc5f23ce-8a33-4e25-a51c-0d7c22d92356.png)

## 4) customer booked rooms list

### click [https://hallroom-booking-api-task.herokuapp.com/customerBooked](https://hallroom-booking-api-task.herokuapp.com/customerBooked)

![image](https://user-images.githubusercontent.com/77113035/146213646-b45552dc-a816-41a0-a010-a1b810f40fe2.png)
