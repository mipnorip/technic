document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');

    form.onsubmit = () => {
        const name = form.name.value;
        const phone = form.phone.value;
        const other = form.other.value;

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "name": name,
            "phone": phone,
            "other": other
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch('/send', requestOptions)
            .then(response => response.text())
            .then(result => {
                alert("Мы с вами свяжемся");
                form.reset();
            })
            .catch(error => console.log('error', error));


        return false;
    }
});

