
// function doVar() {
//     var name='222';
//     var secname='111';
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

function createObjectWDiffNotation(choose,that_to_do) {
    var delete_arg = function(args,obj) {
        if (args.length === 0) {
            return false;
        } else {
            args.forEach((arg)=> delete obj[arg])
        }
    }
    switch (choose) {
        case 'object literal':
            var object_cars = {
                car1: 'dacia',
                car2: 'uaz',
                car3: 'niva',
                moves: function(direction) {
                    var res;
                    switch (direction) {
                        case 'left':
                            res = 'move left';
                            break;
                        case 'right':
                            res = 'move right';
                            break;
                        case 'forward':
                            res = 'move forward';
                            break;
                        default:
                            res = 'stay here';
                    }
                    return res
                },
                doing: function() {
                    return`this car is moving ${this.moves(that_to_do)} on ${this.car2}` // while creating an object i can not call elements by `this` because they did not was created on that time
                }
            };
            delete_arg(Array.from(arguments).slice(2),object_cars)
            return object_cars;
        case 'object constructor':
            var object_weapon = new Object();
            object_weapon.weapon1 = 'ak-47';
            object_weapon.weapon2 = 'm4a1';
            object_weapon.weapon3 = 'awm';
            object_weapon.doing = function(that_to_do) {
                return `this guy did a shoot with ${that_to_do}`;
            };
            delete_arg(Array.from(arguments).slice(2),object_weapon)
            return object_weapon
    };
};
// console.log(createObjectWDiffNotation('object literal','forward','car1'))


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

//132