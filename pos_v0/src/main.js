//TODO: Please write code in this file.
function printInventory(inputs) {
    var array_print = "";
    var total_price =0;
    for (var i = 0; i <  inputs.length; i++) {
        var print_format =
            '名称：' +  inputs[i].name +
            '，数量：' +  inputs[i].count +  inputs[i].unit +
            '，单价：' +  inputs[i].price +
            '.00(元)，小计：' +  inputs[i].price * inputs[i].count + '.00(元)\n';

        array_print = array_print + print_format;

        var num =  inputs[i].price * inputs[i].count;
        total_price = total_price+num;
    }
    var expectText =
        '***<没钱赚商店>购物清单***\n' +
        array_print+
        '----------------------\n' +
        '总计：'+ total_price+'.00(元)\n' +
        '**********************';
    console.info(expectText);
    console.log(expectText);
}




