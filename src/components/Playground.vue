<template>
  <div>
    <input v-model="search" placeholder="Filter reddit pics">
    
    <div class="link-container">
      <article v-for="el in searchFiltered">
        <a class="link" v-bind:href="el.url">
          <h1>{{el.title}}</h1>
          <img v-bind:src="el.imgUrl" />
        </a>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Playground',
  data: function () {
    return {
      search: '',
      data: []
    }
  },
  computed: {
    searchFiltered: function () {
      return this.data.filter(el => {
        return el.title.indexOf(this.search) !== -1
      })
    }
  },
  created: function () {
    fetch('http://api.reddit.com/r/pics/hot')
    .then(function (res) {
      return res.text()
    })
    .then((data) => {
      const jsonData = JSON.parse(data).data.children
      const viewData = jsonData.map(el => {
        return {
          url: el.data.url,
          imgUrl: el.data.thumbnail,
          title: el.data.title
        }
      })

      this.data = viewData
    })
  },
  methods: {
    doSomething () {
      this.counter++
    }
  }
}

</script>


<style scoped>
img {
  width: 200px;
  height: 200px;
}

h1 {
  font-size: 12px;
}

article {
  width: 200px;
  margin: 5px;
}

.link-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
</style>
