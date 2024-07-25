//llamado de un node al DOM
let root = document.querySelector("#root");
//elemnto de tipo div con atributo class
let div_formulario = document.createElement("div");
div_formulario.className = "div_formularios";

//lista de datos String
let formularios = [
    {nombre:"Login", link:"componentes/login/login.html"},
    {nombre:"Login", link:"#"},
    {nombre:"Login", link:"#"}, 
    {nombre:"Login", link:"#"},
    
];

//forEach (for)
formularios.forEach(itemLista =>{
    
    let div_item = document.createElement("a");
    div_item.className = "items";
    div_item.href = itemLista.link
    div_item.innerText = itemLista;
    
    div_formulario.appendChild(div_item);
});

root.appendChild(div_formulario);