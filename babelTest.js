class Hoge {
    constructor() {
        this.value = 100
    }
    fuga() {
        console.log('Hoge.fuga')
        console.log('this.value')
    } 
}

const h = new Hoge()
h.fuga()