<template>
    <h1 class="text-center text-5xl font-semibold mb-11 mt-11 font-custom">Coffee Booking</h1>
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="(destination, index) in travelList" :key="index">
          <div class="bg-white rounded-lg shadow-lg p-4">
            <img :src="destination.img" class="w-full fixed-image-height rounded-t-lg" alt="...">
            <div class="p-4">
              <h5 class="text-xl font-semibold mb-2">{{ destination.name }}</h5>
              <p class="text-gray-600">{{ destination.description }}</p>
              <div class="mt-4">
                <div class="mb-4">
                  <label class="block text-sm text-gray-600 mt-1" for="numBookings">จำนวนโต๊ะ</label>
                  <input class="border rounded-md py-2 px-3 w-full" type="number" v-model="destination.numBookings" placeholder="Number of Bookings">
                  
                </div>
                <div class="mb-4">
                  <label class="block text-sm text-gray-600 mt-1" for="bookerName">ชื่อผู้จอง</label>
                  <input class="border rounded-md py-2 px-3 w-full" type="text" v-model="destination.bookerName" placeholder="Booker's Name">
                  
                </div>
                <div class="mb-4">
                  <label class="block text-sm text-gray-600 mt-1" for="bookingDate">วันที่</label>
                  <input class="border rounded-md py-2 px-3 w-full" type="date" v-model="destination.bookingDate">
                  
                </div>
                <div class="mb-4">
                  <label class="block text-sm text-gray-600 mt-1" for="phoneNumber">เบอร์โทร</label>
                  <input class="border rounded-md py-2 px-3 w-full" type="text" v-model="destination.phoneNumber" placeholder="Phone Number">
                  
                </div>
                <div class="mb-4">
                  <label class="block text-sm text-gray-600 mt-1" for="bookingTime">เวลา</label>
                  <input class="border rounded-md py-2 px-3 w-full" type="time" v-model="destination.bookingTime">
                </div>
                <button class="w-full centered" @click="booking(destination)">Book</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <h1 class="text-center text-2xl font-semibold mt-10 mb-5">List Booking</h1>
    <div class="table-container mb-2">
      <div class="table-card">
      <table class="w-full bg-coffee text-white table-auto" v-if="bookinglist.length > 0">
        <thead>
          <tr>
            <th class="px-4 py-2">#</th>
            <th class="px-4 py-2">Name</th>
            <th class="px-4 py-2">Bookings</th>
            <th class="px-4 py-2">Booker's Name</th>
            <th class="px-4 py-2">Booking Date</th>
            <th class="px-4 py-2">Phone Number</th>
            <th class="px-4 py-2">Booking Time</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(booking, index) in bookinglist" :key="index">
            <td class="px-4 py-2">{{ index + 1 }}</td>
            <td class="px-4 py-2">{{ booking.name }}</td>
            <td class="px-4 py-2">{{ booking.numBookings }}</td>
            <td class="px-4 py-2">{{ booking.bookerName }}</td>
            <td class="px-4 py-2">{{ booking.bookingDate }}</td>
            <td class="px-4 py-2">{{ booking.phoneNumber }}</td>
            <td class="px-4 py-2">{{ booking.bookingTime }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';

const travelList = ref([
  {
    name: 'Flavour Hill Bistro & Farm',
    price: 80,
    size: { s: 80, m: 150, l: 200 },
    img: 'https://img.wongnai.com/p/1920x0/2023/07/12/703514113ef343f4a0e0f521dafc159b.jpg',
    
    numBookings: 0,
    bookerName: '',
    bookingDate: '',
    phoneNumber: '',
    bookingTime: '',
  },
  {name:'ROAST8RY LAB',price:120,size:{s:80,m:150,l:200},img:"https://img.wongnai.com/p/1920x0/2023/01/10/d66c57e46d1348e2aaa3c4bfe5fe7896.jpg"},
{name:'Bart Coffee',price:150,size:{s:120,m:180,l:250},img:"https://img.wongnai.com/p/1920x0/2023/05/02/c1b92a09de734e48bab7f4168085ba97.jpg"},
{name:'di BOSCO COFFEE SPECIALIST',price:100,size:{s:120,m:160,l:220},img:"https://img.wongnai.com/p/1920x0/2019/12/14/a8f72420870940b0b27a637e8b2be614.jpg"},
{name:'Claai Cafe&Eatery',price:90,size:{s:110,m:150,l:210},img:"https://img.wongnai.com/p/800x0/2021/11/18/e1dd5ca3292b428a95ad88012bf87912.jpg"},
{name:'Transit Number 8',price:90,size:{s:110,m:150,l:210},img:"https://img.wongnai.com/p/800x0/2022/10/14/8f440d8a36294a3ead9dd53997520b16.jpg"}
]);

const bookinglist = ref([]);

const booking = (destination) => {
  if (destination.numBookings > 0) {
    bookinglist.value.push({
      name: destination.name,
      numBookings: destination.numBookings,
      bookerName: destination.bookerName,
      bookingDate: destination.bookingDate,
      phoneNumber: destination.phoneNumber,
      bookingTime: destination.bookingTime,
    });
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@500&display=swap');

* {
  box-sizing: border-box;
}
body {
  background-color: #F5EFE6;
}

label,button {
  font-family: 'Noto Sans Thai', sans-serif;
}

.fixed-image-height {
  height: 600px; /* Set your desired fixed height for the images */
  object-fit: cover; /* Preserve the aspect ratio */
}

button {
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 500;
  color: #000;
  background-color: #F5EFE6;
  border: #000;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  padding: 10px 20px; /* ปรับขนาดของปุ่มตามที่คุณต้องการ */
}

.centered {
  display: flex;
  align-items: center;
  justify-content: center;
}

button:hover {
  background-color: #D9BFA6;
  box-shadow: 0px 15px 20px rgba(46, 0, 0, 0.1);
  color: #fff;
  transform: translateY(-7px);
}

button:active {
  transform: translateY(-1px);
}



/* สไตล์สำหรับตาราง */
table {
  width: 100%;
  border-collapse: collapse;
}

table, th, td {
  border: 1px solid #F5EFE6;
}

th, td {
  padding: 10px;
  text-align: center;
  color: #382200;
}

/* สไตล์สำหรับหัวข้อ */
th {
  background-color: #b98a5b;
  color: #F5EFE6;
  font-weight: bold;
}

/* สไตล์สำหรับข้อมูลแถว */
tr:nth-child(even) {
  background-color: #D9BFA6;
}

.table-container {
  overflow-x: auto; 
  margin-left: auto;
  margin-right: auto;
  max-width: 160vh; 
}

@media screen and (max-width: 600px) {
  .table-container table {
    font-size: 14px;
  }
  .table-container th,
  .table-container td {
    padding: 8px;
  }
}

</style>