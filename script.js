function a(){
    let set = prompt('qiyqiriq setdan nechta zakaz berasiz')
    let con = confirm (set * 45000 + 'som\nqiyqiriq setni zakaz berasizmi')
    switch(con){
        case true:
            alert('qiyqiriq set zakaz berildi\nsizdan-' + set * 45000)
            break
        default:
            alert('zakazingiz qabul qilinmadi')
    
    }
}