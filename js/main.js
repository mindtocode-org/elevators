// nav bar
$("body").css("paddingTop", $(".navber").innerHeight() + 100);
$(".navbar .nav-jquery a").click(function (e) {
  e.preventDefault();
  $("html , body").animate({
    scrollTop: $("#" + $(this).data("scroll")).offset().top,
  });
});
$(".navbar .nav-jquery a").click(function () {
  $(".navbar a").removeClass("active");
  $(this).addClass("active");
});

$(window).scroll(function () {
  $(".block").each(function () {
    if ($(window).scrollTop() > $(this).offset().top - 100) {
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
$(document).ready(function () {
  $("#why .position-relative").hover(
    function () {
      $(this).find(".layout").stop().fadeTo(0, 1);
    },
    function () {
      $(this).find(".layout").stop().fadeTo(0, 0);
    }
  );
});

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

  const apiUrl =
    "http://elvatorapp-001-site1.btempurl.com/api/Complaints/create";

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "text/plain",
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
      document.getElementById("fullName").value = "";
      document.getElementById("email").value = "";
      document.getElementById("content").value = "";
      document.getElementById("phone").value = "";
      console.log("Data sent successfully:", data);
      Swal.fire({
        icon: "success",
        title: "تم الارسال",
        text: `شكرا لك علي رسالتك يا ${formData.fullName}`,
      });
      // You can add further actions on success
    })
    .catch((error) => {
      console.error("Error sending data:", error.message);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to send email. Please try again.",
      });
      // Handle errors here (e.g., display an error message to the user)
    });
}
function submitOrder(event) {
  event.preventDefault();
  const formData = {
    code: document.getElementById("code").value,
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    idNumber: document.getElementById("idNumber").value,
    city: document.getElementById("city").value,
    address: document.getElementById("address").value,
    facilityType: document.getElementById("facilityType").value,
    elevatorType: document.getElementById("elevatorType").value,
    machineType: document.getElementById("machineType").value,
    doorType: document.getElementById("doorType").value,
    cabinColour: document.getElementById("cabinColour").value,
    doorOpening: document.getElementById("doorOpening").value,
    numberOfPassengers: document.getElementById("numberOfPassengers").value,
    technicalNotes: document.getElementById("technicalNotes").value,
    clientRequests: document.getElementById("clientRequests").value,
    numberOfStops: document.getElementById("numberOfStops").value,
    emergencyBattery: document.getElementById("emergencyBattery").value,
    elevatorSpeed: document.getElementById("elevatorSpeed").value,
    clientNotes: document.getElementById("clientNotes").value,
    price: document.getElementById("priceID").value,
    facilityNotes: document.getElementById("facilityNotes").value,
  };
  const apiUrl =
    "http://elvatorapp-001-site1.btempurl.com/api/IntegrationOrders/create";

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "text/plain",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(() => {
      Swal.fire({
        icon: "success",
        title: "تم الارسال",
        text: `شكرا لك علي رسالتك يا ${formData.name}`,
      });

      (document.getElementById("code").value = ""),
        (document.getElementById("name").value = ""),
        (document.getElementById("phone").value = ""),
        (document.getElementById("idNumber").value = ""),
        (document.getElementById("city").value = ""),
        (document.getElementById("address").value = ""),
        (document.getElementById("priceID").value = ""),
        (document.getElementById("numberOfPassengers").value = ""),
        (document.getElementById("numberOfStops").value = "");
        (document.getElementById("facilityNotes").value = "");
        (document.getElementById("clientRequests").value = "");
        (document.getElementById("technicalNotes").value = "");
        (document.getElementById("clientNotes").value = "");
    })
    .catch((error) => {
      console.error("Error sending data:", error);
      Swal.fire({
        icon: "error",
        title: `${error}`,
        text: "Failed to send email. Please try again.",
      });
      // Handle errors here (e.g., display an error message to the user)
    });
}
