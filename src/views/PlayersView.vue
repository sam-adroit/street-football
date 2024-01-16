<script>
import {store} from "../store/store"
export default {
    data() {
        return {
            numberOfInput: 0,
            playersPerTeam: 0,
            playerType: "",
            action:"",
            store,
        }
    },
    mounted() {
       const {noOfCaptains, noOfPlayers, playersPerTeam, playerType} = this.$route.params;
       this.numberOfInput = +noOfCaptains || +noOfPlayers;
       this.playersPerTeam = +playersPerTeam || this.playersPerTeam;
       this.playerType = playerType;
       this.store.players = new Array(this.numberOfInput).fill("")

    },
    methods: {
        checkEmpty() {
            let i =0;
            while(this.store.players.length - 1 > i){
                if(this.store.players[i].trim().length == 0) return false;
                i++;
            }
            return true
        },
        handleNameSubmission() {
            if(!this.checkEmpty()){
                console.log("Delete Field not used.")
                return;
            }
            if(this.action === 'auto' && (this.playerType === 'captains' || this.playerType === 'auto')){
                this.$router.push({
                    name: 'team-selection',
                    params: {
                        type: this.playerType,
                        playerPerTeam: this.playersPerTeam
                    }
                })
            }
            if(this.action === 'navigate' && this.playerType === 'captains'){
                this.$router.push({
                    name: 'captains-pick',
                    params: {
                        noOfCaptains: this.numberOfInput
                    }
                })
            } 
        },
        manageDeleteInput(i){
            this.numberOfInput -= 1;
            this.store.players.splice(i,1);
        }
    }
}
</script>

<template lang="">
    <div class="players-view-main-container">
       <h3>Type Captains' Names</h3>
       <form @submit.prevent="handleNameSubmission">
        <div class="form-group" v-for="i in numberOfInput" :key="i">
            <label for="">Name {{i}}:</label>
            <input type="text" placeholder="Player Name" v-model="store.players[i-1]"/>
            <span @click="manageDeleteInput(i-1)">X</span>
        </div>
        <div class="form-group">
            <input type="submit" @click="() => action = 'navigate'" v-if="playerType === 'captains'">
            <input type="submit" value="Autogenerate" @click="() => action = 'auto'">
        </div>
       </form>
    </div>
</template>

<style scoped>
    .players-view-main-container{
        width: max(50%, 600px);
        margin: 5em auto;
    }
    .players-view-main-container h3{
        text-align: center;
        padding-bottom: 2em ;
    }
    .players-view-main-container form{
        width: 90%;
        margin: 0 auto;
    }
    .players-view-main-container form .form-group{
        display: flex;
        gap: 12px;
        align-items: center;
        margin-bottom: 14px;
    }
    .players-view-main-container form .form-group label{
        font-size: 14px;
    }
    .players-view-main-container form .form-group input{
        flex: 1;
        padding: 10px 12px;
        font-family: 'Press Start 2P', system-ui;
        font-size: 14px;
        color: #2f0048;
        border: 2px solid #2f0048;
    }
    .players-view-main-container form .form-group input[type="submit"],
    .players-view-main-container form .form-group span{
        cursor: pointer;
    }
    @media screen and (max-width: 600px){
        .players-view-main-container{
            width: 100%;
            margin: 5em auto;
        }
        .players-view-main-container form .form-group{
            display: block;
        }

        .players-view-main-container form .form-group label{
            display: block;
            margin-bottom: 10px;
        }

        .players-view-main-container form .form-group input{
            font-size: 13px;
            width: 94%;
        }
        .players-view-main-container form .form-group span{
            padding-left: 5px;
        }
        .players-view-main-container form .form-group input[type="submit"]{
            margin-bottom: 12px;
        }
    }
</style>