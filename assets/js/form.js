const form = document.querySelector("#contact");
const names = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const subject = document.querySelector("#subject");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    from_name: names.value,
    email_id: email.value,
    message: message.value,
  };

  emailjs.send("service_pw22hfs", "template_jzojonk", data).then(
    function (response) {
      if (response) {
        return alert(
          "Message sent successfully, we will respond as soon as possible"
        );
      }
    },
    function (error) {
      if (error) {
        return alert("Message not sent, please try again later");
      }
    }
  );

  names.value = "";
  email.value = "";
  message.value = "";
  subject.value = "";
});
