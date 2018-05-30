<html>
    <head>
        <style>
            #cat{
                width: 600px;
                height: 400px;
            }
        </style>
    </head>
    <body>
            <p id="mytext">my first javascript</p>
        <button id="my-button">
            hello world
        </button>
        <img id="cat" src="./img/tt.jpg"/>
        <script>
            var position = 0
          document.getElementById("my-button").onclick =function(){
            document.getElementById("cat").style.marginLeft= position
            position =position+60
            document.getElementById("mytext").innerHTML="my name is tarn"

          }
           
        </script>
    </body>
</html>


const student=['tarn','noon','kwan','chai']
const cat ={
    color:'black',
    legs:4,
    name:'sri',
    child:['dam','dang',
    {
        name:'nam',
        legs :5,
    }]

}
console.log(cat.child[2].name)


