const validVnUrl = ["index.html", "haiquan.html", "hangkhong.html", "noidia.html", "duongbien.html", "chuyenphatnhanh.html", "dvkhac.html", "kichthuoc.html", "incoterms-2000.html", "incoterms-2010.html", "incoterms-2022.html", "chuyendoi.html", "cangsanbay.html", "tudien.html", "tygia.html",  "tuyendung.html"];
const validEnUrl = ["index_en.html", "customs.html", "airline.html", "domestic.html", "sea.html", "fastdelivery.html", "other-service.html", "container-size.html", "incoterms-2000_en.html", "incoterms-2010_en.html", "incoterms-2022_en.html", "convert-unit.html", "list-port.html", "dictionary.html", "exchange.html",  "career.html"];
const url = window.location.href;
const path = url.substring(url.lastIndexOf("/") + 1);
let convertPath = null;

// Bắt sự kiện khi nút "Tiếng Việt" được nhấn
$(".lang.ivn").on("click", function () {
  convertPath = getCorrespondingUrl(path, validEnUrl, validVnUrl);
  window.location.href = `/${convertPath}`;
  localStorage.setItem("lang", "vn");
  localStorage.setItem("hasClicked", "true");
});

// Bắt sự kiện khi nút "English" được nhấn
$(".lang.ien").on("click", function () {
  convertPath = getCorrespondingUrl(path, validVnUrl, validEnUrl);
  window.location.href = `/${convertPath}`;
  localStorage.setItem("lang", "en");
  localStorage.setItem("hasClicked", "true");
});

if (localStorage.getItem("hasClicked") === "true") {
  localStorage.setItem("hasClicked", "false");
} else if (localStorage.getItem("hasClicked") === "false") {
  document.addEventListener("DOMContentLoaded", (event) => {
    // Lấy giá trị của tham số 'lang' từ localStorage
    const lang = localStorage.getItem("lang");

    // Lấy URL hiện tại và tách phần sau dấu '/'
    
    // Kiểm tra và xác định giá trị hợp lệ
    const validLangs = ["vn", "en"];
    const finalLang = validLangs.includes(lang) ? lang : "vn";

    // Xác định các URL hợp lệ cho từng ngôn ngữ
    
    
    

    if (finalLang === "vn") {
        convertPath = getCorrespondingUrl(path, validVnUrl, validEnUrl);
        
        if (validEnUrl.includes(convertPath)) {
          convertPath = getCorrespondingUrl(convertPath, validEnUrl, validVnUrl);
        }
        console.log("Converted path: " + convertPath);
        //window.location.href = `/${convertPath}`;
    } else if (finalLang === "en") {
        convertPath = getCorrespondingUrl(path, validEnUrl, validVnUrl);
        if (validVnUrl.includes(convertPath)) {
          convertPath = getCorrespondingUrl(convertPath, validVnUrl, validEnUrl);
        }
        console.log("Converted path: " + convertPath);
        //window.location.href = `/${convertPath}`;
    }
  });
}


// Hàm để lấy phần tử tương ứng từ mảng khác
function getCorrespondingUrl(path, sourceUrls, targetUrls) {
  const index = sourceUrls.indexOf(path);
  return index !== -1 ? targetUrls[index] : path;
}