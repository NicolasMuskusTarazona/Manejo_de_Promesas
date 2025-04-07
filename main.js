let work = true

let time1 = new Promise((resolve, rejact) => {
    setTimeout(() => {
        if (work) { (resolve("Funciona")) }
        else (rejact("No funciona"))
    }, 1000);
})

let time2 = new Promise((resolve, rejact) => {
    setTimeout(() => {
        if (work) { (resolve("Funciona")) }
        else (rejact("No funciona"))
    }, 1500);
})

let time3 = new Promise((resolve, rejact) => {
    setTimeout(() => {
        if (work) { (resolve("Funciona")) }
        else (rejact("No funciona"))
    }, 2000);
})

async function ejecutarPromesas() {
    try {
        let respuesta = await Promise.all([time1, time2, time3])
        console.log("Todas las promesas resueltas", respuesta)
    } catch (error) {
        console.log(error)
    }
}

ejecutarPromesas()