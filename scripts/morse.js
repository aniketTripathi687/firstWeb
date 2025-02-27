const name = 'Rudi';

function init(){
    const ayan = {
        friends: [
            'Rudi', 'Dave', 'Laurenz'
        ]
    };

    for(const prop of ayan){
        console.log(prop);
    }
}

document.addEventListener('DOMContentLoaded', event =>{
    init();
});