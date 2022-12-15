<template>
  <div class="route-link">
    <nav><router-link to="/admin">Switch to Admin Main Page</router-link></nav>
  </div>

  <h1 class="public-heading">Public-Main-Page</h1>

  <SearchInput />
  <SearchButton />
  <router-view></router-view>
  <div class="create-wrapper">
    <button class="create">+ Add Suggestions</button>
  </div>
  <main>
    <section class="table-item">
      <table>
        <tr>
          <th>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="30"
              class="bi bi-file-code-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6.646 5.646a.5.5 0 1 1 .708.708L5.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zm2.708 0 2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 1 1 .708-.708z"
              />
            </svg>
          </th>
        </tr>
        <tr>
          <td>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="red"
              class="bi bi-youtube"
              viewBox="0 0 16 16"
            >
              <path
                d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
              />
            </svg>
          </td>
        </tr>
        <tr>
          <td>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="white"
              class="bi bi-instagram"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
              />
            </svg>
          </td>
        </tr>
        <tr>
          <td>
            <img
              class="CBE"
              src="https://image.jimcdn.com/app/cms/image/transf/dimension=230x10000:format=png/path/s0bc1816f4b388266/image/i2c7016bab2e2fa88/version/1647271231/image.png"
              alt=""
            />
          </td>
        </tr>
        <tr>
          <td>Web Development</td>
        </tr>
        <tr>
          <td>CSS Tricks</td>
        </tr>
        <tr>
          <td>HTML Semantic</td>
        </tr>
      </table>
    </section>
  </main>
</template>

<script>
import SearchInput from "@/components/SearchInput.vue";
import SearchButton from "@/components/SearchButton.vue";
export default {
  name: "publicView",
  components: {
    SearchInput,
    SearchButton,
  },
};
</script>

<style scoped>
table {
  margin-top: 20px;
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 95%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
.table-item {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 1em;
  font-weight: bold;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  width: 95%;
  _position: fixed;
  _border: 2px solid gray;
}

main {
  padding-left: 4rem;
}
.bi-youtube {
  width: 35px;
  height: 35px;
}
.bi-instagram {
  background: linear-gradient(
    90deg,
    rgba(236, 0, 0, 1) 5%,
    rgba(236, 223, 0, 1) 12%,
    rgba(214, 235, 16, 1) 19%,
    rgba(199, 227, 106, 1) 26%,
    rgba(115, 227, 106, 1) 35%,
    rgba(106, 227, 164, 1) 42%,
    rgba(106, 227, 204, 1) 49%,
    rgba(106, 227, 208, 1) 55%,
    rgba(106, 187, 227, 1) 62%,
    rgba(106, 132, 227, 1) 68%,
    rgba(129, 106, 227, 1) 73%,
    rgba(184, 106, 227, 1) 79%,
    rgba(227, 106, 209, 1) 85%,
    rgba(227, 106, 158, 1) 91%,
    rgba(227, 106, 115, 1) 98%
  );
  border: 1px solid white;
  border-radius: 12px;
  width: 35px;
  height: 35px;
}
.CBE {
  width: 36px;
  height: 35px;
  border-radius: 15px;
}
/* suggestion button */
.create-wrapper {
  box-sizing: border-box;
  display: flex;
  justify-content: end;
}

.create {
  border: 2px solid var(--clr-blue-01);
  border-radius: 10px;
  background-color: var(--clr-white-02);
  color: var(--clr-blue-01);
  font-weight: bold;
  margin-right: 80px;
  margin-top: 40px;
  cursor: pointer;
}
.create:hover {
  background-color: var(--clr-white-02);
  color: var(--clr-green-01);
  box-shadow: 1px 1px 1px 1px var(--clr-green-01);
  border: 2px solid var(--clr-green-01);
  cursor: pointer;
}
.route-link {
  box-sizing: border-box;
  display: flex;
  justify-content: end;
  margin-right: 20px;
  _display: none;
}
nav {
  margin-top: 20px;
  margin-right: 20px;
}

.public-heading {
  margin-top: 60px;
  text-align: center;
}
</style>
