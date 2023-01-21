const buttonSend = document.getElementById('btn');

buttonSend.addEventListener('click', buttonBtn);

function buttonBtn(){
    const checkLink = document.getElementById('link').value;

    let enterLink = '';

    if(checkLink.includes('https://') || checkLink.includes('http://')){
        enterLink += checkLink;
    } else {
        enterLink = 'https://' + checkLink;
    }
    console.log(enterLink);  
    return enterLink;
}