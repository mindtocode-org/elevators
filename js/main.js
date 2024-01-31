// nav bar
$("body").css("paddingTop", $(".navber").innerHeight() + 100);
$(".navbar .nav-jquery a").click(function (e) {
  e.preventDefault();
  $("html , body").animate(
    {
      scrollTop: $("#" + $(this).data("scroll")).offset().top
    },
    
  );
});
$(".navbar .nav-jquery a").click(function () {
  $(".navbar a").removeClass("active");
  $(this).addClass("active");
});

$(window).scroll(function () {
  $(".block").each(function () {
    if ($(window).scrollTop() > $(this).offset().top) {
      const id = $(this).attr("id");
      $(".navbar a").removeClass("active");
      $(`.navbar .nav-jquery a[data-scroll=${id}]`).addClass("active");
    }
  });
});
$(document).ready(function () {
  // Show or hide the button based on the scroll position
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scrollTopBtn").fadeIn();
    } else {
      $("#scrollTopBtn").fadeOut();
    }
  });

  // Scroll to top when the button is clicked
  $("#scrollTopBtn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
});
$(document).ready(function() {
  $("#why .position-relative").hover(
    function() {
      $(this).find(".layout").stop().fadeTo(0, 1);
    },
    function() {
      $(this).find(".layout").stop().fadeTo(0, 0);
    }
  );
});

function submitForm() {
  const formData = {
    code: document.getElementById("code").value,
    codeClient: document.getElementById("codeClient").value,
    code: document.getElementById("code").value,
    code: document.getElementById("code").value,
    code: document.getElementById("code").value,
    code: document.getElementById("code").value,
  };
  console.log("Form Data:", formData);
}
function addComplaints() {

  // Get form data
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const content = document.getElementById("content").value;

  // Check for empty fields
  if (!fullName || !email || !phone || !content) {
    console.error("Please fill in all fields");
    return;
  }

  const formData = {
    fullName,
    email,
    phone,
    content,
  };

  console.log("Form Data:", formData);

  const apiUrl = "http://elvatorapp-001-site1.btempurl.com/api/Complaints/create";

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "accept": "text/plain",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Data sent successfully:", data);
      // You can add further actions on success
    })
    .catch((error) => {
      console.error("Error sending data:", error.message);
      // Handle errors here (e.g., display an error message to the user)
    });
}

