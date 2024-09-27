const messagesList = document.getElementById('messagesList');
const randomIdeas = ["Đi xem phim", "Đi shopping", "Cắm trại", "Tham quan bảo tàng", "Nấu ăn cùng nhau"];

// Hàm để hiển thị tin nhắn từ localStorage
function loadMessages() {
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.forEach(message => {
        const messageElement = document.createElement('p');
        messageElement.textContent = message;
        messagesList.appendChild(messageElement);
    });
}

// Gọi hàm loadMessages khi trang được tải
window.onload = loadMessages;

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;
    if (message) {
        const messageElement = document.createElement('p');
        messageElement.textContent = message;
        messagesList.appendChild(messageElement);

        // Lưu tin nhắn vào localStorage
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        messages.push(message);
        localStorage.setItem('messages', JSON.stringify(messages));

        messageInput.value = '';
    }
}

function getRandomIdea() {
    const randomIdea = randomIdeas[Math.floor(Math.random() * randomIdeas.length)];
    document.getElementById('randomOutput').textContent = randomIdea;
}

function sendFeelings() {
    const feelingsInput = document.getElementById('feelingsInput');
    alert(`Bạn đã gửi: ${feelingsInput.value}`);
    feelingsInput.value = '';
}

function sendChanges() {
    const changesInput = document.getElementById('changesInput');
    alert(`Bạn đã gửi: ${changesInput.value}`);
    changesInput.value = '';
}

function sendDate() {
    const datesInput = document.getElementById('datesInput');
    alert(`Bạn đã gửi: ${datesInput.value}`);
    datesInput.value = '';
}

document.getElementById('imageInput').addEventListener('change', function() {
    const imagePreview = document.getElementById('imagePreview');
    imagePreview.innerHTML = '';
    const file = this.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = document.createElement('img');
        img.src = e.target.result;
        img.style.maxWidth = '200px';
        img.style.marginTop = '10px';
        imagePreview.appendChild(img);
    }
    if (file) {
        reader.readAsDataURL(file);
    }
});
