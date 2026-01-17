// Navigation
document.getElementById('homeBtn').addEventListener('click', () => showPage('homePage'));
document.getElementById('orderBtn').addEventListener('click', () => showPage('orderPage'));
document.getElementById('faqBtn').addEventListener('click', () => showPage('faqPage'));
document.getElementById('orderNowBtn').addEventListener('click', () => showPage('orderPage'));

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
}

// Form Validation and Submission
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const description = document.getElementById('description').value.trim();
    const hostingPeriod = document.getElementById('hostingPeriod').value;
    
    // Basic Validation
    if (!name || !email || !phone || !description || !hostingPeriod) {
        alert('يرجى تعبئة جميع الحقول');
        return;
    }
    
    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('يرجى إدخال إيميل صحيح');
        return;
    }
    
    // Phone Validation (basic)
    if (phone.length < 10) {
        alert('يرجى إدخال رقم جوال صحيح');
        return;
    }
    
    // Prepare data
    const formData = {
        name,
        email,
        phone,
        description,
        hostingPeriod,
        totalPrice: calculatePrice(hostingPeriod)
    };
    
    // Print to console (Backend Ready)
    console.log('Order Data:', formData);
    
    // For now, show success message
    alert('تم إرسال الطلب بنجاح! سنتواصل معك قريباً.');
    
    // Reset form
    this.reset();
    updateTotalPrice();
});

// Price Calculator
function calculatePrice(months) {
    const monthlyPrice = 50; // ريال
    return months * monthlyPrice;
}

function updateTotalPrice() {
    const period = document.getElementById('hostingPeriod').value;
    const price = calculatePrice(period);
    document.getElementById('totalPrice').textContent = `السعر الإجمالي: ${price} ريال`;
}

// Initial price update
document.addEventListener('DOMContentLoaded', updateTotalPrice);

// Update price on change
document.getElementById('hostingPeriod').addEventListener('change', updateTotalPrice);
