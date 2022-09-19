const URL = 'http://localhost:5000/amigos';

const showFriends = ()=> {
    $('#lista').empty();
    $.get(`${URL}`, function(friends){
        console.log(friends);
        friends.forEach( e => {
            // let li = document.createElement('li');
            // li.id = e.id;
            // li.innerHTML = e.name;
            // let list = document.getElementById('lista');
            // list.appendChild(li);
                $('#lista').append(`<li id="${e.id}">
                                     ${e.name}
                                     <button id= "${e.id}" onclick= "deleteFriend(${e.id})" > X </button>
                                    </li>`)
        })
    })
}

$("#boton").click(showFriends);

$("#search").click(function(){
    let id = $("#input").val();
    if(id){
        // get (http://localhost:5000/amigos/id)
        $.get(`${URL}/${id}`, function(friend){
            console.log(friend);
            let { name, age, email } = friend;
            $("#amigo").text(`El nombre de mi amigo es:${name}, tiene ${age} años de edad`)
            $("#input").empty();
        })
    }else{
        $("#amigo").text("Tienes que ingresar un Id valido")
    }
})

let deleteFriend = function(idCruz){
    let id;
    if(typeof idCruz === 'number'){
        id = idCruz;
    }else{
        id = $("#inputDelete").val();
    }
    let friend;
    if(id){
        $.get(`${URL}/${id}`, function(f){
            friend = f;
            console.log(friend)
        })  
        // URL, type, succes
        $.ajax({
            url: `${URL}/${id}`,
            type: "DELETE",
            success: function(){
                $("#success").text(`Tu amigo ${friend.name} fue eliminado correctamente`)
                $("#inputDelete").val('');
                showFriends();
            }
        })
    }else{
        $('#success').text('tienes que ingresar un ID');
    }
}   

$("#delete").click(deleteFriend);