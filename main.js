Vue.component('prouduct', {
    props: {
        premium: {
            type: Boolean,
            require: true
        }
    },
    template: `
    <div class="product"> 
        <div class="product-image">
            <img :src= image>
        </div>

        <div class="product-info">
            <h1>{{PouductTitle}}</h1>
            <p v-if="instock">熱賣中</p>
            <p v-else>賣光啦</p>
            <p>價格:{{shopping}}</p>

            <ul>
                <li v-for="detail in details">{{detail}}</li>
            </ul>

            

            <div v-for="(variant,index) in variants"
                :key="variant.variantId"
                class="color-box"
                :style="{ backgroundColor: variant.variantColor }"
                @click="UpdataProudct(index)">
            </div>
    
            <button @click="AddToCart" 
                    :disabled="!instock"
                    :class="{disabledButton:!instock}">
                加入購物車
            </button>

            <div class="cart">
                <p>購物車({{cart}})</p>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            product: '世界上最好吃的香蕉',
            brand: '*黃金猴子*',
            selectedVariant: 0,
            details: ["水果之王", "又香又甜", "台灣享譽世界名產"],
            variants: [
                {
                    varintId: 0001,
                    variantColor: 'yellow',
                    variantImage: './assets/yellowbanana.jpg',
                    variantQuantity: 10,
                },
                {
                    varintId: 0002,
                    variantColor: 'green',
                    variantImage: './assets/greenbanana.jpg',
                    variantQuantity: 0,
                }
            ],
            cart: 0,
        }
    },
    methods: {
        AddToCart() {
            this.cart += 1
        },
        UpdataProudct(index) {
            this.selectedVariant = index
            console.log(index)
        }
    },
    computed: {
        PouductTitle() {
            return this.brand + '' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        instock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        shopping() {
            if (this.premium) {
                return "免費"
            }
            else {
                return 3000
            }
        }
    }

})


var app = new Vue({
    el: '#app',
    data: {
        premium: true
    }

})
