<template lang="">
    <div class="captain-pick-container">
        <div class="captains-selection-btns">
            <div v-for="(item, index) in noOfCaptains" :key="index" class="selection-btns">
              <button @click="handleSelection(index)">
                {{selectedItems.includes(index) ? "Selected":"Click to Pick"}}
              </button>
            </div>
        </div>
        <button @click="handleRevealSelection" class="see-picks">Click to See Teams</button>  
    </div>
</template>
<style scoped>

    .captain-pick-container{
        width: 95%;
        margin: 3em auto;
    }
    .captains-selection-btns{
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
    .captains-selection-btns button,
    .captain-pick-container button{
        font-family: 'Press Start 2P', system-ui;
        font-size: 12px;
        background-color: transparent;
        padding: 10px 12px;
        color: white;
        border: 2px solid white;
        margin-bottom: 1em;
    }
    .captain-pick-container .see-picks{
        background-color: white;
        color: #2f0048;
        cursor: pointer;
    }
</style>
<script>
import { store } from '@/store/store';
export default {
    data(){
        return {
            noOfCaptains: +this.$route.params.noOfCaptains,
            selectedItems: [],
            store,
        }
    },
    mounted(){
        if(store.players.length === 0) this.$router.push("/")
    },
    methods: {
        handleSelection(i){
           if(this.selectedItems.includes(i)) return;
           this.selectedItems.push(i); 
        },
        handleRevealSelection(){
            if(this.selectedItems.length !== this.noOfCaptains){
                console.log("A captain has not picked")
                return
            }
            this.$router.push({
                name: 'team-selection',
                params: {
                    type: "captains",
                    playerPerTeam: 0
                }
            })
        }
    }
}
</script>
<style lang="">
    
</style>