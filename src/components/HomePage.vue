<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <div class="row mt-4">
            <div class="col-md-2">
              <label for="" class="mt-1">Ime</label>
            </div>
            <div class="col-md-4">
              <input type="text" class="form-control" v-model="ime" placeholder="First Name" />
            </div>
            <div class="col-md-4">
              <input type="text" class="form-control" v-model="prezime" placeholder="Last Name" />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-2">
              <label for="" class="mt-1">Email</label>
            </div>
            <div class="col-md-6">
              <input type="text" class="form-control" placeholder="Email" v-model="email"/>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-2">
              <label for="" class="mt-1">Kontakt No</label>
            </div>
            <div class="col-md-6">
              <input type="text" class="form-control" placeholder="Contact No" v-model="kontakt" />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-2">
              <label for="" class="mt-1">Datum rođenja</label>
            </div>
            <div class="col-md-6">
              <input type="date" class="form-control" placeholder="Contact No" v-model="datum_rodjenja"/>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-2">
              <label for="" class="mt-1">Semestar</label>
            </div>
            <div class="col-md-6">
              <select name="" id="" class="form-select" v-model="semestar">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-2">
              <label for="" class="mt-1">Smijer</label>
            </div>
            <div class="col-md-6">
              <select name="" id="" class="form-select" v-model="smijer">
                <option value="B.Tech Computer Engineering">B.Tech Computer Engineering</option>
                <option value="B.Tech Information Technology">B.Tech Information Technology</option>
              </select>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-2">
              <button class="btn btn-primary" @click="registerStudent">Register</button>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="/Images/Nerd-rafiki.svg" alt="Nerd" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';    
  export default {
    name: "HomePage",
    data() {
      return{
        ime: "",
        prezime: "",
        email: "",
        kontakt: "",
        datum_rodjenja: "",
        semestar: "",
        smijer: ""
      }
    },
    methods: {
      registerStudent: function() {
  
        axios.post("/api/student", {
          ime: this.ime,
          prezime: this.prezime,
          email: this.email,
          kontakt: this.kontakt,
          datum_rodjenja: this.datum_rodjenja,
          semestar: this.semestar,
          smijer: this.smijer
        }).then((res) => {
          if(res.data.msg === "Validation Failed"){
            let errors = res.data.errors;
            let errorMsg = "";
            if(errors.ime.length != 0){
              for(let i=0; i<errors.ime.length; i++){
                errorMsg += `${errors.ime[i]}\n`;
              }
            } 
            
            if(errors.prezime.length != 0){
              for(let i=0; i<errors.prezime.length; i++){
                errorMsg += `${errors.prezime[i]}\n`;
              }
            }
  
            if(errors.email.length != 0){
              for(let i=0; i<errors.email.length; i++){
                errorMsg += `${errors.email[i]}\n`;
              }
            }
  
            if(errors.kontakt.length != 0){
              for(let i=0; i<errors.kontakt.length; i++){
                errorMsg += `${errors.kontakt[i]}\n`;
              }
            }
  
            if(errors.datum_rodjenja.length != 0){
              for(let i=0; i<errors.datum_rodjenja.length; i++){
                errorMsg += `${errors.datum_rodjenja[i]}\n`;
              }
            }
  
            if(errors.semestar.length != 0){
              for(let i=0; i<errors.semestar.length; i++){
                errorMsg += `${errors.semestar[i]}\n`;
              }
            }
  
            if(errors.smijer.length != 0){
              for(let i=0; i<errors.smijer.length; i++){
                errorMsg += `${errors.smijer[i]}\n`;
              }
            }
  
            alert(errorMsg);
          }
          else{
            alert("Successfully Saved");
          }
  
        }).catch(()=>{
          alert("Something Went Wrong");
        })
      }
    }
  };
  </script>
  
 