const list = (req, res) => {
    const numeros = []
    for(let i=1; i<=100; i++){
        numeros.push(i)
    }
    res.render('tabuada/list', {numeros})
}

const tabuada = (req, res) => {
    const tabuadas = []
    const num = req.params.num
    for(let i=1; i<=100; i++){
        tabuadas.push({
            i,
            resultado: num*i
        })
    }
    res.render('tabuada/tabuada', {
        num,
        tabuadas
    })
}

module.exports = {
    list, tabuada
}