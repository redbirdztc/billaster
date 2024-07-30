
import account from "./account";
import categories from "./category";

function generateRandomData(startMonth, endMonth, startDay, endDay) {
    const data = [];
    const startDate = new Date(2024, startMonth - 1, startDay); 
    const endDate = new Date(2024, endMonth - 1, endDay);

    let currentDate = startDate;

    while (currentDate <= endDate) {
        const times = Math.floor(Math.random() * 10); 
        for (let i = 0; i < times; i++) {
            data.push({
                date: new Date(currentDate),
                category: categories[Math.floor(Math.random() * categories.length)],
                account: account[Math.floor(Math.random() * account.length)],
                amount: Math.floor(Math.random() * 50000) / 100,
                unit: "Yuan",
                isExpense: true
            });
        }

        currentDate.setDate(currentDate.getDate() + 1); 
    }

    return data;
}

const generatedData = generateRandomData(1, 12, 1, 31);


export default generatedData