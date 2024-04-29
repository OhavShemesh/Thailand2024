if (!localStorage.getItem("PaiPlaces")) {
    localStorage.setItem("PaiPlaces", JSON.stringify(["גשר במבוק", "בודהה גדולה", "מפל", "מסעדה על ההר", "כפר סיני", "ארוכות צוואר בפאי"]));
}
if (!localStorage.getItem("ChiangPlaces")) {
    localStorage.setItem("ChiangPlaces", JSON.stringify(["פילים", "מפל דביק", "אומגות", "קורס בישול", "טיול מקדשים"]));
}
if (!localStorage.getItem("PhuketPlaces")) {
    localStorage.setItem("PhuketPlaces", JSON.stringify(["Cafe Viewpoint", "איי סימיליאן", "קוראל וראצ'ה", "Ma Doo Bua", "מיני גולף דינוזאורים", "7 האיים לקופיפי", "7 האיים באופנועי ים"]));
}
if (!localStorage.getItem("KrabiPlaces")) {
    localStorage.setItem("KrabiPlaces", JSON.stringify(["קייאקים וטרקטרונים", "אמרלד פול", "מעיינות חמים", "מקדש הנמר"]));
}
if (!localStorage.getItem("KohTaoPlaces")) {
    localStorage.setItem("KohTaoPlaces", JSON.stringify(["פילים", "מפל דביק", "אומגות", "קורס בישול", "טיול מקדשים"]));
}
if (!localStorage.getItem("KohPhanganPlaces")) {
    localStorage.setItem("KohPhanganPlaces", JSON.stringify(["פילים", "מפל דביק", "אומגות", "קורס בישול", "טיול מקדשים"]));
}
if (!localStorage.getItem("KohSamuiPlaces")) {
    localStorage.setItem("KohSamuiPlaces", JSON.stringify(["פילים", "מפל דביק", "אומגות", "קורס בישול", "טיול מקדשים"]));
}
if (!localStorage.getItem("BangkokPlaces")) {
    localStorage.setItem("BangkokPlaces", JSON.stringify(["פילים", "מפל דביק", "אומגות", "קורס בישול", "טיול מקדשים"]));
}

let PaiPlaces = JSON.parse(localStorage.getItem("PaiPlaces"));
let ChiangPlaces = JSON.parse(localStorage.getItem("ChiangPlaces"));
let PhuketPlaces = JSON.parse(localStorage.getItem("PhuketPlaces"));
let KrabiPlaces = JSON.parse(localStorage.getItem("KrabiPlaces"));
let KohTaoPlaces = JSON.parse(localStorage.getItem("KohTaoPlaces"));
let KohPhanganPlaces = JSON.parse(localStorage.getItem("KohPhanganPlaces"));
let KohSamuiPlaces = JSON.parse(localStorage.getItem("KohSamuiPlaces"));
let BangkokPlaces = JSON.parse(localStorage.getItem("BangkokPlaces"));


const toDoFill = () => {
    let todos = document.querySelectorAll(".todo");

    for (let place of PaiPlaces) {
        let para = document.createElement("p");
        todos[0].appendChild(para);
        para.innerText = place

    }
    for (let place of ChiangPlaces) {
        let para = document.createElement("p");
        todos[1].appendChild(para);
        para.innerText = place

    }
    for (let place of PhuketPlaces) {
        let para = document.createElement("p");
        todos[2].appendChild(para);
        para.innerText = place

    }
    for (let place of KrabiPlaces) {
        let para = document.createElement("p");
        todos[3].appendChild(para);
        para.innerText = place

    }
    for (let place of KohTaoPlaces) {
        let para = document.createElement("p");
        todos[4].appendChild(para);
        para.innerText = place

    }
    for (let place of KohPhanganPlaces) {
        let para = document.createElement("p");
        todos[5].appendChild(para);
        para.innerText = place

    }
    for (let place of KohSamuiPlaces) {
        let para = document.createElement("p");
        todos[6].appendChild(para);
        para.innerText = place

    }
    for (let place of BangkokPlaces) {
        let para = document.createElement("p");
        todos[7].appendChild(para);
        para.innerText = place

    }

}

const toDoOpen = () => {
    let todos = document.querySelectorAll(".todo");
    for (let todo of todos) {
        todo.style.height = "0";
    }
    let cities = document.querySelectorAll(".city");

    cities.forEach((city, index) => {
        city.addEventListener("click", () => {
            if (city.innerText == "Pai") {
                toggleHeight(todos[index], PaiPlaces.length);
            } else if (city.innerText == "Chiang Mai") {
                toggleHeight(todos[index], ChiangPlaces.length);
            } else if (city.innerText == "Phuket") {
                toggleHeight(todos[index], PhuketPlaces.length);
            } else if (city.innerText == "Krabi") {
                toggleHeight(todos[index], KrabiPlaces.length);
            } else if (city.innerText == "Koh Tao") {
                toggleHeight(todos[index], KohTaoPlaces.length);
            } else if (city.innerText == "Koh Phangan") {
                toggleHeight(todos[index], KohPhanganPlaces.length);
            } else if (city.innerText == "Koh Samui") {
                toggleHeight(todos[index], KohSamuiPlaces.length);
            } else if (city.innerText == "Bangkok") {
                toggleHeight(todos[index], BangkokPlaces.length);
            }
        });
    });
}

const toggleHeight = (element, itemCount) => {
    if (element.style.height === "0px") {
        element.style.height = 34 * itemCount + 120 + 35 + "px";
    } else {
        element.style.height = "0";
    }
}
const removeFun = () => {
    let currentIndex;
    let cities = [PaiPlaces, ChiangPlaces, PhuketPlaces, KrabiPlaces, KohTaoPlaces, KohPhanganPlaces, KohSamuiPlaces, BangkokPlaces]
    let todos = document.querySelectorAll(".todo");
    let removeBtns = document.querySelectorAll(".remove")
    removeBtns.forEach((removeBtn, index) => {
        removeBtn.addEventListener("click", () => {
            currentIndex = index;
            let currentTodo = todos[index].querySelectorAll("p");
            for (let current of currentTodo) {
                current.style.opacity = "0.7";
                current.style.cursor = "pointer";
            }
            currentTodo.forEach((parameter, index2) => {
                parameter.addEventListener("click", () => {
                    cities[currentIndex].splice(index2, 1);
                    saveToLocalStorage(index);
                    let todoremove = todos[currentIndex].querySelectorAll("p");
                    for (let toremove of todoremove) {
                        toremove.remove()
                    }
                    todos[index].style.height = cities[index].length * 34 + 120 + 35 + "px";
                    for (let todo of todos) {
                        let removePa = todo.querySelectorAll("p");
                        for (let removep of removePa) {
                            removep.remove();
                        }
                    }

                    toDoFill()
                    markClickedOnes()
                })
            })
        })
    })
}
const add = () => {
    let cities = [PaiPlaces, ChiangPlaces, PhuketPlaces, KrabiPlaces, KohTaoPlaces, KohPhanganPlaces, KohSamuiPlaces, BangkokPlaces]
    let todos = document.querySelectorAll(".todo");
    let addBtns = document.querySelectorAll(".add")
    addBtns.forEach((addBtn, index) => {
        addBtn.addEventListener("click", () => {
            let todosheight = todos[index].offsetHeight;
            todos[index].style.height = todosheight + 70 + "px";
            let divInput = document.createElement("div");
            todos[index].appendChild(divInput);
            divInput.className = "divInput"
            let addInput = document.createElement("input");
            divInput.appendChild(addInput);
            addInput.className = "addInput";
            let cancleAndOkDiv = document.createElement("div");
            let cancle = document.createElement("h5");
            let ok = document.createElement("h5");
            divInput.appendChild(cancleAndOkDiv);
            cancleAndOkDiv.className = "cancleAndOkDiv";
            cancleAndOkDiv.appendChild(ok);
            ok.innerText = "Ok";
            ok.className = "ok";
            cancleAndOkDiv.appendChild(cancle);
            cancle.innerText = "Cancle";
            cancle.className = "cancle";
            cancle.addEventListener("click", () => {
                todos[index].querySelector(".divInput").remove();
                todos[index].style.height = cities[index].length * 34 + 120 + 35 + "px";
            })
            ok.addEventListener("click", () => {
                if (addInput.value) {
                    cities[index].push(addInput.value);
                    saveToLocalStorage(index);
                    for (let todo of todos) {
                        let removePa = todo.querySelectorAll("p");
                        for (let removep of removePa) {
                            removep.remove();
                        }
                    }
                    todos[index].querySelector(".divInput").remove();
                    todos[index].style.height = cities[index].length * 34 + 120 + 35 + "px";
                    toDoFill();
                    setClasses()
                    markClickedOnes()
                } else {
                    todos[index].querySelector(".divInput").remove();
                    todos[index].style.height = cities[index].length * 34 + 120 + 35 + "px";
                }

            })
        })
    })

}
const edit = () => {
    let cities = [PaiPlaces, ChiangPlaces, PhuketPlaces, KrabiPlaces, KohTaoPlaces, KohPhanganPlaces, KohSamuiPlaces, BangkokPlaces]
    let editBtns = document.querySelectorAll(".edit");
    let CurrentParaText;
    let CurrentPara;
    editBtns.forEach((editBtn, index) => {
        editBtn.addEventListener("click", () => {
            let todos = document.querySelectorAll(".todo");
            let todopara = todos[index].querySelectorAll("p");
            editBtn.src = "Sources/save.png"
            if (editBtn.src = "Sources/save.png") {
                editBtn.addEventListener("click", () => {
                    editBtn.src = "Sources/edit.png";
                    for (let para of todopara) {
                        para.style.opacity = "1";
                        para.style.cursor = "auto";
                    }

                    let newinput = document.querySelector(".editInput");
                    if (newinput.value != "") {
                        cities[index].splice(CurrentPara, 1, newinput.value);
                        saveToLocalStorage(index)
                        for (let todo of todos) {
                            let removePa = todo.querySelectorAll("p");
                            for (let removep of removePa) {
                                removep.remove();
                            }
                        }
                        toDoFill()

                    }
                    newinput.outerHTML = "";
                })
            }
            todopara.forEach((para, paraindex) => {
                para.style.opacity = "0.7";
                para.style.cursor = "pointer";
                para.addEventListener("click", () => {
                    CurrentParaText = para.innerText;
                    para.outerHTML = "<input class='editInput'></input>";
                    CurrentPara = paraindex;
                })
            })

        })
    })
}

const saveToLocalStorage = (index) => {
    let cities = [PaiPlaces, ChiangPlaces, PhuketPlaces, KrabiPlaces, KohTaoPlaces, KohPhanganPlaces, KohSamuiPlaces, BangkokPlaces];
    if (index === 0) {
        localStorage.setItem("PaiPlaces", JSON.stringify(cities[index]));
    } else if (index === 1) {
        localStorage.setItem("ChiangPlaces", JSON.stringify(cities[index]));
    } else if (index === 2) {
        localStorage.setItem("PhuketPlaces", JSON.stringify(cities[index]));
    } else if (index === 3) {
        localStorage.setItem("KrabiPlaces", JSON.stringify(cities[index]));
    } else if (index === 4) {
        localStorage.setItem("KohTaoPlaces", JSON.stringify(cities[index]));
    } else if (index === 5) {
        localStorage.setItem("KohPhanganPlaces", JSON.stringify(cities[index]));
    } else if (index === 6) {
        localStorage.setItem("KohSamuiPlaces", JSON.stringify(cities[index]));
    } else if (index === 7) {
        localStorage.setItem("BangkokPlaces", JSON.stringify(cities[index]));
    }
}

const setClasses = () => {
    let cities = document.querySelectorAll(".todo");
    let PaiP = cities[0].querySelectorAll("p")
    let ChiangP = cities[1].querySelectorAll("p")
    let PhuketP = cities[2].querySelectorAll("p")
    let KrabiP = cities[3].querySelectorAll("p")
    let KohTaoP = cities[4].querySelectorAll("p")
    let KohPhanganP = cities[5].querySelectorAll("p")
    let KohSamuiP = cities[6].querySelectorAll("p")
    let BangkokP = cities[7].querySelectorAll("p")

    PaiP.forEach((p) => {
        p.className = "PaiP"
    })

    ChiangP.forEach((p) => {
        p.className = "ChiangP"
    })

    PhuketP.forEach((p) => {
        p.className = "PhuketP"
    })

    KrabiP.forEach((p) => {
        p.className = "KrabiP"
    })

    KohTaoP.forEach((p) => {
        p.className = "KohTaoP"
    })

    KohPhanganP.forEach((p) => {
        p.className = "KohPhanganP"
    })

    KohSamuiP.forEach((p) => {
        p.className = "KohSamuiP"
    })

    BangkokP.forEach((p) => {
        p.className = "BangkokP"
    })
}

const CheckChecked = () => {
    let PaiP = document.querySelectorAll(".PaiP");
    let PhuketP = document.querySelectorAll(".PhuketP");
    let KrabiP = document.querySelectorAll(".KrabiP");
    let KohTaoP = document.querySelectorAll(".KohTaoP");
    let KohPhanganP = document.querySelectorAll(".KohPhanganP");
    let KohSamuiP = document.querySelectorAll(".KohSamuiP");
    let BangkokP = document.querySelectorAll(".BangkokP");
    let PaiClicked = [];
    let PhuketClicked = [];
    let KrabiClicked = [];
    let KohTaoClicked = [];
    let KohPhanganClicked = [];
    let KohSamuiClicked = [];
    let BangkokClicked = [];

    PaiP.forEach((pai) => {
        if (pai.classList.contains("Clicked")) {
            PaiClicked.push(pai.innerText);
        }
    });

    PhuketP.forEach((phuket) => {
        if (phuket.classList.contains("Clicked")) {
            PhuketClicked.push(phuket.innerText);
        }
    });

    KrabiP.forEach((krabi) => {
        if (krabi.classList.contains("Clicked")) {
            KrabiClicked.push(krabi.innerText);
        }
    });

    KohTaoP.forEach((kohTao) => {
        if (kohTao.classList.contains("Clicked")) {
            KohTaoClicked.push(kohTao.innerText);
        }
    });

    KohPhanganP.forEach((kohPhangan) => {
        if (kohPhangan.classList.contains("Clicked")) {
            KohPhanganClicked.push(kohPhangan.innerText);
        }
    });

    KohSamuiP.forEach((kohSamui) => {
        if (kohSamui.classList.contains("Clicked")) {
            KohSamuiClicked.push(kohSamui.innerText);
        }
    });

    BangkokP.forEach((bangkok) => {
        if (bangkok.classList.contains("Clicked")) {
            BangkokClicked.push(bangkok.innerText);
        }
    });

    localStorage.setItem("PaiChecked", JSON.stringify(PaiClicked));
    localStorage.setItem("PhuketChecked", JSON.stringify(PhuketClicked));
    localStorage.setItem("KrabiChecked", JSON.stringify(KrabiClicked));
    localStorage.setItem("KohTaoChecked", JSON.stringify(KohTaoClicked));
    localStorage.setItem("KohPhanganChecked", JSON.stringify(KohPhanganClicked));
    localStorage.setItem("KohSamuiChecked", JSON.stringify(KohSamuiClicked));
    localStorage.setItem("BangkokChecked", JSON.stringify(BangkokClicked));


}
const CheckClick = () => {
    let paras = document.querySelectorAll("p");

    paras.forEach((para) => {
        para.addEventListener("click", () => {
            if (window.getComputedStyle(para).getPropertyValue("opacity") === "1") {
                if (!para.classList.contains("Clicked")) {
                    para.classList.add("Clicked");
                } else {
                    para.classList.remove("Clicked");
                }
                CheckChecked();
            } else {
                console.log("Hey");
            }
        });
    });
};
const markClickedOnes = () => {
    let retrievedPaiClicked = JSON.parse(localStorage.getItem("PaiChecked"));
    let retrievedPhuketClicked = JSON.parse(localStorage.getItem("PhuketChecked"));
    let retrievedKrabiClicked = JSON.parse(localStorage.getItem("KrabiChecked"));
    let retrievedKohTaoClicked = JSON.parse(localStorage.getItem("KohTaoChecked"));
    let retrievedKohPhanganClicked = JSON.parse(localStorage.getItem("KohPhanganChecked"));
    let retrievedKohSamuiClicked = JSON.parse(localStorage.getItem("KohSamuiChecked"));
    let retrievedBangkokClicked = JSON.parse(localStorage.getItem("BangkokChecked"));

    let PaiP = document.querySelectorAll(".PaiP");
    let PhuketP = document.querySelectorAll(".PhuketP");
    let KrabiP = document.querySelectorAll(".KrabiP");
    let KohTaoP = document.querySelectorAll(".KohTaoP");
    let KohPhanganP = document.querySelectorAll(".KohPhanganP");
    let KohSamuiP = document.querySelectorAll(".KohSamuiP");
    let BangkokP = document.querySelectorAll(".BangkokP");

    PaiP.forEach((pai) => {
        retrievedPaiClicked.forEach((ClickedPai) => {
            if (pai.innerText == ClickedPai) {
                pai.classList.add("Clicked");
            }
        })
    })
    PhuketP.forEach((phuket) => {
        retrievedPhuketClicked.forEach((clickedPhuket) => {
            if (phuket.innerText == clickedPhuket) {
                phuket.classList.add("Clicked");
            }
        });
    });

    KrabiP.forEach((krabi) => {
        retrievedKrabiClicked.forEach((clickedKrabi) => {
            if (krabi.innerText == clickedKrabi) {
                krabi.classList.add("Clicked");
            }
        });
    });

    KohTaoP.forEach((kohTao) => {
        retrievedKohTaoClicked.forEach((clickedKohTao) => {
            if (kohTao.innerText == clickedKohTao) {
                kohTao.classList.add("Clicked");
            }
        });
    });

    KohPhanganP.forEach((kohPhangan) => {
        retrievedKohPhanganClicked.forEach((clickedKohPhangan) => {
            if (kohPhangan.innerText == clickedKohPhangan) {
                kohPhangan.classList.add("Clicked");
            }
        });
    });

    KohSamuiP.forEach((kohSamui) => {
        retrievedKohSamuiClicked.forEach((clickedKohSamui) => {
            if (kohSamui.innerText == clickedKohSamui) {
                kohSamui.classList.add("Clicked");
            }
        });
    });

    BangkokP.forEach((bangkok) => {
        retrievedBangkokClicked.forEach((clickedBangkok) => {
            if (bangkok.innerText == clickedBangkok) {
                bangkok.classList.add("Clicked");
            }
        });
    });


}
toDoFill();
toDoOpen();
removeFun();
add();
edit();
setClasses();
CheckClick();
markClickedOnes()
CheckChecked()