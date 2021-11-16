<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for=" user in users"
          :key="user.id"
        >
          <th scope="row">{{user.id}}</th>
          <td>{{user.email}}</td>
          <td>{{user.isAdmin? 'admin' : 'user'}}</td>
          <td>
            <button 
              v-if="user.isAdmin"
              type="button" 
              class="btn btn-link"
              @click.stop.prevent="toggleUserRole(user.id)"
            >set as user</button>
            <button 
              v-else
              type="button" 
              class="btn btn-link"
              @click.stop.prevent="toggleUserRole(user.id)"
            >set as admin</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "./../components/AdminNav.vue";
const dummyUsers = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$JGZcnJDgRAfGF6WZKrPq0uhH1XPb7/Nz1EetunLNx26xhh9AS94WC",
      isAdmin: true,
      image: null,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$.xT1dM.Jz2g6sq8S7ciN7.S9ktX7nF3HA8Y/IlgE7AaScnWthqxrW",
      isAdmin: false,
      image: null,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$tfrcolMkx6rgrFrtL639mOxqDoNwioenxwT7oKG9t9NJ/YxtCGYgy",
      isAdmin: false,
      image: null,
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
    },
  ],
};
export default {
  name: "AdminUsers",
  components: {
    AdminNav,
  },
  data() {
    return {
      users: []
    }
  },
  created() {
    this.fetchUsers()
  },
  methods: {
    fetchUsers() {
      const { users } = dummyUsers
      this.users = users
    },
    toggleUserRole(userId){
      this.users = this.users.map( user => {
        if(user.id === userId){
          return {
            ...user,
            isAdmin: !user.isAdmin
          }
        }else{
          return user
        }
      })
    }
  }
};
</script>