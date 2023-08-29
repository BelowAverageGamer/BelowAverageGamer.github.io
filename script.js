const pandas = ["bao-bao.html", "mei-xiang.html"];

function randomPanda(){
    let len = pandas.length;
    location.href = pandas[(Math.floor((Math.random() * len)))]
};
