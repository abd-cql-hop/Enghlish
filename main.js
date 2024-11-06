function down(){

    const link = document.createElement('a');
    link.href = 'Phone.vbs';
    link.download = 'Phone.vbs';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);


}