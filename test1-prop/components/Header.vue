<template>
    <header>
        <h1>Header View</h1>
        <nav>
            <ul>
                <li>Home
                </li>
                <li>Products
                </li>
                <li>Carts {{ cartnum }}
                </li>
            </ul>
        </nav>
    </header>
</template>
<script>
export default {
    props: ['cartnum'],
    data () {
        return {
            counter: this.cartnum
        }
    }
}
</script>