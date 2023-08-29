const pandas = ["bao-bao.html", "mei-xiang.html"];

function randomPanda(){
    location.href = pandas[(Math.floor((Math.random() * this.pandas.length())))]
};

