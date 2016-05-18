$.validator.setDefaults({
    // ignore: [],
    // errorClass: 'invalid',
    // errorPlacement: function (error, element) {
    //   var select = $("select").get(0);
    //   if(select === element.get(0)){
    //     $(element)
    //     .closest("form")
    //     .find("p[class='selectErrorContainer']")
    //     .text(error.text());
    //   } else {
    //     $(element)
    //     .closest("form")
    //     .find("label[for='" + element.attr("id") + "']")
    //     .attr('data-error', error.text());
    //   }
    //  },
    rules:{
      username:{
        required: true,
        minlength: 5
      },
      password:{
        required: true,
        minlength: 5
      },
    },
    messages:{
      username:{
        required: "You must enter a username.",
        minlength: "Username must be at least {0} characters."
      },
      password:{
        required: "You must enter a password.",
        minlength: "Password must be at least {0} characters."
      },
    }
  });
