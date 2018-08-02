$(document).ready(function() {
  // Gets an optional query string from our url (i.e. ?post_id=23)
  var url = window.location.search;
  var profileId;
  // Sets a flag for whether or not we're updating a profile to be false initially
  var updating = false;

  // If we have this section in our url, we pull out the profile id from the url
  // In localhost:8080/cms?post_id=1, postId is 1
  if (url.indexOf("?id=") !== -1) {
    profileId = url.split("=")[1];
    getProfileData(profileId);
  }

  // Getting jQuery references to the profile body, title, form, and category select
  // var bodyInput = $("#body");
  // var titleInput = $("#title");
  var profileForm = $("#profile");
  var postCategorySelect = $("#category");
  // Giving the postCategorySelect a default value
  // postCategorySelect.val("Personal");
  // Adding an event listener for when the form is submitted
  $(profileForm).on("submit", function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the post if we are missing a body or a title
    if (!titleInput.val().trim() || !bodyInput.val().trim()) {
      return;
    }
    // Constructing a newProfile object to hand to the database
    var newProfile = {
      firstname: firstName_Input.val().trim(),
      lastname: lastname_Input.val().trim(),
      email: email_Input.val().trim(),
      location: location_Input.val().trim(), 
      phone_number: phone_number_Input.val().trim()      
    };

    console.log(newProfile);

    // If we're updating a profile run updateProfile to update a profile
    // Otherwise run submitProfile to create a whole new profile
    if (updating) {
      newProfile.id = profileId;
      updateProfile(newProfile);
    }
    else {
      submitProfile(newProfile);
    }
  });

  // Submits a new post and brings user to profile page upon completion
  function submitProfile(Post) {
    $.post("/api/profile", Post, function() {
      window.location.href = "/profile";
    });
  }

  // Gets product data for a product if we're editing
  function getProfileData(id) {
    $.get("/api/profile/" + id, function(data) {
      if (data) {
        // If this product exists, prefill our product forms with its data
        firstName_Input.val(data.firstname);
        lastname_Input.val(data.lastname);
        email_Input.val(data.email);
        location_Input.val(data.location);
        phone_number_Input.val(data.phone_number)
        
        // If we have a post with this id, set a flag for us to know to update the post
        // when we hit submit
        updating = true;
      }
    });
  }

  // Update a given product, bring user to the product page when done
  function updateProfile(Post) {
    $.ajax({
      method: "PUT",
      url: "/api/profile",
      data: post
    })
      .then(function() {
        window.location.href = "/profile";
      });
  }
});
