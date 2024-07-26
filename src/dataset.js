
import FoodIcon from "./img/diet.png";
import PiggyBank from "./img/piggy-bank.png";

function generateRandomData(startMonth, endMonth, startDay, endDay) {
    const data = [];
    const startDate = new Date(2024, startMonth - 1, startDay); // 月份从0开始
    const endDate = new Date(2024, endMonth - 1, endDay);

    let currentDate = startDate;
    let amount = 0;

    while (currentDate <= endDate) {
        amount = Math.floor(Math.random() * 500); // 生成0到500的随机金额
        data.push({
            date: new Date(currentDate),
            category: {
                icon: FoodIcon,
                code: "Food"
            },
            account: {
                icon: PiggyBank,
                code: "Savings"
            },
            amount: amount,
            unit: "Yuan",
            isExpense: true
        });

        currentDate.setDate(currentDate.getDate() + 1); // 增加一天
    }

    return data;
}

// 生成4月1日到6月30日的数据
const generatedData = generateRandomData(4, 6, 1, 30);


export default generatedData