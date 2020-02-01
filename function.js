function kaprekars(){
    var number = document.forms[0].elements['text'];
    if(number.value.split("").length <= 4){
        var result = process(number);
        alert(result);
    }else{
        alert("Maximum 4 Digit");
    }
    
}

function process(num){   
    var cons = 6174;
    var tmp_num_reverse = num.value.split("");
    var tmp_num_sort = num.value.split("");
    var reverse = tmp_num_reverse.sort(function(a, b){return b - a});
    var sort = tmp_num_sort.sort(function(a, b){return a - b});
    tmp_reverse = reverse.toString();
    reverse = tmp_reverse.replace(/,/gi, "");
    tmp_sort = sort.toString();
    sort = tmp_sort.replace(/,/gi, "");
    var result;
    var count = 0;
    
    do{
        result = parseInt(reverse) - parseInt(sort);
        
        if(result != cons){
            count++;
            var tmp_num_reverse = result.toString().split("");
            var tmp_num_sort = result.toString().split("");
            var reverse = tmp_num_reverse.sort(function(a, b){return b - a});
            var sort = tmp_num_sort.sort(function(a, b){return a - b});
            tmp_reverse = reverse.toString();
            reverse = tmp_reverse.replace(/,/gi, "");
            tmp_sort = sort.toString();
            sort = tmp_sort.replace(/,/gi, "");
        }

        if(result == 0){
            count = -1;
            break;
        }
        
    }while(cons != result);
    
    count = "Konstanta Kaprekars : " + (count+1);
    return count;
}

