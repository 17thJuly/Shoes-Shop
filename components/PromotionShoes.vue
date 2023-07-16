<template>
    <div>
        <span class="category-name">Product and Shop Cards</span> <br/><br/>
            
            <ul>
                <li>
                    <div class="sp-card-1">
                        <ul>
                            <li>
                                <div class="card-title">Trending Shoes For You</div>
                                <div class="sub-line">7 Colors in each Sport Pair</div>
                                <span class="off-label">UP TO 65% OFF</span>
                                <div class="return-line">15 Days Return and Replacement<br/>
                                    </div>
                            </li>
                            <li>
                                <div>
                                <img src="https://www.dropbox.com/s/pq93246lri9nb7m/chucks-153310_640.png?raw=1"/></div>
                                <div class="price-start">Start From $35</div>                                
                            </li>
                        </ul>
                        <span class="shop-button">
                            <a href="/shoes" title="Click for Shop Now">SHOP NOW</a>
                        </span>                        
                    </div>                    
                </li>
                </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.card-category-4 .sp-card-1 {
        background-image: linear-gradient(#f74545, #673AB7);
        height: 245px;
        width: 535px;
        text-align: left;

        -webkit-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
        -moz-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
        -o-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
        box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
    }

        .card-category-4 .sp-card-1 .shop-button {
            padding-left: 20px;
        }

        .card-category-4 .sp-card-1 ul {
            padding:0;
        }

            .card-category-4 .sp-card-1 ul li {
                list-style-type: none;
                display: inline-block;                
            }

            .card-category-4 .sp-card-1 ul li:nth-child(1) {
                padding: 20px 20px;
                float: left;
            }

                .card-category-4 .sp-card-1 ul li:nth-child(1) .off-label {
                    border: 1px solid #fff;
                    background: #fff;
                    font-size: 11px;
                    padding: 7px;
                }

                .card-category-4 .sp-card-1 ul li:nth-child(1) .return-line {
                    font-size: 13px;
                    padding: 20px 0 15px 0;
                    color: #fff;
                }

                .card-category-4 .sp-card-1 .shop-button a {
                    text-decoration: none;
                    color: #fff;
                    border: 1px solid;
                    padding: 10px 15px;
                    background: #1f3c3d;

                    -webkit-transition: ease-in-out .2s;
                    -moz-transition: ease-in-out .2s;
                    -o-transition: ease-in-out .2s;
                    transition: ease-in-out .2s;
                }

                .card-category-4 .sp-card-1 .shop-button a:hover {
                    background: transparent;
                }

            .card-category-4 .sp-card-1 ul li:nth-child(2) {
                text-align: right;
                padding: 0;
                float: right;
            }

                .card-category-4 .sp-card-1 ul li:nth-child(2) img {
                    height: 170px;
                    padding: 15px 0 0;

                    -webkit-transition: all .3s ease-in;
                    -moz-transition: all .3s ease-in;
                    -o-transition: all .3s ease-in;
                    transition: all .3s ease-in;
                }

                .card-category-4 .sp-card-1 ul li:nth-child(2) img:hover {
                    -webkit-transform: scale(0.90);
                    -moz-transform: scale(0.90);
                    -o-transform: scale(0.90);
                    transform: scale(0.90);
                }

                .card-category-4 .sp-card-1 ul li:nth-child(2) .price-start {
                    text-align: center;
                    font-size: 18px;
                    color: #fff;
                    padding: 18px 0px 0px;
                }

        .card-category-4 .sp-card-1 .card-title {
            color: #fff;
            font-size: 23px;
            font-weight: 550;
        }

        .card-category-4 .sp-card-1 .sub-line {
            padding:8px 0px 15px 0px;
            color:#fff;
            font-size:20px;
        }

</style>