// Use event delegation for better performance
document.addEventListener('click', function(event) {
  if (event.target.matches('.button-class')) {
    // Handle button click
  }
});

// This function will be called when the data is fetched successfully
function updateUI(data) {
  // Implement this function to update your UI with the fetched data
  console.log('Updating UI with:', data);
  // For example, you might update some state in your React components
  // or dispatch an action if you're using Redux
}

async function fetchData() {
  const loadingElement = document.getElementById('loading');
  const errorElement = document.getElementById('error');

  if (!loadingElement || !errorElement) {
    console.error('Loading or error elements not found');
    return;
  }

  try {
    loadingElement.style.display = 'block';
    errorElement.style.display = 'none';

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const response = await fetch('https://api.example.com/data', {
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    updateUI(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    if (errorElement) {
      errorElement.textContent = `Failed to fetch data: ${error.message}`;
      errorElement.style.display = 'block';
    }
  } finally {
    if (loadingElement) {
      loadingElement.style.display = 'none';
    }
  }
}

// Debounce function for performance optimization
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// Example resize handler
function handleResize() {
  console.log('Window resized');
  // Add your resize logic here
}

// Use the debounce function for resize events
window.addEventListener('resize', debounce(handleResize, 250));

// Export functions if you're using ES6 modules
export { fetchData, updateUI };
