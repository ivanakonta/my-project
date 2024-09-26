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
          </tr>
        </thead>
        <tbody style="color: #D1CDC8 ;">
          <tr v-for="student in students" :key="student.id">
            <td>{{student.id}}</td>
            <td>{{student.ime}}</td>
            <td>{{student.prezime}}</td>
            <td>{{student.email}}</td>
            <td>{{student.kontakt}}</td>
            <td>{{student.datum_rodjenja}}</td>
            <td>{{student.semestar}}</td>
            <td>{{student.smijer}}</td>
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
        students: {}
      }
    },
    mounted(){
      this.loadStudentsTable();
    },
    methods: {
      loadStudentsTable: function(){
        axios.get("/api/students").then((res) => {
          this.students = res.data.data;
        })
        .catch(()=>{
          console.log("Something Went Wrong");
        })
      }
    }
  };
  </script>
  