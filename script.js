document.getElementById("button").addEventListener("click", () => {
    console.log("passou")  
        const url = document.getElementById("input").value;
    
      fetch("https://api.encurtador.dev/encurtamentos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: url }),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("API request failed");
          }
        })
        .then((data) => {
          document.getElementById("text").innerHTML = data.urlEncurtada;
    
          console.log("DADOS DA API", data);
        })
    
        .catch((error) => {
          console.log("ERRO", error);
        });
    });
    