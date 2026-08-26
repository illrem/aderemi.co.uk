const projectsGrid = document.getElementById('projects-grid');

function createProjectCard(p){
  const card = document.createElement('article');
  card.className = 'card';

  const index = document.createElement('span');
  index.className = 'card-index';
  index.textContent = String(document.querySelectorAll('.card').length + 1).padStart(2, '0');
  card.appendChild(index);

  const h3 = document.createElement('h3');
  h3.textContent = p.title;
  card.appendChild(h3);

  const desc = document.createElement('p');
  desc.textContent = p.description;
  card.appendChild(desc);

  if(p.tags && p.tags.length){
    const tags = document.createElement('div');
    tags.className = 'tags';
    p.tags.forEach(t => {
      const span = document.createElement('span');
      span.className = 'tag';
      span.textContent = t;
      tags.appendChild(span);
    });
    card.appendChild(tags);
  }

  const links = document.createElement('div');
  links.className = 'card-links';
  if(p.link){
    const a = document.createElement('a');
    a.href = p.link;
    a.target = '_blank';
    a.rel = 'noopener';
    a.textContent = 'View project ↗';
    links.appendChild(a);
  }
  if(p.repo){
    const sep = document.createTextNode(' · ');
    links.appendChild(sep);
    const r = document.createElement('a');
    r.href = p.repo;
    r.target = '_blank';
    r.rel = 'noopener';
    r.textContent = 'Source ↗';
    links.appendChild(r);
  }
  card.appendChild(links);

  return card;
}

async function loadProjects(){
  try{
    const res = await fetch('projects.json');
    if(!res.ok) throw new Error('Failed to load projects');
    const data = await res.json();
    projectsGrid.innerHTML = '';
    data.forEach(p => projectsGrid.appendChild(createProjectCard(p)));
  }catch(e){
    projectsGrid.innerHTML = `<p style="color:#faa">Could not load projects: ${e.message}</p>`;
    console.error(e);
  }
}

document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('.theme-button').forEach(button => {
  button.addEventListener('click', () => {
    document.body.dataset.theme = button.dataset.theme;
    document.querySelector('.theme-button.is-active')?.classList.remove('is-active');
    button.classList.add('is-active');
  });
});

loadProjects();
