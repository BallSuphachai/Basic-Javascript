function calculateSavings() {
    // รับค่า input จาก HTML
    let money_perMonth1 = parseFloat(document.getElementById("money_perMonth").value);
    let inflation_rate1 = parseFloat(document.getElementById("inflation_rate").value);
    let years1 = parseInt(document.getElementById("years").value);

    // ฟังก์ชั่นสำหรับคำนวณและแสดงผล
    function savePerMonth(money_perMonth, inflation_rate, years) {
        let total = 0;
        let currentMoneyPerMonth = money_perMonth;
        let resultsDiv = document.getElementById("results");
        resultsDiv.innerHTML = ""; // ล้างผลลัพธ์ก่อนหน้า

        for (let year = 1; year <= years; year++) {
            let yearInfo = `<b><span style="color: #363D8E">ปีที่ ${year} </span>ต้องออมเดือนละ <span style="color: #45a049">${currentMoneyPerMonth.toFixed(2)} บาท</span></b><br>`;
            resultsDiv.innerHTML += yearInfo;

            for (let month = 1; month <= 12; month++) {
                total += currentMoneyPerMonth;
                let monthInfo = `เดือนที่ ${(year - 1) * 12 + month}: ยอดออมรวม ${total.toFixed(2)} บาท<br>`;
                resultsDiv.innerHTML += monthInfo;
            }

            currentMoneyPerMonth += (currentMoneyPerMonth * inflation_rate) / 100; // เพิ่มอัตราการเติบโต
        }
        return total;
    }

    function sumMoney(money_perMonth, inflation_rate, years) {
        let total = savePerMonth(money_perMonth, inflation_rate, years);
        let resultsDiv = document.getElementById("results");
        resultsDiv.innerHTML += `<br><h4>ยอดรวมเงินออมทั้งหมดใน ${years} ปี คือ <span style="color: #F39C12"> ${total.toFixed(2)} </span>บาท</h4>`;
    }

    // เรียกใช้ฟังก์ชั่นคำนวณ
    sumMoney(money_perMonth1, inflation_rate1, years1);
}
