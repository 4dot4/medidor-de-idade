var data = new Date()
var ano = data.getFullYear()
var nascimento = document.getElementById('txtano')
var src = document.getElementById('src')
var criança_homem = document.createElement('img')
var homem_novo = document.createElement('img')
var adulto = document.createElement('img')
var idoso = document.createElement('img')
var criança_menina = document.createElement('img')
var garota = document.createElement('img')
var mulher = document.createElement('img')
var idosa = document.createElement('img')
var mas = document.getElementById('mas')
var fem = document.getElementById('fem')
criança_menina.src = 'foto-bebe-f.png'
garota.src = 'foto-jovem-f.png'
idosa.src = 'foto-idoso-f.png'
mulher.src = 'foto-adulto-f.png'
idoso.src = 'foto-idoso-m.png'
criança_homem.src = 'foto-bebe-m.png'
homem_novo.src = 'foto-jovem-m.png'
adulto.src = 'foto-adulto-m.png'

function verificar(){
    
    var idade = 0 
    nascimento = document.getElementById('txtano')
    nascimento = Number(nascimento.value)
    idade = ano - nascimento
    
    if(nascimento > ano){
        src.innerText = 'viajem no tempo detectada'
        src.style.color = 'red'
    }
        else if(mas.checked == true){

            if(idade <= 10){
                src.innerText = `Um garotinho de ${idade} ano/s`
                src.appendChild(criança_homem)
            }else if(idade > 10 && idade <= 20){
                src.innerText = `Um jovem de ${idade} anos`
                src.appendChild(homem_novo)
            }else if(idade > 20 && idade <= 60){
                src.innerText = `Um adulto de ${idade} anos`
                src.appendChild(adulto) 
            }else{
                src.innerText = `Um senhor de ${idade} anos`
                src.appendChild(idoso)
            }
        }
    
            else if(fem.checked == true){

            if(idade <= 10){
                src.innerText = `Uma garotinha de ${idade} ano/s`
                src.appendChild(criança_menina)
            }else if(idade > 10 && idade <= 20){
                src.innerText = `Uma jovem de ${idade} anos`
                src.appendChild(garota)
            }else if(idade > 20 && idade <= 60){
                src.innerText = `Uma adulta de ${idade} anos`
                src.appendChild(mulher) 
            }else{
                src.innerText = `Uma senhora de ${idade} anos`
                src.appendChild(idosa)
            }
    }
}
    
