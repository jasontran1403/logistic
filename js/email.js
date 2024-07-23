const fullName = document.getElementById("fullName");
const companyName = document.getElementById("companyName");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const message = document.getElementById("message");

const btnSend = document.getElementById("send");
btnSend.addEventListener("click", () => {
  if (
    fullName.value == "" ||
    companyName.value == "" ||
    email.value == "" ||
    phoneNumber.value == "" ||
    message.value == ""
  ) {
    toastr.error("Vui lòng nhập đầy đủ thông tin");
    return;
  }
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex =
    /^(?:\+84|0)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-9]|9[0-9])[0-9]{7}$/;

  if (!emailRegex.test(email.value)) {
    toastr.error("Địa chỉ email không hợp lệ");
    return;
  }

  if (!phoneRegex.test(phoneNumber.value)) {
    toastr.error("Số điện thoại không hợp lệ");
    return;
  }

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "hainguyentran14@gmail.com",
    Password : "EDB2D6424958DE0E52AE0BEB76EF1AD51427",
    To : 'hainguyentran14@gmail.com',
    From : "hainguyentran14@gmail.com",
    Subject : `${fullName.value} - ${phoneNumber.value} - ${email.value}`,
    Body : `${message.value}`,
}).then(
  message => {
    if (message === "OK") {
        toastr.success("Gửi tin nhắn thành công, chúng tôi sẽ sớm phản hồi cho bạn");
    } else {
        toastr.error("Gửi tin nhắn thất bại, xin vui lòng thử lại sau");
    }
  }
);
});

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}