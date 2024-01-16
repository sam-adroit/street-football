
<script>
    export default {
        props: ["selectionType", "closePopUp"],
        data(){
            return {
                numberOfCaptains: 0,
                numberOfPlayers: 0,
                playersPerTeam: 0,
            }
        },
        methods:{
            handleSubmit() {
                if(this.selectionType === 'captains' && this.numberOfCaptains > 1){
                    let self = this
                    this.$router.push(
                    {
                        name: "players", 
                        params: {
                            playerType: self.selectionType,
                            noOfCaptains: self.numberOfCaptains
                        }
                    })
                }
                if(this.selectionType === 'auto' && this.numberOfPlayers >4 && this.playersPerTeam > 1){
                    let self = this
                    this.$router.push(
                    {
                        name: "auto", 
                        params: {
                            playerType: self.selectionType,
                            noOfPlayers: self.numberOfPlayers,
                            playersPerTeam: self.playersPerTeam
                        }
                    }) 
                }
            }
        }
    }
</script>

<template>
    <div class="selection-popup-container">
       <h2 class="close-btn" @click="closePopUp">X</h2>
       <form action="" @submit.prevent="handleSubmit">
         <div class="form-group" v-if="selectionType === 'captains'" >
            <label for="">Number of Captains*</label>
            <input type="number" placeholder="5" v-model="numberOfCaptains">
         </div>
         <div v-if="selectionType === 'auto'">
            <div class="form-group">
               <label for="">Number Of Players*</label>
               <input type="number" placeholder="32" v-model="numberOfPlayers">
            </div>
            <div class="form-group">
               <label for="">Players per Team*</label>
               <input type="number" placeholder="4" v-model="playersPerTeam">
            </div>
         </div>
         <div class="form-group">
            <input type="submit">
         </div>
       </form> 
    </div>
</template>

<style scoped>
.selection-popup-container{
    position: absolute;
    color: #2f0048;
    top: 15%;
    width: 100%;
    background-color: white;
    opacity: 0.9;
}
.selection-popup-container h2{
    text-align: right;
    padding: 12px;
    cursor: pointer;
}
.selection-popup-container form{
    width: 80%;
    margin: 0 auto;
}

.selection-popup-container form .form-group{
    width: 100%;
}
.selection-popup-container form .form-group label{
    display: block;
    font-size: 14px;
    padding: 12px 0;
}

.selection-popup-container form .form-group input{
    width: 100%;
    padding: 10px;
    margin-bottom: 12px;
    font-family: 'Press Start 2P', system-ui;
    color: #2f0048;
    border: 2px solid #2f0048;
}

.selection-popup-container form .form-group input[type="submit"]{
    color: white;
    background-color: #2f0048;
    cursor: pointer;
    margin-bottom: 4em;
}
</style>

