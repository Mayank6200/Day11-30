const API_URL = '/api/tasks';

async function fetchTasks() {
  const res = await fetch(API_URL);
  const tasks = await res.json();
  const list = document.getElementById('taskList');
  list.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.innerHTML = `
      <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggle(${task.id})">
      ${task.description}
      <button onclick="remove(${task.id})">X</button>
    `;
    list.appendChild(li);
  });
}

async function addTask() {
  const input = document.getElementById('taskInput');
  if (!input.value.trim()) return;
  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ description: input.value.trim() })
  });
  input.value = '';
  await fetchTasks();
}

async function toggle(id) {
  await fetch(`${API_URL}/${id}`, { method: 'PUT' });
  await fetchTasks();
}

async function remove(id) {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  await fetchTasks();
}

fetchTasks();
