function gravar() {
let nome = document.getElementById('txtNome').value;
let apelido = document.getElementById('txtApelido').value;
let sexo = document.getElementById('sSexo').value;
let telFixo = document.getElementById('txtFixo').value;
let telComer = document.getElementById('txtComer').value;
let celular = document.getElementById('txtCel').value;
let whatsapp = document.getElementById('txtWhats').value;
let email = document.getElementById('txtEmail').value;
let dados = '';
let data = new Date();

dados = 
`Nome: ${nome}
Apelido: ${apelido}
Sexo: ${sexo}
Tel. Fixo: ${telFixo}
Tel. Comercial: ${telComer}
Celular: ${celular}
Whatsapp: ${whatsapp}
E-mail: ${email}
--------------------------------------------------

`;

    let blob = new Blob (
        [dados], 
        {type: "text/plain;charset=utf-8"}
    );
    
    saveAs(blob, apelido + ' ' + data.getDate() + ' ' + data.getFullYear() + '.txt');

    //window.alert( 'gravação realizada com sucesso');
}

function abrirArq() {
    window.open ('C:/Users/zupper/Downloads/Arq.txt')
    window.alert('abrir')
}