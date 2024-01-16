<template lang="">
    <div class="team-selection">
        <h3>Teams</h3>
        <table v-if="type === 'captains'">
            <tr>
                <th>Teams</th>
                <th>Captains</th>
            </tr>
            <tr v-for="(cap,i) in store.players" :key="i">
                <td>Team {{i+1}}</td>
                <td>{{cap}}</td>
            </tr>
        </table>
        <div v-if="type === 'auto'" class="team-list">
            <ul v-for="i in numberOfTeams" :key="i">
                <h4>Team {{i}}</h4>
                <li v-for="j in playerPerTeam" :key="i+j">{{store?.players[4*i + j - 5]}}</li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
    .team-selection{
        width: max(50%, 600px);
        margin: 5em auto;
    }
    .team-selection h3{
        text-align: center;
        padding-bottom: 2em ;
    }
    .team-selection table{
        border-collapse: collapse;
        width: 90%;
        margin: 0 auto;
        background-color: #ff017d;
    }
    .team-selection table,.team-selection table tr td, .team-selection table tr th{
        padding: 10px 5px;
        border: 2px solid white;
        font-size: 14px;
    }
    .team-list {
        display: grid;
        grid-template-columns: auto auto auto;
        width: 90%;
        margin: 0 auto;
    }
    .team-list ul {
        margin-bottom: 2em;
        list-style: none;
        padding: 0;
    }
    .team-list ul h4{
        padding: 0;
        margin-bottom: 1em;
        font-size: 16px;
        text-decoration: underline;
    }
    .team-list ul li{
        font-size: 14px;
        padding-bottom: 14px;
    }
    @media screen and (max-width: 600px){
        .team-selection{
            width: 100%;
        }
        .team-list {
            grid-template-columns: auto auto;
            width: 95%;
            margin: 0 auto;
        }
        .team-list ul h4{
            font-size: 14px;
        }
        .team-selection table,.team-selection table tr td, .team-selection table tr th{
            font-size: 12px;
        }
        .team-list ul li{
            font-size: 12px;
            padding-bottom: 12px;
        }
    }
</style>
<script>
import { store } from '@/store/store';
export default {
    data(){
        return{
            store,
            type: "",
            playerPerTeam: 0,
            numberOfTeams: 0,
        }
    },
    mounted() {
        if(store.players.length === 0) this.$router.push("/")
        const {type, playerPerTeam} = this.$route.params;
        this.type = type;
        this.playerPerTeam = +playerPerTeam;
        this.shuffleArray();
        playerPerTeam && this.calculateNoOfTeams();
    },
    methods: {
        shuffleArray() {
            for (let i = this.store.players.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [this.store.players[i], this.store.players[j]] = [this.store.players[j], this.store.players[i]];
            }
        },
        calculateNoOfTeams(){
            this.numberOfTeams = Math.floor(this.store.players.length/this.playerPerTeam) + 
                                (this.store.players.length%this.playerPerTeam > 0 ? 1:0);
        }
    }
}
</script>
<style lang="">
    
</style>