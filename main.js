function cenosor() {
    const censoredAdd = [];
    return function (str1, str2 = "") {
        if (str2) {
            censoredAdd.push([str1, str2]);
        } else {
            for(let pair of censoredAdd){
                str1 = str1.replace(new RegExp(pair[0], 'gi'), pair[1])
            }

            return str1;
        }
    };
}
const changeScene = cenosor();

changeScene("PHP", "JS");

changeScene("backend", "frointend");

console.log(changeScene("PHP is the most popular programming language"));
