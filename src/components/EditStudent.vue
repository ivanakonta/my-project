<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6">
                <h2>Edit Student</h2>
                <form @submit.prevent="updateStudent">
                    <div class="row mt-4">
                        <div class="col-md-2">
                            <label for="firstName" class="mt-1">First Name</label>
                        </div>
                        <div class="col-md-4">
                            <input type="text" class="form-control" v-model="student.ime" placeholder="First Name" required />
                        </div>
                        <div class="col-md-4">
                            <input type="text" class="form-control" v-model="student.prezime" placeholder="Last Name" required />
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-md-2">
                            <label for="email" class="mt-1">Email</label>
                        </div>
                        <div class="col-md-6">
                            <input type="email" class="form-control" v-model="student.email" placeholder="Email" required />
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-md-2">
                            <label for="contact" class="mt-1">Contact No</label>
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" v-model="student.kontakt" placeholder="Contact No" required />
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-md-2">
                            <label for="birthdate" class="mt-1">Birthdate</label>
                        </div>
                        <div class="col-md-6">
                            <input type="date" class="form-control" v-model="formattedDate" @change="updateBirthdate" required />
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-md-2">
                            <label for="semester" class="mt-1">Semester</label>
                        </div>
                        <div class="col-md-6">
                            <select class="form-select" v-model="student.semestar" required>
                                <option v-for="sem in semesters" :key="sem" :value="sem">{{ sem }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-md-2">
                            <label for="course" class="mt-1">Course</label>
                        </div>
                        <div class="col-md-6">
                            <select class="form-select" v-model="student.smijer" required>
                                <option value="B.Tech Computer Engineering">B.Tech Computer Engineering</option>
                                <option value="B.Tech Information Technology">B.Tech Information Technology</option>
                            </select>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-md-2">
                            <button class="btn btn-primary" type="submit">Update Student</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'EditStudent',
    data() {
        return {
            student: {},
            semesters: [1, 2, 3, 4, 5, 6, 7, 8],
            formattedDate: '' // Added for date formatting
        };
    },
    mounted() {
        this.loadStudent();
    },
    methods: {
        loadStudent() {
            const studentId = this.$route.params.id;
            axios.get(`/api/students/${studentId}`)
                .then(res => {
                    this.student = res.data;
                    this.formattedDate = new Date(this.student.datum_rodjenja).toISOString().split('T')[0]; // Format date for input
                })
                .catch(err => {
                    console.error(err);
                });
        },
        updateBirthdate(event) {
            this.student.datum_rodjenja = new Date(event.target.value).toISOString(); // Save the date back in ISO format
        },
        updateStudent() {
            const studentId = this.$route.params.id;
            axios.put(`/api/students/${studentId}`, this.student)
                .then(() => {
                    this.$router.push('/'); // Redirect after update
                })
                .catch(err => {
                    console.error(err);
                });
        }
    }
};
</script>
