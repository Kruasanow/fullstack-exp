
function doVar() {
    var name='dima';
    var secname='rusanow';
    return [name,secname];
}

function getAlert(name1,name2) {
    let mF = [];
    var arr = [1,2,3,4,5,6,7];
    name1 = doVar()[0];
    name2 = doVar()[1];
    index = 0;
    while (index<=arr.length) {
        index*=index;
        mF.push(index);
        index++
    }
    arr.forEach(
        (elem)=> document.getElementById('one').innerHTML += elem + name1 + "<br>")
    for (i=0; i<=arr.length; i++) {
        document.getElementById('t').innerHTML += arr[i] + mF[i] + "<br>";
    }
}

function createObject() {
    const obj = {
        name:"dima",
        surname:"rusanow",
        call: function() {
            const n = 12; 
            return `my name is ${n}`;
        }
    };

    var subj = new Object();
    subj.name = 'sss';
    subj.surname = 'www';
    delete subj.surname;

    return [obj,subj]
}

function createThis() {
    var obj = {
        pc1:'msi',
        nb:'notebook',
        start: function (pc1,nb) {
            this.pc1 = pc1 + '--';
            this.nb = nb + '--';
            return `${this.nb}+${this.pc1}`
        }
    }
    return obj
}

console.log(createThis().start('power','stop'))

const func = createObject();
console.log(func[0].name)
console.log(func[0].call())
console.log(func[1])