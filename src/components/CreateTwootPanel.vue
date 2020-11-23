<template>
  <form
    class="create-twoot-panel"
    @submit.prevent="createNewTwoot"
    :class="{ '--exceeded': newTwootCharacterCount > 180 }"
  >
    <label for="newTwoot"
      ><strong>New Twoot</strong> ({{ newTwootCharacterCount }}/180)</label
    >
    <textarea id="newTwoot" rows="4" v-model="newTwootContent" />
    <div class="create-twoot-panel__submit">
      <div class="create-twoot-type">
        <label for="newTwootType"><strong>Type: </strong></label>
        <select id="newTwootType" v-model="selectedTwootType">
          <option
            :value="option.value"
            v-for="(option, index) in twootTypes"
            :key="index"
          >
            {{ option.name }}
          </option>
        </select>
      </div>
      <button>Twoot!</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'CreateTwootPanel',
  data() {
    return {
      newTwootContent: '',
      selectedTwootType: 'instant',
      twootTypes: [
        {
          value: 'draft',
          name: 'Draft'
        },
        {
          value: 'instant',
          name: 'Instant Twoot'
        }
      ]
    }
  },
  computed: {
    newTwootCharacterCount() {
      return this.newTwootContent.length
    }
  },
  methods: {
    createNewTwoot() {
      if (this.newTwootContent && this.selectedTwootType !== 'draft') {
        this.$emit('add-twoot', this.newTwootContent)
        this.newTwootContent = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.create-twoot-panel {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  textarea {
    border: 1px solid #dfe3e8;
    border-radius: 5px;
  }
  &.--exceeded {
    color: red;
    border-color: red;
    button {
      background-color: red;
      border: none;
      color: #fff;
    }
  }
  .create-twoot-panel__submit {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  button {
    padding: 5px 20px;
    margin: auto 0;
    border-radius: 5px;
    border: none;
    background-color: tomato;
    color: white;
    font-weight: bold;
  }
}
</style>
