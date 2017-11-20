export default {
    filters: {
        truncate(value, qty) {
            if(value) {
                if (value.length > qty) {
                    return value.substring(0, qty)+"...";	
                } else {
                    return value;
                }
            }
        },

        currentConverter(value) {
            if(value) {
                let amount = value.amount.toFixed(2).toString();
                if(amount == "0.00") {
                    return "Grátis"
                } else {
                    return 'R$ '+amount;
                }
            } else {
                return "Produto Indisponível";
            }
        }
    }
}