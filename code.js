function umwandeln(){
    let input = document.getElementById('input').value;
    let output = document.getElementById('output') ;

    output.innerText = input.split(' ').join();
}