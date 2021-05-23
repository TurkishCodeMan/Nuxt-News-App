<template>
  <nav>
    <div class="logo">
      <img src="~/assets/logo.png" alt="" />
    </div>
    <ul class="nav-list">
      <nuxt-link tag="li" :to="{name:'index'}" class="nav-item">
        <a href="#" class="nav-link">Home</a>
      </nuxt-link>
      <nuxt-link  tag="li" :to="{name:'groups'}"  class="nav-item">
        <a href="#" class="nav-link">Groups</a>
      </nuxt-link>
      <li class="nav-item mode-changer">
        <input id="dark" type="checkbox" v-model="darkMode" />
        <label for="dark">
          <div class="mode-selector">
            <div class="toggle"></div>
          </div>
        </label>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      darkMode: false,
    };
  },
  watch: {
    darkMode() {
      this.toggleMode();
    },
  },

  methods: {
    toggleMode() {
      if (!this.darkMode) {
        return document
          .getElementsByTagName("body")[0]
          .classList.remove("dark");
      }
      return document.getElementsByTagName("body")[0].classList.add("dark");
    },
  },
};
</script>

<style scoped lang="scss">
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(
    to right bottom,
    var(--navbarFirst),
    var(--navbarSecond)
  );
  padding: 0px 12px;
  .logo {
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
  }
  .nav-list {
    display: flex;
    flex-flow: row wrap;
    .nav-item {
      margin-right: 40px;
      list-style-type: none;
      transition: all .3s ease;
      &:hover {
        transform: translateY(-3px);
      }
      .nav-link {
        color: var(--textColor);
        text-decoration: none;
        font-size: 1.2em;
      }
    }
  }
}

.mode-changer {
  width: 20px;
  height: 20px;
  input {
    display: none;

    &:checked + label .toggle {
      transform: translateX(30px);
      background: gray;
    }
  }
  label {
    .mode-selector {
      width: 60px;
      height: 30px;
      background: var(--navbarFirst);
      border-radius: 50px;
      display: flex;
      align-items: center;
      .toggle {
           transition: all .3s ease;
        background: rgb(103, 155, 0);
        width: 25px;
        height: 25px;
        margin:0px 3px;
        border-radius: 50%;
      }
    }
  }
}
</style>