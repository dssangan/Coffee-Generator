
var selections = {
  "brand": "",
  "category": ""
};

function bringUpBrandButtons (){
  $("#second-div").html(`
    <div id="second-div" class="panel">
      <button type="button" class="button" id="starbucks" onclick="starbucksResponse()"> Starbucks </button>
      </br>

      <button type="button" class="button" id="caribou" onclick="caribouResponse()"> Caribou </button>
      </br>
    </div>
  `)
}

$("#chocolate").click(function() {
  selections["category"] = "chocolate";
  bringUpBrandButtons();
})

$("#fruity").click(function() {
  selections["category"] = "fruity";
  bringUpBrandButtons();
})

$("#Blended").click(function() {
  selections["category"] = "blended";
  bringUpBrandButtons();
})

$("#noncoffee").click(function() {
  selections["category"] = "noncoffee";
  bringUpBrandButtons();
})

function getCoffee() {
  $.ajax({
    "url": "http://138.197.96.17:5001/coffee/"+selections["brand"]+"/" + selections["category"],
    "success": function(res, status, xhr){
      console.log(res)
      $("#second-div").html(`<div>
          <h2> `+res+`</h2>
        </div>`)
    }
  })
}

function starbucksResponse(){
  selections["brand"] = "starbucks";
  getCoffee()
}

function caribouResponse(){
  selections["brand"] = "caribou";
  getCoffee()
}
