<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Category</th>
        <th scope="col">Name</th>
        <th scope="col" width="300">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : "未分類" }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{ name: 'admin-restaurant', params: { id: restaurant.id } }"
            class="btn btn-link"
            >Show</router-link
          >

          <router-link 
            :to="{ name: 'admin-restaurant-edit' , params: { id: restaurant.id }}"
            class="btn btn-link"
          >Edit</router-link >

          <button 
            type="button" 
            class="btn btn-link"
            @click.stop.prevent="deleteRestaurant(restaurant.id)"
          >Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Maida Hahn",
      tel: "307.657.6401 x14658",
      address: "941 Streich Creek",
      opening_hours: "08:00",
      description: "Dignissimos a et ut in nostrum.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=71.89246751576634",
      viewCounts: 1,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-13T14:18:40.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 2,
      name: "Leopoldo White V",
      tel: "(178) 892-3747 x4993",
      address: "207 Gunnar Forge",
      opening_hours: "08:00",
      description: "omnis velit ut",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=11.58816530725819",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 3,
      name: "Adrianna Ankunding",
      tel: "781.015.5511 x0779",
      address: "72941 Nikolaus Viaduct",
      opening_hours: "08:00",
      description:
        "Sint molestiae labore recusandae necessitatibus quos illo dolores. Eum a ut dolores delectus eligendi. Libero et ipsam natus delectus excepturi cum sit similique voluptatem.\n \rSint sunt omnis odit provident explicabo rerum. Quis omnis quia odio maxime inventore ut nisi. Sed ipsam sunt est maiores eveniet qui est.\n \rNisi enim voluptatibus culpa repellat qui nihil aut animi eos. Quas et ullam autem consectetur voluptatum. Ipsam sed ut at optio aut accusantium enim. Rerum est cumque commodi quisquam velit ratione nihil minima. Velit dolor et et.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=88.03308398001211",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 4,
      name: "Mrs. Larue Schinner",
      tel: "(246) 768-7115 x904",
      address: "34756 Turcotte Island",
      opening_hours: "08:00",
      description:
        "In aperiam earum nemo in. Veniam laborum possimus. Voluptatem tempora voluptate voluptates voluptatum. Soluta id aperiam quia provident.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=58.85198307873978",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 5,
      name: "Kari Schultz",
      tel: "846-801-7427",
      address: "37651 Prohaska Knolls",
      opening_hours: "08:00",
      description:
        "Porro dicta doloribus voluptas modi et tempora quisquam magnam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=61.495358874949545",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 6,
      name: "Moriah Erdman",
      tel: "(879) 135-7687",
      address: "75968 Raynor Stravenue",
      opening_hours: "08:00",
      description: "Sunt asperiores voluptate nihil quo animi.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=10.337053238413985",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 7,
      name: "Leanne Waelchi Jr.",
      tel: "437.778.1848 x4378",
      address: "0135 Maybell Viaduct",
      opening_hours: "08:00",
      description:
        "Numquam cum aperiam qui sunt ratione.\nFuga nihil aut.\nEarum aut laboriosam nostrum expedita vel.\nInventore repellat eos quasi aliquid natus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=24.868238467900007",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 8,
      name: "Gisselle VonRueden DVM",
      tel: "1-926-970-0118 x5726",
      address: "666 Ashley Place",
      opening_hours: "08:00",
      description: "neque",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=59.58253420193429",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 9,
      name: "Dr. Zella Armstrong",
      tel: "(882) 248-9173",
      address: "1718 McClure Lake",
      opening_hours: "08:00",
      description:
        "Nesciunt architecto sed porro. Aut aut odio cupiditate ut possimus ut fugiat ut ea. Rerum dicta doloribus quaerat possimus voluptatibus occaecati. Harum ea ratione a sed accusantium nam. Sapiente magnam at ut recusandae repellat quo molestiae.\n \rVoluptatibus vero totam et quo expedita qui voluptas odio quidem. Rerum blanditiis et qui velit ut. Quam sunt perferendis. Consequuntur dolore sed commodi nihil labore sapiente. Qui quam quod enim numquam asperiores nam. Quo voluptatibus accusantium.\n \rAliquid vel ipsum qui. Molestiae inventore rem totam et dolor sed. Et quos tempora quo et provident ipsum. Vel quis ab ea consectetur quia sit amet ipsa. Dolor omnis sapiente quia totam ut. Minus necessitatibus voluptatibus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=91.66215823648123",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 10,
      name: "Linda Jenkins",
      tel: "1-262-272-6846 x49263",
      address: "23373 Macejkovic Bypass",
      opening_hours: "08:00",
      description: "Et dolorem doloremque porro soluta exercitationem.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=81.32017154873381",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 11,
      name: "Horace Ebert",
      tel: "1-792-995-4774 x7767",
      address: "85874 Bonita Forks",
      opening_hours: "08:00",
      description:
        "Perspiciatis dolores quia ut repudiandae quidem accusantium a quam at.\nCorrupti nobis molestias.\nRerum nulla neque ratione nobis qui.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=3.026716396729756",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 12,
      name: "Leone Hettinger DVM",
      tel: "123.445.0245 x993",
      address: "01198 Rath Radial",
      opening_hours: "08:00",
      description:
        "Iste quia et autem ut itaque qui.\nCorrupti qui nisi dolorem.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=54.08844254013745",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 13,
      name: "Amiya Murphy",
      tel: "(409) 556-1195",
      address: "38974 Chesley Bridge",
      opening_hours: "08:00",
      description:
        "Qui ea labore rem qui voluptatum quisquam possimus voluptas. Quis corrupti omnis. Quia eos deserunt. Animi distinctio voluptatem. Necessitatibus est ipsam amet.\n \rVoluptate sit mollitia excepturi numquam rem laborum officia assumenda quas. Omnis numquam esse ipsam corrupti impedit est eos. Beatae consequuntur qui est quo ad veniam eum eveniet nisi. Dignissimos nobis aperiam optio. Molestiae atque consequatur in nemo et quidem cupiditate non in.\n \rDignissimos laborum laboriosam aperiam et sit. Provident non odit. Adipisci ut est aut nesciunt. Aspernatur omnis aut culpa error explicabo. Sit sit excepturi laboriosam dolores unde fugiat.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=7.19684685122004",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 14,
      name: "Riley Heller",
      tel: "105-527-4587 x572",
      address: "595 Mortimer Valleys",
      opening_hours: "08:00",
      description:
        "Voluptatum tempora voluptatem quia ut. Ratione consectetur porro aut facilis dolores. Ipsa non possimus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=72.887443635956",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 15,
      name: "Haven Dibbert",
      tel: "1-268-911-2666 x739",
      address: "2557 Oscar Street",
      opening_hours: "08:00",
      description:
        "Ipsam natus iusto sint accusantium velit veniam. Reiciendis vel laboriosam sunt reprehenderit est officia quia. Ea quod ut minus. Quas et perferendis quibusdam et dolor qui possimus aut. Soluta quis expedita ut molestias quo iure voluptatem molestiae aliquid. Quisquam recusandae at quisquam dolorum.\n \rDucimus odio iure repellat explicabo hic architecto. Aperiam delectus natus numquam fuga blanditiis incidunt ducimus ducimus rem. Soluta voluptatibus et asperiores provident sunt non soluta quia.\n \rFacilis sit expedita. Alias repellat et magnam. Nesciunt eligendi sunt sed sunt atque numquam culpa.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=94.42686769100361",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 16,
      name: "Miss Adolphus Jacobson",
      tel: "(258) 690-4800",
      address: "1905 West Spur",
      opening_hours: "08:00",
      description:
        "Dolorem consequuntur aut.\nVoluptatum rem recusandae aut quo rem atque unde saepe aut.\nDolore enim et.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=30.21627770258406",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 17,
      name: "Evelyn Willms",
      tel: "748.510.6063 x35847",
      address: "1127 Corwin Isle",
      opening_hours: "08:00",
      description:
        "Eaque magnam atque alias. Nisi beatae nulla et culpa nemo voluptas sed ut odio. Similique temporibus doloribus sed ullam ipsum earum molestiae eveniet et. Voluptas autem et voluptatibus soluta illum laborum voluptas voluptate.\n \rMinus et occaecati tempore unde culpa incidunt perspiciatis cumque. Maiores eaque delectus sint et totam alias incidunt et in. Voluptas eveniet porro eum ab est sint id. Eos aut sint nisi reiciendis explicabo aliquid possimus qui. Quod non voluptatem perferendis et.\n \rDeserunt facere fugiat quibusdam quia est dolor neque earum aut. Fugiat ipsum itaque veritatis. Dolorem provident id. Eum modi voluptatem eligendi provident id a. Ut et quis labore quos assumenda qui.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=14.946454471374281",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 18,
      name: "Elliott Berge",
      tel: "1-874-500-0200",
      address: "878 Ryley Burgs",
      opening_hours: "08:00",
      description: "facere",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=36.680182685600606",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 19,
      name: "Dr. Rupert Renner",
      tel: "(371) 666-9249 x701",
      address: "2477 Dickinson Glen",
      opening_hours: "08:00",
      description: "eum",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=3.611817822170549",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 20,
      name: "Jamison Hartmann",
      tel: "469-377-4127 x61966",
      address: "83008 Spinka Drive",
      opening_hours: "08:00",
      description:
        "Dolorum exercitationem magnam voluptates ab corporis aut.\nVoluptatem perferendis voluptatem est id animi.\nUt earum aut.\nAut consectetur autem illum optio distinctio omnis laborum deleniti.\nIste non voluptatibus odio laboriosam sed aut qui.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=43.63642338294353",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 21,
      name: "Mariah Jacobs",
      tel: "(875) 484-5628",
      address: "3713 Turner Islands",
      opening_hours: "08:00",
      description: "totam",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=44.38235637646686",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 22,
      name: "Berta Rogahn",
      tel: "928-452-7377 x5758",
      address: "346 Paucek Street",
      opening_hours: "08:00",
      description:
        "Officiis minima et totam optio et quia incidunt.\nVero debitis quia repellendus et qui vel eaque.\nPlaceat consequatur ea delectus praesentium accusamus nihil porro quia est.\nModi beatae quidem voluptatem fugit.\nTotam voluptatum numquam quis aut iste.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=57.66940602114441",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 23,
      name: "Hallie Sipes",
      tel: "206.777.4536",
      address: "99264 Zemlak Shores",
      opening_hours: "08:00",
      description: "vel nemo culpa",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=42.93014220598237",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 24,
      name: "Leo Schaefer",
      tel: "158.424.8823 x69617",
      address: "8640 Smith Rapid",
      opening_hours: "08:00",
      description:
        "Quisquam ut eius doloremque dignissimos voluptatem explicabo tenetur.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=69.87448018285947",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 25,
      name: "Freddie Fisher Sr.",
      tel: "1-561-719-1416 x6493",
      address: "5585 Stefanie Canyon",
      opening_hours: "08:00",
      description: "eveniet",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=68.81005662420696",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 26,
      name: "Spencer Willms",
      tel: "1-196-402-1489 x549",
      address: "653 Bins Stravenue",
      opening_hours: "08:00",
      description:
        "Eum vel eius aut distinctio iusto rerum distinctio. Delectus quos molestias delectus autem sit. In earum temporibus ex. Porro ipsam voluptas quam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=50.69272715917552",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 27,
      name: "Freeda Wunsch",
      tel: "1-285-826-3329 x2386",
      address: "430 Felicity Valleys",
      opening_hours: "08:00",
      description:
        "Consequatur qui minus nobis autem ipsam quos earum neque minus. Quia inventore voluptatibus quia natus. Sit est blanditiis itaque amet commodi et voluptas ut. Facilis nihil repellendus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=59.21169163072979",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 28,
      name: "Arturo Sauer",
      tel: "204-333-5295 x15339",
      address: "8419 Runolfsson Parks",
      opening_hours: "08:00",
      description: "unde asperiores atque",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=17.80134452268227",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 29,
      name: "Dawson Krajcik",
      tel: "894.064.7398",
      address: "1846 Samanta Branch",
      opening_hours: "08:00",
      description: "Cum numquam est ipsum quaerat natus quod sit iusto autem.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=1.4423423645649303",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 30,
      name: "Seamus Gottlieb",
      tel: "523.703.6038",
      address: "08207 Tremblay Highway",
      opening_hours: "08:00",
      description: "Alias dolore temporibus aut voluptatem.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=44.65908412608983",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 31,
      name: "Reece Armstrong",
      tel: "(011) 234-4124 x196",
      address: "888 Candido Street",
      opening_hours: "08:00",
      description:
        "Nesciunt dolor similique laboriosam velit ab sint. Accusantium qui omnis fugit veritatis est. Quod consequuntur tempore tempora sint minus quasi voluptatibus reprehenderit. At rem error inventore rerum omnis. Dolorem accusamus ut voluptatum repellendus odit et sunt. Libero vero enim ullam consequuntur doloremque.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=78.67946615461592",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 32,
      name: "Russ Nikolaus",
      tel: "958-451-4674 x604",
      address: "170 Paucek Lane",
      opening_hours: "08:00",
      description: "ut nobis sint",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=68.96882203549663",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 33,
      name: "Lora Welch",
      tel: "(107) 533-3227 x85947",
      address: "2288 Lavern Vista",
      opening_hours: "08:00",
      description:
        "Est et aut sed dolores magnam harum rerum molestiae et. Impedit ut voluptatum. Est modi sint accusantium. Molestias ipsa natus voluptatem a ut fugit vel.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=91.82813833243651",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 34,
      name: "Vickie Kirlin II",
      tel: "466.531.9283 x326",
      address: "91774 Jameson Lake",
      opening_hours: "08:00",
      description:
        "Praesentium sint sit ut eveniet temporibus ad debitis dolore.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=53.55152199144933",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 35,
      name: "Rodger Stiedemann",
      tel: "426.977.2023",
      address: "077 Mattie Spring",
      opening_hours: "08:00",
      description:
        "Reprehenderit et recusandae culpa expedita non omnis quidem et. Est saepe nostrum non ut. Maxime commodi illum cum. Dolorem ut ipsum commodi et consequatur neque. Ducimus et expedita deserunt aut. Dolorem officiis eaque exercitationem recusandae minus modi amet voluptas aut.\n \rArchitecto inventore odit earum molestiae non. Rem corporis eligendi quia. Eum velit voluptate maxime at. Sint sit molestiae blanditiis culpa eius voluptatem. Corrupti unde minus est accusamus quo cum dolorem quaerat.\n \rExercitationem ipsam dolor officiis optio totam similique tempora qui modi. Aliquid tenetur et nihil commodi aut voluptatem laboriosam temporibus possimus. Iste provident rerum excepturi impedit aliquam enim. Molestiae nisi illum dolore minus minima unde.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=45.64269017674463",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 36,
      name: "Jazmyn Ruecker",
      tel: "484-854-0702 x557",
      address: "8520 Schuppe Viaduct",
      opening_hours: "08:00",
      description:
        "Ex odio occaecati vitae tenetur. Dignissimos esse consequatur quia. Ea alias rerum fugit totam voluptas suscipit hic molestiae ad. Quod dolores magnam velit id. Consequatur quae sunt perspiciatis quo.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=89.93559432330468",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 37,
      name: "Elisa Beatty II",
      tel: "1-947-235-3700 x202",
      address: "306 Gabe Mountain",
      opening_hours: "08:00",
      description: "Sit animi illo quis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=93.70692597740704",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 38,
      name: "Maurine Hahn PhD",
      tel: "839-043-1854 x8507",
      address: "274 Carroll Place",
      opening_hours: "08:00",
      description:
        "Recusandae eum et est omnis ducimus aspernatur et numquam.\nDolor tempora laborum ut.\nSequi sit ad sed et temporibus pariatur non repellat debitis.\nOfficiis ut culpa voluptate fugiat occaecati id velit sapiente atque.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=42.34765969640182",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 39,
      name: "Estel Balistreri",
      tel: "545.806.6201 x0957",
      address: "1502 Stokes Vista",
      opening_hours: "08:00",
      description: "commodi",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=14.846185800056212",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 40,
      name: "Dayton Crooks",
      tel: "(850) 531-1438",
      address: "384 Brayan Squares",
      opening_hours: "08:00",
      description:
        "Iusto delectus ducimus.\nEt nesciunt similique accusamus maiores.\nIpsa perspiciatis enim eos velit ad praesentium.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=56.04281494138608",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 41,
      name: "Terrell Hackett",
      tel: "1-444-529-6529 x598",
      address: "2647 Hoppe Street",
      opening_hours: "08:00",
      description:
        "Accusamus optio incidunt perferendis et quam voluptas eos maiores.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=8.05357680745946",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 42,
      name: "Delta Koelpin",
      tel: "892.967.8039 x4332",
      address: "78603 Russel Crescent",
      opening_hours: "08:00",
      description:
        "Enim ratione atque quo et excepturi et incidunt odio quis. Nobis molestiae architecto ut dolores non aut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=48.54105001418114",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 43,
      name: "Tomas Hoeger",
      tel: "1-727-814-2465 x68621",
      address: "57174 Rogahn Forges",
      opening_hours: "08:00",
      description: "Deserunt voluptatem dolores corporis voluptate quia saepe.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=68.42830918720269",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 44,
      name: "Dr. Newton Cole",
      tel: "1-194-935-9641 x076",
      address: "38670 Terrill Shore",
      opening_hours: "08:00",
      description:
        "Culpa molestias neque.\nRerum ut ex alias quo.\nAd voluptatum quisquam.\nSimilique eos placeat dolor excepturi.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=49.50321525532107",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 45,
      name: "Andreane Fay",
      tel: "1-235-887-6881",
      address: "983 Edgar Ports",
      opening_hours: "08:00",
      description:
        "Omnis dolor laborum quia laboriosam aliquid non ut nisi eos. Ipsum ducimus sit ut. Modi quidem est. Aliquam quae repellat.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=17.666785861156463",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 46,
      name: "Rafaela Frami",
      tel: "214-470-8504",
      address: "103 Myrna Walk",
      opening_hours: "08:00",
      description: "in",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=86.46502204994799",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 47,
      name: "Michel Reichert DDS",
      tel: "387.404.6936",
      address: "1570 Olson Rest",
      opening_hours: "08:00",
      description: "ut deleniti voluptas",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=87.21091670055219",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 48,
      name: "Rosalia Zieme",
      tel: "330-683-0003",
      address: "5682 Jast Inlet",
      opening_hours: "08:00",
      description: "sed",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=12.999374339309956",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 49,
      name: "Abagail Gusikowski",
      tel: "152.404.5126 x142",
      address: "27600 Lauriane Ports",
      opening_hours: "08:00",
      description:
        "Quibusdam vitae maiores et inventore sit qui quas. Quae autem ab. Dolores ipsa ratione natus.\n \rA excepturi dicta saepe modi soluta. Nobis est assumenda aliquam et repudiandae labore aut repellat ut. Repellendus voluptatem eius totam magnam provident labore eum illo. Ratione molestias totam est aut quam magnam impedit molestiae. Pariatur quasi amet.\n \rAtque vitae reprehenderit nam provident est alias et. Enim occaecati sunt vero non doloribus consequatur delectus quas tempore. Saepe neque cumque distinctio ab fuga.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=76.86684004687854",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
    {
      id: 50,
      name: "Connor Rohan",
      tel: "121-030-1054 x2706",
      address: "068 Hyatt Coves",
      opening_hours: "08:00",
      description:
        "Autem nesciunt porro vel dolorum consequatur ullam nam optio assumenda.\nIn ipsam ut sint ex at velit repellendus quibusdam ipsum.\nOdio iusto commodi illo ab debitis aut.\nAperiam deleniti nesciunt ut et sit deleniti tempore perspiciatis eos.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=3.0620781113749773",
      viewCounts: 0,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
      },
    },
  ],
};

export default {
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants;
    },
    deleteRestaurant(restaurantId) {
      this.restaurants = this.restaurants.filter( restaurant => restaurant.id !== restaurantId)
    }
  },
};
</script>