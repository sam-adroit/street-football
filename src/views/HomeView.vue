<script>
  import SelectionPopUp from '../components/SelectionPopUp.vue';
  export default {
    data(){
      return {
        selectionType: "",
        showPopUp: false,
      }
    },
    components: {
      SelectionPopUp
    },
    methods: {
      handleSelectionType(str){
        this.showPopUp = true;
        this.selectionType = str;
      },
      closePopUp(){
        this.showPopUp = false;
        this.selectionType = "";
      }
    }
  }
</script>

<template>
  <main class="home-main">
    <div class="home-heading">
      <h3>Choose type of team selection</h3>
    </div>
    <div class="selection-btn">
      <button @click="handleSelectionType('captains')">Captains Team Selection</button>
      <button @click="handleSelectionType('auto')">Auto Team Selection</button>
    </div>
    <SelectionPopUp :closePopUp="closePopUp" :selectionType="selectionType" v-if="showPopUp"/>
  </main>
</template>

<style scoped>
.home-main{
  position: relative;
  width: max(50%, 600px);
  margin: 0 auto;
}
.home-heading{
  margin: 5em 0;
}
.home-heading h3{
  font-size: 18px;
  text-align: center;
}

.selection-btn{
  display: flex;
  gap: 2em;
}
.selection-btn button{
  padding: 12px 16px;
  background: transparent;
  font-family: 'Press Start 2P', system-ui;
  font-size: 16px;
  color: white;
  border: 2px solid white;
  cursor: pointer;
}
@media screen and (max-width: 600px){
  .home-main{
    width: 100%;
    margin: 0 auto;
  }
  .home-heading{
    margin: 2em 0;
  }
  .selection-btn{
    display: block;
  }
  .selection-btn button{
    display: block;
    margin-bottom: 1em;
    width: 250px;
    margin: 1em auto;
    line-height: 140%;
  }
}

</style>
