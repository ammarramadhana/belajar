const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function tambahData() {
    const inputNim = document.getElementById("nama");
    const inputNama = document.getElementById("nim");
    const inputJurusan = document.getElementById("jurusan");
    
    const nim = inputNama.value;
    const nama = inputNim.value;
    const jurusan = inputJurusan.value;
    
    const tabelData = document.getElementById("data-table").getElementsByTagName('thead')[0];
    const barisBaru = document.createElement("tr");
    
    const nilai = [nama, nim, jurusan];
    
    for (let i = 0; i < nilai.length; i++) {
        const sel = document.createElement("td");
        sel.textContent = nilai[i];
        barisBaru.appendChild(sel);
    }
    
    tabelData.appendChild(barisBaru);
    
    // Mengosongkan kolom input setelah ditambahkan ke dalam tabel
    inputNama.value = "";
    inputNim.value = "";
    inputJurusan.value = "";
}