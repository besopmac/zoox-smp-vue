<template>
    <div class="wrapper">
        <section class="header">
            <header>
                <button><i class="material-icons">menu</i></button>
                <h3>Zoox</h3>
            </header>

            <aside class="offset-menu">
                
            </aside>

            <div class="overflow"></div>
        </section>

        <NavTabs />
    </div>
</template>

<script src="./Wrapper.js" />

<style lang="scss" scoped>
// Mobile and Tablet Portrait
@media screen and (max-width: 1024px) {
  .wrapper {
  }
}
</style>
