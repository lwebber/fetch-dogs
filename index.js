'use strict';

function watchForms() {
    $('#multiple').submit(event => {
        event.preventDefault();
        let input = $('input[type="text"]').val();
        getDogImages(input);
    });

    $('#breed').submit(event => {
        event.preventDefault();
        let breed = $('input[type="text"]').val();
        console.log(breed);
        getDogBreedImage(breed);
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

    function getDogBreedImage(breed) {
        fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
            .then(response => response.json())
            .then(responseJson =>
                displayResult(responseJson))
            .catch(error => alert('Something went wrong. Try again later.'));
    }

    function displayResult(responseJson) {
        let txt = `<img src="${responseJson.message}" class="results-img">`;

        $('.results-images').html(txt);

        //display the results section
        $('.results').removeClass('hidden');
    }

}

$(watchForms);