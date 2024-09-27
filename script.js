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

document.getElementById("randomActivityBtn").addEventListener("click", function() {
    const randomActivity = activities[Math.floor(Math.random() * activities.length)];
    document.getElementById("activityResult").textContent = randomActivity;
    
    let history = JSON.parse(localStorage.getItem("activityHistory")) || [];
    history.push(randomActivity);
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
    localStorage.setItem("wishChange", wish);
    document.getElementById("savedWishChange").textContent = "Đã lưu: " + wish;
});

document.getElementById("diaryEntry").addEventListener("input", function() {
    const diaryEntry = document.getElementById("diaryEntry").value;
    localStorage.setItem("diaryEntry", diaryEntry);
});

document.getElementById("saveDiaryBtn").addEventListener("click", function() {
    const diaryEntry = document.getElementById("diaryEntry").value;
    let diaryHistory = JSON.parse(localStorage.getItem("diaryHistory")) || [];
    diaryHistory.push(diaryEntry);
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
        favoriteListElement.appendChild(li);
    });
}
updateFavoriteList();
