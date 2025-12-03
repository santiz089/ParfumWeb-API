const icons = {
    ShoppingCart: (size, className = '') => `<svg class="icon ${className}" width="${size}" height="${size}" viewBox="0 0 24 24" stroke="currentColor"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
    User: (size, className = '') => `<svg class="icon ${className}" width="${size}" height="${size}" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
    Menu: (size, className = '') => `<svg class="icon ${className}" width="${size}" height="${size}" viewBox="0 0 24 24" stroke="currentColor"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`,
    X: (size, className = '') => `<svg class="icon ${className}" width="${size}" height="${size}" viewBox="0 0 24 24" stroke="currentColor"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
    Search: (size, className = '') => `<svg class="icon ${className}" width="${size}" height="${size}" viewBox="0 0 24 24" stroke="currentColor"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
    LogOut: (size, className = '') => `<svg class="icon ${className}" width="${size}" height="${size}" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>`,
    Package: (size, className = '') => `<svg class="icon ${className}" width="${size}" height="${size}" viewBox="0 0 24 24" stroke="currentColor"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>`,
    ChevronDown: (size, className = '') => `<svg class="icon ${className}" width="${size}" height="${size}" viewBox="0 0 24 24" stroke="currentColor"><path d="m6 9 6 6 6-6"/></svg>`,
    Sparkles: (size, className = '') => `<svg class="icon ${className}" width="${size}" height="${size}" viewBox="0 0 24 24" stroke="currentColor"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>`,
    Star: (size, className = '') => `<svg class="icon ${className}" width="${size}" height="${size}" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    Edit: (size, className = '') => `<svg class="icon ${className}" width="${size}" height="${size}" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>`,
    Trash: (size, className = '') => `<svg class="icon ${className}" width="${size}" height="${size}" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`,
    MapPin: (size, className = '') => `<svg class="icon ${className}" width="${size}" height="${size}" viewBox="0 0 24 24" stroke="currentColor"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
    Phone: (size, className = '') => `<svg class="icon ${className}" width="${size}" height="${size}" viewBox="0 0 24 24" stroke="currentColor"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    Mail: (size, className = '') => `<svg class="icon ${className}" width="${size}" height="${size}" viewBox="0 0 24 24" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    Clock: (size, className = '') => `<svg class="icon ${className}" width="${size}" height="${size}" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    Heart: (size, className = '') => `<svg class="icon ${className}" width="${size}" height="${size}" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
    Target: (size, className = '') => `<svg class="icon ${className}" width="${size}" height="${size}" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
    Eye: (size, className = '') => `<svg class="icon ${className}" width="${size}" height="${size}" viewBox="0 0 24 24" stroke="currentColor"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
    Instagram: (size, className = '') => `<svg class="icon ${className}" width="${size}" height="${size}" viewBox="0 0 24 24" stroke="currentColor"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>`,
    Facebook: (size, className = '') => `<svg class="icon ${className}" width="${size}" height="${size}" viewBox="0 0 24 24" stroke="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
    Twitter: (size, className = '') => `<svg class="icon ${className}" width="${size}" height="${size}" viewBox="0 0 24 24" stroke="currentColor"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>`,
    Send: (size, className = '') => `<svg class="icon ${className}" width="${size}" height="${size}" viewBox="0 0 24 24" stroke="currentColor"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>`,
    Award: (size, className = '') => `<svg class="icon ${className}" width="${size}" height="${size}" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 10.15 15.83 14.1 11.88"/><line x1="12" x2="12" y1="16" y2="21"/><line x1="8.5" x2="15.5" y1="21" y2="21"/></svg>`,
};

let state = {
    currentPage: 'home',
    isLoggedIn: false, 
    currentUser: null, 
    cart: [],
    menuOpen: false,
    categoryDropdownOpen: false, 
    adminMenuOpen: false, 
    carouselIndex: 0,
    carouselImages: [
        'ParfumH/aventus.jpg', 'ParfumH/bleu.jpg', 'ParfumH/Allure.jpg',
        'ParfumH/eternity.jpg', 'ParfumH/guilty.jpg', 'ParfumH/invictus.jpg',
        'ParfumH/L1212.jpg', 'ParfumH/savage.jpg', 'ParfumM/tomfordm.jpg'
    ],
    currentCategory: 'all',
    products: [], 
    users: [],
    admins: [],
    sales: [],
    error: null,
    loading: true,
    editingProduct: null,
    adminSearchQuery: ''
};

let carouselInterval;

function setState(newState) {
    state = { ...state, ...newState };
    renderApp();
}

function html(strings, ...values) {
    let result = strings[0];
    for (let i = 0; i < values.length; i++) {
        result += values[i];
        result += strings[i + 1];
    }
    return result;
}

function checkSession() {
    const savedUser = localStorage.getItem('parfum_user');
    if (savedUser) {
        const user = JSON.parse(savedUser);
        setState({
            currentUser: user,
            isLoggedIn: true,
            error: `👋 ¡Hola de nuevo, ${user.name}!`
        });
        fetchCart(user.id);
        if (user.role === 'admin') {
            fetchSalesFromDB();
            fetchUsersFromDB();
        }
    }
}

async function fetchProductsFromDB() {
    try {
        const response = await fetch('/api/products');
        if (!response.ok) throw new Error('Error de red al obtener productos');
        
        const dbProducts = await response.json();
        
        const mappedProducts = dbProducts.map(p => ({
            id: p.id,
            name: p.nombre,
            price: parseFloat(p.precio),
            image: p.imagen_principal,
            gender: p.nombre_genero ? p.nombre_genero.toLowerCase() : 'unisex',
            badge: p.texto_insignia,
            rating: parseFloat(p.calificacion),
            type: p.nombre_tipo ? p.nombre_tipo.toLowerCase() : 'designer',
            isPopular: p.es_popular === 1,
            isNiche: p.nombre_tipo === 'Niche',
            stock: p.stock
        }));

        setState({ products: mappedProducts, loading: false });
    } catch (error) {
        console.error("Error cargando productos:", error);
        setState({ error: 'Error al conectar con la base de datos.', loading: false });
    }
}

async function fetchUsersFromDB() {
    try {
        const response = await fetch('/api/users');
        if (!response.ok) throw new Error('Error al obtener usuarios');
        
        const dbUsers = await response.json();
        
        const mappedUsers = dbUsers.map(u => ({
            id: u.id,
            name: u.nombre,
            email: u.correo,
            last_access: new Date(u.fecha_creacion).toLocaleDateString('es-MX'),
            privileges: u.rol === 'admin' ? 'Control Total' : 'Cliente'
        }));

        const admins = mappedUsers.filter(u => u.privileges === 'Control Total');
        const regularUsers = mappedUsers.filter(u => u.privileges === 'Cliente');

        setState({ 
            users: regularUsers, 
            admins: admins 
        });
    } catch (error) {
        console.error("Error usuarios:", error);
    }
}

async function fetchSalesFromDB() {
    try {
        const response = await fetch('/api/admin/sales');
        if (!response.ok) throw new Error('Error al obtener ventas');
        
        const dbSales = await response.json();
        
        const mappedSales = dbSales.map(s => ({
            id: s.id,
            client: s.cliente,
            total: parseFloat(s.total).toLocaleString('es-MX', { style: 'currency', currency: 'MXN' }),
            status: s.estado.charAt(0).toUpperCase() + s.estado.slice(1), 
            date: new Date(s.fecha_creacion).toLocaleDateString('es-MX', { 
                day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' 
            })
        }));

        setState({ sales: mappedSales });
    } catch (error) {
        console.error("Error ventas:", error);
    }
}

async function fetchCart(userId) {
    try {
        const response = await fetch(`/api/cart/${userId}`);
        if (response.ok) {
            const cartItems = await response.json();
            const parsedItems = cartItems.map(item => ({
                ...item,
                price: parseFloat(item.price)
            }));
            setState({ cart: parsedItems });
        }
    } catch (error) {
        console.error(error);
    }
}

async function createAdmin(e) {
    e.preventDefault();
    const form = document.getElementById('create-admin-form');
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (!name || !email || !password) {
        setState({ error: '⚠️ Completa todos los campos' });
        return;
    }

    try {
        const response = await fetch('/api/admin/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password, role: 'admin' })
        });

        const data = await response.json();
        if (data.success) {
            setState({ error: '✅ Administrador creado exitosamente' });
            fetchUsersFromDB(); 
            form.reset();
        } else {
            setState({ error: '❌ ' + data.message });
        }
    } catch (error) {
        console.error(error);
        setState({ error: '⚠️ Error al crear admin' });
    }
}

async function deleteUser(id) {
    if (!confirm('¿Estás seguro de eliminar este usuario? Esta acción borrará sus pedidos también.')) return;

    try {
        const response = await fetch(`/api/admin/users/${id}`, { method: 'DELETE' });
        const data = await response.json();

        if (data.success) {
            setState({ error: '🗑️ Usuario eliminado' });
            fetchUsersFromDB(); 
        } else {
            setState({ error: '❌ ' + data.message });
        }
    } catch (error) {
        console.error(error);
        setState({ error: '⚠️ Error al eliminar usuario' });
    }
}

function startCarousel() {
    clearInterval(carouselInterval);
    carouselInterval = setInterval(() => {
        const currentImages = state.currentPage === 'admin' ? 
            ['ParfumH/savage.jpg', 'ParfumH/eros.jpg', 'ParfumH/explorer.jpg', 'ParfumH/bleu.jpg', 'ParfumH/aventus.jpg'] : 
            state.carouselImages;
        setState({ carouselIndex: (state.carouselIndex + 1) % currentImages.length });
    }, 4500);
}

function setCategoryFilter(categoryKey) {
    setState({
        currentPage: 'catalog',
        currentCategory: categoryKey,
        categoryDropdownOpen: false
    });
}

function logout() {
    localStorage.removeItem('parfum_user');
    setState({
        isLoggedIn: false,
        currentUser: null,
        currentPage: 'home',
        cart: [],
        error: '👋 Has cerrado sesión exitosamente.',
        categoryDropdownOpen: false,
        adminMenuOpen: false,
        currentCategory: 'all'
    });
}

async function handleLogin(e) {
    e.preventDefault();
    const form = document.getElementById('login-form');
    const username = form.elements.username.value;
    const password = form.elements.password.value;
    
    if (!username || !password) {
        setState({ error: '❌ Por favor, introduce correo y contraseña.' });
        return;
    }

    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (data.success) {
            const user = { id: data.user.id, name: data.user.nombre, role: data.user.rol };
            localStorage.setItem('parfum_user', JSON.stringify(user));

            setState({
                currentUser: user,
                isLoggedIn: true,
                currentPage: data.user.rol === 'admin' ? 'admin' : 'catalog',
                error: `¡Bienvenido de nuevo, ${data.user.nombre}!`
            });
            
            fetchCart(data.user.id);

            if (data.user.rol === 'admin') {
                fetchSalesFromDB();
                fetchUsersFromDB();
            }

        } else {
            setState({ error: '❌ ' + data.message });
        }
    } catch (error) {
        console.error('Error login:', error);
        setState({ error: '⚠️ Error de conexión con el servidor.' });
    }
}

async function handleRegister(e) {
    e.preventDefault();
    const form = document.getElementById('register-form');
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const confirmPassword = form.elements.confirmPassword.value;
    
    if (password !== confirmPassword) {
        setState({ error: '🚨 Las contraseñas no coinciden. Por favor, verifica.' });
        return;
    }

    if (!name || !email || !password) {
        setState({ error: '⚠️ Por favor, completa todos los campos.' });
        return;
    }

    try {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        });

        const data = await response.json();

        if (data.success) {
            const user = { id: data.userId, name: name, role: 'usuario' };
            localStorage.setItem('parfum_user', JSON.stringify(user));

            setState({
                currentUser: user,
                isLoggedIn: true,
                currentPage: 'catalog',
                error: `🎉 ¡Cuenta creada con éxito! Bienvenido, ${name}.`
            });
        } else {
            setState({ error: '❌ ' + data.message });
        }
    } catch (error) {
        console.error(error);
        setState({ error: '⚠️ Error de conexión al registrarse.' });
    }
}

function handleContact(e) {
    e.preventDefault();
    const form = document.getElementById('contact-form');
    const name = form.elements.contactName.value;
    if (name) {
        setState({ error: `✅ ¡Gracias ${name}! Tu mensaje ha sido enviado. Te contactaremos pronto.`, currentPage: 'home' });
    }
}

async function addToCart(product) {
    if (!state.isLoggedIn || !state.currentUser) {
        setState({ currentPage: 'login', error: '🔒 Debes iniciar sesión para comprar.' });
        return;
    }

    try {
        const response = await fetch('/api/cart/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                userId: state.currentUser.id, 
                productId: product.id, 
                quantity: 1 
            })
        });

        if (response.ok) {
            await fetchCart(state.currentUser.id);
            setState({ error: `✅ ${product.name} añadido al carrito` });
        }
    } catch (error) {
        console.error(error);
    }
}

async function removeFromCart(productId) {
    if (!state.currentUser) return;

    try {
        const response = await fetch('/api/cart/remove', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: state.currentUser.id, productId })
        });

        if (response.ok) {
            await fetchCart(state.currentUser.id);
        }
    } catch (error) {
        console.error(error);
    }
}

async function updateQuantity(productId, newQuantity) {
    if (!state.currentUser) return;
    const quantity = parseInt(newQuantity);

    try {
        const response = await fetch('/api/cart/update', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: state.currentUser.id, productId, quantity })
        });

        if (response.ok) {
            await fetchCart(state.currentUser.id);
        }
    } catch (error) {
        console.error(error);
    }
}

async function checkout() {
    if (!state.currentUser || !state.currentUser.id) {
        setState({ error: '❌ Error: No se pudo identificar al usuario.' });
        return;
    }

    const total = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    try {
        setState({ loading: true }); 
        const response = await fetch('/api/checkout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: state.currentUser.id,
                cart: state.cart,
                total: total
            })
        });

        const data = await response.json();

        if (data.success && data.url) {
            window.location.href = data.url;
        } else {
            setState({ error: '❌ ' + data.message, loading: false });
        }
    } catch (error) {
        console.error(error);
        setState({ error: '⚠️ Error de conexión al procesar el pago.', loading: false });
    }
}

function NotificationBanner() {
    if (!state.error) return '';
    return html` 
        <div id="notification-banner" class="notification-banner fixed top-0 left-1/2 transform -translate-x-1/2 mt-4 p-3 rounded-xl shadow-2xl z-[100] 
            ${state.error.includes('❌') || state.error.includes('🚨') || state.error.includes('⚠️') || state.error.includes('🗑️') || state.error.includes('🔒') ? 'bg-red-700' : 'bg-green-600'} 
            text-white font-semibold flex items-center gap-3 border border-white/20">
            <button class="text-xl" onclick="setState({error: null})">${icons.X(18, 'text-white')}</button>
            ${state.error}
        </div>
    `;
}

function CategoryDropdown() {
    const categories = [
        { name: 'Todos los Productos', key: 'all' },
        { name: 'Para Hombre', key: 'hombre' },
        { name: 'Para Mujer', key: 'mujer' },
        { name: 'Nicho', key: 'nicho' },
        { name: 'Más Populares', key: 'popular' },
        { name: 'De Diseñador', key: 'designer' }
    ];
    
    const activeCategory = categories.find(cat => cat.key === state.currentCategory) || categories[0];

    return html`
        <div class="relative">
            <button onclick="setState({categoryDropdownOpen: !state.categoryDropdownOpen})" 
                    class="flex items-center text-amber-200 hover:text-amber-400 transition-all font-semibold tracking-wide">
                ${activeCategory.name.toUpperCase()} ${icons.ChevronDown(18, 'ml-1 transition-transform ' + (state.categoryDropdownOpen ? 'rotate-180' : ''))}
            </button>
            ${state.categoryDropdownOpen ? html`
                <div class="absolute left-1/2 transform -translate-x-1/2 mt-3 w-56 glass-dark rounded-xl shadow-2xl border border-amber-400/30 overflow-hidden z-50 animate-fadeInUp">
                    ${categories.map(cat => html`
                        <a href="#" onclick="setCategoryFilter('${cat.key}')"
                           class="block px-4 py-3 text-sm text-amber-200 ${cat.key === state.currentCategory ? 'bg-amber-500/50 font-bold' : 'hover:bg-amber-500/30'} transition-colors">${cat.name}</a>
                    `).join('')}
                </div>
            ` : ''}
        </div>
    `;
}

function AdminNavbarDropdown() {
    return html`
        <button onclick="setState({currentPage: 'admin', categoryDropdownOpen: false})" 
                class="flex items-center text-red-400 hover:text-red-500 transition-all font-bold tracking-wide">
            PANEL ADMIN
        </button>
    `;
}

function Navbar() {
    const cartCount = state.cart.reduce((total, item) => total + item.quantity, 0);
    const isAdmin = state.currentUser && state.currentUser.role === 'admin';
    return html`
        <header class="glass sticky top-0 z-50 border-b border-amber-400/30 shadow-2xl">
            <div class="container mx-auto px-4">
                <div class="flex items-center justify-between py-4">
                    <div class="flex items-center gap-3 cursor-pointer group" onclick="setState({currentPage: state.isLoggedIn ? 'catalog' : 'home', categoryDropdownOpen: false, adminMenuOpen: false, currentCategory: 'all'})">
                        <div class="gradient-gold p-3 rounded-2xl shadow-xl transform group-hover:rotate-12 transition-all duration-300 animate-pulse-glow">
                            ${icons.Package(30, 'text-gray-900')}
                        </div>
                        <div>
                            <span class="text-3xl font-display font-bold bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 bg-clip-text text-transparent">Parfum</span>
                            <p class="text-xs text-amber-300 font-light tracking-[0.2em] uppercase">Luxury Fragrances</p>
                        </div>
                    </div>
                    <nav class="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wide">
                        ${isAdmin ? AdminNavbarDropdown() : html`
                            <button onclick="setCategoryFilter('all')" class="text-amber-200 hover:text-amber-400 transition-all">CATÁLOGO</button>
                            ${CategoryDropdown()}
                            <button onclick="setState({currentPage: 'about', categoryDropdownOpen: false})" class="text-amber-200 hover:text-amber-400 transition-all">NOSOTROS</button>
                            <button onclick="setState({currentPage: 'location', categoryDropdownOpen: false})" class="text-amber-200 hover:text-amber-400 transition-all">UBICACIÓN</button>
                            <button onclick="setState({currentPage: 'contact', categoryDropdownOpen: false})" class="text-amber-200 hover:text-amber-400 transition-all">CONTACTO</button>
                        `}
                    </nav>
                    <div class="flex items-center gap-4">
                        ${!isAdmin ? html`
                            <button onclick="setState({currentPage: 'cart', menuOpen: false, categoryDropdownOpen: false})" class="relative group">
                                <div class="glass-dark p-3 rounded-xl hover:bg-amber-500/20 transition-all shadow-lg">
                                    ${icons.ShoppingCart(26, 'text-amber-300 group-hover:text-amber-400')}
                                    ${cartCount > 0 ? html`<span class="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-gray-900">${cartCount}</span>` : ''}
                                </div>
                            </button>
                        ` : ''}
                        ${state.isLoggedIn ? html`
                            <div class="flex items-center gap-2">
                                <div class="hidden md:block glass-dark p-3 rounded-xl shadow-lg">${icons.User(26, 'text-amber-300')}</div>
                                <button class="hidden md:block text-amber-100 font-medium glass-dark px-4 py-3 rounded-xl hover:bg-amber-500/20 transition-all">
                                    ${isAdmin ? 'ADMIN' : 'MI CUENTA'}
                                </button>
                            </div>
                            <button onclick="logout()" class="glass-dark p-3 rounded-xl hover:bg-red-500/20 transition-all group shadow-lg">
                                ${icons.LogOut(22, 'text-amber-300 group-hover:text-red-400')}
                            </button>
                        ` : html`
                            <div class="flex items-center gap-2">
                                <div onclick="setState({currentPage: 'login', categoryDropdownOpen: false})" class="hidden md:block glass-dark p-3 rounded-xl shadow-lg cursor-pointer hover:bg-amber-500/20 transition-all">
                                    ${icons.User(26, 'text-amber-300')}
                                </div>
                                <button onclick="setState({currentPage: 'login', categoryDropdownOpen: false})" class="gradient-gold text-gray-900 px-8 py-3 rounded-full font-bold shadow-2xl transition-all transform hover:scale-105 btn-premium">
                                    INGRESAR
                                </button>
                            </div>
                        `}
                        <button class="lg:hidden glass-dark p-3 rounded-xl shadow-lg" onclick="setState({menuOpen: !state.menuOpen, categoryDropdownOpen: false})">
                            ${state.menuOpen ? icons.X(26, 'text-amber-300') : icons.Menu(26, 'text-amber-300')}
                        </button>
                    </div>
                </div>
                ${state.menuOpen ? html`
                    <div class="lg:hidden pb-4 animate-fadeInUp">
                        <nav class="flex flex-col gap-2">
                            <button onclick="setState({currentPage: 'catalog', menuOpen: false})" class="text-amber-200 hover:text-amber-400 py-2 text-left">CATÁLOGO</button>
                            <button onclick="setState({currentPage: 'about', menuOpen: false})" class="text-amber-200 hover:text-amber-400 py-2 text-left">NOSOTROS</button>
                            <button onclick="setState({currentPage: 'location', menuOpen: false})" class="text-amber-200 hover:text-amber-400 py-2 text-left">UBICACIÓN</button>
                            <button onclick="setState({currentPage: 'contact', menuOpen: false})" class="text-amber-200 hover:text-amber-400 py-2 text-left">CONTACTO</button>
                        </nav>
                    </div>
                ` : ''}
            </div>
        </header>
    `;
}

function Footer() {
    return html`
        <footer class="glass-dark border-t border-amber-400/30 mt-16">
            <div class="container mx-auto px-4 py-12">
                <div class="grid grid-cols-2 md:grid-cols-5 gap-8">
                    <div class="col-span-2 md:col-span-1">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="gradient-gold p-2 rounded-xl">${icons.Package(24, 'text-gray-900')}</div>
                            <span class="text-2xl font-display font-bold text-amber-300">Parfum</span>
                        </div>
                        <p class="text-amber-200/70 text-sm">Fragancias de lujo exclusivas.</p>
                    </div>

                    <div>
                        <h4 class="text-amber-400 font-semibold mb-4">Enlaces</h4>
                        <ul class="space-y-2 text-sm">
                            <li><a href="#" onclick="setState({currentPage: 'catalog'})" class="text-amber-200/70 hover:text-amber-400 transition">Catálogo</a></li>
                            <li><a href="#" onclick="setState({currentPage: 'about'})" class="text-amber-200/70 hover:text-amber-400 transition">Quiénes Somos</a></li>
                            <li><a href="#" onclick="setState({currentPage: 'location'})" class="text-amber-200/70 hover:text-amber-400 transition">Ubicación</a></li>
                            <li><a href="#" onclick="setState({currentPage: 'contact'})" class="text-amber-200/70 hover:text-amber-400 transition">Contacto</a></li>
                        </ul>
                    </div>

                    <div class="col-span-2 md:col-span-1">
                        <h4 class="text-amber-400 font-semibold mb-4">Contáctanos</h4>
                        <ul class="space-y-3 text-sm text-amber-200/70">
                            <li class="flex items-center gap-3">${icons.MapPin(18, 'text-amber-400')} Av. Reforma 123, CDMX</li>
                            <li class="flex items-center gap-3">${icons.Phone(18, 'text-amber-400')} +52 55 1234 5678</li>
                            <li class="flex items-center gap-3">${icons.Mail(18, 'text-amber-400')} info@parfum.com</li>
                        </ul>
                    </div>
                    
                    <div class="col-span-2 md:col-span-2">
                         <h4 class="text-amber-400 font-semibold mb-4">Horario</h4>
                         <ul class="space-y-3 text-sm text-amber-200/70 mb-6">
                            <li class="flex items-center gap-3">${icons.Clock(18, 'text-amber-400')} Lunes a Viernes: 10:00 - 20:00</li>
                            <li class="flex items-center gap-3">${icons.Clock(18, 'text-amber-400')} Sábado: 11:00 - 18:00</li>
                        </ul>

                        <h4 class="text-amber-400 font-semibold mb-4">Síguenos</h4>
                        <div class="flex gap-4">
                            <a href="https://instagram.com/albertomendoza869/" class="group glass p-2 rounded-xl hover:bg-gradient-to-br from-purple-500 to-pink-500 transition-all" target="_blank">
                                ${icons.Instagram(24, 'text-amber-300 group-hover:text-white')}
                            </a>
                            <a href="https://www.facebook.com/angel.santiz.3" class="group glass p-2 rounded-xl hover:bg-gradient-to-r from-blue-500 to-blue-600 transition-all" target="_blank">
                                ${icons.Facebook(24, 'text-amber-300 group-hover:text-white')}
                            </a>
                            <a href="https://twitter.com/AngelGutie48907" class="group glass p-2 rounded-xl hover:bg-gradient-to-r from-sky-400 to-sky-500 transition-all" target="_blank">
                                ${icons['Twitter'](24, 'text-amber-300 group-hover:text-white')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center py-4 border-t border-amber-400/20">
                <p class="text-xs text-amber-200/50">© 2024 Parfum Luxury Fragrances. Todos los derechos reservados.</p>
            </div>
        </footer>
    `;
}

function HomePage() {
    return html`
        <div class="container mx-auto px-4 py-16 text-center">
            <h1 class="text-6xl font-display font-bold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">Bienvenido a Parfum</h1>
            <p class="text-xl text-amber-200/80 mt-4 max-w-3xl mx-auto">Sumérgete en el mundo de las fragancias de lujo.</p>
            <div id="carousel" class="mt-12">
                <div class="glass-dark rounded-3xl overflow-hidden border border-amber-400/30 h-96 flex items-center justify-center">
                    <img src="${state.carouselImages[state.carouselIndex]}" alt="Carousel Image" class="w-full h-full object-cover opacity-80 transition-opacity duration-1000"/>
                </div>
            </div>
            <button onclick="setCategoryFilter('all')" class="mt-12 gradient-gold text-gray-900 px-10 py-4 rounded-full font-bold shadow-2xl transition-all transform hover:scale-105 btn-premium text-xl">
                ${icons.Sparkles(20, 'mr-2')} Explorar Colección
            </button>
        </div>
    `;
}

function LoginPage() {
    return html`
        <div class="flex items-center justify-center min-h-screen bg-gray-900/90 py-12">
            <div class="glass-dark p-8 md:p-12 rounded-3xl shadow-2xl border border-amber-400/30 w-full max-w-md animate-fadeInUp">
                <h2 class="text-3xl font-display font-bold text-amber-300 mb-6 text-center">Ingresar a Mi Cuenta</h2>
                <form id="login-form" onsubmit="handleLogin(event)">
                    <div class="mb-5">
                        <label class="block text-sm font-medium text-amber-300 mb-2">Correo</label>
                        <input type="email" name="username" required class="w-full px-4 py-3 glass rounded-xl text-white border border-amber-400/30" placeholder="ejemplo@correo.com"/>
                    </div>
                    <div class="mb-6">
                        <label class="block text-sm font-medium text-amber-300 mb-2">Contraseña</label>
                        <input type="password" name="password" required class="w-full px-4 py-3 glass rounded-xl text-white border border-amber-400/30" placeholder="••••••"/>
                    </div>
                    <button type="submit" class="w-full gradient-gold text-gray-900 px-8 py-4 rounded-full font-bold shadow-2xl transition-all hover:scale-105 btn-premium text-lg">ACCEDER</button>
                </form>
                <p class="text-center text-amber-200/70 mt-6">
                    ¿No tienes cuenta? <button onclick="setState({currentPage: 'register'})" class="text-amber-400 font-bold hover:underline">Regístrate</button>
                </p>
            </div>
        </div>
    `;
}

function RegisterPage() {
    return html`
        <div class="flex items-center justify-center min-h-screen bg-gray-900/90 py-12">
            <div class="glass-dark p-8 md:p-12 rounded-3xl shadow-2xl border border-amber-400/30 w-full max-w-lg animate-fadeInUp">
                <h2 class="text-3xl font-display font-bold text-amber-300 mb-6 text-center">Crear Nueva Cuenta</h2>
                <form id="register-form" onsubmit="handleRegister(event)">
                    <div class="mb-5">
                        <label class="block text-sm font-medium text-amber-300 mb-2">Nombre</label>
                        <input type="text" name="name" required class="w-full px-4 py-3 glass rounded-xl text-white border border-amber-400/30"/>
                    </div>
                    <div class="mb-5">
                        <label class="block text-sm font-medium text-amber-300 mb-2">Email</label>
                        <input type="email" name="email" required class="w-full px-4 py-3 glass rounded-xl text-white border border-amber-400/30"/>
                    </div>
                    <div class="mb-5">
                        <label class="block text-sm font-medium text-amber-300 mb-2">Contraseña</label>
                        <input type="password" name="password" required class="w-full px-4 py-3 glass rounded-xl text-white border border-amber-400/30"/>
                    </div>
                    <div class="mb-6">
                        <label class="block text-sm font-medium text-amber-300 mb-2">Confirmar</label>
                        <input type="password" name="confirmPassword" required class="w-full px-4 py-3 glass rounded-xl text-white border border-amber-400/30"/>
                    </div>
                    <button type="submit" class="w-full gradient-gold text-gray-900 px-8 py-4 rounded-full font-bold shadow-2xl transition-all hover:scale-105 btn-premium text-lg">REGISTRARSE</button>
                </form>
                <p class="text-center text-amber-200/70 mt-6">
                    ¿Ya tienes cuenta? <button onclick="setState({currentPage: 'login'})" class="text-amber-400 font-bold hover:underline">Ingresa</button>
                </p>
            </div>
        </div>
    `;
}

function ProductCard(product) {
    const starIcons = Array(5).fill().map((_, i) => 
        i < Math.floor(product.rating) ? icons.Star(18, 'text-yellow-400 fill-yellow-400') : 
        i < product.rating ? icons.Star(18, 'text-yellow-400 fill-current') : 
        icons.Star(18, 'text-gray-600')
    ).join('');
    
    const buttonAction = state.isLoggedIn 
        ? `addToCart(${JSON.stringify(product).replace(/"/g, '&quot;')})` 
        : `setState({ currentPage: 'login', error: '🔒 Debes iniciar sesión para añadir productos al carrito.' })`;
    
    const buttonIcon = state.isLoggedIn ? icons.ShoppingCart(20, 'text-gray-900') : icons.User(20, 'text-gray-900');
    const buttonText = state.isLoggedIn ? 'Añadir al Carrito' : 'Iniciar Sesión';
    const buttonClasses = state.isLoggedIn ? 'gradient-gold hover:ring-2 hover:ring-yellow-400' : 'bg-red-500 hover:bg-red-600 text-white';
    
    return html`
        <div class="glass-dark rounded-2xl p-6 shadow-2xl border border-amber-400/30 flex flex-col transform hover:scale-[1.02] transition-all duration-300">
            <div class="relative mb-4">
                <img src="${product.image}" alt="${product.name}" class="w-full h-56 object-cover rounded-xl shadow-lg"/>
                ${product.badge ? html`<span class="absolute top-3 right-3 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-md">${product.badge}</span>` : ''}
            </div>
            <h3 class="text-xl font-bold text-amber-200">${product.name}</h3>
            <p class="text-amber-300 font-semibold text-lg mt-1">$${product.price.toLocaleString('es-MX')}</p>
            <div class="flex items-center mt-2 mb-4">
                ${starIcons}
                <span class="text-sm text-amber-200/70 ml-2">(${product.rating.toFixed(1)})</span>
            </div>
            <button onclick="${buttonAction}" 
                    class="mt-auto w-full text-gray-900 px-4 py-3 rounded-full font-bold shadow-md transition-all flex items-center justify-center gap-2 ${buttonClasses}">
                ${buttonIcon} ${buttonText}
            </button>
        </div>
    `;
}

function CatalogPage() {
    if (state.loading) {
        return html`
            <div class="container mx-auto px-4 py-32 text-center">
                <h2 class="text-3xl text-amber-300 animate-pulse">Cargando catálogo de lujo...</h2>
            </div>
        `;
    }

    let filteredProducts = state.products;
    let title = 'Catálogo de Fragancias';
    
    switch (state.currentCategory) {
        case 'hombre': filteredProducts = state.products.filter(p => p.gender === 'hombre'); title = 'Para Hombre'; break;
        case 'mujer': filteredProducts = state.products.filter(p => p.gender === 'mujer'); title = 'Para Mujer'; break;
        case 'nicho': filteredProducts = state.products.filter(p => p.type === 'niche'); title = 'Fragancias Nicho'; break;
        case 'popular': filteredProducts = state.products.filter(p => p.isPopular === true); title = 'Más Populares'; break;
        case 'designer': filteredProducts = state.products.filter(p => p.type === 'designer'); title = 'De Diseñador'; break;
        default: break;
    }

    return html`
        <div class="container mx-auto px-4 py-16">
            <div class="text-center mb-12">
                <h1 class="text-5xl font-display font-bold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent mb-4">${title}</h1>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                ${filteredProducts.map(ProductCard).join('')}
            </div>
        </div>
    `;
}

function CartPage() {
    const subtotal = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    return html`
        <div class="container mx-auto px-4 py-16">
            <h1 class="text-5xl font-display font-bold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent mb-12">Tu Carrito</h1>
            ${state.cart.length === 0 ? html`<p class="text-center text-amber-200">Tu carrito está vacío.</p>` : 
            html`<div class="grid lg:grid-cols-3 gap-12">
                <div class="lg:col-span-2 space-y-6">
                    ${state.cart.map(item => html`
                        <div class="glass-dark p-6 rounded-2xl flex items-center justify-between gap-6 border border-amber-400/30">
                            <div class="flex items-center gap-6">
                                <img src="${item.image}" class="w-20 h-20 object-cover rounded-xl"/>
                                <div><h3 class="text-amber-200 font-bold">${item.name}</h3><p class="text-amber-300">$${item.price.toLocaleString('es-MX')}</p></div>
                            </div>
                            <div class="flex items-center gap-4">
                                <input type="number" value="${item.quantity}" onchange="updateQuantity(${item.id}, this.value)" class="w-16 px-2 py-1 glass text-white rounded"/>
                                <button onclick="removeFromCart(${item.id})" class="text-red-400">${icons.Trash(24)}</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="glass-dark p-8 rounded-3xl border border-amber-400/30 h-fit">
                    <h2 class="text-2xl text-amber-300 mb-4">Total: $${subtotal.toLocaleString('es-MX')}</h2>
                    <button onclick="checkout()" class="w-full gradient-gold text-gray-900 px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">PAGAR</button>
                </div>
            </div>`}
        </div>
    `;
}

function AboutUsPage() {
    const values = [
        { name: 'Excelencia', icon: icons.Award(20) },
        { name: 'Pasión', icon: icons.Heart(20) },
        { name: 'Servicio', icon: icons.User(20) },
        { name: 'Autenticidad', icon: icons.Sparkles(20) },
    ];

    return html`
        <div class="container mx-auto px-4 py-16">
            <h1 class="text-5xl text-center font-display font-bold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent mb-12">Quiénes Somos</h1>
            
            <div class="grid lg:grid-cols-2 gap-12 items-start">
                
                <div class="space-y-8">
                    <div class="glass-dark p-4 rounded-3xl border border-amber-400/30 shadow-2xl">
                        <img src="corporativo.png" alt="Equipo de Parfum" class="w-full h-auto max-h-[500px] object-cover rounded-2xl opacity-90"/>
                    </div>
                    
                    <div class="glass-dark p-6 rounded-2xl border border-amber-400/30 shadow-xl">
                        <h2 class="text-3xl font-bold text-amber-300 mb-3">Nuestra Historia</h2>
                        <p class="text-amber-200/80">
                            Parfum nació en 2018 con la visión de elevar la experiencia de compra de fragancias en México. Lo que comenzó como un pequeño proyecto de curaduría de perfumes nicho, se ha convertido en una boutique digital líder, dedicada a conectar a nuestros clientes con las esencias más exclusivas del mundo.
                        </p>
                    </div>
                </div>

                <div class="space-y-8">
                    <h2 class="text-4xl font-bold text-amber-300">Nuestra Filosofía</h2>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="glass-dark p-6 rounded-2xl border border-amber-400/30 hover:border-amber-400/60 transition-all card-luxury">
                            <div class="gradient-gold w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                                ${icons.Target(24, 'text-gray-900')}
                            </div>
                            <h3 class="text-xl font-bold text-amber-200 mb-2">Nuestra Misión</h3>
                            <p class="text-amber-200/70 text-sm">
                                Ser el puente de acceso a las fragancias más exclusivas del mercado, brindando un servicio personalizado y de primera clase.
                            </p>
                        </div>

                        <div class="glass-dark p-6 rounded-2xl border border-amber-400/30 hover:border-amber-400/60 transition-all card-luxury">
                            <div class="gradient-gold w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                                ${icons.Eye(24, 'text-gray-900')}
                            </div>
                            <h3 class="text-xl font-bold text-amber-200 mb-2">Nuestra Visión</h3>
                            <p class="text-amber-200/70 text-sm">
                                Liderar el mercado de perfumes de lujo en Latinoamérica, expandiendo nuestra presencia con la misma esencia artesanal y trato personal.
                            </p>
                        </div>
                    </div>

                    <div class="glass-dark p-6 rounded-2xl border border-amber-400/30 shadow-xl">
                        <h3 class="text-2xl font-bold text-amber-300 mb-4">Nuestros Valores</h3>
                        <div class="grid grid-cols-2 gap-4">
                            ${values.map(val => html`
                                <div class="flex items-center text-amber-200 font-semibold text-base gap-2">
                                    <span class="text-amber-400">${val.icon}</span>
                                    ${val.name}
                                </div>
                            `).join('')}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `;
}

function LocationPage() {
    return html`
        <div class="container mx-auto px-4 py-16 text-center">
            <h1 class="text-5xl font-bold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent mb-12">Ubicación</h1>
            <div class="glass-dark p-12 rounded-3xl inline-block border border-amber-400/30 w-full max-w-4xl">
                ${icons.MapPin(48, 'text-amber-400 mx-auto mb-4')}
                <p class="text-amber-200 text-xl mb-8">Av. Paseo de la Reforma 123, CDMX</p>
                <div class="w-full h-96 rounded-2xl overflow-hidden border border-amber-400/30">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.470878579899!2d-99.16278438509327!3d19.435200386882855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92b75aa014d%3A0x17d745a3372b3892!2sP.%C2%BA%20de%20la%20Reforma%20123%2C%20Ju%C3%A1rez%2C%20Cuauht%C3%A9moc%2C%2006600%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1684900000000!5m2!1ses!2smx" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    `;
}

function ContactPage() {
    return html`
        <div class="container mx-auto px-4 py-16">
            <h1 class="text-5xl text-center font-bold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent mb-12">Contáctanos</h1>
            <div class="max-w-2xl mx-auto glass-dark p-8 rounded-3xl border border-amber-400/30">
                <form onsubmit="handleContact(event)">
                    <div class="mb-4"><label class="text-amber-300">Nombre</label><input id="contactName" class="w-full glass rounded p-2 text-white"/></div>
                    <div class="mb-4"><label class="text-amber-300">Mensaje</label><textarea id="contactMessage" class="w-full glass rounded p-2 text-white"></textarea></div>
                    <button class="gradient-gold px-6 py-2 rounded-full font-bold">Enviar</button>
                </form>
            </div>
        </div>
    `;
}

function filterAdminProducts() {
    if (!state.adminSearchQuery) return state.products;
    return state.products.filter(p => p.name.toLowerCase().includes(state.adminSearchQuery.toLowerCase()));
}

function prepareEditProduct(product) {
    setState({ editingProduct: product });
    document.getElementById('prod-name').value = product.name;
    document.getElementById('prod-price').value = product.price;
    document.getElementById('prod-image').value = product.image;
    document.getElementById('prod-stock').value = product.stock;
    document.getElementById('prod-gender').value = product.gender;
    document.getElementById('prod-type').value = product.type;
}

function cancelEditProduct() {
    setState({ editingProduct: null });
    document.getElementById('product-form').reset();
}

async function saveProduct(e) {
    e.preventDefault();
    const form = document.getElementById('product-form');
    
    const productData = {
        name: document.getElementById('prod-name').value,
        price: parseFloat(document.getElementById('prod-price').value),
        image: document.getElementById('prod-image').value,
        stock: parseInt(document.getElementById('prod-stock').value),
        gender: document.getElementById('prod-gender').value,
        type: document.getElementById('prod-type').value,

        rating: state.editingProduct ? state.editingProduct.rating : 5.0,
        badge: '', 
        isPopular: false 
    };

    const url = state.editingProduct 
        ? `/api/admin/products/${state.editingProduct.id}`
        : '/api/admin/products';
    
    const method = state.editingProduct ? 'PUT' : 'POST';

    try {
        const response = await fetch(url, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productData)
        });

        const data = await response.json();

        if (data.success || response.ok) {
            setState({ error: state.editingProduct ? '✅ Producto actualizado' : '✅ Producto creado' });
            fetchProductsFromDB();
            cancelEditProduct();
        } else {
            setState({ error: '❌ Error al guardar: ' + (data.message || 'Error desconocido') });
        }
    } catch (error) {
        console.error(error);
        setState({ error: '⚠️ Error de conexión' });
    }
}

async function deleteProduct(id) {
    if (!confirm('¿Estás seguro de eliminar este producto del catálogo?')) return;

    try {
        const response = await fetch(`/api/admin/products/${id}`, { method: 'DELETE' });
        if (response.ok) {
            setState({ error: '🗑️ Producto eliminado' });
            fetchProductsFromDB();
        } else {
            setState({ error: '❌ No se pudo eliminar el producto' });
        }
    } catch (error) {
        console.error(error);
        setState({ error: '⚠️ Error al eliminar' });
    }
}

function AdminPage() {
    if (!state.currentUser || state.currentUser.role !== 'admin') {
        return html`<div class="text-center p-20 text-red-400 font-bold text-2xl">🚫 Acceso Denegado</div>`;
    }

    const totalRevenue = state.sales.reduce((acc, sale) => {
        const amount = parseFloat(sale.total.replace(/[^0-9.-]+/g,""));
        return acc + amount;
    }, 0).toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });

    const filteredProducts = filterAdminProducts();

    return html`
        <div class="container mx-auto px-4 py-16">
            <h1 class="text-4xl text-amber-400 font-bold mb-8 flex items-center gap-3">
                ${icons.Sparkles(32)} Panel de Administración
            </h1>

            <div class="glass-dark p-8 rounded-2xl border border-amber-400/30 mb-8">
                <h3 class="text-2xl text-amber-200 font-bold mb-6">Crear Nuevo Administrador</h3>
                <form id="create-admin-form" onsubmit="createAdmin(event)" class="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <input type="text" name="name" placeholder="Nombre" required class="p-3 rounded-lg glass text-white placeholder-gray-400"/>
                    <input type="email" name="email" placeholder="Correo" required class="p-3 rounded-lg glass text-white placeholder-gray-400"/>
                    <input type="password" name="password" placeholder="Contraseña" required class="p-3 rounded-lg glass text-white placeholder-gray-400"/>
                    <button type="submit" class="gradient-gold text-gray-900 font-bold p-3 rounded-lg hover:scale-105 transition">Crear Admin</button>
                </form>
            </div>

            <div class="glass-dark p-8 rounded-2xl border border-amber-400/30 mb-12 relative overflow-hidden">
                <div class="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">${icons.Package(100, 'text-amber-400')}</div>
                <h3 class="text-2xl text-amber-200 font-bold mb-6 flex items-center gap-2">📦 Gestión de Inventario</h3>
                
                <div class="grid lg:grid-cols-3 gap-8">
                    <div class="lg:col-span-1 glass p-6 rounded-xl border border-white/10">
                        <h4 class="text-xl text-amber-300 font-bold mb-4">${state.editingProduct ? '✏️ Editando Producto' : '✨ Agregar Nuevo Producto'}</h4>
                        <form id="product-form" onsubmit="saveProduct(event)" class="space-y-4">
                            <div>
                                <label class="text-xs text-amber-200 uppercase font-bold">Nombre</label>
                                <input id="prod-name" type="text" required class="w-full p-2 rounded bg-black/40 text-white border border-amber-400/20 focus:border-amber-400 outline-none"/>
                            </div>
                            <div class="grid grid-cols-2 gap-2">
                                <div>
                                    <label class="text-xs text-amber-200 uppercase font-bold">Precio ($)</label>
                                    <input id="prod-price" type="number" step="0.01" required class="w-full p-2 rounded bg-black/40 text-white border border-amber-400/20 outline-none"/>
                                </div>
                                <div>
                                    <label class="text-xs text-amber-200 uppercase font-bold">Stock</label>
                                    <input id="prod-stock" type="number" required class="w-full p-2 rounded bg-black/40 text-white border border-amber-400/20 outline-none"/>
                                </div>
                            </div>
                            <div>
                                <label class="text-xs text-amber-200 uppercase font-bold">URL Imagen</label>
                                <input id="prod-image" type="text" required class="w-full p-2 rounded bg-black/40 text-white border border-amber-400/20 outline-none"/>
                            </div>
                            <div class="grid grid-cols-2 gap-2">
                                <div>
                                    <label class="text-xs text-amber-200 uppercase font-bold">Género</label>
                                    <select id="prod-gender" class="w-full p-2 rounded bg-black/40 text-white border border-amber-400/20 outline-none">
                                        <option value="hombre">Hombre</option>
                                        <option value="mujer">Mujer</option>
                                        <option value="unisex">Unisex</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="text-xs text-amber-200 uppercase font-bold">Tipo</label>
                                    <select id="prod-type" class="w-full p-2 rounded bg-black/40 text-white border border-amber-400/20 outline-none">
                                        <option value="designer">Diseñador</option>
                                        <option value="niche">Nicho</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div class="flex gap-2 pt-2">
                                <button type="submit" class="flex-1 gradient-gold text-gray-900 font-bold py-2 rounded shadow-lg hover:scale-105 transition">
                                    ${state.editingProduct ? 'ACTUALIZAR' : 'GUARDAR'}
                                </button>
                                ${state.editingProduct ? html`
                                    <button type="button" onclick="cancelEditProduct()" class="px-4 py-2 bg-red-500/20 text-red-400 border border-red-500/50 rounded hover:bg-red-500/40 transition">
                                        ${icons.X(20)}
                                    </button>
                                ` : ''}
                            </div>
                        </form>
                    </div>

                    <div class="lg:col-span-2 flex flex-col h-[500px]">
                        <div class="mb-4 flex gap-2">
                            <div class="relative flex-1">
                                <span class="absolute left-3 top-2.5 text-gray-400">${icons.Search(18)}</span>
                                <input type="text" 
                                    placeholder="Buscar producto por nombre..." 
                                    value="${state.adminSearchQuery}"
                                    oninput="setState({adminSearchQuery: this.value})"
                                    class="w-full pl-10 pr-4 py-2 rounded-lg bg-black/40 text-white border border-amber-400/20 focus:border-amber-400 outline-none transition-all"
                                />
                            </div>
                        </div>

                        <div class="flex-1 overflow-y-auto pr-2 space-y-2 custom-scrollbar">
                            ${filteredProducts.length === 0 ? html`<p class="text-center text-gray-500 py-10">No se encontraron productos.</p>` : ''}
                            ${filteredProducts.map(p => html`
                                <div class="glass p-3 rounded-lg border border-white/5 flex items-center gap-4 hover:bg-white/5 transition group">
                                    <img src="${p.image}" class="w-12 h-12 rounded object-cover border border-white/10"/>
                                    <div class="flex-1">
                                        <h5 class="text-amber-200 font-bold text-sm leading-tight">${p.name}</h5>
                                        <p class="text-xs text-gray-400">$${p.price} | Stock: ${p.stock}</p>
                                    </div>
                                    <div class="flex gap-2 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button onclick='prepareEditProduct(${JSON.stringify(p)})' class="p-2 bg-blue-500/20 text-blue-400 rounded hover:bg-blue-500/40 transition" title="Editar">
                                            ${icons.Edit(16)}
                                        </button>
                                        <button onclick="deleteProduct(${p.id})" class="p-2 bg-red-500/20 text-red-400 rounded hover:bg-red-500/40 transition" title="Eliminar">
                                            ${icons.Trash(16)}
                                        </button>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div class="glass-dark p-6 rounded-2xl border border-amber-400/30">
                    <h3 class="text-amber-200 text-sm font-bold uppercase">Usuarios Registrados</h3>
                    <p class="text-4xl font-bold text-white mt-2">${state.users.length}</p>
                </div>
                <div class="glass-dark p-6 rounded-2xl border border-amber-400/30">
                    <h3 class="text-amber-200 text-sm font-bold uppercase">Ventas Totales</h3>
                    <p class="text-4xl font-bold text-green-400 mt-2">${state.sales.length}</p>
                </div>
                <div class="glass-dark p-6 rounded-2xl border border-amber-400/30">
                    <h3 class="text-amber-200 text-sm font-bold uppercase">Ingresos</h3>
                    <p class="text-4xl font-bold text-amber-400 mt-2">${totalRevenue}</p>
                </div>
            </div>

            <div class="grid lg:grid-cols-2 gap-8">
                <div class="glass-dark p-6 rounded-2xl border border-green-400/30">
                    <h2 class="text-2xl text-green-400 mb-6 font-bold flex items-center gap-2">
                        ${icons.ShoppingCart(24)} Historial de Ventas
                    </h2>
                    <div class="overflow-x-auto max-h-96">
                        <table class="w-full text-left text-sm text-gray-300">
                            <thead class="text-xs uppercase bg-green-900/30 text-green-300 sticky top-0">
                                <tr>
                                    <th class="p-3">ID</th>
                                    <th class="p-3">Cliente</th>
                                    <th class="p-3">Total</th>
                                    <th class="p-3">Estado</th>
                                    <th class="p-3">Fecha</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-700">
                                ${state.sales.length === 0 ? 
                                    html`<tr><td colspan="5" class="p-4 text-center text-gray-500">No hay ventas registradas aún.</td></tr>` : 
                                    state.sales.map(sale => html`
                                    <tr class="hover:bg-white/5 transition">
                                        <td class="p-3 font-mono text-green-200">#${sale.id}</td>
                                        <td class="p-3 font-medium text-white">${sale.client}</td>
                                        <td class="p-3 text-amber-300 font-bold">${sale.total}</td>
                                        <td class="p-3">
                                            <span class="px-2 py-1 rounded text-xs font-bold ${sale.status === 'Pagado' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}">
                                                ${sale.status}
                                            </span>
                                        </td>
                                        <td class="p-3 text-xs text-gray-400">${sale.date}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="space-y-8">
                    <div class="glass-dark p-6 rounded-2xl border border-blue-400/30">
                        <h2 class="text-2xl text-blue-400 mb-6 font-bold flex items-center gap-2">
                            ${icons.User(24)} Clientes
                        </h2>
                        <div class="overflow-x-auto max-h-64">
                            <table class="w-full text-left text-sm text-gray-300">
                                <thead class="text-xs uppercase bg-blue-900/30 text-blue-300 sticky top-0">
                                    <tr>
                                        <th class="p-3">Nombre</th>
                                        <th class="p-3">Email</th>
                                        <th class="p-3">Acción</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-700">
                                    ${state.users.map(u => html`
                                        <tr class="hover:bg-white/5 transition">
                                            <td class="p-3 font-medium text-white">${u.name}</td>
                                            <td class="p-3 text-gray-400">${u.email}</td>
                                            <td class="p-3 text-right">
                                                <button onclick="deleteUser(${u.id})" class="text-red-400 hover:text-red-300 hover:scale-110 transition">${icons.Trash(20)}</button>
                                            </td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="glass-dark p-6 rounded-2xl border border-purple-400/30">
                        <h2 class="text-2xl text-purple-400 mb-6 font-bold flex items-center gap-2">
                            ${icons.User(24)} Administradores
                        </h2>
                        <div class="overflow-x-auto max-h-64">
                            <table class="w-full text-left text-sm text-gray-300">
                                <thead class="text-xs uppercase bg-purple-900/30 text-purple-300 sticky top-0">
                                    <tr>
                                        <th class="p-3">Nombre</th>
                                        <th class="p-3">Email</th>
                                        <th class="p-3">Acción</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-700">
                                    ${state.admins.map(u => html`
                                        <tr class="hover:bg-white/5 transition">
                                            <td class="p-3 font-medium text-white">${u.name}</td>
                                            <td class="p-3 text-gray-400">${u.email}</td>
                                            <td class="p-3 text-right">
                                                <button onclick="deleteUser(${u.id})" class="text-red-400 hover:text-red-300 hover:scale-110 transition">${icons.Trash(20)}</button>
                                            </td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderApp() {
    clearInterval(carouselInterval);
    const appContainer = document.getElementById('app-container');
    let pageContent = '';

    if (state.categoryDropdownOpen || state.adminMenuOpen) state.menuOpen = false;

    switch (state.currentPage) {
        case 'home': pageContent = HomePage(); break;
        case 'login': pageContent = LoginPage(); break;
        case 'register': pageContent = RegisterPage(); break;
        case 'catalog': pageContent = CatalogPage(); break;
        case 'cart': pageContent = CartPage(); break;
        case 'admin': pageContent = AdminPage(); break;
        case 'about': pageContent = AboutUsPage(); break;
        case 'location': pageContent = LocationPage(); break;
        case 'contact': pageContent = ContactPage(); break;
        default: pageContent = HomePage();
    }

    if (['login', 'register'].includes(state.currentPage)) {
        appContainer.innerHTML = NotificationBanner() + pageContent;
    } else if (state.currentPage === 'admin') {
        appContainer.innerHTML = NotificationBanner() + Navbar() + '<main class="pb-16">' + pageContent + '</main>';
    } else {
        appContainer.innerHTML = NotificationBanner() + Navbar() + '<main class="pb-16">' + pageContent + '</main>' + Footer();
    }

    if (state.currentPage === 'home' || state.currentPage === 'admin') startCarousel();
}

window.onload = function() { 
    checkSession();
    fetchProductsFromDB();
};