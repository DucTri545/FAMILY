const activities = [
    "Đi xem phim",
    "Đi ăn",
    "Anh sẽ ôm em khi gặp nhau",
    "Đi chơi xa (lên lịch cụ thể)",
    "Đi cà phê",
    "Đi làm việc tốt, giúp đỡ",
    "Hôn em khi gặp",
    "Anh yêu em",
    "Mua một món mà em thích",
    "Chở em đi đến nơi mà em muốn",
    "Nguyện trao tấm thân này cho em :))",
    "Đi ăn occc",
    "Mua đồ ăn cho em",
    "Chở em đi làm nails or gội đầu (anh lo)",
    "Em là công chúa của anh",
];

const PASSWORD = "conchoti"; // Đặt mật khẩu ở đây

document.getElementById("randomActivityBtn").addEventListener("click", function() {
    const randomActivity = activities[Math.floor(Math.random() * activities.length)];
    const timestamp = new Date().toLocaleString();
    const entry = `${randomActivity} - ${timestamp}`;
    
    document.getElementById("activityResult").textContent = randomActivity;
    
    let history = JSON.parse(localStorage.getItem("activityHistory")) || [];
    history.push(entry);
    localStorage.setItem("activityHistory", JSON.stringify(history));
    updateActivityHistory();
});

function updateActivityHistory() {
    const history = JSON.parse(localStorage.getItem("activityHistory")) || [];
    const activityHistoryList = document.getElementById("activityHistory");
    activityHistoryList.innerHTML = "";
    history.forEach(activity => {
        const li = document.createElement("li");
        li.textContent = activity;
        activityHistoryList.appendChild(li);
    });
}
updateActivityHistory();

document.getElementById("saveWishChangeBtn").addEventListener("click", function() {
    const wish = document.getElementById("wishChange").value;
    if (wish) {
        const timestamp = new Date().toLocaleString();
        const entry = `${wish} - ${timestamp}`;
        localStorage.setItem("wishChange", entry);
        document.getElementById("savedWishChange").textContent = "Đã lưu: " + entry;
    }
});

function displaySavedWish() {
    const savedWish = localStorage.getItem("wishChange");
    if (savedWish) {
        document.getElementById("savedWishChange").textContent = "Đã lưu: " + savedWish;
    }
}
displaySavedWish();

document.getElementById("diaryEntry").addEventListener("input", function() {
    const diaryEntry = document.getElementById("diaryEntry").value;
    localStorage.setItem("diaryEntry", diaryEntry);
});

document.getElementById("saveDiaryBtn").addEventListener("click", function() {
    const diaryEntry = document.getElementById("diaryEntry").value;
    const timestamp = new Date().toLocaleString();
    const entry = `${diaryEntry} - ${timestamp}`;
    let diaryHistory = JSON.parse(localStorage.getItem("diaryHistory")) || [];
    diaryHistory.push(entry);
    localStorage.setItem("diaryHistory", JSON.stringify(diaryHistory));
    updateDiaryHistory();
});

function updateDiaryHistory() {
    const diaryHistory = JSON.parse(localStorage.getItem("diaryHistory")) || [];
    const diaryHistoryDiv = document.getElementById("diaryHistory");
    diaryHistoryDiv.innerHTML = "";
    diaryHistory.forEach(entry => {
        const div = document.createElement("div");
        div.textContent = entry;
        diaryHistoryDiv.appendChild(div);
    });
}
updateDiaryHistory();

document.getElementById("addFavoriteBtn").addEventListener("click", function() {
    const favoriteItem = document.getElementById("favoriteItem").value;
    if (favoriteItem) {
        let favoriteList = JSON.parse(localStorage.getItem("favoriteList")) || [];
        favoriteList.push(favoriteItem);
        localStorage.setItem("favoriteList", JSON.stringify(favoriteList));
        updateFavoriteList();
        document.getElementById("favoriteItem").value = "";
    }
});

function updateFavoriteList() {
    const favoriteList = JSON.parse(localStorage.getItem("favoriteList")) || [];
    const favoriteListElement = document.getElementById("favoriteList");
    favoriteListElement.innerHTML = "";
    favoriteList.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        favoriteListElement.appendChild(li); // Đã sửa phần này
    });
}
