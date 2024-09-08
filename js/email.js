const fullName = document.getElementById("fullName");
const companyName = document.getElementById("companyName");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const message = document.getElementById("message");

const url = window.location.href;
const urlWithoutHash = url.split("#")[0];
const hashPart = url.includes("#") ? url.split("#")[1] : null;
const path = urlWithoutHash.substring(urlWithoutHash.lastIndexOf("/") + 1);
const validVnUrl = [
  "",
  "index.html",
  "haiquan.html",
  "hangkhong.html",
  "noidia.html",
  "duongbien.html",
  "chuyenphatnhanh.html",
  "dvkhac.html",
  "kichthuoc.html",
  "incoterms-2000.html",
  "incoterms-2010.html",
  "incoterms-2022.html",
  "chuyendoi.html",
  "cangsanbay.html",
  "tudien.html",
  "tygia.html",
  "tuyendung.html",
];

const btnSend = document.getElementById("send");
btnSend.addEventListener("click", () => {
  if (
    fullName.value == "" ||
    companyName.value == "" ||
    email.value == "" ||
    phoneNumber.value == "" ||
    message.value == ""
  ) {
    if (validVnUrl.includes(path)) {
      toastr.error("Vui lòng nhập đầy đủ thông tin");
    } else {
      toastr.error("Please enter complete information");
    }
    
    return;
  }
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex =
    /^(?:\+84|0)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-9]|9[0-9])[0-9]{7}$/;

  if (!emailRegex.test(email.value)) {
    if (validVnUrl.includes(path)) {
      toastr.error("Địa chỉ email không hợp lệ");
    } else {
      toastr.error("Email address is invalid");
    }
    
    return;
  }

  if (!phoneRegex.test(phoneNumber.value)) {
    if (validVnUrl.includes(path)) {
      toastr.error("Số điện thoại không hợp lệ");
    } else {
      toastr.error("Phone number is invalid");
    }
    
    return;
  }

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    from: email.value,
    to: "manager@runstars.vn",
    subject: `${fullName.value} - ${phoneNumber.value} - ${email.value} - ${companyName.value}`,
    body: message.value,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://seal-app-ht5wx.ondigitalocean.app/send-mail", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      if (result === "Success") {
        if (validVnUrl.includes(path)) {
          toastr.success(
            "Gửi tin nhắn thành công, chúng tôi sẽ sớm phản hồi cho bạn"
          );
        } else {
          toastr.success(
            "Message was sent, we will contact you soon"
          );
        }
        
      } else {
        if (validVnUrl.includes(path)) {
          toastr.error("Gửi tin nhắn thất bại, xin vui lòng thử lại sau");
        } else {
          toastr.error("Message sent fail, please try again later");
        }
      }
    });
});

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

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
