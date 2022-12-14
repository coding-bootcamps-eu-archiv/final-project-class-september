<template>
  <header>
    <h1>Attendee Feed</h1>
    <h2>Coding Bootcamps Europe</h2>
  </header>
  <main>
    <button id="create-suggested-post">create</button>
    <h3>Post</h3>
    <section>
      <div>
        <input type="text" name="search-bar" id="search-bar" />
        <label for="search-bar">search post</label>
      </div>
      <button id="search-button">search</button>
    </section>
    <section>
      <div>
        <label for="instagram">Instagram</label>
        <input type="radio" name="instagram" id="instagram" />
      </div>
      <div>
        <label for="youtube">Youtube</label>
        <input type="radio" name="youtube" id="youtube" />
      </div>
      <div>
        <label for="cbe">Coding Bootcamps Europe</label>
        <input type="radio" name="cbe" id="cbe" />
      </div>
    </section>
    <section>
      <table>
        <thead>
          <tr>
            <th>Name(post)</th>
            <th>Type(CBE, Instagram, Youtube)</th>
          </tr>
        </thead>
        <tbody>
          <button>add</button>
          <button>remove</button>
          <button>edit</button>
          <AdminListingView />
        </tbody>
      </table>
    </section>
    <div>
      <button>Back</button>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style></style>
