// Get references to page elements
var $ingredientText = $("#ingredient-text");
var $ingredientAmmount = $("#ingredient-amount");
var $submitBtn = $("#submit");
var $ingredientList = $("#ingredient-list");
var $searchList = $("#search-list");

var foodAPI = {
  searchIngredient: function (ingredient) {
    return $.ajax({
      url: "/api/searchIngredient",
      type: "GET"
    });
  },
  postIngredient: function (ingredient) {
    console.log("post ingredient", ingredient.search)
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      url: "/api/postSearches",
      type: "POST",
      data: JSON.stringify(ingredient)
    });
  }
};
// The API object contains methods for each kind of request we'll make
var API = {
  saveIngredient: function (example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/api/Meals",
      data: JSON.stringify(example)
    });
  },
  getIngredients: function () {
    return $.ajax({
      url: "/api/Meals",
      type: "GET"
    });
  },
  deleteIngredient: function (ingredient) {
    return $.ajax({
      url: "/api/Meals/" + id,
      type: "DELETE"
    });
  },
  sumIngredients: function (ingredient) {
    return $.ajax({
      url: "/api/MealsSum",
      type: "POST"
    })
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function () {
  API.getIngredients().then(function (data) {
    var $examples = data.map(function (example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/meals/" + example.text);

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
var refreshSearches = function () {
  foodAPI.searchIngredient().then(function(data) {
    var $searchingIngredient = data.map(function (searches) {
      var $a = $("<a>")
      .text(searches.search)
      console.log("refresh searches.search", searches.search)
      .attr("href", "/searchIngredient/", searches.id);

      var $li = $("<li>").attr({class: "list-group-item-search", "data-id": searches.id}).append($a);

      var $button = $("<button>").addClass("btn btn-danger float-right delete")
        .text("ｘ");
        $li.append($button);
        return $li;
        $searchList.empty();
        $searchList.append($searchingIngredient);
    })
  })
}

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function (event) {
  event.preventDefault();
    
  var example = {
    search: $ingredientText.val(),
    amount: $ingredientAmmount.val()
  };
  console.log(example);
  
  if (!(example.search && example.amount)) {
    alert("You must enter an example text and ammount!");
    return;
  }

  
  foodAPI.postIngredient(example).then(function() {
    refreshSearches();
  });
  
  foodAPI.searchIngredient(example);
  $ingredientText.val("");
  $ingredientAmmount.val("");
};

var moveSearchToIngredients = function () {
  var chosenIngredient = $(this)
    .parent()
    .attr("data-id");
  API.saveIngredient(chosenIngredient).then(function () {
    $("#search-list").empty();
  });
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function () {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteIngredient(idToDelete).then(function () {
    refreshExamples();
  });
};



// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$ingredientList.on("click", ".delete", handleDeleteBtnClick);
$searchList.on("click", "#searchDelete", moveSearchToIngredients);
