

    $(document).ready(function() 
  {

    $("#infoCap").hide();
    $(".alertaf").hide();
    $("#pres").show();
    


    $(".url").on("click", function() {

      var pl = $(this).data("info");

      $('#opciones').html(pl);
      $(".alertaf").fadeOut();
      
    }); 

    $(".botones").on("click", function() {

      $("#infoCap").hide();
      $("#pres").show(100);
      $(".alertaf").fadeOut();

        var pl = $(this).data("pl");

        $('#pl').html(pl);


        }); 

    // FUNCION DE MOSTRAR Y OCULTAR TARJETAS DE ACUERDO AL DATA-TARJETAS AGREGADO A CADA CARD
    
    $(".url").on("click", function() {

      $("#infoCap").fadeIn();
      $("#pres").fadeOut();
  

      var url = $(this).data("url");

      $(".tarjetasd").each(function() {

              if ($(this).data("tarjetas") == url ) {

                  $(this).fadeIn(300);    
                            
              } 
              else 
              {
                            
                $(this).fadeOut(150);
                        
              }

          }); 
      }); 
      
        //mostrar las opciones de cada liga 
      
      $(".botonesdp").hover(function() {
        
        
          var url = $(this).data("dp");

          $(".itemsdp").each(function() {
          

                  if ($(this).data("itemdp") == url ) {

                    $(this).fadeIn();   

                        if($(this).fadeIn())
                        {
                                $(".botonesdp").click(function()
                                            { 
                                              $(".itemsdp").fadeOut();        
                                            });    
                        }
                        else
                        {
                          $(".itemsdp").fadeOut();
                        } 
                          
                  } 
                  else
                  {
                    $(this).fadeOut();  
                  }
               

              }); 

          }); 

             // PREVENIR QUE SE ENVIE EL FORMULARIO 
            document.getElementById("formbd").addEventListener("submit", function(event){
            event.preventDefault()
             });

            // buscar al interactuar con el input #buscar 
          $("#buscar").on("keyup", function() {

        

                $("#infoCap").fadeIn();
                 $("#pres").fadeOut();
                 $(".alertaf").fadeIn();


                  var input = $(this).val().toUpperCase();  // obtenemos valor ingresado del input 

                 //cargar elementos de las cajas tarjetasd funcion
                  $(".tarjetasd").each(function() {

                    // si el valor data busqueda es igual o coincide con el valor del input muestra si no oculta

                  if ($(this).data("busqueda").toUpperCase().indexOf(input) < 0 ) 
                  {
                    $(this).fadeOut();
                  } 
                  else
                  {
                    $(this).fadeIn();
                
                
                  }

                  $('#pl').html("");
                  $('#opciones').html(input);

                  })
          });

            
  


          document.oncontextmenu = function() 
          {
              return false
          }
          function right(e) 
          {
             
              
              if (navigator.appName == 'Netscape' && e.which == 3) 
              {
               
                  return false;
              }
              else if (navigator.appName == 'Microsoft Internet Explorer' && event.button==2) 
              {
             
                  return false;
              }
              return true;
          }
          document.onmousedown = right;


  });

   