fetch('data.json')
  .then(r=>r.json())
  .then(list=>{
     const box=document.getElementById('box');
     list.forEach(item=>{
        const a=document.createElement('a');
        a.className='card';
        a.href=item.url;
        a.target='_blank';
        a.textContent=item.name;
        box.appendChild(a);
     });
  });