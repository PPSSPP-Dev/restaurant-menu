let currentCategory = 'all';

function filterMenu() {
  let input = document.getElementById('searchInput').value.toLowerCase();
  let items = document.querySelectorAll('.menu-item');
  let visibleCount = 0;

  items.forEach(function(item) {
    let name = item.getAttribute('data-name').toLowerCase();
    let category = item.getAttribute('data-category');

    // Check if item matches both search input AND selected category
    let matchesSearch = name.includes(input);
    let matchesCategory = (currentCategory === 'all' || category === currentCategory);

    if (matchesSearch && matchesCategory) {
      item.style.display = "block";
      visibleCount++;
    } else {
      item.style.display = "none";
    }
  });

  // Update Item Counter Text
  document.getElementById('itemCount').innerText = "Showing " + visibleCount + " items";
}

function filterCategory(category) {
  currentCategory = category;
  filterMenu(); // Re-run filter with new category selected
}
