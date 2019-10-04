document.getElementById('generate-names').addEventListener('submit',loadNAmes);

function loadNAmes(){
    var origin = document.getElementById('country').value;
    var genre = document.getElementById('genre').value;
    var quantity = document.getElementById('quantity').value;

    var url ='https://uinames.com/api/?';

    if(origin !== ''){
        url +=`region=${origin}&`;
    }
    if(genre !== ''){
        url +=`gender=${genre}&`;
    }
    if(quantity !== ''){
        url +=`amount=${quantity}`
    }

    var xhr=new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
            const data=JSON.parse( xhr.responseText );

            let html ='<h4>Generated names</h4>';
            html +='<ul class="list">'
            data.forEach(function(data) {
                html +=`<li >${data.name}</li>`;
                
            });
            html +='</ul>';
            document.getElementById('result').innerHTML=html;
        }
    }

    xhr.send();
    
}