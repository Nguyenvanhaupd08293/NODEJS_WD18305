const express = require('express');
const app = express();
const port = 3000;
let data = `[{
    "city": "Hà Nội",
    "plate_no": "29,30,31,32,33,40"
},
{
    "city": "Thái Nguyên",
    "plate_no": "20"
},
{
    "city": "Phú Thọ",
    "plate_no": "19"
},
{
    "city": "Bắc Giang",
    "plate_no": "98"
},
{
    "city": "Hòa bình",
    "plate_no": "28"
},
{
    "city": "Bắc Ninh",
    "plate_no": "99"
},
{
    "city": "Hà Nam",
    "plate_no": "90"
},
{
    "city": "Hải Dương",
    "plate_no": "34"
},
{
    "city": "Hưng Yên",
    "plate_no": "89"
},
{
    "city": "Vĩnh Phúc",
    "plate_no": "88"
},
{
    "city": "Quảng Ninh",
    "plate_no": "14"
},
{
    "city": "Hải Phòng",
    "plate_no": "15, 16"
},
{
    "city": "Nam Định",
    "plate_no": "18"
},
{
    "city": "Ninh Bình",
    "plate_no": "35"
},
{
    "city": "Thái Bình",
    "plate_no": "17"
},
{
    "city": "Hà Giang",
    "plate_no": "23"
},
{
    "city": "Cao Bằng",
    "plate_no": "11"
},
{
    "city": "Lào Cai",
    "plate_no": "24"
},
{
    "city": "Bắc Cạn",
    "plate_no": "97"
},
{
    "city": "Lạng Sơn",
    "plate_no": "12"
},
{
    "city": "Tuyên Quang",
    "plate_no": "22"
},
{
    "city": "Yên Bái",
    "plate_no": "21"
},
{
    "city": "Điện Biên",
    "plate_no": "27"
},
{
    "city": "Lai Châu",
    "plate_no": "25"
},
{
    "city": "Sơn La",
    "plate_no": "26"
},
{
    "city": "Thanh Hóa",
    "plate_no": "36"
},
{
    "city": "Nghệ An",
    "plate_no": "37"
},
{
    "city": "Hà Tĩnh",
    "plate_no": "38"
},
{
    "city": "Quảng Bình",
    "plate_no": "73"
},
{
    "city": "Quảng Trị",
    "plate_no": "74"
},
{
    "city": "Thừa Thiên Huế",
    "plate_no": "75"
},
{
    "city": "Đà Nẵng",
    "plate_no": "43"
},
{
    "city": "Quảng Nam",
    "plate_no": "92"
},
{
    "city": "Quảng Ngãi",
    "plate_no": "76"
},
{
    "city": "Bình Định",
    "plate_no": "77"
},
{
    "city": "Phú Yên",
    "plate_no": "78"
},
{
    "city": "Khánh Hòa",
    "plate_no": "79"
},
{
    "city": "Ninh Thuận",
    "plate_no": "85"
},
{
    "city": "Bình Thuận",
    "plate_no": "86"
},
{
    "city": "Kon Tum",
    "plate_no": "82"
},
{
    "city": "Gia Lai",
    "plate_no": "81"
},
{
    "city": "Dak Lak",
    "plate_no": "47"
},
{
    "city": "Đắc Nông",
    "plate_no": "48"
},
{
    "city": "Lâm Đồng",
    "plate_no": "49"
},
{
    "city": "Hồ Chí Minh",
    "plate_no": "41,50,51,52,53,54,55,56,57,58,59"
},
{
    "city": "Bình Phước",
    "plate_no": "93"
},
{
    "city": "Bình Dương",
    "plate_no": "61"
},
{
    "city": "Đồng Nai",
    "plate_no": "38,60"
},
{
    "city": "Tây Ninh",
    "plate_no": "70"
},
{
    "city": "Bà Rịa Vũng Tàu",
    "plate_no": "72"
},
{
    "city": "Cần Thơ",
    "plate_no": "65"
},
{
    "city": "Long An",
    "plate_no": "62"
},
{
    "city": "Đồng Tháp",
    "plate_no": "66"
},
{
    "city": "Tiền Giang",
    "plate_no": "63"
},
{
    "city": "An Giang",
    "plate_no": "67"
},
{
    "city": "Bến Tre",
    "plate_no": "71"
},
{
    "city": "Vĩnh Long",
    "plate_no": "64"
},
{
    "city": "Hậu Giang",
    "plate_no": "95"
},
{
    "city": "Kiên Giang",
    "plate_no": "68"
},
{
    "city": "Sóc Trăng",
    "plate_no": "83"
},
{
    "city": "Bạc Liêu",
    "plate_no": "94"
},
{
    "city": "Cà Mau",
    "plate_no": "69"
}
]`; // Dữ liệu biển số xe và tỉnh thành

// Parse dữ liệu JSON
const jsonData = JSON.parse(data);

// Tạo template HTML
let template = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Select City</title>
</head>
<style>
body {
    text-align: center;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    max-width: 600px;
    width: 80%;
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}

h2 {
    color: red;
}

select {
    color: #fff;
    width: 30%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #3e17d3;
}

input[type="submit"] {
    width: 11%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #e4e9ef;
    color: #3872e0;
    cursor: pointer;
    transition: background-color 0.3s;
}

input[type="submit"]:hover {
    background-color: red;
    color: #fff;
}

#plateNumber {
    margin-top: 20px;
    font-weight: bold;
}

#citySelect {
    color: #ffffff;
    padding: 8px 16px;
    border: 1px solid transparent;
    border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
    cursor: pointer;
    user-select: none;
}

#selectForm {
    display: grid;
}

#selectForm {
    display: flex;
    flex-direction: column;
    /* Định hướng các phần tử con thành cột */
    align-items: center;
    /* Căn giữa theo chiều ngang */
}

#citySelect {
    width: 200px;
    /* Độ rộng của dropdown select */
    margin-bottom: 10px;
    /* Khoảng cách giữa dropdown select và nút Submit */
}
</style>
<body>
    <h2 style="color:red">Select City</h2>
    <form id="selectForm">
        <select id="citySelect" name="city">`;

// Tạo các option cho dropdown select
jsonData.forEach(item => {
    template += `<option value="${item.city}">${item.city}</option>`;
});

// Kết thúc template HTML
template += `</select>
            <input type="submit" value="Submit">
        </form>
        <p id="plateNumber">Biển số là:</p>
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        const citySelect = document.getElementById('citySelect');
    
        // Lắng nghe sự kiện khi giá trị trong dropdown select thay đổi
        citySelect.addEventListener('change', function(event) {
            const selectedCity = event.target.value;
    
            // Cập nhật id trong URL
            window.history.replaceState({}, '', '?city=' + encodeURIComponent(selectedCity));
        });
    
        // Lắng nghe sự kiện khi form được submit
        document.querySelector('form').addEventListener('submit', function(event) {
            event.preventDefault(); // Ngăn chặn hành động mặc định của form
    
            // Lấy giá trị của tỉnh thành đã chọn
            const selectedCity = citySelect.value;
    
            // Gửi yêu cầu GET đến server để lấy thông tin về biển số xe
            fetch('/getPlateNumber?city=' + selectedCity)
                .then(response => response.json())
                .then(data => {
                    // Hiển thị thông tin biển số xe vào phần tử p có id "plateNumber"
                    const plateNumberElement = document.getElementById('plateNumber');
                    plateNumberElement.textContent = 'Biển số là: ' + data.plateNumbers.join(', ');
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        });
    });
    
    </script>
</body>
</html>`;

// Tạo endpoint API để xử lý yêu cầu từ client
app.get("/", (req, res) => {
    // Gửi template HTML đến trình duyệt
    res.send(template);
});

// Tạo endpoint API để xử lý yêu cầu từ client
app.get("/getPlateNumber", (req, res) => {
    // Lấy giá trị của tỉnh thành từ yêu cầu của client
    const selectedCity = req.query.city;

    // Tìm thông tin về biển số xe tương ứng với tỉnh thành đã chọn
    const selectedData = jsonData.find(item => item.city === selectedCity);

    if (selectedData) {
        // Trả về thông tin biển số xe cho client
        res.json({ plateNumbers: selectedData.plate_no.split(',') });
    } else {
        // Nếu không tìm thấy thông tin, trả về mã lỗi 404
        res.status(404).json({ error: 'Không tìm thấy thông tin cho tỉnh thành đã chọn.' });
    }
});

// Khởi động server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});