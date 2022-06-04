AFRAME.registerComponent("marker-handler", {
    init:function(){

        this.el.addEventListener("markerFound", ()=>{
            this.handleMarkerFound();
        })

        this.el.addEventListener("markerLost", ()=>{
            this.handleMarkerLost();
        })
      
    },

    handleMarkerFound : function(){
    
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "flex";

        var ratingButton = document.getElementById("rating-button")
        var orderButton = document.getElementById("order-button")

        ratingButton.addEventListener("click", ()=>{

        swal("Please provide your feedback here :)", {
        content: "input",
        })
        .then((value) => {
        swal(`Your feedback: ${value}   
          Thanks for your feedback!`);
        });
        })

        orderButton.addEventListener("click", ()=>{

            swal({
                title: "Order Confirmation",
                text: "Please confirm your order : Hydraulic Crane",
                icon: "./assets/order.png",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                  swal("Bravo! Your order is placed!!", {
                    icon: "success",
                  });
                } else {
                  swal("Please check your order again.");
                }
              });
        })
    },

    handleMarkerLost : function(){

        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "none";

    },
})