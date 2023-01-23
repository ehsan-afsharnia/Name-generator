// access to the form values
document.querySelector('#generate-names').addEventListener('submit', loadNames)


// read the values and generate URL
function loadNames(e) {
    e.preventDefault()


    // read the values from the form

    const country = document.querySelector('#country').value,
          genre = document.querySelector('#genre').value

          // generate the URL

    let url = 'https://namefake.com/'


    // check the country value
    if (country !== '') {
        url += (country + '/')
    } else{
        url += 'random/'
    }

    // check the genre
    if (genre !== '') {
        url += (genre + '/')
    } else {
        url += 'random/'
    }
    console.log(url);

}