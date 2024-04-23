<script>

const rangeInput = document.querySelectorAll(".contentProduct__catalog-product-sort-range-input input"),
    priceInput = document.querySelectorAll(".contentProduct__catalog-product-sort-price-input input"),
    range = document.querySelector(".contentProduct__catalog-product-sort-slider .contentProduct__catalog-product-sort-progress");
let priceGap = 10;

priceInput.forEach((input) => {
        input.addEventListener("input", (e) => {
            let minPrice = parseInt(priceInput[0].value),
                maxPrice = parseInt(priceInput[1].value);

            if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
                if (e.target.className === "input-min") {
                rangeInput[0].value = minPrice;
                range.style.left = (minPrice / rangeInput[0].max)  + "%";
                } else {
                rangeInput[1].value = maxPrice;
                range.style.right = 1 - (maxPrice / rangeInput[1].max) + "%";
                }
            }
        });
});

rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);

        if (maxVal - minVal < priceGap) {
            if (e.target.className === "range-min") {
            rangeInput[0].value = maxVal - priceGap;
            } else {
            rangeInput[1].value = minVal + priceGap;
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = (minVal / rangeInput[0].max) + "%";
            range.style.right = 1 - (maxVal / rangeInput[1].max) + "%";
        }
    });
});


</script>
