document.addEventListener("DOMContentLoaded", () => {
    
    // TAMAMEN SIRALI, KATEGORİLİ VE ÇALIŞAN 50 DERSLİK DEV MÜFREDAT
    const courseData = [
        // ---------------- HTML TEMELLERİ ----------------
        { id: 1, category: "1. HTML Temelleri", title: "1. HTML'e Giriş", video: "pQN-pnXPaVg" },
        { id: 2, category: "1. HTML Temelleri", title: "2. Temel Etiketler", video: "yfoY53QXEnI" },
        { id: 3, category: "1. HTML Temelleri", title: "3. Formlar ve Inputlar", video: "W6NZfCO5SIk" },
        { id: 4, category: "1. HTML Temelleri", title: "4. Tablolar", video: "VQraviuvbQI" },
        { id: 5, category: "1. HTML Temelleri", title: "5. HTML İleri Seviye", video: "k0vA9_HlAvo" },
        { id: 6, category: "1. HTML Temelleri", title: "6. Sürükle Bırak Yapısı", video: "U66P2Is0G1A" },
        
        // ---------------- CSS VE TASARIM ----------------
        { id: 7, category: "2. CSS ve Tasarım", title: "7. CSS Flexbox Mantığı", video: "Z-WUXXk0LCY" },
        { id: 8, category: "2. CSS ve Tasarım", title: "8. CSS Grid Düzeni", video: "mCIOcFGJh-Y" },
        { id: 9, category: "2. CSS ve Tasarım", title: "9. Flexbox ve Grid Karşılaştırması", video: "PO3uwx6ECQ0" },
        { id: 10, category: "2. CSS ve Tasarım", title: "10. Margin ve Boşluklar", video: "YNkYvVCoD5Q" },
        { id: 11, category: "2. CSS ve Tasarım", title: "11. Dikey Menü Yapımı", video: "HzX-Qnd6kgI" },
        { id: 12, category: "2. CSS ve Tasarım", title: "12. Web Sayfasına İkon Ekleme", video: "tzAcbtgA4C0" },
        
        // ---------------- RESPONSIVE TASARIM ----------------
        { id: 13, category: "3. Responsive (Mobil Uyumlu) Tasarım", title: "13. Responsive Tasarım Temelleri", video: "b98L7-be0Zw" },
        { id: 14, category: "3. Responsive (Mobil Uyumlu) Tasarım", title: "14. Media Queries Kullanımı", video: "rueTdUCAbLk" },
        { id: 15, category: "3. Responsive (Mobil Uyumlu) Tasarım", title: "15. Ekran Boyutuna Göre Tasarım", video: "EXzLPl2JgwM" },
        { id: 16, category: "3. Responsive (Mobil Uyumlu) Tasarım", title: "16. Mobil Uyumlu Site Yapımı", video: "PRYDy6uTLaw" },
        
        // ---------------- JAVASCRIPT TEMELLERİ ----------------
        { id: 17, category: "4. JavaScript Temelleri", title: "17. Javascript Değişkenler", video: "CJsm5CUNJMw" },
        { id: 18, category: "4. JavaScript Temelleri", title: "18. JS Döngüler ve Karar Yapıları", video: "mNn-d0sFJ7w" },
        { id: 19, category: "4. JavaScript Temelleri", title: "19. JS Fonksiyonlar", video: "Z7L1M9iHMi4" },
        { id: 20, category: "4. JavaScript Temelleri", title: "20. JS Event Listeners (Olaylar)", video: "VcdxxgisaDo" },
        { id: 21, category: "4. JavaScript Temelleri", title: "21. Javascript DOM Nedir?", video: "FaMO0OUanv0" },
        { id: 22, category: "4. JavaScript Temelleri", title: "22. Dropdown Menü Yapımı", video: "NE9kqS-sP7Y" },
        
        // ---------------- İLERİ SEVİYE JS VE API ----------------
        { id: 23, category: "5. İleri Seviye JavaScript ve API", title: "23. Asenkron Yapılar", video: "2ZCnLQ49rR8" },
        { id: 24, category: "5. İleri Seviye JavaScript ve API", title: "24. Fetch API Kullanımı", video: "OdxAKazCQrk" },
        { id: 25, category: "5. İleri Seviye JavaScript ve API", title: "25. API ile Veri Çekme", video: "9DsEfk_dQo8" },
        { id: 26, category: "5. İleri Seviye JavaScript ve API", title: "26. Hızlı Fetch API Pratiği", video: "cuEtnrL9-H0" },
        { id: 27, category: "5. İleri Seviye JavaScript ve API", title: "27. Data ve API Çalışmaları", video: "tc8DU14qX6I" },
        { id: 28, category: "5. İleri Seviye JavaScript ve API", title: "28. JS ile API Projesi", video: "37vxWr0WgQk" },
        
        // ---------------- REACT.JS EĞİTİMLERİ ----------------
        { id: 29, category: "6. React.js Eğitimleri", title: "29. React.js Nedir?", video: "i38ql77cvp0" },
        { id: 30, category: "6. React.js Eğitimleri", title: "30. 10 Dakikada React JS", video: "s2skans2dP4" },
        { id: 31, category: "6. React.js Eğitimleri", title: "31. React Componentler", video: "wSDZyaLlCeo" },
        { id: 32, category: "6. React.js Eğitimleri", title: "32. React State Yapısı", video: "_gn7G0Cgszk" },
        { id: 33, category: "6. React.js Eğitimleri", title: "33. React Geliştirici Seviyeleri", video: "CXh55uorQs0" },
        
        // ---------------- GİT VE GİTHUB ----------------
        { id: 34, category: "7. Git ve Versiyon Kontrolü", title: "34. Git ve GitHub Kursu", video: "mAFoROnOfHs" },
        { id: 35, category: "7. Git ve Versiyon Kontrolü", title: "35. Yeni Başlayanlar İçin Git", video: "tRZGeaHPoaw" },
        { id: 36, category: "7. Git ve Versiyon Kontrolü", title: "36. Git Arka Planda Nasıl Çalışır?", video: "e9lnsKot_SQ" },
        { id: 37, category: "7. Git ve Versiyon Kontrolü", title: "37. GitHub Sürüm Kontrolü", video: "O3KtLRmp5q4" },
        { id: 38, category: "7. Git ve Versiyon Kontrolü", title: "38. Git Branch Mantığı", video: "2GYBOwsBgVY" },
        { id: 39, category: "7. Git ve Versiyon Kontrolü", title: "39. Git Push ve Pull İşlemleri", video: "-kYHuFtCX7A" },
        { id: 40, category: "7. Git ve Versiyon Kontrolü", title: "40. Git Çatışmaları Çözme", video: "hHil1wRZ1cI" },
        
        // ---------------- YAYINLAMA VE BONUS ----------------
        { id: 41, category: "8. Web Sitesi Yayınlama ve Hosting", title: "41. Frontend ve Backend Nedir?", video: "uHEr6d6EftA" },
        { id: 42, category: "8. Web Sitesi Yayınlama ve Hosting", title: "42. Web Sitesi Kurulumu", video: "ZCZgTuAZxLg" },
        { id: 43, category: "8. Web Sitesi Yayınlama ve Hosting", title: "43. Site Yayınlama Rehberi", video: "3QZ1YycNHMQ" },
        { id: 44, category: "8. Web Sitesi Yayınlama ve Hosting", title: "44. Ücretsiz Host ve Domain", video: "sW3JQ34mSsE" },
        { id: 45, category: "8. Web Sitesi Yayınlama ve Hosting", title: "45. Hosting Paneli Kullanımı", video: "GU70F7gdUAQ" },
        { id: 46, category: "8. Web Sitesi Yayınlama ve Hosting", title: "46. Cpanel ve Veritabanı", video: "h0LSX08Twpo" },
        { id: 47, category: "8. Web Sitesi Yayınlama ve Hosting", title: "47. 30 Dakikada Grid Tekrarı", video: "QD_1Lm1cCMw" },
        { id: 48, category: "8. Web Sitesi Yayınlama ve Hosting", title: "48. Grid İle Tasarım Tekrarı", video: "nYWFWhUKj2I" },
        { id: 49, category: "8. Web Sitesi Yayınlama ve Hosting", title: "49. Responsive Web Design", video: "TBptf1bNLHw" },
        { id: 50, category: "8. Web Sitesi Yayınlama ve Hosting", title: "50. 1 Saatte HTML İle Genel Tekrar", video: "r9_7EQLINzw" }
    ];

    const authOverlay = document.getElementById("auth-overlay");
    const mainContent = document.getElementById("main-content");
    const authActionBtn = document.getElementById("auth-action-btn");
    const authToggleLink = document.getElementById("auth-toggle-link");
    const authTitle = document.getElementById("auth-title");
    const logoutBtn = document.getElementById("logout-btn");
    const progressBar = document.getElementById("progress-bar");
    const progressText = document.getElementById("progress-text");
    const completeBtn = document.getElementById("complete-lesson-btn");
    const xpText = document.getElementById("xp-text");
    const rankText = document.getElementById("rank-text");
    const userDisplayName = document.getElementById("user-display-name");
    const commentNameInput = document.getElementById("comment-name");
    const courseListDiv = document.getElementById("course-list");
    const searchInput = document.getElementById('search-input');
    const authPasswordInput = document.getElementById("auth-password"); // Şifre inputu yakalandı

    let isLoginMode = true;
    let activeCourseId = "1";

    function updateRankText(xp) {
        let rank = "Acemi";
        if (xp >= 1000) rank = "Çırak";
        if (xp >= 2500) rank = "Kalfa";
        if (xp >= 5000) rank = "Usta";
        if (xp >= 10000) rank = "Radyant Webci";
        if (rankText) rankText.innerText = rank;
    }

    function checkLogin() {
        const loggedUser = localStorage.getItem("currentUser");
        if (loggedUser) {
            authOverlay.style.display = "none";
            mainContent.style.display = "grid";
            userDisplayName.innerText = loggedUser;
            commentNameInput.value = loggedUser;
            renderCourses(); 
            loadAllData();
            
            const firstCourse = courseData[0];
            document.getElementById('video-title').innerText = "▶ " + firstCourse.title + " Oynatılıyor...";
            document.getElementById('youtube-player').src = "https://www.youtube.com/embed/" + firstCourse.video;
        } else {
            authOverlay.style.display = "flex";
            mainContent.style.display = "none";
        }
    }

    // ARTIK DERSLERİ ÇİZERKEN ARAYA KATEGORİ BAŞLIKLARI KOYUYOR
    function renderCourses() {
        const user = localStorage.getItem("currentUser");
        let html = "";
        let currentCategory = "";
        
        courseData.forEach(c => {
            // Eğer yeni bir kategoriye geçtiysek, başlığı bas
            if (c.category !== currentCategory) {
                html += `<div class="category-title">${c.category}</div>`;
                currentCategory = c.category;
            }
            
            const perc = localStorage.getItem(user + "_prog_" + c.id) || 0;
            const isActive = (c.id == activeCourseId) ? "active" : "";
            html += `
                <div class="course-card ${isActive}" data-id="${c.id}" data-video="${c.video}">
                    ${c.title} <span class="card-perc">%${perc}</span>
                </div>
            `;
        });
        courseListDiv.innerHTML = html;
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const arananKelime = e.target.value.toLowerCase(); 
            
            // Arama yaparken kategori başlıklarını gizle (karışıklık olmasın diye)
            document.querySelectorAll('.category-title').forEach(cat => {
                cat.style.display = arananKelime ? 'none' : 'block';
            });
            
            document.querySelectorAll('.course-card').forEach(card => {
                const dersAdi = card.innerText.toLowerCase();
                card.style.display = dersAdi.includes(arananKelime) ? 'flex' : 'none';
            });
        });
    }

    courseListDiv.addEventListener("click", (e) => {
        const card = e.target.closest(".course-card");
        if (!card) return;

        document.querySelectorAll('.course-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        
        activeCourseId = card.getAttribute("data-id");
        const titleText = card.innerText.split('%')[0].trim(); 
        
        document.getElementById('video-title').innerText = "▶ " + titleText + " Oynatılıyor...";
        // Autoplay eklendi ki derse tıklayınca direkt başlasın
        document.getElementById('youtube-player').src = "https://www.youtube.com/embed/" + card.getAttribute('data-video') + "?autoplay=1";
        
        const user = localStorage.getItem("currentUser");
        const currentCourseProg = localStorage.getItem(user + "_prog_" + activeCourseId) || 0;
        updateMainProgress(currentCourseProg);
    });

    authToggleLink.addEventListener("click", () => {
        isLoginMode = !isLoginMode;
        authTitle.innerText = isLoginMode ? "Giriş Yap" : "Kayıt Ol";
        authActionBtn.innerText = isLoginMode ? "Giriş Yap" : "Kayıt Ol";
        authToggleLink.innerText = isLoginMode ? "Kayıt Ol" : "Giriş Yap";
    });

    // Enter tuşu ile giriş/kayıt yapma desteği eklendi
    if(authPasswordInput) {
        authPasswordInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                authActionBtn.click();
            }
        });
    }

    authActionBtn.addEventListener("click", () => {
        const user = document.getElementById("auth-username").value.trim();
        const pass = document.getElementById("auth-password").value.trim();
        if (!user || !pass) return alert("Lütfen kullanıcı adı ve şifre alanlarını doldurun!");

        if (isLoginMode) {
            if (localStorage.getItem("user_" + user) === pass) {
                localStorage.setItem("currentUser", user);
                checkLogin();
            } else { alert("Hatalı kullanıcı adı veya şifre!"); }
        } else {
            localStorage.setItem("user_" + user, pass);
            alert("Kayıt başarılı! Şimdi giriş yapabilirsin.");
            isLoginMode = true;
            authToggleLink.click();
        }
    });

    logoutBtn.addEventListener("click", () => { localStorage.removeItem("currentUser"); location.reload(); });

    function loadAllData() {
        const user = localStorage.getItem("currentUser");
        const xp = parseInt(localStorage.getItem(user + "_xp")) || 0;
        xpText.innerText = xp;
        updateRankText(xp); 

        const currentCourseProg = localStorage.getItem(user + "_prog_" + activeCourseId) || 0;
        updateMainProgress(currentCourseProg);
        renderComments();
    }

    function updateMainProgress(val) {
        progressBar.style.width = val + "%";
        progressText.innerText = val + "%";
    }

    completeBtn.addEventListener("click", () => {
        const user = localStorage.getItem("currentUser");
        let prog = parseInt(localStorage.getItem(user + "_prog_" + activeCourseId)) || 0;
        
        if (prog < 100) {
            prog += 25;
            if (prog > 100) prog = 100;
            
            localStorage.setItem(user + "_prog_" + activeCourseId, prog);
            updateMainProgress(prog);
            
            let xp = parseInt(localStorage.getItem(user + "_xp")) || 0;
            xp += 100; // Her %25'lik ilerlemede 100 XP verir
            localStorage.setItem(user + "_xp", xp);
            xpText.innerText = xp;
            updateRankText(xp); 

            renderCourses(); 
        }
    });

    function renderComments() {
        const commentsList = document.getElementById("comments-list");
        const savedComments = JSON.parse(localStorage.getItem("global_comments")) || [];
        commentsList.innerHTML = "";
        savedComments.reverse().forEach(c => {
            const div = document.createElement("div");
            div.className = "comment-item";
            div.innerHTML = `<strong>${c.name}:</strong> ${c.text}`;
            commentsList.appendChild(div);
        });
    }

    const commentBtn = document.getElementById("submit-comment");
    const commentTextInput = document.getElementById("comment-text");

    function sendComment() {
        const name = commentNameInput.value;
        const text = commentTextInput.value.trim();
        if (!text) return;

        const comments = JSON.parse(localStorage.getItem("global_comments")) || [];
        comments.push({ name, text });
        localStorage.setItem("global_comments", JSON.stringify(comments));
        renderComments();
        commentTextInput.value = "";
    }

    if(commentBtn) commentBtn.addEventListener("click", sendComment);
    
    // Yorum kısmına Enter tuşu desteği eklendi
    if(commentTextInput) {
        commentTextInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                sendComment();
            }
        });
    }

    const canvas = document.getElementById('book-animation-canvas');
    if(canvas) {
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth; canvas.height = window.innerHeight;
        let books = [];
        function createBook() { return { x: Math.random()*canvas.width, y: Math.random()*canvas.height, w: Math.random()*50+30, h: Math.random()*30+20, o: Math.random(), s: (Math.random()*0.002+0.001) }; }
        for(let i=0; i<15; i++) books.push(createBook());
        function draw() {
            ctx.clearRect(0,0,canvas.width,canvas.height);
            books.forEach(b => {
                b.o += b.s; if(b.o > 1 || b.o < 0) b.s *= -1;
                ctx.fillStyle = `rgba(139, 90, 43, ${b.o*0.3})`;
                ctx.fillRect(b.x, b.y, b.w, b.h);
            });
            requestAnimationFrame(draw);
        }
        draw();
        window.addEventListener('resize', () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; });
    }

    checkLogin();
});