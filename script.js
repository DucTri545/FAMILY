const activities = [
    "Đi xem phim",
    "Đi ăn",
    "Anh sẽ ôm em khi gặp nhau",
    "Đi chơi xa (lên lịch cụ thể)",
    "Đi uong nuoc",
    "Đi tu thien",
    "Hôn em khi gặp",
    "Anh yêu em",
    "Mua một món mà em thích",
    "Chở em đi đến nơi mà em muốn",
    "Muon gi anh chieu",
    "Đi ăn occc",
    "Om em",
    "Muon gi noi anh",
    "Em là công chúa của anh",
];

const PASSWORD = "anhyeuem"; // Mật khẩu để xác nhận

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
        favoriteListElement.appendChild(li);
    });
}

// Xóa lịch sử hoạt động với mật khẩu
document.getElementById("clearActivityHistoryBtn").addEventListener("click", function() {
    const password = prompt("Nhập mật khẩu để xóa lịch sử hoạt động:");
    if (password === PASSWORD) {
        localStorage.removeItem("activityHistory");
        updateActivityHistory();
        alert("Đã xóa lịch sử hoạt động.");
    } else {
        alert("Mật khẩu không đúng.");
    }
});

// Các nút xóa khác
document.getElementById("clearWishChangeBtn").addEventListener("click", function() {
    const password = prompt("Nhập mật khẩu để xóa điều mong muốn:");
    if (password === PASSWORD) {
        localStorage.removeItem("wishChange");
        document.getElementById("savedWishChange").textContent = "";
        alert("Đã xóa điều mong muốn.");
    } else {
        alert("Mật khẩu không đúng.");
    }
});

document.getElementById("clearDiaryHistoryBtn").addEventListener("click", function() {
    const password = prompt("Nhập mật khẩu để xóa nhật ký:");
    if (password === PASSWORD) {
        localStorage.removeItem("diaryHistory");
        updateDiaryHistory();
        alert("Đã xóa nhật ký.");
    } else {
        alert("Mật khẩu không đúng.");
    }
});

document.getElementById("clearFavoriteListBtn").addEventListener("click", function() {
    const password = prompt("Nhập mật khẩu để xóa danh sách yêu thích:");
    if (password === PASSWORD) {
        localStorage.removeItem("favoriteList");
        updateFavoriteList();
        alert("Đã xóa danh sách yêu thích.");
    } else {
        alert("Mật khẩu không đúng.");
    }
});
