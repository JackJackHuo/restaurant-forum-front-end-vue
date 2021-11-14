<template>
  <div class="container py-5">
    <NavTabs />

    <h1 class="mt-5">
      最新動態
    </h1>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants :restaurants="restaurants"/>
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewestComments :comments="comments"/>
      </div>
    </div>
  </div>
</template>

<script>
const dummyData = {
    "restaurants": [
        {
            "id": 1,
            "name": "Maida Hahn",
            "tel": "307.657.6401 x14658",
            "address": "941 Streich Creek",
            "opening_hours": "08:00",
            "description": "Dignissimos a et ut in nostrum.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=71.89246751576634",
            "viewCounts": 0,
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-11-10T13:23:38.000Z",
                "updatedAt": "2021-11-10T13:23:38.000Z"
            }
        },
        {
            "id": 2,
            "name": "Leopoldo White V",
            "tel": "(178) 892-3747 x4993",
            "address": "207 Gunnar Forge",
            "opening_hours": "08:00",
            "description": "omnis velit ut",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=11.58816530725819",
            "viewCounts": 0,
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-11-10T13:23:38.000Z",
                "updatedAt": "2021-11-10T13:23:38.000Z"
            }
        },
        {
            "id": 3,
            "name": "Adrianna Ankunding",
            "tel": "781.015.5511 x0779",
            "address": "72941 Nikolaus Viaduct",
            "opening_hours": "08:00",
            "description": "Sint molestiae labore recusandae necessitatibus quos illo dolores. Eum a ut dolores delectus eligendi. Libero et ipsam natus delectus excepturi cum sit similique voluptatem.\n \rSint sunt omnis odit provident explicabo rerum. Quis omnis quia odio maxime inventore ut nisi. Sed ipsam sunt est maiores eveniet qui est.\n \rNisi enim voluptatibus culpa repellat qui nihil aut animi eos. Quas et ullam autem consectetur voluptatum. Ipsam sed ut at optio aut accusantium enim. Rerum est cumque commodi quisquam velit ratione nihil minima. Velit dolor et et.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=88.03308398001211",
            "viewCounts": 0,
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-11-10T13:23:38.000Z",
                "updatedAt": "2021-11-10T13:23:38.000Z"
            }
        },
        {
            "id": 4,
            "name": "Mrs. Larue Schinner",
            "tel": "(246) 768-7115 x904",
            "address": "34756 Turcotte Island",
            "opening_hours": "08:00",
            "description": "In aperiam earum nemo in. Veniam laborum possimus. Voluptatem tempora voluptate voluptates voluptatum. Soluta id aperiam quia provident.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=58.85198307873978",
            "viewCounts": 0,
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-11-10T13:23:38.000Z",
                "updatedAt": "2021-11-10T13:23:38.000Z"
            }
        },
        {
            "id": 5,
            "name": "Kari Schultz",
            "tel": "846-801-7427",
            "address": "37651 Prohaska Knolls",
            "opening_hours": "08:00",
            "description": "Porro dicta doloribus voluptas modi et tempora quisquam magnam.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=61.495358874949545",
            "viewCounts": 0,
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-11-10T13:23:38.000Z",
                "updatedAt": "2021-11-10T13:23:38.000Z"
            }
        },
        {
            "id": 6,
            "name": "Moriah Erdman",
            "tel": "(879) 135-7687",
            "address": "75968 Raynor Stravenue",
            "opening_hours": "08:00",
            "description": "Sunt asperiores voluptate nihil quo animi.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=10.337053238413985",
            "viewCounts": 0,
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-11-10T13:23:38.000Z",
                "updatedAt": "2021-11-10T13:23:38.000Z"
            }
        },
        {
            "id": 7,
            "name": "Leanne Waelchi Jr.",
            "tel": "437.778.1848 x4378",
            "address": "0135 Maybell Viaduct",
            "opening_hours": "08:00",
            "description": "Numquam cum aperiam qui sunt ratione.\nFuga nihil aut.\nEarum aut laboriosam nostrum expedita vel.\nInventore repellat eos quasi aliquid natus.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=24.868238467900007",
            "viewCounts": 0,
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-11-10T13:23:38.000Z",
                "updatedAt": "2021-11-10T13:23:38.000Z"
            }
        },
        {
            "id": 8,
            "name": "Gisselle VonRueden DVM",
            "tel": "1-926-970-0118 x5726",
            "address": "666 Ashley Place",
            "opening_hours": "08:00",
            "description": "neque",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=59.58253420193429",
            "viewCounts": 0,
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-11-10T13:23:38.000Z",
                "updatedAt": "2021-11-10T13:23:38.000Z"
            }
        },
        {
            "id": 9,
            "name": "Dr. Zella Armstrong",
            "tel": "(882) 248-9173",
            "address": "1718 McClure Lake",
            "opening_hours": "08:00",
            "description": "Nesciunt architecto sed porro. Aut aut odio cupiditate ut possimus ut fugiat ut ea. Rerum dicta doloribus quaerat possimus voluptatibus occaecati. Harum ea ratione a sed accusantium nam. Sapiente magnam at ut recusandae repellat quo molestiae.\n \rVoluptatibus vero totam et quo expedita qui voluptas odio quidem. Rerum blanditiis et qui velit ut. Quam sunt perferendis. Consequuntur dolore sed commodi nihil labore sapiente. Qui quam quod enim numquam asperiores nam. Quo voluptatibus accusantium.\n \rAliquid vel ipsum qui. Molestiae inventore rem totam et dolor sed. Et quos tempora quo et provident ipsum. Vel quis ab ea consectetur quia sit amet ipsa. Dolor omnis sapiente quia totam ut. Minus necessitatibus voluptatibus.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=91.66215823648123",
            "viewCounts": 0,
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-11-10T13:23:38.000Z",
                "updatedAt": "2021-11-10T13:23:38.000Z"
            }
        },
        {
            "id": 10,
            "name": "Linda Jenkins",
            "tel": "1-262-272-6846 x49263",
            "address": "23373 Macejkovic Bypass",
            "opening_hours": "08:00",
            "description": "Et dolorem doloremque porro soluta exercitationem.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=81.32017154873381",
            "viewCounts": 0,
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-11-10T13:23:38.000Z",
                "updatedAt": "2021-11-10T13:23:38.000Z"
            }
        }
    ],
    "comments": [
        {
            "id": 11,
            "text": "Deserunt inventore ut et molestiae laudantium qui.",
            "UserId": 1,
            "RestaurantId": 11,
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$JGZcnJDgRAfGF6WZKrPq0uhH1XPb7/Nz1EetunLNx26xhh9AS94WC",
                "isAdmin": true,
                "image": null,
                "createdAt": "2021-11-10T13:23:38.000Z",
                "updatedAt": "2021-11-10T13:23:38.000Z"
            },
            "Restaurant": {
                "id": 11,
                "name": "Horace Ebert",
                "tel": "1-792-995-4774 x7767",
                "address": "85874 Bonita Forks",
                "opening_hours": "08:00",
                "description": "Perspiciatis dolores quia ut repudiandae quidem accusantium a quam at.\nCorrupti nobis molestias.\nRerum nulla neque ratione nobis qui.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=3.026716396729756",
                "viewCounts": 0,
                "createdAt": "2021-11-10T13:23:38.000Z",
                "updatedAt": "2021-11-10T13:23:38.000Z",
                "CategoryId": 5
            }
        },
        {
            "id": 29,
            "text": "Repellat sequi sed aut molestias inventore.",
            "UserId": 1,
            "RestaurantId": 29,
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$JGZcnJDgRAfGF6WZKrPq0uhH1XPb7/Nz1EetunLNx26xhh9AS94WC",
                "isAdmin": true,
                "image": null,
                "createdAt": "2021-11-10T13:23:38.000Z",
                "updatedAt": "2021-11-10T13:23:38.000Z"
            },
            "Restaurant": {
                "id": 29,
                "name": "Dawson Krajcik",
                "tel": "894.064.7398",
                "address": "1846 Samanta Branch",
                "opening_hours": "08:00",
                "description": "Cum numquam est ipsum quaerat natus quod sit iusto autem.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=1.4423423645649303",
                "viewCounts": 0,
                "createdAt": "2021-11-10T13:23:38.000Z",
                "updatedAt": "2021-11-10T13:23:38.000Z",
                "CategoryId": 5
            }
        },
        {
            "id": 55,
            "text": "Ipsam earum dolorem.",
            "UserId": 1,
            "RestaurantId": 5,
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$JGZcnJDgRAfGF6WZKrPq0uhH1XPb7/Nz1EetunLNx26xhh9AS94WC",
                "isAdmin": true,
                "image": null,
                "createdAt": "2021-11-10T13:23:38.000Z",
                "updatedAt": "2021-11-10T13:23:38.000Z"
            },
            "Restaurant": {
                "id": 5,
                "name": "Kari Schultz",
                "tel": "846-801-7427",
                "address": "37651 Prohaska Knolls",
                "opening_hours": "08:00",
                "description": "Porro dicta doloribus voluptas modi et tempora quisquam magnam.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=61.495358874949545",
                "viewCounts": 0,
                "createdAt": "2021-11-10T13:23:38.000Z",
                "updatedAt": "2021-11-10T13:23:38.000Z",
                "CategoryId": 2
            }
        },
        {
            "id": 82,
            "text": "Eius omnis est perferendis necessitatibus voluptatem labore ad enim.",
            "UserId": 1,
            "RestaurantId": 32,
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$JGZcnJDgRAfGF6WZKrPq0uhH1XPb7/Nz1EetunLNx26xhh9AS94WC",
                "isAdmin": true,
                "image": null,
                "createdAt": "2021-11-10T13:23:38.000Z",
                "updatedAt": "2021-11-10T13:23:38.000Z"
            },
            "Restaurant": {
                "id": 32,
                "name": "Russ Nikolaus",
                "tel": "958-451-4674 x604",
                "address": "170 Paucek Lane",
                "opening_hours": "08:00",
                "description": "ut nobis sint",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=68.96882203549663",
                "viewCounts": 0,
                "createdAt": "2021-11-10T13:23:38.000Z",
                "updatedAt": "2021-11-10T13:23:38.000Z",
                "CategoryId": 4
            }
        },
        {
            "id": 102,
            "text": "Aut reprehenderit nemo aut et beatae numquam culpa non.",
            "UserId": 1,
            "RestaurantId": 2,
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$JGZcnJDgRAfGF6WZKrPq0uhH1XPb7/Nz1EetunLNx26xhh9AS94WC",
                "isAdmin": true,
                "image": null,
                "createdAt": "2021-11-10T13:23:38.000Z",
                "updatedAt": "2021-11-10T13:23:38.000Z"
            },
            "Restaurant": {
                "id": 2,
                "name": "Leopoldo White V",
                "tel": "(178) 892-3747 x4993",
                "address": "207 Gunnar Forge",
                "opening_hours": "08:00",
                "description": "omnis velit ut",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=11.58816530725819",
                "viewCounts": 0,
                "createdAt": "2021-11-10T13:23:38.000Z",
                "updatedAt": "2021-11-10T13:23:38.000Z",
                "CategoryId": 4
            }
        },
        {
            "id": 128,
            "text": "Consectetur non nesciunt et quia nam est veritatis officiis molestias.",
            "UserId": 1,
            "RestaurantId": 28,
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$JGZcnJDgRAfGF6WZKrPq0uhH1XPb7/Nz1EetunLNx26xhh9AS94WC",
                "isAdmin": true,
                "image": null,
                "createdAt": "2021-11-10T13:23:38.000Z",
                "updatedAt": "2021-11-10T13:23:38.000Z"
            },
            "Restaurant": {
                "id": 28,
                "name": "Arturo Sauer",
                "tel": "204-333-5295 x15339",
                "address": "8419 Runolfsson Parks",
                "opening_hours": "08:00",
                "description": "unde asperiores atque",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=17.80134452268227",
                "viewCounts": 0,
                "createdAt": "2021-11-10T13:23:38.000Z",
                "updatedAt": "2021-11-10T13:23:38.000Z",
                "CategoryId": 2
            }
        },
        {
            "id": 4,
            "text": "Sint omnis et enim nihil.",
            "UserId": 2,
            "RestaurantId": 4,
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z",
            "User": {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$.xT1dM.Jz2g6sq8S7ciN7.S9ktX7nF3HA8Y/IlgE7AaScnWthqxrW",
                "isAdmin": false,
                "image": null,
                "createdAt": "2021-11-10T13:23:38.000Z",
                "updatedAt": "2021-11-10T13:23:38.000Z"
            },
            "Restaurant": {
                "id": 4,
                "name": "Mrs. Larue Schinner",
                "tel": "(246) 768-7115 x904",
                "address": "34756 Turcotte Island",
                "opening_hours": "08:00",
                "description": "In aperiam earum nemo in. Veniam laborum possimus. Voluptatem tempora voluptate voluptates voluptatum. Soluta id aperiam quia provident.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=58.85198307873978",
                "viewCounts": 0,
                "createdAt": "2021-11-10T13:23:38.000Z",
                "updatedAt": "2021-11-10T13:23:38.000Z",
                "CategoryId": 3
            }
        },
        {
            "id": 21,
            "text": "Rerum libero eaque ullam architecto voluptates eum nostrum.",
            "UserId": 2,
            "RestaurantId": 21,
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z",
            "User": {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$.xT1dM.Jz2g6sq8S7ciN7.S9ktX7nF3HA8Y/IlgE7AaScnWthqxrW",
                "isAdmin": false,
                "image": null,
                "createdAt": "2021-11-10T13:23:38.000Z",
                "updatedAt": "2021-11-10T13:23:38.000Z"
            },
            "Restaurant": {
                "id": 21,
                "name": "Mariah Jacobs",
                "tel": "(875) 484-5628",
                "address": "3713 Turner Islands",
                "opening_hours": "08:00",
                "description": "totam",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=44.38235637646686",
                "viewCounts": 0,
                "createdAt": "2021-11-10T13:23:38.000Z",
                "updatedAt": "2021-11-10T13:23:38.000Z",
                "CategoryId": 3
            }
        },
        {
            "id": 42,
            "text": "Occaecati dolor perferendis ut quo commodi sint quia laudantium voluptatem.",
            "UserId": 2,
            "RestaurantId": 42,
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z",
            "User": {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$.xT1dM.Jz2g6sq8S7ciN7.S9ktX7nF3HA8Y/IlgE7AaScnWthqxrW",
                "isAdmin": false,
                "image": null,
                "createdAt": "2021-11-10T13:23:38.000Z",
                "updatedAt": "2021-11-10T13:23:38.000Z"
            },
            "Restaurant": {
                "id": 42,
                "name": "Delta Koelpin",
                "tel": "892.967.8039 x4332",
                "address": "78603 Russel Crescent",
                "opening_hours": "08:00",
                "description": "Enim ratione atque quo et excepturi et incidunt odio quis. Nobis molestiae architecto ut dolores non aut.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=48.54105001418114",
                "viewCounts": 0,
                "createdAt": "2021-11-10T13:23:38.000Z",
                "updatedAt": "2021-11-10T13:23:38.000Z",
                "CategoryId": 2
            }
        },
        {
            "id": 60,
            "text": "Itaque et culpa aspernatur rerum accusamus ut.",
            "UserId": 2,
            "RestaurantId": 10,
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z",
            "User": {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$.xT1dM.Jz2g6sq8S7ciN7.S9ktX7nF3HA8Y/IlgE7AaScnWthqxrW",
                "isAdmin": false,
                "image": null,
                "createdAt": "2021-11-10T13:23:38.000Z",
                "updatedAt": "2021-11-10T13:23:38.000Z"
            },
            "Restaurant": {
                "id": 10,
                "name": "Linda Jenkins",
                "tel": "1-262-272-6846 x49263",
                "address": "23373 Macejkovic Bypass",
                "opening_hours": "08:00",
                "description": "Et dolorem doloremque porro soluta exercitationem.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=81.32017154873381",
                "viewCounts": 0,
                "createdAt": "2021-11-10T13:23:38.000Z",
                "updatedAt": "2021-11-10T13:23:38.000Z",
                "CategoryId": 3
            }
        }
    ]
}
import NavTabs from './../components/NavTabs.vue'
import NewestRestaurants from './../components/NewestRestaurants.vue'
import NewestComments from './../components/NewestComments.vue'
export default {
  name: "RestaurantsFeeds",
  components:{
    NavTabs,
    NewestRestaurants,
    NewestComments
  },
  data () {
    return {
      restaurants: [],
      comments: []
    }
  },
  created () {
    this.fetchFeeds()
  },
  methods: {
    fetchFeeds () {
      const { restaurants , comments } = dummyData
      this.restaurants = restaurants
      this.comments = comments.filter( comment => comment.Restaurant && comment.text)
    }
  }
}
</script>