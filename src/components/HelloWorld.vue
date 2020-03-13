<template>
  <div>
    <div class="hello">

      <div>Type some word </div>
      <div>Press Enter</div>
      <div>Will see implementation of binary tree as a string</div>
      <input type="text" v-on:keypress.enter="onAddNode">
    </div>
    <div>
      {{binaryTree.root}}
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';

  import {BinaryTreeStructureImpl} from './BinarTree';

  @Component
  export default class HelloWorld extends Vue {
    @Prop() private msg!: string;
    private binaryTree: BinaryTreeStructureImpl = new BinaryTreeStructureImpl();

    onAddNode($event: any) {
      this.binaryTree.addNode($event.target.value);
      $event.target.value = '';
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
