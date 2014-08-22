//TODO: Please write code in this file.

function printInventory(inputs) {

    var allItems = loadAllItems();
    var new_inputs=[];
    var new_inputsCount = [];
    for(var i= 0;i<inputs.length ;i++) {
        for (var j = 0; j < allItems.length; j++) {
            if (inputs[i] == allItems[j].barcode) {
                new_inputs.push(allItems[j])
            }
        }
    }
 for (var f = 0; f < new_inputs.length; f++) {
        var consist_in = false;
        for (var h = 0; h < new_inputsCount.length; h++) {
            if (new_inputsCount[h].name == new_inputs[f].name) {
                consist_in = true;
                new_inputsCount[h].count++;
                break;
            }
        }

        if (!consist_in) {
            var item = {};
            item.name = new_inputs[f].name;
            item.barcode = new_inputs[f].barcode;
            item.price = new_inputs[f].price;
            item.unit = new_inputs[f].unit;
            item.count = 1;
            new_inputsCount.push(item);
        }
    }
  var array_print = "";
    var total_price = 0;
      for (var f = 0; f < new_inputsCount.length; f++) {
        var print_format =
            '名称：' + new_inputsCount[f].name +
            '，数量：' + new_inputsCount[f].count + new_inputsCount[f].unit +
            '，单价：' + new_inputsCount[f].price +
            '.00(元)，小计：' + new_inputsCount[f].price * new_inputsCount[f].count + '.00(元)\n';

        array_print = array_print + print_format;

        var num = new_inputsCount[f].price * new_inputsCount[f].count;
        total_price = total_price + num;
    }
    var expectText =
        '***<没钱赚商店>购物清单***\n' +
        array_print +
        '----------------------\n' +
        '总计：' + total_price + '.00(元)\n' +
        '**********************';
    console.info(expectText);
    console.log(expectText);
}