<template>
  <div>
      <table class="table table-bordered">
          <thead>
              <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Contact No</th>
                  <th>Birthdate</th>
                  <th>Semester</th>
                  <th>Course</th>
                  <th>Actions</th>
              </tr>
          </thead>
          <tbody style="color: #D1CDC8;">
              <tr v-for="student in students" :key="student.id">
                  <td>{{ student.id }}</td>
                  <td>{{ student.ime }}</td>
                  <td>{{ student.prezime }}</td>
                  <td>{{ student.email }}</td>
                  <td>{{ student.kontakt }}</td>
                  <td>{{ formatDate(student.datum_rodjenja) }}</td>
                  <td>{{ student.semestar }}</td>
                  <td>{{ student.smijer }}</td>
                  <td>
                      <RouterLink :to="{ path: '/students/' + student.id + '/edit' }" class="btn btn-success mx-2">
                          Edit
                      </RouterLink>
                      <button @click="deleteStudent(student.id)" class="btn btn-danger mx-2">
                          Delete
                      </button>
                  </td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "ShowTask",
  data() {
      return {
          students: [],
          loading: false,
          error: null,
      };
  },
  mounted() {
      this.loadStudentsTable();
  },
  methods: {
      loadStudentsTable() {
          this.loading = true;
          axios.get("/api/students")
              .then((res) => {
                  this.students = res.data.data;
              })
              .catch((err) => {
                  this.error = "Something Went Wrong";
                  console.error(err);
              })
              .finally(() => {
                  this.loading = false;
              });
      },
      deleteStudent(studentId) {
          if (confirm("Are you sure you want to delete this student?")) {
              axios.delete(`/api/students/${studentId}`)
                  .then(() => {
                      // Reload the entire page after deletion
                      location.reload();
                  })
                  .catch((err) => {
                      this.error = "Failed to delete student.";
                      console.error(err);
                  });
          }
      },
      formatDate(dateString) {
          const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
          const date = new Date(dateString);
          return date.toLocaleDateString(undefined, options);
      }
  }
};
</script>
