var httpRequest;

function makeRequest() {
	  
    var url = 'https://reqres.in/api/users?page=1'; 

    // create an HTTP request object
    httpRequest = new XMLHttpRequest();
   
    if (!httpRequest) {
      alert('Cannot create an XMLHTTP instance');
      return false;
    }
    
    // register a request listener
    httpRequest.onreadystatechange = showContents;

    // make the HTTP request 
    httpRequest.open('GET', url, true);
    httpRequest.send();
}

      // the function that handles the serve response
    function showContents() {
        
        // check for response state
        if (httpRequest.readyState === 4) {
            // check the response code
            if (httpRequest.status === 200){
                // Javascript function JSON.parse to parse JSON data
                var data = JSON.parse(httpRequest.responseText);

                console.log('The fetched data: ', data); // for debugging

                // This for loop makes the cards and inserts them into the div in the expertise.html
                for(var i = 0; i < data.data.length; i++){
                    var cards = document.querySelector(".cards");
                    var newCard = document.createElement("article");
                    newCard.classList.add("card");

                    var cardHeader = document.createElement("header");
                    var cardHeading = document.createElement("h3");
                    cardHeading.textContent = data.data[i].first_name + " " + data.data[i].last_name;
                    cardHeader.appendChild(cardHeading);
                    newCard.appendChild(cardHeader);

                    var cardImage = document.createElement("img");
                    cardImage.src = data.data[i].avatar;
                    cardImage.alt = data.data[i].first_name + "'s Avatar";
                    newCard.appendChild(cardImage);

                    var cardContent = document.createElement("div");
                    cardContent.classList.add("content");

                    var contentHeading = document.createElement("h4");
                    contentHeading.textContent = "Email: ";
                    cardContent.appendChild(contentHeading);

                    var contentEmail = document.createElement("p");
                    contentEmail.textContent = data.data[i].email;
                    cardContent.appendChild(contentEmail);
                    newCard.appendChild(cardContent);

                    cards.appendChild(newCard);
                }
            } 
            else{
                alert('There was a problem with the request. May be caused by the "CORS" issue');
            }
        }
    }


window.onload = makeRequest;





