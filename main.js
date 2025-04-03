let yourName = ""
document.querySelector(".control span").onclick = function () {
    yourName = prompt("what is your name");
    if (yourName === null || yourName === "") {
        yourName = "unknown"
    }
    document.querySelector(".name span").innerHTML = yourName;
    document.querySelector(".control").remove()
    arr.forEach(e => {
        e.classList.add("flip");
        setTimeout(() => {
            e.classList.remove("flip")
        }, duration);
    });
}

let duration = 1000;

let conta = document.querySelector(".container");

let arr = Array.from(conta.children);
let order = [...Object.keys(arr)]
for (let i = 0; i < order.length; i++) {
    order[i] = +(order[i]);
}

arr.forEach(function (e, index) {
    shuffel(order);
    console.log(yourName)
    e.style.order = order[index]
    e.onclick = function () {
        e.classList.add("flip");
        let flipped = arr.filter(e => e.classList.contains("flip"));
        if (flipped.length === 2) {
            stop()
            if (flipped[0].dataset.tec === flipped[1].dataset.tec) {
                flipped[0].classList.remove("flip");
                flipped[1].classList.remove("flip");
                flipped[0].classList.add("the");
                flipped[1].classList.add("the");
                let all = arr.filter((e) => e.classList.contains("the"));
                if (all.length === 20) {
                    document.querySelector(".res button").style.backgroundColor = "black"
                    setTimeout(function () {
                        document.querySelector(".res p").innerHTML = "you finish the game";
                        document.querySelector(".res button").innerHTML = "restart the game";
                        document.querySelector(".res button").onclick = function () {
                            location.reload()
                        }
                    })
                }
                flipped[0].classList.add("noc");
                flipped[1].classList.add("noc");
                document.getElementById("success").play()
            } else {
                document.getElementById("fail").play()
                document.querySelector(".tires span").innerHTML = +document.querySelector(".tires span").innerHTML + 1;
                setTimeout(() => {
                    flipped[0].classList.remove("flip");
                    flipped[1].classList.remove("flip");
                }, duration);

            }
        };

    }
}
);
function stop() {
    conta.classList.add("no")
    setTimeout(() => {
        conta.classList.remove("no")
    }, duration);
}
function shuffel(arr) {
    let current = arr.length - 1,
        temp,
        random;
    for (; current > 0; current--) {
        random = Math.floor(Math.random() * current);
        temp = arr[current];
        arr[current] = arr[random];
        arr[random] = temp;
    }
}