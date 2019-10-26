'use strict';

function watchForm() {
    $('#multiple').submit(event => {
        event.preventDefault();
        let input = $('input[type="text"]').val();
        getDogImages(input);
    });

    function displayResults(responseJson) {
        let txt = `<img src="${responseJson.message[0]}" class="results-img">`;

        for (let i = 1; i < responseJson.message.length; i++) {
            txt += `<img src="${responseJson.message[i]}" class="results-img">`;
        }

        $('.results-images').html(txt);

        //display the results section
        $('.results').removeClass('hidden');
    }

    function getDogImages(input) {
        fetch(`https://dog.ceo/api/breeds/image/random/${input}`)
            .then(response => response.json())
            .then(responseJson =>
                displayResults(responseJson))
            .catch(error => alert('Something went wrong. Try again later.'));
    }
}

$(watchForm);