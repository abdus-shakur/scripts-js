function highlight(letters,occurence){
    var tags = $x("//p");
    var i = 0;
    var regex = "";
    var occurencesCounter = 0;
    for(var j = 0;j<letters.length;j++){
        regex += ".*"+letters[j];
    }
        tagLoop:
    for(var k = 0;k<tags.length;k++){
        var p = tags[k].textContent;
        var output = "";
        if(p.match(regex)){
            p.split('').forEach(letter=>{
                if(letter==letters[i]){
                output += "<em style=\"color: red; font-size:24px;\">"+letter.toUpperCase()+"</em>";
                    i++;
                }   else{
                    output+= letter;
                }
            });
            console.log(output);
            tags[k].innerHTML = output;
            if(++occurencesCounter>occurence){
                break tagLoop;
            }
        }
        i = 0;
    }
};
highlight("shazia",1);