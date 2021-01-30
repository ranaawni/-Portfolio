console.log("connect");

$(document).ready(function () {
  //hide some paragraph at project.html
  $("#infoUni").hide();
  $("#infoCompany").hide();
  $("#infoSchool").hide();
  $("#infoMade").hide();

  $(".clickpro").click(function () {
    window.open("project.html", "_blank");
  });

  //open new tab when click on image at project.html
  $("#imgcompany").click(function () {
    window.open("./mywork/Company Website/company.html", "_blank");
  });

  $("#imguni").click(function () {
    window.open("./mywork/University/university.html", "_blank");
  });

  //show text which I hide them in the beginning

  $("#madeHover").mouseover(function () {
    $("#infoMade").show();
  });

  $("#schoolHover").mouseover(function () {
    $("#infoSchool").show();
  });

  $("#companyHover").mouseover(function () {
    $("#infoCompany").show();
  });

  $("#universityHover").mouseover(function () {
    $("#infoUni").show();
  });

  //when I click in any place outside textarea or input field
  $("textarea").blur(function () {
    $("#contactME textarea").each(function () {
      $this = $(this);
      if (this.value != "") {
        $this.addClass("focused");
        $("textarea + label + span").css({
          opacity: 1,
        });
      } else {
        $this.removeClass("focused");
        $("textarea + label + span").css({
          opacity: 0,
        });
      }
    });
  });

  $("#contactME .field:first-child input").blur(function () {
    $("#contactME .field:first-child input").each(function () {
      $this = $(this);
      if (this.value != "") {
        $this.addClass("focused");
        $(".field:first-child input + label + span").css({
          opacity: 1,
        });
      } else {
        $this.removeClass("focused");
        $(".field:first-child input + label + span").css({
          opacity: 0,
        });
      }
    });
  });

  $("#contactME .field:nth-child(2) input").blur(function () {
    $("#contactME .field:nth-child(2) input").each(function () {
      $this = $(this);
      if (this.value != "") {
        $this.addClass("focused");
        $(".field:nth-child(2) input + label + span").css({
          opacity: 1,
        });
      } else {
        $this.removeClass("focused");
        $(".field:nth-child(2) input + label + span").css({
          opacity: 0,
        });
      }
    });
  });

  $("form").submit(function () {
    alert("Submitted");
  });
});
