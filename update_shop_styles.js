const fs = require('fs');
const cssToAppend = \

/* ----- NEW SHOP LAYOUT STYLES ----- */
.shop-hero {
    padding: 2rem 0;
    margin-bottom: 2rem;
}
.breadcrumbs {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}
.breadcrumbs ol {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 0.5rem;
    font-size: 0.9rem;
}
.breadcrumbs li {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: var(--text-light);
}
.breadcrumbs a {
    color: var(--primary-color);
}
.breadcrumbs .active {
    color: var(--text-dark);
    font-weight: 500;
}
.shop-title {
    margin: 0;
    font-size: 2.5rem;
}
.text-gradient {
    background: linear-gradient(135deg, var(--primary-color), var(--primary-hover));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.shop-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1.5rem;
}
.result-count {
    color: var(--text-light);
    font-weight: 400;
    font-size: 1rem;
}
.sort-wrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 500;
}
.sort-wrapper select {
    background: var(--bg-secondary);
    border: 1px solid #ddd;
    color: var(--text-dark);
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-family: inherit;
    cursor: pointer;
}
.sort-wrapper select:focus {
    outline: none;
    border-color: var(--primary-color);
}
.filter-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
}
.filter-chip {
    background: var(--bg-secondary);
    border: 1px solid #ddd;
    padding: 0.5rem 0.75rem;
    border-radius: 20px;
    font-size: 0.85rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-dark);
    transition: all var(--transition);
}
.filter-chip:hover {
    background: #eee;
}
.filter-chip .remove-chip {
    background: none;
    border: none;
    color: var(--text-light);
    cursor: pointer;
    font-size: 1.1rem;
    line-height: 1;
}
.shop-container {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 2rem;
    margin-bottom: 4rem;
}
.filter-sidebar {
    position: sticky;
    top: 100px;
    height: fit-content;
    max-height: 90vh;
    overflow-y: auto;
    background: var(--bg-secondary);
    padding: 1.5rem;
    border-radius: 12px;
    border: 1px solid #eee;
}
.sidebar-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    font-size: 1.3rem;
}
.clear-all-btn {
    font-size: 0.85rem;
    background: none;
    border: none;
    color: var(--text-light);
    cursor: pointer;
}
.clear-all-btn:hover {
    color: var(--primary-color);
}
.filter-section {
    margin-bottom: 2rem;
}
.filter-section h4 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    cursor: pointer;
    user-select: none;
}
.toggle-icon {
    transition: transform var(--transition);
    font-size: 1.2rem;
}
.toggle-icon.rotated {
    transform: rotate(180deg);
}
.filter-section ul {
    list-style: none;
    padding: 0;
}
.filter-section li {
    margin-bottom: 0.75rem;
}
.filter-section label {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;
    font-size: 0.95rem;
}
.filter-section input[type="checkbox"] {
    width: 18px;
    height: 18px;
    accent-color: var(--primary-color);
    cursor: pointer;
}
.price-inputs {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    flex-wrap: wrap;
}
.price-inputs input {
    flex: 1;
    min-width: 80px;
    background: var(--bg-color);
    border: 1px solid #ddd;
    color: var(--text-dark);
    padding: 0.5rem;
    border-radius: 4px;
    font-family: inherit;
}
.apply-price-btn {
    padding: 0.5rem 1rem;
    background: var(--primary-color);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
.shop-main {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
.no-results {
    text-align: center;
    padding: 4rem 2rem;
    display: none;
}
.pagination {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 2rem;
}
.pagination button {
    padding: 0.5rem 1rem;
    background: var(--bg-secondary);
    border: 1px solid #ddd;
    color: var(--text-dark);
    border-radius: 4px;
    cursor: pointer;
    transition: all var(--transition);
}
.pagination button:hover:not(:disabled) {
    background: #eee;
    border-color: var(--primary-color);
}
.pagination button.active {
    background: var(--primary-color);
    border-color: var(--primary-color);
    color: white;
}
.pagination button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
\
fs.appendFileSync('styles.css', cssToAppend);
console.log('Appended to styles.css');
