
// function doVar() {
//     var name='dima';
//     var secname='rusanow';
//     return [name,secname];
// }

// function getAlert(name1,name2) {
//     let mF = [];
//     var arr = [1,2,3,4,5,6,7];
//     name1 = doVar()[0];
//     name2 = doVar()[1];
//     index = 0;
//     while (index<=arr.length) {
//         index*=index;
//         mF.push(index);
//         index++
//     }
//     arr.forEach(
//         (elem)=> document.getElementById('one').innerHTML += elem + name1 + "<br>")
//     for (i=0; i<=arr.length; i++) {
//         document.getElementById('t').innerHTML += arr[i] + mF[i] + "<br>";
//     }
// }

function createObject() {
    const obj = {
        name:"egor",
        surname:"peppa",
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

function createThis(param1,param2) {
    var obj = {
        pc1:'msi',
        nb:'notebook',
        start: function (pc1,nb) {
            this.pc1 = pc1 + ` -${param1}`;
            this.nb = nb + ` -${param2}`;
            return `${this.nb}+${this.pc1}`
        }
    }
    return console.log(obj.start(param1,param2))
}


function showAllCircles(arr, operation) {
    if (typeof arr == "object") {
        switch (operation) {

            case 1:
                arr.forEach((item)=> console.log("forEachCircle: "+String(item)));
                break;

            case 2:
                for (i=0; i<arr.length; i++) {
                    console.log("forCircle: "+String(arr[i]));
                };
                break;

            case 3:
                var index = 0;
                while (index<arr.length) {
                    console.log("whileCircle: "+String(arr[index]));
                    index++;
                };
                break;
            
            case 4:
                for (i in arr) {
                    console.log("forInCircle: "+String(arr[i]));
                };
                break;
            
            case 5:
                var index2 = 0;
                do {
                    console.log("doWhile: "+String(arr[index2]));
                    index2++;
                } while (index2<arr.length);
                break;
                
            default:
                console.log('You choose wrong number, example: [1,2,3,4,5]');
        };
    } else {
        console.log('You insert the wrong type, it is must be a list (array)')
    }
}
// showAllCircles(['one','two','three','four','five'],8)

function unexceptedNumArg() {
    if (arguments.length === 0) {
        return "zero arguments";
    } else {
        arr = new Array();
        for (i=0;i<arguments.length;i++) {
            arr.push(arguments[i]);
        };
        return arr;
    }
}
// console.log(unexceptedNumArg(1,2,3));

function callAnonymusOrSelfExecFunc(elem,param) {
    if (elem===1) {
        var anonymus = function(local_param) {
            return `elem is ${local_param*2}`;
        };
        return anonymus(param);
    } else {
        var self_exec_function = (function(param) {
            return `you called the self-executable function with arg - ${param}`;
        }); // she must be self-called, but i see no different between this one and a anonymus function
        return self_exec_function(param);
    }
}
// console.log(callAnonymusOrSelfExecFunc(2,12))

