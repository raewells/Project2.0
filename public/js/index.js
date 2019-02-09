// Get references to page elements
var $ingredientText = $("#ingredient-text");
var $ingredientAmmount = $("#ingredient-ammount");
var $submitBtn = $("#submit");
var $ingredientList = $("#ingredient-list");
// food web api
// var foodWeb = require("foodweb");
// var term = $ingredientText; // the search term
// var maxLength = 5; // the maximum number of items to return

var foodAPI = {
  searchIngredient: function(example) {
    return $.ajax({
      url: "/examples/" + example,
      type: "GET"
    });
  }
};
// The API object contains methods for each kind of request we'll make
var API = {
  saveIngredient: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getIngredients: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteIngredient: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getIngredients().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text, example.ammount)
        .attr("href", "/example/" + example.text);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $ingredientList.empty();
    $ingredientList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();
  var ingredientVar = $("#ingredient-text").val();
  foodAPI.searchIngredient(ingredientVar);
  var example = {
    text: $ingredientText.val().trim(),
    ammount: $ingredientAmmount.val().trim()
  };

  if (!(example.text && example.ammount)) {
    alert("You must enter an example text and ammount!");
    return;
  }

  // API.getIngredients(example).then(function() {

  // })
  // console.log(foodWeb.search(term, maxLength));
  API.saveIngredient(example).then(function() {
    refreshExamples();
  });

  $ingredientText.val("");
  $ingredientAmmount.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteIngredient(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$ingredientList.on("click", ".delete", handleDeleteBtnClick);
