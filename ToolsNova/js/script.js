// ============================================
// ToolNova - JavaScript Utilities
// ============================================

// Utility: Copy to clipboard
function copyToClipboard(text, buttonElement = null) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
            showCopiedFeedback(buttonElement);
        }).catch(err => {
            console.error('Failed to copy:', err);
            fallbackCopy(text);
        });
    } else {
        fallbackCopy(text);
    }
}

function fallbackCopy(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand('copy');
        showCopiedFeedback();
    } catch (err) {
        console.error('Fallback copy failed:', err);
    }
    document.body.removeChild(textArea);
}

function showCopiedFeedback(buttonElement = null) {
    if (buttonElement) {
        const originalText = buttonElement.textContent;
        buttonElement.textContent = '✓ Copied!';
        buttonElement.classList.add('copied');
        setTimeout(() => {
            buttonElement.textContent = originalText;
            buttonElement.classList.remove('copied');
        }, 2000);
    }
}

// Utility: Download as file
function downloadFile(content, filename, mimeType = 'text/plain') {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

// Utility: Show message
function showMessage(message, type = 'success') {
    const messageDiv = document.createElement('div');
    messageDiv.className = `${type}-message fade-in`;
    messageDiv.textContent = message;
    
    const container = document.querySelector('.tool-container') || document.body;
    container.insertBefore(messageDiv, container.firstChild);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// Utility: Generate random string
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Utility: Escape HTML
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Utility: Format large numbers
function formatNumber(num) {
    return num.toLocaleString();
}

// Utility: Throttle function
function throttle(func, delay) {
    let lastCall = 0;
    return function(...args) {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            return func(...args);
        }
    };
}

// Utility: Debounce function
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

// Password Generator Utils
function generatePassword(length, options) {
    let characters = '';
    
    if (options.lowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
    if (options.uppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (options.numbers) characters += '0123456789';
    if (options.symbols) characters += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    if (!characters) return '';
    
    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}

function calculatePasswordStrength(password) {
    let strength = 0;
    
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;
    
    return {
        score: strength,
        label: strength <= 2 ? 'Weak' : strength <= 4 ? 'Fair' : 'Strong',
        color: strength <= 2 ? '#ef4444' : strength <= 4 ? '#f59e0b' : '#10b981'
    };
}

// Text Analysis Utils
function analyzeText(text) {
    const cleanText = text.trim();
    const words = cleanText.split(/\s+/).filter(word => word.length > 0);
    const sentences = cleanText.split(/[.!?]+/).filter(s => s.trim().length > 0);
    
    return {
        characters: cleanText.length,
        charactersNoSpaces: cleanText.replace(/\s/g, '').length,
        words: words.length,
        sentences: sentences.length,
        paragraphs: cleanText.split(/\n\n+/).filter(p => p.trim().length > 0).length,
        averageWordLength: words.length > 0 ? (cleanText.replace(/\s/g, '').length / words.length).toFixed(2) : 0,
        readingTime: Math.ceil(words.length / 200) // Average reading speed 200 WPM
    };
}

// Text Case Utils
function textCases(text) {
    return {
        lowercase: text.toLowerCase(),
        uppercase: text.toUpperCase(),
        capitalize: text.replace(/\b\w/g, char => char.toUpperCase()),
        alternating: text.split('').map((char, i) => i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join(''),
        reverse: text.split('').reverse().join(''),
        camelCase: text.toLowerCase().replace(/[^a-z0-9]+(.)/g, (m, chr) => chr.toUpperCase()),
        pascalCase: text.toLowerCase().replace(/[^a-z0-9]+(.)/g, (m, chr) => chr.toUpperCase()).replace(/^./, c => c.toUpperCase()),
        snakeCase: text.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, ''),
        kebabCase: text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
        titleCase: text.toLowerCase().replace(/\b\w/g, char => char.toUpperCase())
    };
}

// Unit Converter Utils
const conversions = {
    // Length conversions (to meters)
    length: {
        'millimeter': 0.001,
        'centimeter': 0.01,
        'meter': 1,
        'kilometer': 1000,
        'inch': 0.0254,
        'foot': 0.3048,
        'yard': 0.9144,
        'mile': 1609.34
    },
    // Weight conversions (to kilograms)
    weight: {
        'milligram': 0.000001,
        'gram': 0.001,
        'kilogram': 1,
        'ounce': 0.0283495,
        'pound': 0.453592,
        'ton': 1000
    },
    // Temperature conversions
    temperature: {
        celsiusToFahrenheit: (c) => (c * 9/5) + 32,
        fahrenheitToCelsius: (f) => (f - 32) * 5/9,
        celsiusToKelvin: (c) => c + 273.15,
        kelvinToCelsius: (k) => k - 273.15,
        fahrenheitToKelvin: (f) => (f - 32) * 5/9 + 273.15,
        kelvinToFahrenheit: (k) => (k - 273.15) * 9/5 + 32
    },
    // Volume conversions (to liters)
    volume: {
        'milliliter': 0.001,
        'liter': 1,
        'gallon': 3.78541,
        'pint': 0.473176,
        'cup': 0.236588,
        'tablespoon': 0.0147868,
        'teaspoon': 0.00492892,
        'cubic meter': 1000
    }
};

function convert(value, fromUnit, toUnit, type) {
    if (type === 'temperature') {
        const key = `${fromUnit}To${toUnit}`;
        if (conversions.temperature[key]) {
            return conversions.temperature[key](parseFloat(value));
        }
    } else {
        const unitData = conversions[type];
        if (unitData && unitData[fromUnit] && unitData[toUnit]) {
            const baseValue = parseFloat(value) * unitData[fromUnit];
            return baseValue / unitData[toUnit];
        }
    }
    return null;
}

// DOM Helpers
function getElementById(id) {
    return document.getElementById(id);
}

function querySelector(selector) {
    return document.querySelector(selector);
}

function displayOutput(outputId, content, isHtml = false) {
    const output = getElementById(outputId);
    if (output) {
        if (isHtml) {
            output.innerHTML = content;
        } else {
            output.textContent = content;
        }
        output.parentElement.classList.add('active');
    }
}

function hideOutput(outputId) {
    const output = getElementById(outputId);
    if (output) {
        output.parentElement.classList.remove('active');
    }
}

// Mobile check
function isMobile() {
    return window.innerWidth <= 768;
}

// Local storage helpers
function saveToStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.error('Failed to save to storage:', e);
    }
}

function getFromStorage(key) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (e) {
        console.error('Failed to get from storage:', e);
        return null;
    }
}

function removeFromStorage(key) {
    try {
        localStorage.removeItem(key);
    } catch (e) {
        console.error('Failed to remove from storage:', e);
    }
}

// Initialize tool pages - common setup
function initToolPage(toolName) {
    // Add fade-in animation to tool container
    const toolContainer = querySelector('.tool-container');
    if (toolContainer) {
        toolContainer.classList.add('fade-in');
    }
    
    // Log analytics (optional)
    console.log(`Tool loaded: ${toolName}`);
}

// Filter tools grid based on search term
function filterTools(term) {
    const cards = document.querySelectorAll('.tool-card');
    let matches = 0;
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (term === '' || text.includes(term)) {
            card.style.display = '';
            matches++;
        } else {
            card.style.display = 'none';
        }
    });
    return matches;
}

// Search tools function (called by button or Enter key)
function searchTools() {
    const searchInput = document.getElementById('toolSearch');
    const searchTerm = searchInput.value.toLowerCase().trim();

    // always filter the grid
    const count = filterTools(searchTerm);

    if (!searchTerm) {
        document.getElementById('tools').scrollIntoView({ behavior: 'smooth' });
    } else if (count === 0) {
        alert('No matching tools found.');
    }
}

// Search on Enter key and live filter
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('toolSearch');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchTools();
            }
        });

        // live filtering while typing
        searchInput.addEventListener('input', function() {
            const term = this.value.toLowerCase().trim();
            filterTools(term);
        });
    }

    // mobile nav toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navContainer = document.querySelector('.nav-container');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    if (navToggle && navContainer) {
        navToggle.addEventListener('click', () => {
            navContainer.classList.toggle('open');
        });
        
        // Close nav menu when a link is clicked on mobile
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navContainer.classList.remove('open');
                }
            });
        });
    }
    
    // Close nav when window is resized to desktop size
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navContainer) {
            navContainer.classList.remove('open');
        }
    });
});

// Export for use in other scripts
window.ToolNova = {
    copyToClipboard,
    downloadFile,
    showMessage,
    generateRandomString,
    escapeHtml,
    formatNumber,
    throttle,
    debounce,
    generatePassword,
    calculatePasswordStrength,
    analyzeText,
    textCases,
    convert,
    getElementById,
    querySelector,
    displayOutput,
    hideOutput,
    isMobile,
    saveToStorage,
    getFromStorage,
    removeFromStorage,
    initToolPage
};
/* ---------- Chatbot: Nova ---------- */
(function() {
    let toolsInfo = {};
    let history = [];

    function initChatbot() {
        // load tool data
        fetch('data/tools.json')
            .then(r => r.json())
            .then(j => { toolsInfo = j; })
            .catch(() => { toolsInfo = {}; });

        const toggle = document.getElementById('chatbot-toggle');
        const bot = document.getElementById('chatbot');
        const close = bot.querySelector('.close');
        const sendBtn = document.getElementById('chatbot-send');
        const input = document.getElementById('chatbot-text');

        toggle.addEventListener('click', () => bot.classList.toggle('open'));
        close.addEventListener('click', () => bot.classList.remove('open'));
        sendBtn.addEventListener('click', sendMessage);
        input.addEventListener('keypress', e => {
            if (e.key === 'Enter') sendMessage();
        });

        addNovaMessage("Hi! I'm Nova 👋 I can help you find the right tool. What do you need?");
    }

    function sendMessage() {
        const textEl = document.getElementById('chatbot-text');
        const text = textEl.value.trim();
        if (!text) return;
        addUserMessage(text);
        textEl.value = '';
        respond(text.toLowerCase());
    }

    function addUserMessage(msg) {
        appendMessage('user', msg);
    }
    function addNovaMessage(msg) {
        appendMessage('nova', msg);
    }
    function appendMessage(who, msg) {
        const container = document.getElementById('chatbot-messages');
        const div = document.createElement('div');
        div.className = 'chatbot-msg ' + who;
        div.innerHTML = `<div class="bubble">${msg}</div>`;
        container.appendChild(div);
        container.scrollTop = container.scrollHeight;
    }

    function respond(text) {
        showTyping();
        setTimeout(() => {
            hideTyping();
            const resp = generateReply(text);
            addNovaMessage(resp);
        }, 600);
    }

    function showTyping() {
        const container = document.getElementById('chatbot-messages');
        const div = document.createElement('div');
        div.id = 'typing-indicator';
        div.className = 'chatbot-msg nova';
        div.innerHTML = `<div class="bubble">Nova is typing…</div>`;
        container.appendChild(div);
        container.scrollTop = container.scrollHeight;
    }
    function hideTyping() {
        const ind = document.getElementById('typing-indicator');
        if (ind) ind.remove();
    }

    function generateReply(text) {
        // greetings
        if (/^(hi|hello|hey|good\s(morning|afternoon|evening))/.test(text)) {
            return "Hello there! 😊 Ask me about any tool and I'll guide you.";
        }

        // look for tool keywords
        for (let key in toolsInfo) {
            const info = toolsInfo[key];
            const allKeys = [info.name.toLowerCase(), ...info.keywords];
            if (allKeys.some(k => text.includes(k))) {
                return formatToolAnswer(info);
            }
        }

        // suggestions for partial matches
        const suggestions = [];
        for (let key in toolsInfo) {
            const info = toolsInfo[key];
            if (info.name.toLowerCase().includes(text) && text.length>2) {
                suggestions.push(info);
            }
        }
        if (suggestions.length) {
            return "Did you mean " + suggestions.map(i => `<strong>${i.name}</strong>`).join(' or ') + "?";
        }

        return "I'm sorry, I didn't understand that. Try typing a tool name like \"password\" or \"qr\".";
    }

    function formatToolAnswer(info) {
        return `<strong>${info.name}</strong><br>${info.description}<br><em>${info.usage}</em><br>` +
               `<a href="${info.link}" style="color:${getComputedStyle(document.documentElement).getPropertyValue('--primary-color')}">Open ${info.name}</a>`;
    }

    document.addEventListener('DOMContentLoaded', initChatbot);
})();